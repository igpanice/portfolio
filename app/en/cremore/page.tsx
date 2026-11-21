import Link from "next/link";
import Image from "next/image";
import styles from "../../cremore/page.module.css";
import ImageModalTrigger from "../../cremore/ImageModalTrigger";
import CaseCarousel from "../../cremore/CaseCarousel";

export const metadata = {
  title: "Cremore — Igor Caramori",
  description:
    "B2B landing page built to recruit resellers for a gelato and açaí producer expanding across the region.",
};

const SITE_URL = "https://cremoregelatos.com.br";
const FIGMA_URL =
  "https://www.figma.com/design/Ry0byAqzEAnftHc24rZ8g2/Cremore--Copy-?node-id=1140-2";

const SURVEY_ALT =
  "Summary of the 23 responses to the questionnaire sent to Cremore resellers through Google Forms";
const IA_ALT =
  "Vertical diagram of the Cremore site's information architecture, with Hero, Social proof, Products, Benefits, Process, About us, FAQ, CTA and Footer";
const UIKIT_ALT =
  "Cremore site UI kit: colors, typography, spacing, layout, radii and shadows, icons and components";

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

      {/* ── Meta strip (year · role · site · figma) ── */}
      <div className={styles.meta}>
        <span>2026</span>
        <span className={styles.metaSep} aria-hidden="true">·</span>
        <span>Product Designer</span>
        <span className={styles.metaSep} aria-hidden="true">·</span>
        <a
          href={SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.metaLink}
        >
          Visit site
          <span aria-hidden="true">↗</span>
        </a>
        <span className={styles.metaSep} aria-hidden="true">·</span>
        <a
          href={FIGMA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.metaLink}
        >
          Figma
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      {/* ── Single window with arrows: the 4 site compositions ── */}
      <CaseCarousel
        ariaLabel="Cremore site screens"
        prevLabel="Previous composition"
        nextLabel="Next composition"
        labels={[
          "Hero",
          "Products, process and benefits on mobile",
          "Product catalog",
          "About us and FAQ",
        ]}
        slides={[
          /* 1 — Hero: phone + browser */
          <div
            key="hero"
            className={`${styles.heroComp} ${styles.slideReset}`}
          >
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
                  priority
                />
              </PhoneFrame>
            </div>
          </div>,

          /* 2 — Three phones */
          <div key="phones" className={styles.phoneGrid}>
            <PhoneFrame>
              <Image
                src="/images/cremore/site-mobile-produtos.png"
                alt="Cremore mobile site, products"
                width={390}
                height={950}
                loading="eager"
              />
            </PhoneFrame>
            <PhoneFrame>
              <Image
                src="/images/cremore/site-mobile-processo.png"
                alt="Cremore mobile site, process"
                width={390}
                height={950}
                loading="eager"
              />
            </PhoneFrame>
            <PhoneFrame>
              <Image
                src="/images/cremore/site-mobile-beneficios.png"
                alt="Cremore mobile site, benefits"
                width={390}
                height={950}
                loading="eager"
              />
            </PhoneFrame>
          </div>,

          /* 3 — Products desktop + about us mobile */
          <div key="products" className={styles.galleryComp}>
            <BrowserFrame url="cremoregelatos.com.br">
              <Image
                src="/images/cremore/site-desktop-2-produtos.png"
                alt="Cremore site's product catalog"
                width={1440}
                height={1043}
                loading="eager"
              />
            </BrowserFrame>
            <div className={styles.galleryPhone}>
              <PhoneFrame>
                <Image
                  src="/images/cremore/site-mobile-quemsomos.png"
                  alt="Cremore mobile site, about us"
                  width={390}
                  height={950}
                  loading="eager"
                />
              </PhoneFrame>
            </div>
          </div>,

          /* 4 — About us desktop + FAQ mobile */
          <div key="about" className={styles.galleryComp}>
            <BrowserFrame url="cremoregelatos.com.br">
              <Image
                src="/images/cremore/site-desktop-3-quemsomos.png"
                alt="Cremore site's About us section"
                width={1440}
                height={1000}
                loading="eager"
              />
            </BrowserFrame>
            <div className={styles.galleryPhone}>
              <PhoneFrame>
                <Image
                  src="/images/cremore/site-mobile-faq.png"
                  alt="Cremore mobile site, FAQ"
                  width={390}
                  height={950}
                  loading="eager"
                />
              </PhoneFrame>
            </div>
          </div>,
        ]}
      />

      <div className={styles.content}>
        {/* ── Summary: problem, what I did, outcome. All on one screen. ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Summary</h2>
          <div className={styles.summaryGrid}>
            <div>
              <p className={styles.summaryKey}>The problem</p>
              <p className={styles.summaryText}>
                Cremore, with over nine years in operation and 700 resellers,
                had no strategic landing page for people looking for a
                supplier or wanting to open their own business.
              </p>
            </div>
            <div>
              <p className={styles.summaryKey}>What I did</p>
              <p className={styles.summaryText}>
                <ImageModalTrigger
                  label="Reseller survey"
                  src="/images/cremore/modals/pesquisa-v2.png"
                  width={1240}
                  height={4160}
                  alt={SURVEY_ALT}
                  modalTitle="Reseller survey"
                  mode="scroll"
                  lang="en"
                />
                , interviews with the owners,{" "}
                <ImageModalTrigger
                  label="architecture"
                  src="/images/cremore/modals/arquitetura-v2.png"
                  width={361}
                  height={1061}
                  alt={IA_ALT}
                  modalTitle="Information architecture"
                  mode="scroll"
                  lang="en"
                />
                , copy, on-site photography, image editing and{" "}
                <ImageModalTrigger
                  label="UI kit"
                  src="/images/cremore/modals/ui-kit.webp"
                  width={1440}
                  height={5982}
                  alt={UIKIT_ALT}
                  modalTitle="UI kit"
                  mode="scroll"
                  lang="en"
                />{" "}
                for a mobile-first landing page.
              </p>
            </div>
            <div>
              <p className={styles.summaryKey}>The outcome</p>
              <p className={styles.summaryText}>
                12 new resellers across 5 cities in the first 60 days,
                confirmed with the sales team.
              </p>
            </div>
          </div>

          <div className={styles.statRow}>
            <div className={styles.stat}>
              <p className={styles.statValue}>12</p>
              <p className={styles.statLabel}>New resellers</p>
            </div>
            <div className={styles.stat}>
              <p className={styles.statValue}>5</p>
              <p className={styles.statLabel}>Cities reached</p>
            </div>
            <div className={styles.stat}>
              <p className={styles.statValue}>11%</p>
              <p className={styles.statLabel}>Reached out on WhatsApp</p>
            </div>
          </div>
        </section>

        {/* ── Investigated ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Investigated</h2>
          <p className={styles.sectionText}>
            Through a{" "}
            <ImageModalTrigger
              label="reseller survey"
              src="/images/cremore/modals/pesquisa-v2.png"
              width={1240}
              height={4160}
              alt={SURVEY_ALT}
              modalTitle="Reseller survey"
              mode="scroll"
              lang="en"
            />
            , a User-Centered Design Canvas with the owners and the sales
            team, and competitor analysis online and in the region, I got to
            the main insights: quality and support are what resellers value
            most, and every contact happens on WhatsApp.
          </p>
        </section>

        {/* ── Solved ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Solved</h2>
          <p className={styles.sectionText}>
            I designed the entire site by hand around the ideal reseller,
            from the{" "}
            <ImageModalTrigger
              label="section order"
              src="/images/cremore/modals/arquitetura-v2.png"
              width={361}
              height={1061}
              alt={IA_ALT}
              modalTitle="Information architecture"
              mode="scroll"
              lang="en"
            />{" "}
            to the{" "}
            <ImageModalTrigger
              label="UI kit"
              src="/images/cremore/modals/ui-kit.webp"
              width={1440}
              height={5982}
              alt={UIKIT_ALT}
              modalTitle="UI kit"
              mode="scroll"
              lang="en"
            />
            , which turned the logo and the colors already used in the store
            interiors into a reusable visual system for digital. Every
            decision came from research data.
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
              <p className={styles.pairRowCell}>Products high on the page</p>
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
                    Real photography: the factory in the Hero, the products
                    and the shops in About us
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className={`${styles.sectionText} ${styles.sectionTextAfterTable}`}>
            I delivered the{" "}
            <a
              href={FIGMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.inlineLink}
            >
              Figma
              <span aria-hidden="true">↗</span>
            </a>{" "}
            ready for handoff. Only the implementation and the deploy were
            done with Claude Code, with SEO,{" "}
            <ImageModalTrigger
              label="Lighthouse"
              src="/images/cremore/modals/lighthouse.png"
              width={705}
              height={573}
              alt="Lighthouse report for the Cremore site"
              modalTitle="Lighthouse"
              mode="static"
              lang="en"
            />{" "}
            and GA4 tracking.
          </p>
        </section>

        {/* ── Validated ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Validated</h2>
          <p className={styles.sectionText}>
            With no room for a usability test, I ran a five-second test with
            four business owners, from two bakeries, a delivery restaurant
            and an online store, to see what they took away from the offer.
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
                I added a map of Minas Gerais highlighting Araxá, as a first
                iteration.
              </p>
            </div>
          </div>

          <p className={`${styles.sectionText} ${styles.sectionTextAfterTable}`}>
            After launch, GA4 tracked 60 days of Google Ads.
          </p>

          <div className={styles.pairGrid}>
            <div className={styles.pairCell}>
              <p className={styles.pairKey}>What the data showed</p>
              <p className={styles.pairValue}>
                97% of visits came from mobile, and two thirds of people never
                went past the first stretch of the page. Of 2,446 visitors, 274
                reached out on WhatsApp, 11% of the total.
              </p>
            </div>
            <div className={styles.pairCell}>
              <p className={styles.pairKey}>What it confirms</p>
              <p className={styles.pairValue}>
                The mobile-first design and the section order, with
                testimonials and products right at the top, where the decision
                happens.
              </p>
            </div>
          </div>
        </section>

        {/* ── Limits ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Limits</h2>
          <p className={styles.sectionText}>
            Small samples: 23 of 700 resellers in the survey, four people in
            the test, and possible bias in the Canvas session.
          </p>
        </section>

        {/* ── Also at Cremore: internal research, no publishable evidence ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Also at Cremore</h2>
          <p className={styles.sectionText}>
            Beyond the site, Cremore hired me for three internal research
            projects, not publishable: franchise network feasibility, with a
            field study and a reseller survey; demand for an ordering app,
            with interviews and an ethnographic study at the point of sale;
            and data analysis to pick new factory-outlet locations in two
            cities.
          </p>
        </section>
      </div>

      {/* ── External link ── */}
      <a
        href={SITE_URL}
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
