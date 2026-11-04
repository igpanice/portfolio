import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import ImageModalTrigger from "./ImageModalTrigger";

export const metadata = {
  title: "Cremore — Igor Caramori",
  description:
    "Landing page B2B para captação de revendedores de uma produtora de gelatos e açaí em plena expansão regional.",
};

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

      {/* ── Meta strip (ano · papel · live link) ── */}
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
          Ver site
          <span aria-hidden="true">↗</span>
        </a>
      </div>

      {/* ── Hero composition (browser + phone overlay) ── */}
      <div className={styles.heroComp}>
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
            />
          </PhoneFrame>
        </div>
      </div>

      {/* ── Texto contínuo do case ── */}
      <div className={styles.content}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contexto</h2>
          <p className={styles.sectionText}>
            A Cremore, fábrica de gelatos, sorvetes, açaí e picolés, crescia há
            nove anos sem um site que acompanhasse o porte da operação. O site
            antigo era genérico, não respondia às dúvidas de quem pesquisa um
            fornecedor nem falava com quem pensa em abrir o próprio negócio e
            procura um bom parceiro.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Processo</h2>
          <div className={styles.processBlocks}>
            <div className={styles.processBlock}>
              <p className={styles.processBlockLabel}>Investiguei</p>
              <p className={styles.processBlockText}>
                Para encontrar a direção inicial e as oportunidades, usei
                métodos de pesquisa generativa.{" "}
                <ImageModalTrigger
                  label="Questionário"
                  src="/images/cremore/modals/pesquisa-v2.png"
                  width={1240}
                  height={4160}
                  alt="Resumo das 23 respostas do questionário enviado aos revendedores Cremore no Google Forms"
                  modalTitle="Pesquisa com revendedores"
                  mode="scroll"
                />{" "}
                com revendedores, Canvas de Design Centrado no Usuário com os
                donos e o comercial, análise de concorrentes online e nos
                comércios da minha região.
              </p>
            </div>
            <div className={styles.processBlock}>
              <p className={styles.processBlockLabel}>Resolvi</p>

              <div className={styles.blockMeta}>
                <div>
                  <p className={styles.metaKey}>Abordagem</p>
                  <p className={styles.metaValue}>Mobile-first</p>
                </div>
                <div>
                  <p className={styles.metaKey}>Base de decisão</p>
                  <p className={styles.metaValue}>Pesquisa + Canvas</p>
                </div>
                <div>
                  <p className={styles.metaKey}>Entregas</p>
                  <p className={styles.metaValue}>Arquitetura, copy e UI kit</p>
                </div>
              </div>

              <p className={styles.processBlockText}>
                Construí o site inteiramente voltado ao revendedor ideal, da{" "}
                <ImageModalTrigger
                  label="ordem das seções"
                  src="/images/cremore/modals/arquitetura-v2.png"
                  width={361}
                  height={1061}
                  alt="Diagrama vertical da arquitetura da informação do site Cremore, com Hero, Prova social, Produtos, Benefícios, Processo, Quem somos, FAQ, CTA e Rodapé"
                  modalTitle="Arquitetura da informação"
                  mode="scroll"
                />{" "}
                ao UI kit. Cada decisão veio dos percentuais da pesquisa ou da
                reunião de Canvas com os donos e o comercial:
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
                  <p className={styles.pairRowCell}>
                    Produtos cedo na página
                  </p>
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
                        Imagens reais: a fábrica no Hero, os produtos e as
                        lojas em Quem somos
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className={styles.processBlockText}>
                Essa primeira versão é a melhor premissa possível.
              </p>
            </div>
            <div className={styles.processBlock}>
              <p className={styles.processBlockLabel}>Validei</p>

              <div className={styles.blockMeta}>
                <div>
                  <p className={styles.metaKey}>Método</p>
                  <p className={styles.metaValue}>Teste de 5 segundos</p>
                </div>
                <div>
                  <p className={styles.metaKey}>Participantes</p>
                  <p className={styles.metaValue}>4 donos de negócio</p>
                </div>
                <div>
                  <p className={styles.metaKey}>Objetivo</p>
                  <p className={styles.metaValue}>Clareza da proposta</p>
                </div>
              </div>

              <p className={styles.processBlockText}>
                Padaria, restaurante delivery e e-commerce. Sem viabilidade
                para teste de usabilidade por tarefas, queria saber o que
                eles captavam do propósito do site, do que a empresa faz e da
                proposta de valor da Cremore.
              </p>

              <div className={styles.pairGrid}>
                <div className={styles.pairCell}>
                  <p className={styles.pairKey}>O que descobri</p>
                  <p className={styles.pairValue}>
                    Três dos quatro perguntaram em qual região a Cremore
                    atua. A resposta existia apenas no FAQ.
                  </p>
                </div>
                <div className={styles.pairCell}>
                  <p className={styles.pairKey}>O que mudei</p>
                  <p className={styles.pairValue}>
                    Adicionei um mapa de Minas Gerais com destaque para
                    Araxá, como primeira iteração.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Resultado</h2>
          <p className={styles.sectionText}>
            Combinei com o comercial o registro de dois meses, para saber
            quantos leads vieram do site e de fato viraram revendedores.
          </p>

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

          <p className={styles.sectionText}>
            Também acompanho conversão, CTR, scroll depth, tempo de
            engajamento e origem do tráfego no Analytics.
          </p>
        </section>
      </div>

      {/* ── Galeria visual de fechamento ── */}
      <div className={styles.gallery}>

        {/* Fileira de 3 mobiles.
         * Desktop: produtos, processo, benefícios.
         * Mobile: processo, quem somos, faq (rearranjo p/ destacar produtos/benefícios nos slots maiores). */}
        <div className={styles.phoneGrid}>
          <PhoneFrame>
            <Image
              className={styles.imgDesktopOnly}
              src="/images/cremore/site-mobile-produtos.png"
              alt="Site Cremore mobile, produtos"
              width={390}
              height={950}
            />
            <Image
              className={styles.imgMobileOnly}
              src="/images/cremore/site-mobile-processo.png"
              alt="Site Cremore mobile, processo"
              width={390}
              height={950}
            />
          </PhoneFrame>
          <PhoneFrame>
            <Image
              className={styles.imgDesktopOnly}
              src="/images/cremore/site-mobile-processo.png"
              alt="Site Cremore mobile, processo"
              width={390}
              height={950}
            />
            <Image
              className={styles.imgMobileOnly}
              src="/images/cremore/site-mobile-quemsomos.png"
              alt="Site Cremore mobile, quem somos"
              width={390}
              height={950}
            />
          </PhoneFrame>
          <PhoneFrame>
            <Image
              className={styles.imgDesktopOnly}
              src="/images/cremore/site-mobile-beneficios.png"
              alt="Site Cremore mobile, benefícios"
              width={390}
              height={950}
            />
            <Image
              className={styles.imgMobileOnly}
              src="/images/cremore/site-mobile-faq.png"
              alt="Site Cremore mobile, perguntas frequentes"
              width={390}
              height={950}
            />
          </PhoneFrame>
        </div>

        {/* D2 — Produtos desktop com overlay sobre nós (5) */}
        <div className={styles.galleryComp}>
          <BrowserFrame url="cremoregelatos.com.br">
            <Image
              src="/images/cremore/site-desktop-2-produtos.png"
              alt="Catálogo de produtos do site Cremore"
              width={1440}
              height={1043}
            />
          </BrowserFrame>
          <div className={styles.galleryPhone}>
            <PhoneFrame>
              <Image
                className={styles.imgDesktopOnly}
                src="/images/cremore/site-mobile-quemsomos.png"
                alt="Site Cremore mobile, sobre nós"
                width={390}
                height={950}
              />
              <Image
                className={styles.imgMobileOnly}
                src="/images/cremore/site-mobile-produtos.png"
                alt="Site Cremore mobile, produtos"
                width={390}
                height={950}
              />
            </PhoneFrame>
          </div>
        </div>

        {/* D3 — Quem somos desktop com overlay FAQ (6) */}
        <div className={styles.galleryComp}>
          <BrowserFrame url="cremoregelatos.com.br">
            <Image
              src="/images/cremore/site-desktop-3-quemsomos.png"
              alt="Seção Quem somos do site Cremore"
              width={1440}
              height={1000}
            />
          </BrowserFrame>
          <div className={styles.galleryPhone}>
            <PhoneFrame>
              <Image
                className={styles.imgDesktopOnly}
                src="/images/cremore/site-mobile-faq.png"
                alt="Site Cremore mobile, FAQ"
                width={390}
                height={950}
              />
              <Image
                className={styles.imgMobileOnly}
                src="/images/cremore/site-mobile-beneficios.png"
                alt="Site Cremore mobile, benefícios"
                width={390}
                height={950}
              />
            </PhoneFrame>
          </div>
        </div>

      </div>

      {/* ── Decisões sob risco (após os mockups finais) ── */}
      <section className={`${styles.section} ${styles.sectionAfterGallery}`}>
        <h2 className={styles.sectionTitle}>Decisões sob risco</h2>
        <p className={styles.sectionText}>
          Apostei nas conclusões da pesquisa mesmo com amostra pequena, 23 de
          700 revendedores. Compensei cruzando os dados com o Canvas de
          Design Centrado no Usuário com os donos e o comercial, e com a
          análise de concorrentes em Franca.
        </p>
        <p className={styles.sectionText}>
          O teste de 5 segundos também teve amostra baixa, quatro pessoas. O
          sinal serve para orientar a primeira iteração, não para confirmar
          um padrão de comportamento.
        </p>
        <p className={styles.sectionText}>
          Sem viabilidade para um teste de usabilidade maior, a leitura do que
          acontece no site depende do Analytics e do retorno do comercial.
        </p>
      </section>

      {/* ── Link externo ── */}
      <a
        href="https://cremoregelatos.com.br"
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
