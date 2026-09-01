export const profile = {
  name: 'Júlia Lima',
  email: 'seuemail@exemplo.com',
  location: 'Brasil · disponível para remoto',
  github: 'https://github.com/',
  linkedin: 'https://www.linkedin.com/',
  twitter: 'https://x.com/'
};

export const projects = [
  {
    id: 'nimbus',
    folder: 'venda',
    title: 'Nimbus',
    type: 'Produto digital',
    description: 'Landing page para uma plataforma de gestão de projetos, automações e indicadores para equipes.',
    outcome: 'Apresenta proposta de valor, planos e uma calculadora de preço em um fluxo comercial claro.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    accent: 'blue',
    preview: 'dashboard',
    live: '../venda/index.html',
    github: profile.github,
    study: {
      problem: 'Times que crescem precisam entender rapidamente como a plataforma organiza projetos, tarefas e custos.',
      context: 'O desafio foi traduzir uma solução SaaS em uma página objetiva, com informação suficiente para apoiar a decisão de compra.',
      decisions: ['Hierarquia visual orientada à conversão', 'Toggle mensal/anual e calculadora de usuários', 'Seções reutilizáveis para recursos, planos e FAQ'],
      result: 'Uma experiência comercial responsiva, com interações no navegador e comunicação direta do valor do produto.',
      lesson: 'Pequenas interações, quando conectadas ao contexto de negócio, ajudam a transformar uma página estática em uma experiência de produto.'
    }
  },
  {
    id: 'otica',
    folder: 'otica',
    title: 'Ótica Visão Prime',
    type: 'Site institucional',
    description: 'Experiência premium para uma ótica, com serviços especializados, marcas, produtos em destaque e contato.',
    outcome: 'Organiza a jornada entre conhecer a marca, explorar os serviços e agendar uma consulta.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    accent: 'violet',
    preview: 'store',
    live: '../otica/index.html',
    github: profile.github,
    study: {
      problem: 'Uma ótica precisa transmitir confiança e estilo antes mesmo do primeiro contato do cliente.',
      context: 'A página foi estruturada para equilibrar apresentação visual, informações de atendimento e chamadas de ação.',
      decisions: ['Paleta escura com acentos violetas para percepção premium', 'Blocos de serviços e produtos escaneáveis', 'Menu responsivo e CTAs de agendamento'],
      result: 'Um site institucional que conecta posicionamento de marca, catálogo visual e contato em uma única navegação.',
      lesson: 'A direção visual precisa reforçar a promessa do negócio sem prejudicar a clareza das informações.'
    }
  },
  {
    id: 'suapizza',
    folder: 'pizzaria',
    title: 'SUAPIZZA',
    type: 'Experiência de pedido',
    description: 'Site de pizzaria artesanal com cardápio dinâmico, combos, carrinho e fechamento do pedido pelo WhatsApp.',
    outcome: 'Reduz a distância entre descobrir um produto e montar um pedido completo.',
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    accent: 'orange',
    preview: 'pizza',
    live: '../pizzaria/index.html',
    github: profile.github,
    study: {
      problem: 'O cliente precisa visualizar opções, escolher quantidades e enviar os dados do pedido sem fricção.',
      context: 'O projeto transforma um cardápio em uma pequena experiência de e-commerce, mantendo o WhatsApp como canal de conclusão.',
      decisions: ['Dados de produtos centralizados em configuração', 'Carrinho lateral com controle de quantidade', 'Mensagem de pedido montada automaticamente para o WhatsApp'],
      result: 'Uma jornada de compra completa no frontend, com cardápio, carrinho, dados de entrega e resumo do pedido.',
      lesson: 'Modelar os dados antes da interface torna funcionalidades como carrinho, combos e personalização mais simples de evoluir.'
    }
  },
  {
    id: 'clinica',
    folder: 'clinica',
    title: 'Helena Duarte',
    type: 'Site de serviço',
    description: 'Site acolhedor para psicoterapia de adultos, com áreas de atuação, como funciona, FAQ e contato.',
    outcome: 'Converte uma apresentação profissional em uma jornada informativa, ética e acolhedora.',
    stack: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    accent: 'green',
    preview: 'clinic',
    live: '../clinica/index.html',
    github: profile.github,
    study: {
      problem: 'Serviços de cuidado precisam explicar sua proposta com sensibilidade, clareza e confiança.',
      context: 'A arquitetura de conteúdo foi organizada para responder dúvidas comuns e orientar o visitante até o contato.',
      decisions: ['Tom visual calmo e tipografia editorial', 'FAQ acessível com abertura individual', 'CTAs distribuídos ao longo da jornada'],
      result: 'Uma presença digital responsiva que apresenta o serviço, reduz dúvidas iniciais e facilita o agendamento.',
      lesson: 'Em projetos institucionais, conteúdo e ritmo visual são parte importante da experiência — não apenas decoração.'
    }
  }
];

export const skillGroups = [
  { label: 'Linguagens', icon: '{ }', items: ['JavaScript / TypeScript', 'C#', 'SQL'] },
  { label: 'Frontend', icon: '</>', items: ['React', 'Next.js', 'Vue / Nuxt', 'Tailwind CSS'] },
  { label: 'Backend', icon: '⌘', items: ['.NET 6', 'Node.js / Express', 'PostgreSQL'] },
  { label: 'DevOps', icon: '↗', items: ['Vercel', 'CI/CD', 'GitHub Actions'] }
];

export const experiences = [
  {
    period: 'Atual',
    role: 'Desenvolvedora Júnior',
    company: 'Atuação profissional',
    text: 'Construção e evolução de aplicações com foco em backend .NET e interfaces web modernas.',
    stack: ['C#', '.NET 6', 'SQL', 'React', 'TypeScript']
  },
  {
    period: 'Projetos recentes',
    role: 'Desenvolvimento de interfaces web',
    company: 'Projetos autorais',
    text: 'Criação de experiências responsivas para negócios de saúde, varejo, alimentação e produtos digitais.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Design responsivo']
  }
];
