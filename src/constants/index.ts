import { images } from "./images";

export const navLinks = [
  {
    id: 1,
    link: "Inicio"
  },
  {
    id: 2,
    link: "Sobre"
  },
  {
    id: 3,
    link: "Tecnologias"
  },
  {
    id: 4,
    link: "Projetos"
  },
  {
    id: 5,
    link: "Certificados"
  }
];

export const skills = [
  {
    id: 1,
    name: "HTML",
    icon: images.FaHtml5
  },
  {
    id: 2,
    name: "CSS",
    icon: images.FaCss3Alt
  },
  {
    id: 3,
    name: "JAVASCRIPT",
    icon: images.RiJavascriptFill
  },
  {
    id: 4,
    name: "TYPESCRIPT",
    icon: images.BiLogoTypescript
  },
  {
    id: 5,
    name: "TAILWINDCSS",
    icon: images.BiLogoTailwindCss
  },
  {
    id: 6,
    name: "React",
    icon: images.FaReact
  },
  {
    id: 7,
    name: "NEXT JS",
    icon: images.SiNextdotjs
  },
  {
    id: 8,
    name: "JEST",
    icon: images.SiJest
  },
  {
    id: 9,
    name: "GITHUB",
    icon: images.FaGithub
  },
  {
    id: 10,
    name: "GIT",
    icon: images.FaGitAlt
  }
];

export const projectsData = [
  {
    id: 1,
    name: "Movies next",
    description:
      "O Movies next é um portal interativo projetado para facilitar a descoberta de filmes, séries e informações sobre atores. Com uma interface intuitiva e recursos de busca avançados, os usuários podem encontrar facilmente o conteúdo de entretenimento que amam.",
    technologies: [
      images.SiNextdotjs,
      images.BiLogoTailwindCss,
      images.BiLogoTypescript,
      images.SiReactquery,
      images.FaGithub
    ],
    image: images.moviesNext,
    deploy: "https://movies-next-neqeiz.next.genez.io/",
    repository: "https://github.com/rogervalentim/movies-next"
  },
  {
    id: 2,
    name: "Ifood",
    description:
      "O Mks Sistemas é um projeto técnico que demonstra a implementação de um carrinho de compras interativo e moderno. Utilizando as melhores práticas e tecnologias atuais, o site oferece uma experiência de usuário otimizada e um fluxo de compra simplificado.",
    technologies: [
      images.SiNextdotjs,
      images.BiLogoTailwindCss,
      images.BiLogoTypescript,
      images.SiPrisma,
      images.FaGithub
    ],
    image: images.ifood,
    deploy: "https://ifood-fsw.vercel.app/",
    repository: "https://github.com/rogervalentim/ifood-fsw"
  },
  {
    id: 3,
    name: "Woovi challenge",
    description:
      "O aplicativo oferece uma experiência simplificada para compras, com opções flexíveis de pagamento via Pix e parcelamento no cartão de crédito. Desenvolvido com React e integrado com Material-UI (MUI), permite aos usuários escolher entre pagamento imediato via Pix com 3% de desconto ou parcelamento em até 7 vezes no cartão de crédito.",
    technologies: [
      images.FaReact,
      images.BiLogoTypescript,
      images.SiMui,
      images.SiReacthookform,
      images.FaGithub
    ],
    image: images.woovi,
    deploy: "https://woovi-challenge-pied.vercel.app/",
    repository: "https://github.com/rogervalentim/woovi-challenge.git"
  },
  {
    id: 4,
    name: "Auth Portal",
    description:
      "Este projeto consiste em um sistema de autenticação de usuários com três telas principais: Registro, Autenticação e Dashboard. O sistema se comunica com uma API para realizar as operações necessárias de registro, autenticação, exibição de usuários e logout.",
    technologies: [
      images.FaReact,
      images.BiLogoTailwindCss,
      images.BiLogoTypescript,
      images.SiReactquery,
      images.SiReacthookform,
      images.SiZod,
      images.FaGithub
    ],
    image: images.auth,
    deploy: "https://auth-portal-taupe.vercel.app/",
    repository: "https://github.com/rogervalentim/auth-portal"
  },
  {
    id: 5,
    name: "Github Profile",
    description:
      "O desafio Github Profile do Dev Challenges consiste em recriar o design fornecido e integrar com a API do GitHub para buscar e exibir informações detalhadas de usuários do GitHub. O objetivo é replicar a interface com precisão e funcionalidade, mostrando dados como repositórios, seguidores, e outras informações do perfil do usuário.",
    technologies: [
      images.FaReact,
      images.BiLogoTailwindCss,
      images.BiLogoTypescript,
      images.FaGithub
    ],
    image: images.github,
    deploy: "https://github-profile-one-delta.vercel.app/",
    repository: "https://github.com/rogervalentim/github-profile"
  },
  {
    id: 6,
    name: "Mks Sistemas",
    description:
      "O Mks Sistemas é um projeto técnico que demonstra a implementação de um carrinho de compras interativo e moderno. Utilizando as melhores práticas e tecnologias atuais, o site oferece uma experiência de usuário otimizada e um fluxo de compra simplificado.",
    technologies: [
      images.SiNextdotjs,
      images.SiStyledcomponents,
      images.BiLogoTypescript,
      images.SiJest,
      images.FaGithub
    ],
    image: images.mksSistemas,
    deploy: "https://mks-test-sigma.vercel.app/",
    repository: "https://github.com/rogervalentim/mks-test"
  },
  {
    id: 7,
    name: "gym",
    description:
      "Esta é uma landing page simples e moderna para uma academia fictícia chamada Evogym evolutionary fitness. A página foi criada com o objetivo de atrair novos membros, apresentar as facilidades e serviços oferecidos pela academia, e promover um estilo de vida saudável e ativo.",
    technologies: [images.FaReact, images.BiLogoTailwindCss, images.FaGithub],
    image: images.gym,
    deploy: "https://gym-app-mocha.vercel.app/",
    repository: "https://github.com/rogervalentim/gym_app"
  },
  {
    id: 8,
    name: "world ranks",
    description:
      "This web application displays detailed information about countries around the world using data from the REST Countries API. The app is composed of several sections and interactive components that allow users to search, filter, and sort information about countries.",
    technologies: [
      images.FaReact,
      images.BiLogoTypescript,
      images.BiLogoTailwindCss,
      images.FaGithub
    ],
    image: images.world,
    deploy: "https://world-ranks2.netlify.app/",
    repository: "https://github.com/rogervalentim/world-ranks"
  }
];

export const certificatesData = [
  {
    id: 1,
    image: images.certificate1
  },
  {
    id: 2,
    image: images.certificate2
  },
  {
    id: 3,
    image: images.certificate3
  },
  {
    id: 4,
    image: images.certificate4
  },
  {
    id: 5,
    image: images.certificate5
  },
  {
    id: 6,
    image: images.certificate6
  }
];
