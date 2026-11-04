import Link from "next/link";
import Image from "next/image";
import styles from "../page.module.css";

export const metadata = {
  title: "Igor Caramori — Product Designer",
  description:
    "I design digital experiences that help companies connect with their users, without burning resources or making calls that aren't backed by data.",
};

export default function HomeEN() {
  return (
    <div className={styles.wrapper}>
      {/* ── Left sidebar ── */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarInner}>
          <h1 className={styles.name}>Igor Caramori</h1>

          <p className={styles.bio}>
            I design digital experiences that help companies connect with
            their users, without burning resources or making calls that
            aren&apos;t backed by data.
          </p>
          <p className={styles.bio}>
            Product Designer focused on digital product since 2025. I run
            discovery and user research, design flows and interfaces in Figma,
            validate them in usability testing and follow the implementation
            through, with success metrics defined to measure the outcome.
          </p>

          <nav className={styles.links} aria-label="Contact">
            <a
              href="mailto:igpanice@gmail.com"
              className={styles.link}
              aria-label="Send an email to Igor Caramori"
            >
              igpanice@gmail.com
              <span className={styles.linkArrow} aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/igor-panice-caramori-b6baa8338"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Igor Caramori's LinkedIn profile"
            >
              LinkedIn
              <span className={styles.linkArrow} aria-hidden="true">↗</span>
            </a>
            <a
              href="/cv-en.html"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Igor Caramori's resume"
            >
              Resume
              <span className={styles.linkArrow} aria-hidden="true">↗</span>
            </a>
          </nav>

          <Link
            href="/"
            className={styles.langSwitch}
            aria-label="Mudar para português"
          >
            PT
          </Link>
        </div>
      </aside>

      {/* ── Right content ── */}
      <main className={styles.content}>
        <h2 className={styles.workTitle}>Selected work</h2>
        <div className={styles.grid}>
          {/* Card — Cremore */}
          <Link href="/en/cremore" className={styles.card}>
            <p className={styles.cardTitle}>
              Cremore
              <span className={styles.cardArrow} aria-hidden="true">→</span>
            </p>
            <div className={styles.cardImage}>
              <Image
                src="/images/cremore/hero.webp"
                alt="Cremore Gelateria — website hero"
                width={1200}
                height={675}
              />
            </div>
            <p className={styles.cardDesc}>
              B2B landing page built to recruit resellers for a gelato, açaí
              and popsicle factory expanding across the region.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
