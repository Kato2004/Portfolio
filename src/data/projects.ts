import imgProjectGame from "../images/jogo-da-velha-print.jpg";
import moviesBank from "../images/moviedb.jpg";
import todoListJpg from "../images/todo-list.jpg";
import HqShopJpg from "../images/marvel-hq-shop.png";
import LinkBasePng from "../images/linkbase-img.png";

export const projects = [
  {
    imgSrc: imgProjectGame,
    projectSrc: "https://jogo-da-velha-six-psi.vercel.app/",
    resume:
      "Projeto simples feito somente com HTML, CSS e Javascript do tão famoso e conhecido jogo da velha",
    tags: ["Javascript", "CSS"],
    title: "Jogo da velha",
  },
  {
    imgSrc: moviesBank,
    projectSrc: "https://movies-bank-git-master-kato2004.vercel.app/",
    resume: "Aplicação que utilizar a API do TMDB para apresentar filmes",
    tags: ["React", "Typescript", "Tailwind"],
    title: "Movies Bank",
  },
  {
    imgSrc: todoListJpg,
    projectSrc: "https://todo-list-react-vert-one.vercel.app",
    resume:
      "To do com prioridade de execução e possibilidade de criar e excluir novas tarefas",
    tags: ["React", "Typescript"],
    title: "To do",
  },
  {
    imgSrc: HqShopJpg,
    projectSrc: "https://marvel-hq-shop-r9jan92bz-kato2004.vercel.app",
    resume:
      "Loja de quadrinhos virtual com visualização de carrinho de compras",
    tags: ["React", "Typescript", "Cypress", "Styled Components"],
    title: "Marvel HQ Store",
  },
  {
    imgSrc: LinkBasePng,
    projectSrc: "https://link-base-b789q8oc5-kato2004.vercel.app/",
    resume:
      "Projeto de um site salvar links com autenticação e possibilidade de adicionar, editar e excluir links",
    tags: ["Next", "Typescript", "Tailwind", "Cypress"],
    title: "LinkBase",
  },
];
