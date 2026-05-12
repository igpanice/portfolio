"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import styles from "./ImageModalTrigger.module.css";

type Mode =
  | "static" /* só exibe + scroll vertical (Lighthouse) */
  | "scroll" /* click-to-toggle fit ↔ 1.4x, scroll H/V (pesquisa, arquitetura) */
  | "pan"; /* pan + zoom interativo com botões (Figma) */

type Props = {
  label: ReactNode;
  src: string;
  width: number;
  height: number;
  alt: string;
  modalTitle: string;
  /** Modo de visualização. Default: "pan" */
  mode?: Mode;
};

const ANIM_OUT_MS = 150;
const SCROLL_ZOOM_FACTOR = 1.4; /* "zoom" do modo scroll: 1.4x da resolução natural */

function renderLabelWithArrow(label: ReactNode) {
  const arrow = (
    <span className={styles.triggerArrow} aria-hidden="true">↗</span>
  );

  if (typeof label === "string") {
    const trimmed = label.trim();
    const lastSpace = trimmed.lastIndexOf(" ");
    if (lastSpace === -1) {
      return (
        <span className={styles.lastUnit}>
          {trimmed}
          {arrow}
        </span>
      );
    }
    const before = trimmed.slice(0, lastSpace);
    const lastWord = trimmed.slice(lastSpace + 1);
    return (
      <>
        {before}{" "}
        <span className={styles.lastUnit}>
          {lastWord}
          {arrow}
        </span>
      </>
    );
  }

  return (
    <>
      {label}
      {arrow}
    </>
  );
}

function ZoomControls() {
  const { zoomIn, zoomOut, resetTransform } = useControls();
  return (
    <div className={styles.zoomControls}>
      <button
        type="button"
        className={styles.zoomBtn}
        onClick={() => zoomOut()}
        aria-label="Reduzir zoom"
      >
        −
      </button>
      <button
        type="button"
        className={styles.zoomBtn}
        onClick={() => resetTransform()}
        aria-label="Resetar zoom"
      >
        ↺
      </button>
      <button
        type="button"
        className={styles.zoomBtn}
        onClick={() => zoomIn()}
        aria-label="Aumentar zoom"
      >
        +
      </button>
    </div>
  );
}

export default function ImageModalTrigger({
  label,
  src,
  width,
  height,
  alt,
  modalTitle,
  mode = "pan",
}: Props) {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [scrollZoomed, setScrollZoomed] = useState(false);

  const triggerRef = useRef<HTMLSpanElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);

  const titleId = useId();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) setScrollZoomed(false);
  }, [open]);

  const close = useCallback(() => {
    setClosing(true);
    window.setTimeout(() => {
      setOpen(false);
      setClosing(false);
      triggerRef.current?.focus();
    }, ANIM_OUT_MS);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        close();
      }
      if (e.key === "Tab" && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  const onOverlayMouseDown = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) close();
  };

  /* Click no modo "scroll": toggle fit ↔ 1.4x natural, centraliza no ponto */
  const onScrollZoomClick = (e: ReactMouseEvent<HTMLDivElement>) => {
    const wrapper = e.currentTarget;
    const rect = wrapper.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    const next = !scrollZoomed;
    setScrollZoomed(next);

    requestAnimationFrame(() => {
      const sa = scrollAreaRef.current;
      if (!sa) return;
      if (next) {
        sa.scrollLeft = px * sa.scrollWidth - sa.clientWidth / 2;
        sa.scrollTop = py * sa.scrollHeight - sa.clientHeight / 2;
      } else {
        sa.scrollTo({ top: 0, left: 0 });
      }
    });
  };

  return (
    <>
      <span
        ref={triggerRef}
        role="button"
        tabIndex={0}
        className={styles.trigger}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
        aria-label={`Abrir imagem: ${modalTitle}`}
      >
        {renderLabelWithArrow(label)}
      </span>

      {open && mounted &&
        createPortal(
          <div
            className={`${styles.overlay} ${closing ? styles.overlayClosing : ""}`}
            onMouseDown={onOverlayMouseDown}
            role="presentation"
          >
            <div
              ref={modalRef}
              className={`${styles.modal} ${closing ? styles.modalClosing : ""}`}
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
            >
              <div className={styles.header}>
                <p id={titleId} className={styles.title}>
                  {modalTitle}
                </p>
                <div className={styles.headerActions}>
                  <a
                    href={src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.original}
                  >
                    Ver original
                    <span aria-hidden="true">↗</span>
                  </a>
                  <button
                    ref={closeBtnRef}
                    type="button"
                    className={styles.close}
                    onClick={close}
                    aria-label="Fechar"
                  >
                    ×
                  </button>
                </div>
              </div>

              {mode === "pan" && (
                <div className={styles.zoomArea}>
                  <TransformWrapper
                    initialScale={1}
                    minScale={1}
                    maxScale={6}
                    wheel={{ step: 0.15 }}
                    doubleClick={{ mode: "toggle", step: 1.5 }}
                    pinch={{ step: 5 }}
                    panning={{ velocityDisabled: false }}
                    centerOnInit
                    limitToBounds
                  >
                    <TransformComponent
                      wrapperClass={styles.transformWrapper}
                      contentClass={styles.transformContent}
                    >
                      <div
                        className={styles.fillWrap}
                        style={{ aspectRatio: `${width} / ${height}` }}
                      >
                        <Image
                          src={src}
                          alt={alt}
                          fill
                          unoptimized
                          draggable={false}
                          sizes="100vw"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    </TransformComponent>
                    <ZoomControls />
                  </TransformWrapper>
                </div>
              )}

              {mode === "scroll" && (
                <div
                  ref={scrollAreaRef}
                  className={`${styles.scrollArea} ${
                    scrollZoomed ? styles.scrollAreaZoomed : ""
                  }`}
                >
                  <div
                    className={`${styles.imageWrapper} ${
                      scrollZoomed ? styles.imageWrapperZoomed : styles.imageWrapperFit
                    }`}
                    onClick={onScrollZoomClick}
                    role="button"
                    aria-label={scrollZoomed ? "Reduzir imagem" : "Ampliar imagem"}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        const wrapper = e.currentTarget;
                        const rect = wrapper.getBoundingClientRect();
                        onScrollZoomClick({
                          currentTarget: wrapper,
                          clientX: rect.left + rect.width / 2,
                          clientY: rect.top + rect.height / 2,
                        } as unknown as ReactMouseEvent<HTMLDivElement>);
                      }
                    }}
                  >
                    <Image
                      src={src}
                      width={width}
                      height={height}
                      alt={alt}
                      unoptimized
                      sizes="100vw"
                      style={
                        scrollZoomed
                          ? {
                              width: `${width * SCROLL_ZOOM_FACTOR}px`,
                              maxWidth: "none",
                              height: "auto",
                            }
                          : undefined
                      }
                    />
                  </div>
                </div>
              )}

              {mode === "static" && (
                <div className={styles.scrollArea}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={src}
                      width={width}
                      height={height}
                      alt={alt}
                      quality={90}
                      sizes="(max-width: 520px) 100vw, min(900px, 90vw)"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
