import Link from "next/link";
import Image from "next/image";
import styles from "../../cremore/page.module.css";
import ImageModalTrigger from "../../cremore/ImageModalTrigger";

export const metadata = {
  title: "Cremore — Igor Caramori",
  description:
    "B2B landing page built to recruit resellers for a gelato and açaí producer expanding across the region.",
};

export default function CremorePageEN() {
  return (
    <div className={styles.page}>
      {/* ── Header ── */}
      <header className={styles.header}>
        <Link href="/en" className={styles.back}>
          ← Back to home
        </Link>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <span>Home</span>
          <span className={styles.breadcrumbSep}>/</span>
          <span>Cremore</span>
        </nav>
      </header>

      {/* ── Title ── */}
      <h1 className={styles.title}>
        Cremore, a reseller recruitment site.
      </h1>

      {/* ── Meta strip (year · role · live link) ── */}
      <div className={styles.meta}>
        <span>2026</span>
        <span className={styles.metaSep} aria-hidden="true">·</span>
        <span>Product Designer</span>
        <span className={styles.metaSep} aria-hidden="true">·</span>
        <a
          href="https://cremoregelatos.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.metaLink}
        >
          Visit site
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      {/* ── Hero composition (browser + phone overlay) ── */}
      <div className={styles.heroComp}>
        <div className={styles.heroBrowser}>
          <BrowserFrame url="cremoregelatos.com.br">
            <Image
              src="/images/cremore/site-desktop-1-hero.png"
              alt="Cremore desktop site, hero with a preview of the testimonials section"
              width={1440}
              height={1100}
              priority
            />
          </BrowserFrame>
        </div>
        <div className={styles.heroPhone}>
          <PhoneFrame>
            <Image
              src="/images/cremore/site-mobile-hero.png"
              alt="Cremore site on mobile"
              width={390}
              height={950}
            />
          </PhoneFrame>
        </div>
      </div>

      {/* ── Continuous case text ── */}
      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Context</h2>
          <p className={styles.sectionText}>
            Cremore makes gelato, ice cream, açaí and popsicles, and had
            spent nine years growing without a website that kept up with the
            business. The old site was generic. It didn&apos;t answer the
            questions people ask when they are sizing up a supplier, and it
            didn&apos;t speak to anyone thinking about opening their own shop
            and looking for the right partner.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Process</h2>
          <div className={styles.processBlocks}>
            <div className={styles.processBlock}>
              <p className={styles.processBlockLabel}>Researched</p>
              <p className={styles.processBlockText}>
                To find the initial direction and the opportunities, I used
                generative research methods.{" "}
                <ImageModalTrigger
                  label="Survey"
                  src="/images/cremore/modals/pesquisa-v2.png"
                  width={1240}
                  height={4160}
                  alt="Summary of the 23 responses to the questionnaire sent to Cremore resellers through Google Forms"
                  modalTitle="Reseller survey"
                  mode="scroll"
                  lang="en"
                />{" "}
                of current resellers, a User-Centered Design Canvas with the
                owners and the sales team, and a competitor analysis online
                and in shops around my region.
              </p>
            </div>
            <div className={styles.processBlock}>
              <p className={styles.processBlockLabel}>Designed</p>

              <div className={styles.blockMeta}>
                <div>
                  <p className={styles.metaKey}>Approach</p>
                  <p className={styles.metaValue}>Mobile-first</p>
                </div>
                <div>
                  <p className={styles.metaKey}>Basis for decisions</p>
                  <p className={styles.metaValue}>Survey + Canvas</p>
                </div>
                <div>
                  <p className={styles.metaKey}>Deliverables</p>
                  <p className={styles.metaValue}>Architecture, copy and UI kit</p>
                </div>
              </div>

              <p className={styles.processBlockText}>
                I built the site entirely around the ideal reseller, from the{" "}
                <ImageModalTrigger
                  label="section order"
                  src="/images/cremore/modals/arquitetura-v2.png"
                  width={361}
                  height={1061}
                  alt="Vertical diagram of the Cremore site's information architecture, with Hero, Social proof, Products, Benefits, Process, About us, FAQ, CTA and Footer"
                  modalTitle="Information architecture"
                  mode="scroll"
                  lang="en"
                />{" "}
                to the UI kit. Every decision came out of the survey numbers
                or the Canvas session with the owners and the sales team:
              </p>

              <div className={styles.pairTable}>
                <div className={styles.pairTableHead}>
                  <span>Evidence</span>
                  <span>What it became on the site</span>
                </div>
                <div className={styles.pairRow}>
                  <p className={`${styles.pairRowCell} ${styles.pairEvidence}`}>
                    Quality and support are what resellers value most
                  </p>
                  <p className={styles.pairRowCell}>
                    Social proof before the catalog
                  </p>
                </div>
                <div className={styles.pairRow}>
                  <p className={`${styles.pairRowCell} ${styles.pairEvidence}`}>
                    82% wanted to see the products
                  </p>
                  <p className={styles.pairRowCell}>
                    Products high on the page
                  </p>
                </div>
                <div className={styles.pairRow}>
                  <p className={`${styles.pairRowCell} ${styles.pairEvidence}`}>
                    36% felt unsure about the process
                  </p>
                  <p className={styles.pairRowCell}>
                    The process broken into steps
                  </p>
                </div>
                <div className={styles.pairRow}>
                  <p className={`${styles.pairRowCell} ${styles.pairEvidence}`}>
                    100% use WhatsApp
                  </p>
                  <p className={styles.pairRowCell}>
                    Every CTA straight to WhatsApp
                  </p>
                </div>
                <div className={styles.pairRow}>
                  <p className={`${styles.pairRowCell} ${styles.pairEvidence}`}>
                    Canvas session with the owners and the sales team
                  </p>
                  <div className={styles.pairRowCell}>
                    <ul className={styles.pairList}>
                      <li>Brand voice, regional copy and UI kit</li>
                      <li>FAQ questions</li>
                      <li>
                        Real photography: the factory in the Hero, the
                        products and the shops in About us
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className={styles.processBlockText}>
                This first version is the strongest hypothesis I could ship.
              </p>
            </div>
            <div className={styles.processBlock}>
              <p className={styles.processBlockLabel}>Validated</p>

              <div className={styles.blockMeta}>
                <div>
                  <p className={styles.metaKey}>Method</p>
                  <p className={styles.metaValue}>Five-second test</p>
                </div>
                <div>
                  <p className={styles.metaKey}>Participants</p>
                  <p className={styles.metaValue}>4 business owners</p>
                </div>
                <div>
                  <p className={styles.metaKey}>Goal</p>
                  <p className={styles.metaValue}>Clarity of the offer</p>
                </div>
              </div>

              <p className={styles.processBlockText}>
                A bakery, a delivery restaurant and an online store. With no
                room for a task-based usability test, I wanted to know what
                they took away about the purpose of the site, what the
                company does and Cremore&apos;s value proposition.
              </p>

              <div className={styles.pairGrid}>
                <div className={styles.pairCell}>
                  <p className={styles.pairKey}>What I found</p>
                  <p className={styles.pairValue}>
                    Three of the four asked which region Cremore serves. The
                    answer only existed in the FAQ.
                  </p>
                </div>
                <div className={styles.pairCell}>
                  <p className={styles.pairKey}>What I changed</p>
                  <p className={styles.pairValue}>
                    I added a map of Minas Gerais highlighting Araxá, as a
                    first iteration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Results</h2>
          <p className={styles.sectionText}>
            I arranged a two-month log with the sales team, to find out how
            many leads came from the site and actually became resellers.
          </p>

          <div className={styles.statRow}>
            <div className={styles.stat}>
              <p className={styles.statValue}>9</p>
              <p className={styles.statLabel}>New resellers</p>
            </div>
            <div className={styles.stat}>
              <p className={styles.statValue}>5</p>
              <p className={styles.statLabel}>Cities reached</p>
            </div>
            <div className={styles.stat}>
              <p className={styles.statValue}>60</p>
              <p className={styles.statLabel}>Days tracked</p>
            </div>
          </div>

          <p className={styles.sectionText}>
            I also track conversion, CTR, scroll depth, engagement time and
            traffic source in Analytics.
          </p>
        </section>
      </div>

      {/* ── Closing visual gallery ── */}
      <div className={styles.gallery}>

        {/* Row of 3 mobiles.
         * Desktop: products, process, benefits.
         * Mobile: process, about us, faq (rearranged to spotlight products/benefits in the larger slots). */}
        <div className={styles.phoneGrid}>
          <PhoneFrame>
            <Image
              className={styles.imgDesktopOnly}
              src="/images/cremore/site-mobile-produtos.png"
              alt="Cremore mobile site, products"
              width={390}
              height={950}
            />
            <Image
              className={styles.imgMobileOnly}
              src="/images/cremore/site-mobile-processo.png"
              alt="Cremore mobile site, process"
              width={390}
              height={950}
            />
          </PhoneFrame>
          <PhoneFrame>
            <Image
              className={styles.imgDesktopOnly}
              src="/images/cremore/site-mobile-processo.png"
              alt="Cremore mobile site, process"
              width={390}
              height={950}
            />
            <Image
              className={styles.imgMobileOnly}
              src="/images/cremore/site-mobile-quemsomos.png"
              alt="Cremore mobile site, about us"
              width={390}
              height={950}
            />
          </PhoneFrame>
          <PhoneFrame>
            <Image
              className={styles.imgDesktopOnly}
              src="/images/cremore/site-mobile-beneficios.png"
              alt="Cremore mobile site, benefits"
              width={390}
              height={950}
            />
            <Image
              className={styles.imgMobileOnly}
              src="/images/cremore/site-mobile-faq.png"
              alt="Cremore mobile site, FAQ"
              width={390}
              height={950}
            />
          </PhoneFrame>
        </div>

        {/* D2 — Products desktop with about-us overlay (5) */}
        <div className={styles.galleryComp}>
          <BrowserFrame url="cremoregelatos.com.br">
            <Image
              src="/images/cremore/site-desktop-2-produtos.png"
              alt="Cremore site's product catalog"
              width={1440}
              height={1043}
            />
          </BrowserFrame>
          <div className={styles.galleryPhone}>
            <PhoneFrame>
              <Image
                className={styles.imgDesktopOnly}
                src="/images/cremore/site-mobile-quemsomos.png"
                alt="Cremore mobile site, about us"
                width={390}
                height={950}
              />
              <Image
                className={styles.imgMobileOnly}
                src="/images/cremore/site-mobile-produtos.png"
                alt="Cremore mobile site, products"
                width={390}
                height={950}
              />
            </PhoneFrame>
          </div>
        </div>

        {/* D3 — About us desktop with FAQ overlay (6) */}
        <div className={styles.galleryComp}>
          <BrowserFrame url="cremoregelatos.com.br">
            <Image
              src="/images/cremore/site-desktop-3-quemsomos.png"
              alt="Cremore site's About us section"
              width={1440}
              height={1000}
            />
          </BrowserFrame>
          <div className={styles.galleryPhone}>
            <PhoneFrame>
              <Image
                className={styles.imgDesktopOnly}
                src="/images/cremore/site-mobile-faq.png"
                alt="Cremore mobile site, FAQ"
                width={390}
                height={950}
              />
              <Image
                className={styles.imgMobileOnly}
                src="/images/cremore/site-mobile-beneficios.png"
                alt="Cremore mobile site, benefits"
                width={390}
                height={950}
              />
            </PhoneFrame>
          </div>
        </div>

      </div>

      {/* ── Calculated risks (after the final mockups) ── */}
      <section className={`${styles.section} ${styles.sectionAfterGallery}`}>
        <h2 className={styles.sectionTitle}>Calculated risks</h2>
        <p className={styles.sectionText}>
          I backed the survey&apos;s conclusions despite a small sample, 23
          of 700 resellers. I offset that by cross-checking the data against
          the User-Centered Design Canvas with the owners and the sales team,
          and against the competitor analysis in Franca.
        </p>
        <p className={styles.sectionText}>
          The five-second test also ran on a small sample, four people. That
          signal is enough to steer a first iteration, not to confirm a
          behavior pattern.
        </p>
        <p className={styles.sectionText}>
          With no room for a larger usability test, reading what happens on
          the site depends on Analytics and on feedback from the sales team.
        </p>
      </section>

      {/* ── External link ── */}
      <a
        href="https://cremoregelatos.com.br"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.externalLink}
      >
        Visit the live site ↗
      </a>
    </div>
  );
}

/* ── Mockup helpers ──────────────────────────────────────────── */

function BrowserFrame({
  children,
  url,
}: {
  children: React.ReactNode;
  url: string;
}) {
  return (
    <div className={styles.browserFrame}>
      <div className={styles.browserBar}>
        <div className={styles.dots}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
        </div>
        <span className={styles.urlBar}>{url}</span>
      </div>
      <div className={styles.browserBody}>{children}</div>
    </div>
  );
}

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.phoneFrame}>
      <div className={styles.phoneBody}>{children}</div>
    </div>
  );
}
