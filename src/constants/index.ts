import { images } from "./images"

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
    }
]

export const skills = [
    {
        id: 1,
        name: "HTML",
        icon:  images.FaHtml5,
    },
    {
        id: 2,
        name: "CSS",
        icon:  images.FaCss3Alt,
    },
    {
        id: 3,
        name: "JAVASCRIPT",
        icon:  images.RiJavascriptFill,
    },
    {
        id: 4,
        name: "TYPESCRIPT",
        icon:  images.BiLogoTypescript,
    },
    {
        id: 5,
        name: "TAILWINDCSS",
        icon:  images.BiLogoTailwindCss,
    },
    {
        id: 6,
        name: "React",
        icon:  images.FaReact,
    },
    {
        id: 7,
        name: "NEXT JS",
        icon:  images.SiNextdotjs,
    },
    {
        id: 8,
        name: "JEST",
        icon:  images.SiJest,
    },
    {
        id: 9,
        name: "GITHUB",
        icon:  images.FaGithub,
    },
    {
        id: 10,
        name: "GIT",
        icon:  images.FaGitAlt,
    },
]

export const projectsaData = [
    {
        id: 1,
        name: "Roger cine",
        description: "Esse site foi feito com o intuito de os usuários consigam achar filmes, séries e atores, facilmente",
        technologies: [images.FaReact, images.BiLogoTailwindCss, images.BiLogoTypescript, images.FaGithub],
        image: images.rogerCine,
        deploy: "https://roger-cines.netlify.app/",
        repository: "https://github.com/rogervalentim/movies",
    }
]