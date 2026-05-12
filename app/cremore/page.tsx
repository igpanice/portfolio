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
              height={844}
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
                <ImageModalTrigger
                  label="Questionário"
                  src="/images/cremore/modals/pesquisa-v2.png"
                  width={1240}
                  height={4160}
                  alt="Resumo das 23 respostas do questionário enviado aos revendedores Cremore no Google Forms"
                  modalTitle="Pesquisa com revendedores"
                  mode="scroll"
                />{" "}
                com revendedores, entrevistas com donos e comercial, análise
                de concorrentes online e nos comércios da minha região.
              </p>
            </div>
            <div className={styles.processBlock}>
              <p className={styles.processBlockLabel}>Resolvi</p>
              <p className={styles.processBlockText}>
                Construí o site mobile-first e inteiramente voltado ao
                revendedor ideal. A{" "}
                <ImageModalTrigger
                  label="ordem das seções"
                  src="/images/cremore/modals/arquitetura-v2.png"
                  width={361}
                  height={1061}
                  alt="Diagrama vertical da arquitetura da informação do site Cremore, com Hero, Prova social, Produtos, Benefícios, Processo, Quem somos, FAQ, CTA e Rodapé"
                  modalTitle="Arquitetura da informação"
                  mode="scroll"
                />{" "}
                veio dos percentuais da pesquisa e dos insights das entrevistas
                com o comercial:
              </p>
              <ul className={styles.bulletList}>
                <li>
                  Prova social antes do catálogo (qualidade e suporte são os
                  atributos mais valorizados, e depoimentos reais provam isso
                  mais rápido do que qualquer argumento).
                </li>
                <li>Produtos cedo na página (82% queriam ver).</li>
                <li>Processo em passos (36% tinham insegurança).</li>
                <li>Todos os CTAs direto no WhatsApp (100% usam o canal).</li>
                <li>Copy com tom regional e imagens reais da fábrica.</li>
              </ul>
              <p className={styles.processBlockText}>
                Essa primeira versão é a melhor premissa possível.
              </p>
            </div>
            <div className={styles.processBlock}>
              <p className={styles.processBlockLabel}>Validei</p>
              <p className={styles.processBlockText}>
                <ImageModalTrigger
                  label="Design no Figma"
                  src="/images/cremore/modals/figma.png"
                  width={1940}
                  height={920}
                  alt="Tela do Figma com o design completo do site Cremore"
                  modalTitle="Design no Figma"
                />
                , deploy via Claude Code no Netlify.{" "}
                <ImageModalTrigger
                  label="Lighthouse"
                  src="/images/cremore/modals/lighthouse.png"
                  width={705}
                  height={573}
                  alt="Relatório do Google Lighthouse para o site Cremore: mobile com 98 Performance, 97 Accessibility, 92 Best Practices, 100 SEO; desktop com 100 Performance, 97 Accessibility, 92 Best Practices, 100 SEO"
                  modalTitle="Lighthouse"
                  mode="static"
                />{" "}
                aprovado. Google Analytics configurado.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Decisões sob risco</h2>
          <p className={styles.sectionText}>
            Apostei nas conclusões da pesquisa mesmo com amostra pequena, 23
            de 500 revendedores. Compensei cruzando os dados com entrevistas
            qualitativas com o comercial e os donos, e com análise de
            concorrentes em Franca. A validação real só vem com o site no ar.
          </p>
          <br />
          <p className={styles.sectionText}>
            Mantive a margem de lucro no FAQ porque, além da pesquisa apontar
            rentabilidade como a dúvida número um, o comercial também
            confirmou. Apresentei os dados como variáveis por tipo de negócio
            e com uma margem mais ampla para evitar problemas legais.
          </p>
          <br />
          <p className={styles.sectionText}>
            Escolhi não usar imagens geradas por IA. Todas as imagens do site,
            incluindo as dos sabores dentro de mockups, são da operação real.
            Autenticidade gera confiança.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Resultado</h2>
          <p className={styles.sectionText}>
            Site recém lançado, tráfego pago ainda não ativado. Métricas
            acompanhadas: taxa de conversão, CTR dos CTAs, scroll depth,
            tempo de engajamento, origem do tráfego e leads confirmados
            direto com o comercial.
          </p>
          <br />
          <p className={styles.sectionText}>
            O site entra em produção agora. A próxima fase é medir, testar
            com usuários reais e iterar a partir dos dados.
          </p>
        </section>
      </div>

      {/* ── Galeria visual de fechamento ── */}
      <div className={styles.gallery}>

        {/* Fileira de 3 mobiles: produtos (2), processo (3), benefícios (4) */}
        <div className={styles.phoneGrid}>
          <PhoneFrame>
            <Image
              src="/images/cremore/site-mobile-produtos.png"
              alt="Site Cremore mobile, produtos"
              width={390}
              height={844}
            />
          </PhoneFrame>
          <PhoneFrame>
            <Image
              src="/images/cremore/site-mobile-processo.png"
              alt="Site Cremore mobile, processo"
              width={390}
              height={844}
            />
          </PhoneFrame>
          <PhoneFrame>
            <Image
              src="/images/cremore/site-mobile-beneficios.png"
              alt="Site Cremore mobile, benefícios"
              width={390}
              height={844}
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
              height={1480}
            />
          </BrowserFrame>
          <div className={styles.galleryPhone}>
            <PhoneFrame>
              <Image
                src="/images/cremore/site-mobile-quemsomos.png"
                alt="Site Cremore mobile, sobre nós"
                width={390}
                height={844}
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
                src="/images/cremore/site-mobile-faq.png"
                alt="Site Cremore mobile, FAQ"
                width={390}
                height={844}
              />
            </PhoneFrame>
          </div>
        </div>

      </div>

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
