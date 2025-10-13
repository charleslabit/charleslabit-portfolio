import { ProjectCard } from "@/component/";
import { useCKMartViewModel } from "./CKMartViewModel";

export const CKMart = () => {
  const { stack } = useCKMartViewModel();
  return (
    <ProjectCard
      title="CK Mart - E-commerce Demo"
      description="A full-stack e-commerce demo powered by Next.js, Supabase, and PostgreSQL."
      image={"/default/e-commerce-products.png"}
      techStack={stack}
      liveDemo="https://ecommerce-demo-orpin.vercel.app/"
      overlayDescription="A full-stack e-commerce demo powered by Next.js, Supabase, and PostgreSQL. Currently, product, category and inventory management are implemented, with further enhancements in progress. Stripe.js is integrated for payments. "
    />
  );
};
