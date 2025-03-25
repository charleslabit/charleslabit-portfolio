import ProjectCard from "@/component/ProjectCard";
const stack = [
  "Node.js",
  "Express",
  "MySQL",
  "Axios",
  "Railway",
  "Vercel",
  "Next.js",
  "Typescript",
  "Javascript",
  "Mantine UI",
  "TanStack Query",
  "TablePlus",
];

export const TodoMySQL = () => {
  return (
    <ProjectCard
      title="Todo MySQL - CRUD API with Next.js & MySQL"
      description="A full-stack Todo application built with Next.js, Node.js, and Express, using MySQL as the database. It supports full CRUD functionality, leveraging Axios for API requests and TanStack Query for state management. The app is deployed on Railway and Vercel."
      image={"/default/todo-mysql.png"}
      techStack={stack}
      liveDemo="https://todo-mysql-ochre.vercel.app/"
      github="https://github.com/charleslabit/todo-mysql"
      overlayDescription="A full-stack Todo app featuring CRUD operations, built with Next.js, MySQL, and Express. It uses TanStack Query for state management, Axios for API calls, and is deployed on Railway."
    />
  );
};
