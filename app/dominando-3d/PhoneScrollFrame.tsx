"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "../cremore/page.module.css";
import local from "./page.module.css";

type Props = {
  children: ReactNode;
  label: string;
  /** Faz a "dica de rolagem": desce um pouco e volta, uma única vez,
   * quando o celular entra na tela. Usado só no primeiro slide. */
  hint?: boolean;
};

const HINT_DISTANCE = 140; /* px descidos na dica */
const HINT_DOWN_MS = 550;
const HINT_PAUSE_MS = 180;
const HINT_UP_MS = 500;
const HINT_DELAY_MS = 450; /* espera depois de entrar na tela */

const easeInOut = (t: number) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

/* Celular com a proporção de um aparelho e rolagem interna: as duas
 * seções do print ficam inteiras sem esticar o carrossel. */
export default function PhoneScrollFrame({ children, label, hint }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!hint || !el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    let raf = 0;
    let timer = 0;

    /* Qualquer interação da pessoa com o celular encerra a dica */
    const cancel = () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.clearTimeout(timer);
    };
    const events = ["wheel", "pointerdown", "pointerenter", "touchstart", "keydown"];
    events.forEach((e) => el.addEventListener(e, cancel, { passive: true }));

    const animate = (from: number, to: number, ms: number, done?: () => void) => {
      const start = performance.now();
      const step = (now: number) => {
        if (cancelled) return;
        const t = Math.min(1, (now - start) / ms);
        el.scrollTop = from + (to - from) * easeInOut(t);
        if (t < 1) raf = requestAnimationFrame(step);
        else done?.();
      };
      raf = requestAnimationFrame(step);
    };

    const run = () => {
      /* No mobile o celular não rola (overflow oculto): sem dica */
      if (getComputedStyle(el).overflowY === "hidden") return;
      if (el.scrollTop > 0 || el.scrollHeight <= el.clientHeight) return;
      animate(0, HINT_DISTANCE, HINT_DOWN_MS, () => {
        timer = window.setTimeout(
          () => animate(el.scrollTop, 0, HINT_UP_MS),
          HINT_PAUSE_MS
        );
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((en) => en.isIntersecting)) {
          io.disconnect();
          timer = window.setTimeout(() => !cancelled && run(), HINT_DELAY_MS);
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancel();
      events.forEach((e) => el.removeEventListener(e, cancel));
    };
  }, [hint]);

  return (
    <div className={styles.phoneFrame}>
      <div className={`${styles.phoneBody} ${local.phoneViewport}`}>
        <div
          ref={scrollRef}
          className={local.phoneScroll}
          tabIndex={0}
          role="region"
          aria-label={label}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
