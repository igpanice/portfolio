"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
  type TouchEvent as ReactTouchEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import styles from "./CaseCarousel.module.css";

type Props = {
  /** Uma composição (mockups já montados) por slide. */
  slides: ReactNode[];
  /** Legenda curta de cada slide, na mesma ordem. */
  labels: string[];
  /** Textos de acessibilidade. */
  ariaLabel: string;
  prevLabel: string;
  nextLabel: string;
};

const SWIPE_MIN_PX = 40;

export default function CaseCarousel({
  slides,
  labels,
  ariaLabel,
  prevLabel,
  nextLabel,
}: Props) {
  const count = slides.length;
  const [index, setIndex] = useState(0);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);

  const go = useCallback(
    (next: number) => setIndex(Math.min(count - 1, Math.max(0, next))),
    [count]
  );

  /* A altura da janela segue o slide ativo (as composições têm alturas
   * diferentes, sobretudo no mobile). ResizeObserver cobre o carregamento
   * das imagens e o redimensionamento da tela. */
  useLayoutEffect(() => {
    const el = slideRefs.current[index];
    if (!el) return;
    const update = () => setHeight(el.offsetHeight);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [index]);

  useEffect(() => {
    slideRefs.current.length = count;
  }, [count]);

  const onKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    }
  };

  const onTouchStart = (e: ReactTouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e: ReactTouchEvent<HTMLDivElement>) => {
    const start = touchStartX.current;
    touchStartX.current = null;
    if (start === null) return;
    const dx = (e.changedTouches[0]?.clientX ?? start) - start;
    if (Math.abs(dx) < SWIPE_MIN_PX) return;
    go(dx < 0 ? index + 1 : index - 1);
  };

  return (
    <section
      className={styles.carousel}
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div
        className={styles.viewport}
        style={height !== undefined ? { height } : undefined}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className={styles.track}
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, k) => (
            <div
              key={k}
              ref={(el) => {
                slideRefs.current[k] = el;
              }}
              className={styles.slide}
              role="group"
              aria-roledescription="slide"
              aria-label={`${k + 1} / ${count}: ${labels[k] ?? ""}`}
              aria-hidden={k !== index}
              inert={k !== index}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => go(index - 1)}
          disabled={index === 0}
          aria-label={prevLabel}
        >
          ←
        </button>
        <p className={styles.caption} aria-live="polite">
          <span className={styles.captionLabel}>{labels[index]}</span>
          <span className={styles.captionCount}>
            {index + 1} / {count}
          </span>
        </p>
        <button
          type="button"
          className={styles.arrow}
          onClick={() => go(index + 1)}
          disabled={index === count - 1}
          aria-label={nextLabel}
        >
          →
        </button>
      </div>
    </section>
  );
}
