import imgProjectGame from "../images/jogo-da-velha-print.jpg";
import moviesBank from "../images/moviedb.jpg";
import todoListJpg from "../images/todo-list.jpg";

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
];
