import { ProjectCard } from "@/component/";
import { useDoctorsNoteViewModel } from "./DoctorsNoteViewModel";

export const DoctorsNote = () => {
  const { stack } = useDoctorsNoteViewModel();
  return (
    <ProjectCard
      title="My Doctor's Note Clone - Assessment Exam"
      description="A static clone of My Doctor's Note, created for a assessment."
      image="/default/my-doctors-note.png"
      techStack={stack}
      liveDemo="https://my-doctors-note-six.vercel.app/"
      github="https://github.com/charleslabit/my-doctors-note"
      referenceSite="https://mydoctorsnote.co"
      overlayDescription="A static clone of My Doctor's Note, created for a assessment."
    />
  );
};
