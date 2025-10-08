import ProjectCard from "@/component/ProjectCard";
const stack = [
  "Next.js + App Router",
  "TypeScript",
  "JavaScript",
  "Mantine UI",
  "Tanstack Query",
  "Zustand",
  "Nuqs",
  "Playwright",
  "Vercel",
  "Stripe.js",
  "Supabase",
  "PostgreSQL",
];

export const CKMart = () => {
  return (
    <ProjectCard
      title="CK Mart - E-commerce Demo"
      description="A full-stack e-commerce demo powered by Next.js, Supabase, and PostgreSQL. Currently, product, category and inventory management are implemented, with further enhancements in progress. Stripe.js is integrated for payments."
      image={"/default/e-commerce-products.png"}
      techStack={stack}
      liveDemo="https://ecommerce-demo-orpin.vercel.app/"
      overlayDescription="A full-stack e-commerce demo powered by Next.js, Supabase, and PostgreSQL. Currently, product, category and inventory management are implemented, with further enhancements in progress. Stripe.js is integrated for payments. "
    />
  );
};
