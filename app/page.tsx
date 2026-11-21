import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      {/* ── Left sidebar ── */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarInner}>
          <h1 className={styles.name}>Igor Caramori</h1>

          <p className={styles.bio}>
            Product Designer focado em produto digital desde 2024. Conduzo
            discovery e pesquisa com usuários, desenho fluxos e interfaces,
            valido em testes de usabilidade e acompanho a implementação, com
            métricas definidas para medir o resultado.
          </p>

          <nav className={styles.links} aria-label="Contato">
            <a
              href="mailto:igpanice@gmail.com"
              className={styles.link}
              aria-label="Enviar e-mail para Igor Caramori"
            >
              igpanice@gmail.com
              <span className={styles.linkArrow} aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/igor-panice-caramori-b6baa8338"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil no LinkedIn de Igor Caramori"
            >
              LinkedIn
              <span className={styles.linkArrow} aria-hidden="true">↗</span>
            </a>
            <a
              href="/cv.html"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver currículo de Igor Caramori"
            >
              Currículo
              <span className={styles.linkArrow} aria-hidden="true">↗</span>
            </a>
          </nav>

          <Link
            href="/en"
            className={styles.langSwitch}
            aria-label="Switch to English"
          >
            EN
          </Link>
        </div>
      </aside>

      {/* ── Right content ── */}
      <main className={styles.content}>
        <h2 className={styles.workTitle}>Trabalhos selecionados</h2>
        <div className={styles.grid}>
          {/* Card — Cremore */}
          <Link href="/cremore" className={styles.card}>
            <p className={styles.cardTitle}>
              Cremore
              <span className={styles.cardArrow} aria-hidden="true">→</span>
            </p>
            <div className={styles.cardImage}>
              <Image
                src="/images/cremore/card.webp"
                alt="Site da Cremore no desktop e no mobile"
                width={1200}
                height={675}
              />
            </div>
            <p className={styles.cardDesc}>
              Landing page B2B para captação de revendedores de uma fábrica
              de gelatos, açaís e picolés em plena expansão regional.
            </p>
          </Link>

          {/* Card · Dominando o 3D */}
          <Link href="/dominando-3d" className={styles.card}>
            <p className={styles.cardTitle}>
              Dominando o 3D
              <span className={styles.cardArrow} aria-hidden="true">→</span>
            </p>
            <div className={styles.cardImage}>
              <Image
                src="/images/dominando-3d/card.webp"
                alt="Site do Dominando o 3D no desktop e no mobile"
                width={1200}
                height={675}
              />
            </div>
            <p className={styles.cardDesc}>
              Landing page de um curso online de impressão 3D, criada do zero
              a partir de pesquisa e benchmark, pronta para receber tráfego
              pago.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
