import { useState } from 'react'
import {
  Award,
  Crown,
  Film,
  Guitar,
  Heart,
  Menu,
  Mountain,
  Music2,
  PawPrint,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
  X,
} from 'lucide-react'
import { buildChallengeData } from './buildChallenges'
import './lintChallenges'

type GalleryItem = {
  src: string
  alt: string
  caption: string
  className?: string
}

const gallery: GalleryItem[] = [
  {
    src: '/assets/jovi-rockstar.png',
    alt: 'Jovi em um palco de rock com guitarra, amplificadores e luzes vermelhas',
    caption: 'Rockstar — pronto para comandar o palco.',
    className: 'wide',
  },
  {
    src: '/assets/jovi-lenda.png',
    alt: 'Jovi filhote em pôster cinematográfico com temática rock e missão',
    caption: 'Nasce uma lenda — o começo de um herói.',
    className: 'wide',
  },
  {
    src: '/assets/jovi-superman.jpg',
    alt: 'Jovi usando uma bandana azul com símbolos do Superman',
    caption: 'Super Jovi — a conexão perfeita com o símbolo que também marcou Bon Jovi.',
    className: 'wide',
  },
  {
    src: '/assets/jovi-filhote-bandana.jpg',
    alt: 'Jovi filhote sentado usando uma bandana azul',
    caption: 'O começo da lenda.',
  },
  {
    src: '/assets/jovi-filhote-correndo.png',
    alt: 'Jovi filhote correndo',
    caption: 'Maverick desde pequeno.',
  },
  {
    src: '/assets/jovi-perfil.jpg',
    alt: 'Jovi adulto de perfil',
    caption: 'Presença de astro.',
  },
  {
    src: '/assets/jovi-carro.jpg',
    alt: 'Jovi sentado no banco traseiro de um carro',
    caption: 'Pronto para a próxima missão.',
  },
  {
    src: '/assets/jovi-close.jpg',
    alt: 'Close do rosto sorridente do Jovi',
    caption: 'Carisma em primeiro plano.',
  },
]

const timeline = [
  {
    year: 'O começo',
    title: 'Pequeno no tamanho, gigante na personalidade',
    text: 'Desde filhote, Jovi já demonstrava curiosidade, energia e uma presença impossível de ignorar.',
    image: '/assets/jovi-lenda.png',
  },
  {
    year: 'Primeiras aventuras',
    title: 'O espírito Maverick aparece',
    text: 'Corridas, descobertas e muita vontade de explorar fizeram parte da construção do seu jeito aventureiro.',
    image: '/assets/jovi-filhote-campo.png',
  },
  {
    year: 'O rei dos cães',
    title: 'Força, elegância e coração gigante',
    text: 'Adulto, Jovi reúne a imponência da raça com a doçura de um companheiro profundamente ligado à família.',
    image: '/assets/jovi-sorriso.jpg',
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const goTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <button className="brand" onClick={() => goTo('inicio')} aria-label="Ir para o início">
          <img src="/assets/jovi-logo.png" alt="Logotipo Jovi Maverick" />
          <span>
            <strong>Jovi Maverick</strong>
            <small>Rock spirit • coração gigante</small>
          </span>
        </button>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <button onClick={() => goTo('historia')}>História</button>
          <button onClick={() => goTo('nome')}>O nome</button>
          <button onClick={() => goTo('raca')}>A raça</button>
          <button onClick={() => goTo('galeria')}>Galeria</button>
          <button className="nav-cta" onClick={() => goTo('missoes')}>Missões</button>
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-overlay" />
          <img className="hero-art" src="/assets/jovi-hero.png" alt="Jovi Maverick em arte cinematográfica" />
          <div className="hero-content">
            <div className="hero-kicker"><Star size={16} /> Site oficial do rei dos cães</div>
            <h1>Jovi<br /><span>Maverick</span></h1>
            <p>
              Um Boiadeiro de Berna com alma de rockstar, coragem de piloto e um coração grande demais para caber em qualquer palco.
            </p>
            <div className="hero-actions">
              <button className="button primary" onClick={() => goTo('historia')}>Conheça a história</button>
              <button className="button ghost" onClick={() => goTo('galeria')}>Ver galeria</button>
            </div>
            <div className="hero-stats">
              <div><strong>Bon Jovi</strong><span>Inspiração musical</span></div>
              <div><strong>Top Gun</strong><span>Espírito Maverick</span></div>
              <div><strong>Superman</strong><span>Presença de herói</span></div>
            </div>
          </div>
        </section>

        <section className="intro section" id="historia">
          <div className="section-heading">
            <span className="section-label">Quem é o Jovi?</span>
            <h2>Um gigante gentil com presença de palco</h2>
            <p>
              Jovi une a elegância do Boiadeiro de Berna com uma personalidade carismática, afetuosa e cheia de atitude.
            </p>
          </div>

          <div className="intro-grid">
            <div className="portrait-card">
              <img src="/assets/jovi-close.jpg" alt="Jovi sorrindo em close" />
              <div className="portrait-caption">
                <Crown size={20} />
                <span><strong>Callsign:</strong> Rei dos Cães</span>
              </div>
            </div>

            <div className="intro-copy">
              <p className="lead">
                Forte sem ser bruto. Imponente sem perder a delicadeza. Jovi é o tipo de cachorro que chama atenção quando chega e conquista todo mundo quando fica.
              </p>
              <div className="trait-grid">
                <article><Heart /><strong>Afetuoso</strong><span>Cria vínculos intensos com a família.</span></article>
                <article><ShieldCheck /><strong>Protetor</strong><span>Atento, equilibrado e confiável.</span></article>
                <article><Sparkles /><strong>Carismático</strong><span>Um verdadeiro astro diante das câmeras.</span></article>
                <article><PawPrint /><strong>Companheiro</strong><span>Prefere estar perto de quem ama.</span></article>
              </div>
            </div>
          </div>
        </section>

        <section className="name-story" id="nome">
          <div className="section-heading light">
            <span className="section-label">A origem do nome</span>
            <h2>Rock, cinema e um toque de super-herói</h2>
          </div>

          <div className="name-grid">
            <article className="name-card rock-card">
              <Music2 />
              <span className="card-number">01</span>
              <h3>Jovi</h3>
              <p>Uma homenagem à banda Bon Jovi, símbolo de energia, carisma e presença de palco.</p>
              <div className="card-tag"><Guitar size={16} /> Rock spirit</div>
            </article>

            <article className="name-card maverick-card">
              <Plane />
              <span className="card-number">02</span>
              <h3>Maverick</h3>
              <p>Inspirado em Top Gun: coragem, confiança, liberdade e disposição para viver grandes aventuras.</p>
              <div className="card-tag"><Film size={16} /> Top Gun energy</div>
            </article>

            <article className="name-card super-card">
              <Award />
              <span className="card-number">03</span>
              <h3>Super Jovi</h3>
              <p>A bandana do Superman conecta o herói da casa ao símbolo que também aparece na trajetória de Bon Jovi.</p>
              <div className="card-tag"><ShieldCheck size={16} /> Coração de herói</div>
            </article>
          </div>
        </section>

        <section className="superman-feature section">
          <div className="superman-image">
            <img src="/assets/jovi-superman.jpg" alt="Jovi usando bandana do Superman" />
          </div>
          <div className="superman-copy">
            <span className="section-label">Edição especial</span>
            <h2>Nem todo herói usa capa.<br />Alguns usam bandana.</h2>
            <p>
              Essa imagem resume perfeitamente o universo do Jovi: a força visual de um herói, a atitude de um rockstar e a doçura inconfundível de um Boiadeiro de Berna.
            </p>
            <div className="quote-mark">“</div>
          </div>
        </section>

        <section className="breed section" id="raca">
          <div className="section-heading">
            <span className="section-label">Boiadeiro de Berna</span>
            <h2>Uma raça construída para trabalhar e amar</h2>
            <p>Originária da Suíça, a raça foi desenvolvida para auxiliar nas fazendas e tornou-se conhecida por sua força, equilíbrio e vínculo com as pessoas.</p>
          </div>

          <div className="breed-grid">
            <article className="breed-card featured">
              <Heart />
              <span>Destaque da raça</span>
              <h3>Uma das raças mais amáveis do mundo</h3>
              <p>O temperamento gentil, paciente e próximo da família é uma das características mais admiradas do Boiadeiro de Berna.</p>
            </article>
            <article className="breed-card"><Mountain /><h3>Origem suíça</h3><p>Descendente dos cães de montanha usados nas regiões próximas a Berna.</p></article>
            <article className="breed-card"><Truck /><h3>Força de trabalho</h3><p>Tradicionalmente usado para tração de carroças e tarefas rurais.</p></article>
            <article className="breed-card"><ShieldCheck /><h3>Proteção equilibrada</h3><p>Atento e seguro, sem perder o temperamento afetuoso.</p></article>
          </div>
        </section>

        <section className="timeline-section section">
          <div className="section-heading">
            <span className="section-label">Linha do tempo</span>
            <h2>Do pequeno aventureiro ao rei dos cães</h2>
          </div>
          <div className="timeline">
            {timeline.map((item, index) => (
              <article className="timeline-item" key={item.title}>
                <div className="timeline-number">0{index + 1}</div>
                <img src={item.image} alt={item.title} />
                <div>
                  <span>{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="rockstar-feature section">
          <article className="rockstar-panel legend-panel">
            <img src="/assets/jovi-lenda.png" alt="Jovi filhote no pôster Nasce uma Lenda" />
            <div>
              <span className="section-label">O início de tudo</span>
              <h2>Nasce uma lenda</h2>
              <p>Antes do palco, das missões e do título de Rei dos Cães, existia um filhote curioso com personalidade de protagonista.</p>
            </div>
          </article>
          <article className="rockstar-panel stage-panel">
            <img src="/assets/jovi-rockstar.png" alt="Jovi adulto em um palco de rock" />
            <div>
              <span className="section-label">A consagração</span>
              <h2>Agora, um verdadeiro rockstar</h2>
              <p>Carisma, presença e coração gigante: Jovi está pronto para subir ao palco e assumir seu lugar como estrela principal.</p>
            </div>
          </article>
        </section>

        <section className="gallery-section" id="galeria">
          <div className="section-heading light">
            <span className="section-label">Galeria</span>
            <h2>Momentos de uma verdadeira estrela</h2>
            <p>Do filhote curioso ao gigante gentil: cada foto mostra uma fase e uma faceta do Jovi.</p>
          </div>
          <div className="gallery-grid">
            {gallery.map((item) => (
              <figure className={item.className ?? ''} key={item.src}>
                <img src={item.src} alt={item.alt} />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="missions section" id="missoes">
          <div className="section-heading">
            <span className="section-label">Principais funções da raça</span>
            <h2>Missões dignas de um Maverick</h2>
          </div>
          <div className="mission-grid">
            <article><span>01</span><h3>Conduzir o gado</h3><p>Auxiliava os agricultores na movimentação e no controle dos animais.</p></article>
            <article><span>02</span><h3>Puxar carroças</h3><p>Sua força era aproveitada no transporte de cargas e produtos.</p></article>
            <article><span>03</span><h3>Guardar propriedades</h3><p>Mantinha-se atento à fazenda e à família.</p></article>
            <article><span>04</span><h3>Ser companheiro</h3><p>Hoje é especialmente valorizado pela convivência e pelo vínculo com as pessoas.</p></article>
          </div>
        </section>

        <section className="final-banner">
          <img src="/assets/jovi-logo.png" alt="Logo Jovi Maverick" />
          <div>
            <span>Rock spirit • coração gigante • presença de herói</span>
            <h2>Jovi Maverick</h2>
            <p>O rei dos cães.</p>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <strong>Projeto Jovi Maverick</strong>
          <span>Atividade prática de testes, Git, lint e build.</span>
        </div>
        <small>Versão de desafio: {buildChallengeData.version}</small>
      </footer>
    </div>
  )
}
