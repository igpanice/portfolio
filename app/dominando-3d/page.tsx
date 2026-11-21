import Link from "next/link";
import Image from "next/image";
import styles from "../cremore/page.module.css";
import local from "./page.module.css";
import ImageModalTrigger from "../cremore/ImageModalTrigger";
import CaseCarousel from "../cremore/CaseCarousel";
import PhoneScrollFrame from "./PhoneScrollFrame";

export const metadata = {
  title: "Dominando o 3D · Igor Caramori",
  description:
    "Landing page de um curso online de impressão 3D, criada do zero a partir de pesquisa e benchmark, pronta para receber tráfego pago.",
};

const SITE_URL = "https://www.dominando3d.com";
const FIGMA_URL =
  "https://www.figma.com/design/I1sZ1NJAxIAPwWH0PyDPFJ/Dominando-3d";

const IMG = "/images/dominando-3d";

/* Tabela de Resolvi: evidência curta → decisão curta, como na Cremore */
const TABLE: [string, string][] = [
  [
    "Benchmark · único curso com professor ao vivo",
    "Aulas online ao vivo no hero e no CTA final",
  ],
  [
    "Canvas · iniciantes, renda extra e especialização",
    "“Para quem é” com três perfis",
  ],
  [
    "Canvas · problemas de configuração, qualidade e filamento",
    "“O que você vai aprender” escrito como resultado",
  ],
  [
    "Canvas · medo de não aprender e falta de aulas gravadas",
    "Conversa prévia sobre o nível e aulas gravadas",
  ],
  [
    "Benchmark · prova social reduz o risco da compra",
    "Depoimentos reais e bio do professor",
  ],
  [
    "Reunião · o WhatsApp é o canal com os alunos",
    "Todos os CTAs no WhatsApp",
  ],
];

/* Pares de seções na ordem da arquitetura da informação. Alturas em px
 * CSS das capturas (1440 no desktop, 390 no mobile). */
const SLIDES = [
  {
    file: "hero-paraquem",
    label: "Hero e Para quem é o curso",
    alt: "hero e para quem é o curso",
    desktopH: 1258,
    mobileH: 1802,
  },
  {
    file: "aprender-comofunciona",
    label: "O que você vai aprender e Como funciona",
    alt: "o que você vai aprender e como funciona",
    desktopH: 975,
    mobileH: 1251,
  },
  {
    file: "depoimentos-investimento",
    label: "Depoimentos e Investimento",
    alt: "depoimentos dos alunos e card de investimento",
    desktopH: 1410,
    mobileH: 1285,
  },
  {
    file: "henrique-cta",
    label: "Professor, CTA final e rodapé",
    alt: "seção do professor, CTA final e rodapé",
    desktopH: 1084,
    mobileH: 1022,
  },
];

/* Modais reaproveitados em mais de um ponto do texto */
const canvasModal = {
  src: `${IMG}/modals/canvas-ucd.png`,
  width: 4480,
  height: 2973,
  alt: "Canvas de Design Centrado no Usuário do Dominando o 3D, com problemas, motivações, medos, usuários, alternativas, vantagens, soluções e proposta de valor",
  modalTitle: "Canvas de Design Centrado no Usuário",
  mode: "pan" as const,
};
const benchmarkModal = {
  src: `${IMG}/modals/benchmark.png`,
  width: 2240,
  height: 1439,
  alt: "Benchmark competitivo entre Dominando o 3D, 3D Lab, Domestika, SENAI e Bambu Lab Academy, com formato, preço, credibilidade, vantagens e deltas de cada um",
  modalTitle: "Benchmark competitivo",
  mode: "scroll" as const,
};
const arquiteturaModal = {
  src: `${IMG}/modals/arquitetura.png`,
  width: 1012,
  height: 1680,
  alt: "Fluxo da arquitetura da informação do Dominando o 3D: Hero, Para quem é, O que você vai aprender, Como funciona, Depoimentos, Investimento, Professor, CTA final e Rodapé, com quatro CTAs para o WhatsApp",
  modalTitle: "Arquitetura da informação",
  mode: "scroll" as const,
};
const uiKitModal = {
  src: `${IMG}/modals/ui-kit.png`,
  width: 1440,
  height: 4752,
  alt: "UI kit do Dominando o 3D: cores, tipografia, espaçamento, layout, raio e efeito, marca e ícones, e estados do botão de WhatsApp",
  modalTitle: "UI kit",
  mode: "scroll" as const,
};

export default function Dominando3DPage() {
  return (
    <div className={styles.page}>
      {/* ── Header ── */}
      <header className={styles.header}>
        <Link href="/" className={styles.back}>
          ← Voltar ao início
        </Link>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <span>Home</span>
          <span className={styles.breadcrumbSep}>/</span>
          <span>Dominando o 3D</span>
        </nav>
      </header>

      {/* ── Title ── */}
      <h1 className={styles.title}>
        Dominando o 3D, landing page de um curso de impressão 3D.
      </h1>

      {/* ── Meta strip (ano · papel · site · figma) ── */}
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
          Ver site
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

      {/* ── Janela única com setas: o site em pares de seções, na ordem da
       * arquitetura da informação. Celular à esquerda mostrando as mesmas
       * duas seções do desktop, sempre mais alto que ele para facilitar a
       * leitura. ── */}
      <CaseCarousel
        ariaLabel="Telas do site Dominando o 3D"
        prevLabel="Composição anterior"
        nextLabel="Próxima composição"
        labels={SLIDES.map((s) => s.label)}
        slides={SLIDES.map((s, k) => (
          <div
            key={s.file}
            className={`${styles.heroComp} ${styles.slideReset}`}
          >
            <div className={styles.heroBrowser}>
              <BrowserFrame url="dominando3d.com">
                <Image
                  src={`${IMG}/slides/desktop-${s.file}.png`}
                  alt={`Site Dominando o 3D no desktop: ${s.alt}`}
                  width={1440}
                  height={s.desktopH}
                  priority={k === 0}
                  loading={k === 0 ? undefined : "eager"}
                />
              </BrowserFrame>
            </div>
            <div className={`${styles.heroPhone} ${local.phoneCol}`}>
              <PhoneScrollFrame
                label={`Role para ver ${s.alt} no mobile`}
                hint={k === 0}
              >
                <Image
                  src={`${IMG}/slides/mobile-${s.file}.png`}
                  alt={`Site Dominando o 3D no mobile: ${s.alt}`}
                  width={390}
                  height={s.mobileH}
                  priority={k === 0}
                  loading={k === 0 ? undefined : "eager"}
                />
              </PhoneScrollFrame>
            </div>
          </div>
        ))}
      />

      <div className={styles.content}>
        {/* ── Resumo: problema, o que fiz, resultado. Tudo em uma tela. ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Resumo</h2>
          <div className={styles.summaryGrid}>
            <div>
              <p className={styles.summaryKey}>O problema</p>
              <p className={styles.summaryText}>
                O cliente queria uma landing page estratégica para ampliar o
                alcance do curso com tráfego pago, mas não tinha pesquisa,
                dados, benchmark nem estratégia. Tinha só o logotipo e um vídeo
                de divulgação.
              </p>
            </div>
            <div>
              <p className={styles.summaryKey}>O que fiz</p>
              <p className={styles.summaryText}>
                <ImageModalTrigger label="Canvas" {...canvasModal} /> com o
                cliente,{" "}
                <ImageModalTrigger label="benchmark" {...benchmarkModal} />,{" "}
                <ImageModalTrigger label="arquitetura" {...arquiteturaModal} />
                , copy e <ImageModalTrigger label="UI kit" {...uiKitModal} />{" "}
                de uma landing page pronta para integrar uma estratégia de
                tráfego pago, publicada com domínio próprio.
              </p>
            </div>
            <div>
              <p className={styles.summaryKey}>O resultado</p>
              <p className={styles.summaryText}>
                No ar desde 18 de novembro de 2026, ainda sem tráfego pago.
                Vou medir no GA4 a rolagem e os cliques por CTA, e com o
                cliente, quantos leads viram alunos.
              </p>
            </div>
          </div>
        </section>

        {/* ── Investiguei ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Investiguei</h2>
          <p className={styles.sectionText}>
            Mapeei usuários, problemas, medos e alternativas num{" "}
            <ImageModalTrigger
              label="Canvas de Design Centrado no Usuário"
              {...canvasModal}
            />{" "}
            com o cliente, que também é o professor, e comparei cinco cursos
            online num{" "}
            <ImageModalTrigger
              label="benchmark competitivo"
              {...benchmarkModal}
            />
            . O Dominando o 3D era o único com professor ao vivo e o mais
            barato entre os pagos, mas ficava atrás em certificado, garantia
            e prova social.
          </p>
        </section>

        {/* ── Resolvi ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Resolvi</h2>
          <p className={styles.sectionText}>
            Desenhei a página para gerar o máximo de leads a partir das
            oportunidades que a pesquisa encontrou. A{" "}
            <ImageModalTrigger label="ordem das seções" {...arquiteturaModal} />{" "}
            e a copy seguem essa lógica, e o{" "}
            <ImageModalTrigger label="UI kit" {...uiKitModal} /> dá identidade
            visual ao curso e base para a página escalar. Cada seção saiu de
            uma evidência.
          </p>

          <div className={styles.pairTable}>
            <div className={styles.pairTableHead}>
              <span>Evidência</span>
              <span>O que virou no site</span>
            </div>
            {TABLE.map(([evidence, decision]) => (
              <div key={evidence} className={styles.pairRow}>
                <p className={`${styles.pairRowCell} ${styles.pairEvidence}`}>
                  {evidence}
                </p>
                <p className={styles.pairRowCell}>{decision}</p>
              </div>
            ))}
          </div>

          <p className={`${styles.sectionText} ${styles.sectionTextAfterTable}`}>
            Desenhei as telas e o UI kit no{" "}
            <a
              href={FIGMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.inlineLink}
            >
              Figma
              <span aria-hidden="true">↗</span>
            </a>{" "}
            e entreguei o arquivo pronto para handoff. A implementação e a
            publicação foram feitas com Claude Code, com domínio próprio, SEO,
            Search Console,{" "}
            <ImageModalTrigger
              label="Lighthouse"
              src={`${IMG}/modals/lighthouse.png`}
              width={535}
              height={483}
              alt="Relatório Lighthouse do site Dominando o 3D no mobile: Performance 99, Acessibilidade 96, Boas práticas 92 e SEO 100"
              modalTitle="Lighthouse · mobile"
              mode="static"
            />{" "}
            e card de compartilhamento para o WhatsApp.
          </p>
        </section>

        {/* ── Próximos passos (no lugar de Validei: ainda sem teste) ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Próximos passos</h2>
          <p className={styles.sectionText}>
            Os próximos passos seriam um teste de 5 segundos com alunos do
            curso, para ver se a proposta é entendida rapidamente, e avaliar
            uma garantia de reembolso exibida no site, para reduzir o risco e
            gerar confiança.
          </p>
        </section>

        {/* ── Limites ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Limites</h2>
          <p className={styles.sectionText}>
            Sem teste com usuários antes do lançamento. O Canvas reúne a visão
            do cliente, não a dos alunos, e o benchmark compara só as
            propostas, não as aulas.
          </p>
        </section>
      </div>

      {/* ── Link externo ── */}
      <a
        href={SITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.externalLink}
      >
        Ver site no ar ↗
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
