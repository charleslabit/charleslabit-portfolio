import ProjectCard from "@/component/ProjectCard";
const stack = [
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Mantine UI",
  "Tanstack Query",
  "Zustand",
  "Nuqs",
  "Next.js App Router(Mock REST API)",
  "Playwright",
  "Vercel",
];

export const CKMart = () => {
  return (
    <ProjectCard
      title="CK Mart - E-commerce Demo"
      description="A static e-commerce demo with client-side state management using TanStack Query and Zustand."
      image={"/default/e-commerce-products.png"}
      techStack={stack}
      liveDemo="https://ecommerce-demo-orpin.vercel.app/"
      overlayDescription="A static e-commerce demo with client-side state management using TanStack Query and Zustand."
    />
  );
};
