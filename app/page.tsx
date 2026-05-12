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
            Crio experiências digitais que ajudam empresas a se conectarem
            melhor com seus usuários, sem desperdiçar recursos nem tomar
            decisões baseadas em achismos.
          </p>
          <p className={styles.bio}>
            Sou designer de produto físico com mais de 10 anos de experiência
            em projetos personalizados, atuando diretamente com clientes e
            empresas regionais. Hoje focado em produto digital.
          </p>

          <nav className={styles.links} aria-label="Contato">
            <a
              href="mailto:igorpanice@gmail.com"
              className={styles.link}
              aria-label="Enviar e-mail para Igor Caramori"
            >
              igorpanice@gmail.com
              <span className={styles.linkArrow} aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/igor-panicecaramori-b6baa8338"
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
        </div>
      </aside>

      {/* ── Right content ── */}
      <main className={styles.content}>
        <h2 className={styles.workTitle}>Trabalhos selecionados</h2>
        <div className={styles.grid}>
          {/* Card — Cremore */}
          <Link href="/cremore" className={styles.card}>
            <p className={styles.cardTitle}>Cremore</p>
            <div className={styles.cardImage}>
              <Image
                src="/images/cremore/hero.webp"
                alt="Cremore Gelateria — hero do site"
                width={1200}
                height={675}
              />
            </div>
            <p className={styles.cardDesc}>
              Landing page B2B para captação de revendedores de uma fábrica
              de gelatos, açaís e picolés em plena expansão regional.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
