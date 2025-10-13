import { ProjectCard } from "@/component";
import { useChatAppViewModel } from "./ChatAppViewModel";

export const ChatApp = () => {
  const { stack } = useChatAppViewModel();
  return (
    <ProjectCard
      title="SupaChat - Real-Time Chat App with Supabase"
      description="A real-time chat application built with Next.js, TypeScript, and Supabase, leveraging TanStack Query and Jotai for efficient client-side state management. It features real-time messaging and a sleek, responsive UI powered by Mantine UI."
      image={"/default/chat-app.png"}
      techStack={stack}
      liveDemo="https://supa-chat-xi.vercel.app/"
      github="https://github.com/charleslabit/supa-chat/"
      overlayDescription="A real-time chat application built with Next.js, TypeScript, and Supabase, leveraging TanStack Query and Jotai for efficient client-side state management. It features real-time messaging and a sleek, responsive UI powered by Mantine UI."
    />
  );
};
