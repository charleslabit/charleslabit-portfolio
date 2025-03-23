import ProjectCard from "@/component/ProjectCard";
const stack = [
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Mantine UI",
  "Tanstack Query",
  "REST API",
  "Vercel",
];

export const Nyetflix = () => {
  return (
    <ProjectCard
      title="Nyetflix - TMDb Movie Explorer"
      description="A movie browsing app powered by TMDb API, featuring infinite scrolling and real-time data fetching using TanStack Query."
      image={"/default/nyetflix.png"}
      techStack={stack}
      liveDemo="https://nyetflix.vercel.app/" // Update if deployed URL changed
      github="https://github.com/charleslabit/nyetflix" // Update if repo name changed
      overlayDescription="Browse movies seamlessly with infinite scrolling! 🎬"
    />
  );
};
