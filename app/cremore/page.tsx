import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import ImageModalTrigger from "./ImageModalTrigger";
import CaseCarousel from "./CaseCarousel";

export const metadata = {
  title: "Cremore — Igor Caramori",
  description:
    "Landing page B2B para captação de revendedores de uma produtora de gelatos e açaí em plena expansão regional.",
};

const SITE_URL = "https://cremoregelatos.com.br";
const FIGMA_URL =
  "https://www.figma.com/design/Ry0byAqzEAnftHc24rZ8g2/Cremore--Copy-?node-id=1140-2";

export default function CremorePage() {
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
          <span>Cremore</span>
        </nav>
      </header>

      {/* ── Title ── */}
      <h1 className={styles.title}>
        Cremore, site de captação de revendedores.
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

      {/* ── Janela única com setas: as 4 composições do site ── */}
      <CaseCarousel
        ariaLabel="Telas do site Cremore"
        prevLabel="Composição anterior"
        nextLabel="Próxima composição"
        labels={[
          "Hero",
          "Produtos, processo e benefícios no mobile",
          "Catálogo de produtos",
          "Quem somos e FAQ",
        ]}
        slides={[
          /* 1 — Hero: celular + browser */
          <div
            key="hero"
            className={`${styles.heroComp} ${styles.slideReset}`}
          >
            <div className={styles.heroBrowser}>
              <BrowserFrame url="cremoregelatos.com.br">
                <Image
                  src="/images/cremore/site-desktop-1-hero.png"
                  alt="Site Cremore desktop, hero com prévia da seção de depoimentos"
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
                  alt="Site Cremore no mobile"
                  width={390}
                  height={950}
                  priority
                />
              </PhoneFrame>
            </div>
          </div>,

          /* 2 — Três celulares */
          <div key="phones" className={styles.phoneGrid}>
            <PhoneFrame>
              <Image
                src="/images/cremore/site-mobile-produtos.png"
                alt="Site Cremore mobile, produtos"
                width={390}
                height={950}
                loading="eager"
              />
            </PhoneFrame>
            <PhoneFrame>
              <Image
                src="/images/cremore/site-mobile-processo.png"
                alt="Site Cremore mobile, processo"
                width={390}
                height={950}
                loading="eager"
              />
            </PhoneFrame>
            <PhoneFrame>
              <Image
                src="/images/cremore/site-mobile-beneficios.png"
                alt="Site Cremore mobile, benefícios"
                width={390}
                height={950}
                loading="eager"
              />
            </PhoneFrame>
          </div>,

          /* 3 — Produtos desktop + quem somos mobile */
          <div key="produtos" className={styles.galleryComp}>
            <BrowserFrame url="cremoregelatos.com.br">
              <Image
                src="/images/cremore/site-desktop-2-produtos.png"
                alt="Catálogo de produtos do site Cremore"
                width={1440}
                height={1043}
                loading="eager"
              />
            </BrowserFrame>
            <div className={styles.galleryPhone}>
              <PhoneFrame>
                <Image
                  src="/images/cremore/site-mobile-quemsomos.png"
                  alt="Site Cremore mobile, quem somos"
                  width={390}
                  height={950}
                  loading="eager"
                />
              </PhoneFrame>
            </div>
          </div>,

          /* 4 — Quem somos desktop + FAQ mobile */
          <div key="quemsomos" className={styles.galleryComp}>
            <BrowserFrame url="cremoregelatos.com.br">
              <Image
                src="/images/cremore/site-desktop-3-quemsomos.png"
                alt="Seção Quem somos do site Cremore"
                width={1440}
                height={1000}
                loading="eager"
              />
            </BrowserFrame>
            <div className={styles.galleryPhone}>
              <PhoneFrame>
                <Image
                  src="/images/cremore/site-mobile-faq.png"
                  alt="Site Cremore mobile, FAQ"
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
        {/* ── Resumo: problema, o que fiz, resultado. Tudo em uma tela. ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Resumo</h2>
          <div className={styles.summaryGrid}>
            <div>
              <p className={styles.summaryKey}>O problema</p>
              <p className={styles.summaryText}>
                A Cremore, com mais de nove anos de operação e 700
                revendedores, não tinha uma landing page estratégica para
                quem procura um fornecedor ou quer abrir o próprio negócio.
              </p>
            </div>
            <div>
              <p className={styles.summaryKey}>O que fiz</p>
              <p className={styles.summaryText}>
                <ImageModalTrigger
                  label="Pesquisa com revendedores"
                  src="/images/cremore/modals/pesquisa-v2.png"
                  width={1240}
                  height={4160}
                  alt="Resumo das 23 respostas do questionário enviado aos revendedores Cremore no Google Forms"
                  modalTitle="Pesquisa com revendedores"
                  mode="scroll"
                />
                , entrevista com os donos,{" "}
                <ImageModalTrigger
                  label="arquitetura"
                  src="/images/cremore/modals/arquitetura-v2.png"
                  width={361}
                  height={1061}
                  alt="Diagrama vertical da arquitetura da informação do site Cremore, com Hero, Prova social, Produtos, Benefícios, Processo, Quem somos, FAQ, CTA e Rodapé"
                  modalTitle="Arquitetura da informação"
                  mode="scroll"
                />
                , copy, fotos no local, edição de imagens e{" "}
                <ImageModalTrigger
                  label="UI kit"
                  src="/images/cremore/modals/ui-kit.webp"
                  width={1440}
                  height={5982}
                  alt="UI kit do site Cremore: cores, tipografia, espaçamento, layout, raios e sombras, ícones e componentes"
                  modalTitle="UI kit"
                  mode="scroll"
                />{" "}
                de uma landing page mobile-first.
              </p>
            </div>
            <div>
              <p className={styles.summaryKey}>O resultado</p>
              <p className={styles.summaryText}>
                9 novos revendedores em 5 cidades nos primeiros 60 dias,
                confirmados com o comercial.
              </p>
            </div>
          </div>

          <div className={styles.statRow}>
            <div className={styles.stat}>
              <p className={styles.statValue}>9</p>
              <p className={styles.statLabel}>Novos revendedores</p>
            </div>
            <div className={styles.stat}>
              <p className={styles.statValue}>5</p>
              <p className={styles.statLabel}>Cidades alcançadas</p>
            </div>
            <div className={styles.stat}>
              <p className={styles.statValue}>60</p>
              <p className={styles.statLabel}>Dias de acompanhamento</p>
            </div>
          </div>
        </section>

        {/* ── Investiguei ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Investiguei</h2>
          <p className={styles.sectionText}>
            Com um{" "}
            <ImageModalTrigger
              label="questionário com revendedores"
              src="/images/cremore/modals/pesquisa-v2.png"
              width={1240}
              height={4160}
              alt="Resumo das 23 respostas do questionário enviado aos revendedores Cremore no Google Forms"
              modalTitle="Pesquisa com revendedores"
              mode="scroll"
            />
            , um Canvas de Design Centrado no Usuário com os donos e o
            comercial, e análise de concorrentes online e na região, cheguei
            aos principais insights: qualidade e suporte são o que o
            revendedor mais valoriza, e todo contato acontece pelo WhatsApp.
          </p>
        </section>

        {/* ── Resolvi ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Resolvi</h2>
          <p className={styles.sectionText}>
            Desenhei manualmente o site inteiro em torno do revendedor ideal,
            da{" "}
            <ImageModalTrigger
              label="ordem das seções"
              src="/images/cremore/modals/arquitetura-v2.png"
              width={361}
              height={1061}
              alt="Diagrama vertical da arquitetura da informação do site Cremore, com Hero, Prova social, Produtos, Benefícios, Processo, Quem somos, FAQ, CTA e Rodapé"
              modalTitle="Arquitetura da informação"
              mode="scroll"
            />{" "}
            ao{" "}
            <ImageModalTrigger
              label="UI kit"
              src="/images/cremore/modals/ui-kit.webp"
              width={1440}
              height={5982}
              alt="UI kit do site Cremore: cores, tipografia, espaçamento, layout, raios e sombras, ícones e componentes"
              modalTitle="UI kit"
              mode="scroll"
            />
            . Cada decisão saiu de dados das pesquisas:
          </p>

          <div className={styles.pairTable}>
            <div className={styles.pairTableHead}>
              <span>Evidência</span>
              <span>O que virou no site</span>
            </div>
            <div className={styles.pairRow}>
              <p className={`${styles.pairRowCell} ${styles.pairEvidence}`}>
                Qualidade e suporte são os atributos mais valorizados
              </p>
              <p className={styles.pairRowCell}>
                Prova social antes do catálogo
              </p>
            </div>
            <div className={styles.pairRow}>
              <p className={`${styles.pairRowCell} ${styles.pairEvidence}`}>
                82% queriam ver os produtos
              </p>
              <p className={styles.pairRowCell}>Produtos cedo na página</p>
            </div>
            <div className={styles.pairRow}>
              <p className={`${styles.pairRowCell} ${styles.pairEvidence}`}>
                36% tinham insegurança com o processo
              </p>
              <p className={styles.pairRowCell}>
                Processo quebrado em passos
              </p>
            </div>
            <div className={styles.pairRow}>
              <p className={`${styles.pairRowCell} ${styles.pairEvidence}`}>
                100% usam o WhatsApp
              </p>
              <p className={styles.pairRowCell}>
                Todos os CTAs direto no WhatsApp
              </p>
            </div>
            <div className={styles.pairRow}>
              <p className={`${styles.pairRowCell} ${styles.pairEvidence}`}>
                Reunião de Canvas com os donos e o comercial
              </p>
              <div className={styles.pairRowCell}>
                <ul className={styles.pairList}>
                  <li>Tom da marca, copy regional e UI kit</li>
                  <li>Perguntas do FAQ</li>
                  <li>
                    Imagens reais: a fábrica no Hero, os produtos e as lojas
                    em Quem somos
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <p className={`${styles.sectionText} ${styles.sectionTextAfterTable}`}>
            Entreguei o{" "}
            <a
              href={FIGMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.inlineLink}
            >
              Figma
              <span aria-hidden="true">↗</span>
            </a>{" "}
            pronto para handoff. Somente a implementação e a publicação foram
            feitas com Claude Code, seguindo boas práticas como{" "}
            <ImageModalTrigger
              label="Lighthouse"
              src="/images/cremore/modals/lighthouse.png"
              width={705}
              height={573}
              alt="Relatório Lighthouse do site Cremore"
              modalTitle="Lighthouse"
              mode="static"
            />
            , SEO, hierarquia semântica e acompanhamento no GA4.
          </p>
        </section>

        {/* ── Validei ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Validei</h2>
          <p className={styles.sectionText}>
            Sem viabilidade para teste de usabilidade, fiz um teste de 5
            segundos com quatro donos de negócio, de duas padarias, um
            restaurante delivery e um e-commerce, para ver o que captavam da
            proposta.
          </p>

          <div className={styles.pairGrid}>
            <div className={styles.pairCell}>
              <p className={styles.pairKey}>O que descobri</p>
              <p className={styles.pairValue}>
                Três dos quatro perguntaram em qual região a Cremore atua. A
                resposta existia apenas no FAQ.
              </p>
            </div>
            <div className={styles.pairCell}>
              <p className={styles.pairKey}>O que mudei</p>
              <p className={styles.pairValue}>
                Adicionei um mapa de Minas Gerais com destaque para Araxá,
                como primeira iteração.
              </p>
            </div>
          </div>
        </section>

        {/* ── Limites ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Limites</h2>
          <p className={styles.sectionText}>
            Amostras pequenas: 23 de 700 revendedores no questionário, quatro
            pessoas no teste e possíveis vieses no Canvas.
          </p>
        </section>

        {/* ── Também na Cremore: pesquisas internas, sem evidência publicável ── */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Também na Cremore</h2>
          <p className={styles.sectionText}>
            Além do site, a Cremore me contratou para três pesquisas internas,
            não publicáveis: viabilidade de uma rede de franquias, com estudo
            em campo e questionário com revendedores; demanda por um
            aplicativo de pedidos, com entrevistas e estudo etnográfico no
            ponto de venda; e análise de dados para escolher pontos de novas
            lojas de fábrica em duas cidades.
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

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.phoneFrame}>
      <div className={styles.phoneBody}>{children}</div>
    </div>
  );
}
