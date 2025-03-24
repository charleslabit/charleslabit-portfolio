import ProjectCard from "@/component/ProjectCard";

const stack = ["Next.js", "TypeScript", "Javscript", "Mantine UI", "Vercel"];

export const DoctorsNote = () => {
  return (
    <ProjectCard
      title="My Doctor's Note Clone - Technical Exam"
      description="A static clone of My Doctor's Note, created for a technical assessment."
      image="/default/my-doctors-note.png"
      techStack={stack}
      liveDemo="https://my-doctors-note-six.vercel.app/"
      github="https://github.com/charleslabit/my-doctors-note"
      referenceSite="https://mydoctorsnote.co"
      overlayDescription="A static clone of My Doctor's Note, created for a technical assessment."
    />
  );
};
