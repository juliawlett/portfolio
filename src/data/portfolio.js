export const profile = {
  name: 'Júlia Letícia',
  role: 'Desenvolvedora de Software Júnior · Full Stack',
  email: 'dev.julialeticia@gmail.com',
  location: 'Cuiabá · MT',
  company: 'AgriX',
  github: 'https://github.com/juliawlett',
  linkedin: 'https://www.linkedin.com/in/juliawlett/'
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
    live: '../projetos/venda/index.html',
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
    live: '../projetos/otica/index.html',
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
    live: '../projetos/pizzaria/index.html',
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
    live: '../projetos/clinica/index.html',
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
  { label: 'Frontend', icon: '</>', items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  { label: 'Backend', icon: '⌘', items: ['C#', '.NET 6', 'Entity Framework', 'Node.js', 'Express'] },
  { label: 'Dados & APIs', icon: '{ }', items: ['SQL', 'MySQL', 'PostgreSQL', 'JWT', 'bcrypt', 'CRUDs'] },
  { label: 'Ferramentas', icon: '↗', items: ['Git', 'GitLab', 'Postman', 'Figma', 'Visual Studio', 'VS Code'] },
  { label: 'Em aprofundamento', icon: '＋', items: ['Supabase', 'Docker', 'Arquitetura', 'Deploy em VPS', 'Vercel', 'CI/CD'] }
];

export const experiences = [
  {
    period: '2022 – 2023',
    role: 'Técnico em Análise e Desenvolvimento de Sistemas',
    company: 'FATEC · Ensino médio no SESI',
    text: 'Primeira formação em tecnologia, iniciada durante o ensino médio, com prática de desenvolvimento web e fundamentos para criar aplicações completas.',
    stack: ['React', 'Node.js', 'Express', 'JWT', 'bcrypt', 'GitHub', 'MySQL']
  },
  {
    period: '2024 – 2026',
    role: 'Tecnóloga em Análise e Desenvolvimento de Sistemas',
    company: 'UNIC Beira Rio · Cuiabá',
    text: 'Formação superior que consolidou a base conceitual para transformar necessidades em soluções: requisitos, lógica de programação, mobile first e fundamentos de engenharia de software.',
    stack: ['Requisitos', 'Lógica de programação', 'Mobile first', 'Engenharia de software']
  },
  {
    period: '2024 – 2025',
    role: 'Estagiária de Desenvolvimento',
    company: 'Weeke Manager',
    text: 'Primeira experiência profissional em desenvolvimento, com atuação em prototipação e construção de interfaces. Após um ano formal como estagiária, passei a assumir atividades de nível júnior antes da mudança de cargo.',
    stack: ['Prototipação', 'Figma', 'PHP', 'JavaScript', 'jQuery']
  },
  {
    period: '2025 – atual',
    role: 'Desenvolvedora de Software Júnior',
    company: 'Weeke Manager · 2025 – 06/2026 → AgriX · 06/2026 – atual',
    text: 'Na Weeke Manager, evoluí de atividades de estágio para a atuação como júnior em soluções web. Desde junho de 2026, trabalho na AgriX com um sistema corporativo para o agronegócio, conectando frontend, backend, dados e inteligência artificial.',
    stack: ['PHP', 'JavaScript', 'C#', '.NET 6', 'TypeScript', 'React', 'SQL', 'Entity Framework', 'Agentes de IA', 'GitLab']
  },
  {
    period: 'Previsão · 2027',
    role: 'Pós-graduação em Engenharia de Software',
    company: 'Próxima etapa acadêmica',
    text: 'Planejamento de continuidade dos estudos com foco em arquitetura, qualidade e evolução de sistemas.',
    stack: ['Arquitetura', 'Qualidade', 'Boas práticas']
  }
];
