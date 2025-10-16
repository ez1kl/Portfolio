import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  motus,
  ransomware,
  javarevolution,
  sosafe,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  microverse,
  esgi,
  iutblagnac,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'A propos',
  },
  {
    id: 'projects',
    title: 'Projets',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Développeur frontend',
    icon: frontend,
  },
  {
    title: 'Développeur backend',
    icon: backend,
  },
  {
    title: 'UI/UX Designer',
    icon: ux,
  },
  {
    title: 'Algorithmie & Réseaux',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Développeur web',
    company_name: 'Sante formapro',
    icon: microverse,
    iconBg: '#333333',
    date: 'Oct 2024 - Actuel',
  },
  {
    title: 'Technicien-vendeur',
    company_name: 'LDLC',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Nov 2023 - Sept 2024',
  },
];

const education = [
  {
    title: 'BUT3 Informatique',
    company_name: 'Toulouse IUT de Blagnac',
    icon: iutblagnac,
    iconBg: '#333333',
    date: '2025 - 2026',
  },
  {
    title: 'Bachelor Informatique',
    company_name: 'ESGI Aix en Provence',
    icon: esgi,
    iconBg: '#333333',
    date: '2023 - 2025',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Motus',
    description: 'Un jeu de lettres inspiré du célèbre jeu Motus, développé en C avec SDL2. Devinez le mot en un nombre limité d\'essais avec des indices visuels.',
    image: motus,
    repo: 'https://github.com/ez1kl/motus-game',
    demo: 'https://ez1kl.github.io/motus-game/',
  },
  {
    id: 'project-2',
    name: 'Java Revolution',
    description: 'Un RPG narratif interactif inspiré du "Livre dont vous êtes le héros". Plongez dans la France révolutionnaire de 1789 avec un système de combat et de sauvegarde.',
    image: javarevolution,
    repo: 'https://github.com/ez1kl/java-revolution',
    demo: 'https://ez1kl.github.io/java-revolution/',
  },
  {
    id: 'project-3',
    name: 'Ransomware',
    description: 'Un projet en assembleur x86 qui simule le fonctionnement d\'un ransomware. Démonstration des techniques de chiffrement et de cybersécurité à des fins éducatives.',
    image: ransomware,
    repo: null,
    demo: null,
  },
  {
    id: 'project-4',
    name: 'SoSafe',
    description: 'Plateforme web de sensibilisation à la cybersécurité. Modules interactifs et scénarios éducatifs pour former les utilisateurs aux bonnes pratiques de sécurité informatique.',
    image: sosafe,
    repo: 'https://github.com/ez1kl/sosafe',
    demo: null,
  },
];

export { services, technologies, experiences, education, projects };
