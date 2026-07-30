export type PageCard = {
  title: string
  text: string
  icon: string
  highlight?: boolean
}

export type Page = {
  id: string
  label: string
  title: string
  subtitle: string
  heroBadge: string
  heroNote: string
  quote: string
  cards: PageCard[]
}

export const pages: Page[] = [
  {
    id: 'inicio',
    label: 'Início',
    title: 'Jovi Maverick, o rei dos cães',
    subtitle:
      'Um Boiadeiro de Berna carinhoso, imponente e cheio de atitude — misturando o coração de um gigante gentil com a energia do rock e a presença de um verdadeiro Maverick.',
    heroBadge: 'Presença marcante',
    heroNote: 'Um personagem forte, amável e memorável para guiar o desafio da turma.',
    quote: 'Jovi não é só um cachorro bonito. Ele tem alma de estrela, jeito protetor e coração gigante.',
    cards: [
      {
        icon: '🐾',
        title: 'Um gigante gentil',
        text: 'Jovi combina grande porte, expressão tranquila e uma personalidade muito próxima da família.',
      },
      {
        icon: '👑',
        title: 'Rei dos cães',
        text: 'O apelido destaca sua presença marcante, elegância e jeito protetor sem perder a doçura.',
      },
      {
        icon: '🤘',
        title: 'Nome com atitude',
        text: 'Jovi foi inspirado na banda Bon Jovi, unindo carinho, energia e uma identidade com espírito rock.',
        highlight: true,
      },
    ],
  },
  {
    id: 'origem',
    label: 'Origem da raça',
    title: 'Das fazendas suíças para o mundo',
    subtitle:
      'O Boiadeiro de Berna surgiu na Suíça e trabalhou durante gerações ao lado de agricultores nas regiões próximas a Berna, ganhando fama por sua força, lealdade e equilíbrio.',
    heroBadge: 'Raízes suíças',
    heroNote: 'Uma raça tradicional, forte e construída no trabalho ao lado das pessoas.',
    quote: 'Antes do charme e da fama, havia uma origem de trabalho, companheirismo e confiança.',
    cards: [
      {
        icon: '🏔️',
        title: 'Origem suíça',
        text: 'A raça é originária da Suíça e faz parte do grupo dos cães de montanha e boiadeiros suíços.',
      },
      {
        icon: '🚜',
        title: 'Cão de fazenda',
        text: 'Era utilizada para proteger propriedades, conduzir o gado e auxiliar em diferentes tarefas rurais.',
      },
      {
        icon: '🛒',
        title: 'Força para tração',
        text: 'Sua estrutura forte permitia puxar pequenas carroças, inclusive no transporte de produtos nas fazendas.',
      },
    ],
  },
  {
    id: 'historia',
    label: 'A história do nome',
    title: 'Jovi Maverick: música, cinema e personalidade',
    subtitle:
      'Cada parte do nome foi escolhida para representar uma referência especial: o rock da banda Bon Jovi, a coragem de Top Gun e o carisma único do nosso protagonista.',
    heroBadge: 'Nome com identidade',
    heroNote: 'Um nome pensado para soar forte, marcante e cheio de estilo.',
    quote: 'Jovi carrega um nome que mistura palco, velocidade, aventura e muito carisma.',
    cards: [
      {
        icon: '🎸',
        title: 'Jovi — Bon Jovi',
        text: 'O primeiro nome foi escolhido em homenagem à banda Bon Jovi, trazendo ao personagem uma identidade rock e carismática.',
        highlight: true,
      },
      {
        icon: '✈️',
        title: 'Maverick — Top Gun',
        text: 'Maverick faz referência ao protagonista de Top Gun e representa coragem, confiança e espírito aventureiro.',
      },
      {
        icon: '🏡',
        title: 'O criador de origem',
        text: 'Este espaço foi preparado para registrar o nome do canil, do criador e a cidade de onde Jovi veio.',
      },
    ],
  },
  {
    id: 'caracteristicas',
    label: 'Características',
    title: 'Um cão grande no tamanho e no coração',
    subtitle:
      'A raça é conhecida pelo temperamento equilibrado, pela proximidade com a família e pela disposição para aprender. Sua marca registrada é a combinação de força com gentileza.',
    heroBadge: 'A raça mais amável',
    heroNote: 'O grande destaque é o temperamento afetuoso e extremamente ligado às pessoas.',
    quote: 'Poucos cães impressionam tanto pelo tamanho e, ao mesmo tempo, encantam tanto pela delicadeza.',
    cards: [
      {
        icon: '💛',
        title: 'Extremamente afetuoso',
        text: 'O Boiadeiro de Berna é frequentemente descrito como uma das raças mais amáveis e carinhosas, criando fortes vínculos com a família.',
        highlight: true,
      },
      {
        icon: '🧠',
        title: 'Inteligente e disposto',
        text: 'Aprende bem com treinamento consistente, positivo e paciente, especialmente quando existe proximidade com seu tutor.',
      },
      {
        icon: '🛡️',
        title: 'Atento e equilibrado',
        text: 'Sua presença transmite segurança. O padrão da raça valoriza um cão alerta, confiante e de boa natureza.',
      },
      {
        icon: '👨‍👩‍👧‍👦',
        title: 'Ligado à família',
        text: 'Gosta de participar da rotina, receber atenção e permanecer próximo das pessoas com quem criou vínculo.',
      },
    ],
  },
  {
    id: 'funcoes',
    label: 'Funções da raça',
    title: 'Muito além de um belo companheiro',
    subtitle:
      'A história do Boiadeiro de Berna foi construída pelo trabalho: guarda, condução de animais, tração e companhia. Hoje, segue sendo admirado por sua versatilidade.',
    heroBadge: 'Força com utilidade',
    heroNote: 'Uma raça que une trabalho, proteção e uma convivência excelente com a família.',
    quote: 'Jovi tem cara de astro, mas carrega no DNA a tradição de um verdadeiro parceiro de trabalho.',
    cards: [
      {
        icon: '🐄',
        title: 'Condução de gado',
        text: 'A raça auxiliava os agricultores a movimentar e controlar o gado nas propriedades rurais.',
      },
      {
        icon: '🛞',
        title: 'Tração de carroças',
        text: 'Sua força era aproveitada para puxar cargas e pequenas carroças em atividades do campo.',
      },
      {
        icon: '🏠',
        title: 'Guarda da propriedade',
        text: 'Também atuava como cão de guarda das fazendas, mantendo-se atento ao ambiente e à família.',
      },
      {
        icon: '🤝',
        title: 'Companhia e atividades',
        text: 'Atualmente é muito valorizado como cão de família e pode participar de obediência, tração esportiva e outras atividades.',
        highlight: true,
      },
    ],
  },
]
