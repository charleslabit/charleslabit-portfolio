import { ProjectCard } from "@/component/";
import { useNyetflixViewModel } from "./NyetflixViewModel";

export const Nyetflix = () => {
  const { stack } = useNyetflixViewModel();
  return (
    <ProjectCard
      title="Nyetflix - TMDb Movie Explorer"
      description="A movie browsing app powered by TMDb API, featuring infinite scrolling and real-time data fetching using TanStack Query."
      image={"/default/nyetflix.png"}
      techStack={stack}
      liveDemo="https://nyetflix.vercel.app/" // Update if deployed URL changed
      github="https://github.com/charleslabit/nyetflix" // Update if repo name changed
      overlayDescription="A movie browsing app powered by TMDb API, featuring infinite scrolling and real-time data fetching using TanStack Query."
    />
  );
};
