import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://charleslabit-portfolio.vercel.app/",
      lastModified: new Date(),
    },
  ];
}
