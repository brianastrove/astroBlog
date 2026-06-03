import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://astroveadvisory.com",
    title: "Brian Astrove",
    description: "Asrtove Advisory",
    author: "Brian Astrove",
    ogImage: "default-og.jpg",
    lang: "en",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
      url: "https://github.com/satnaing/astro-paper/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "linkedin", url: "https://www.linkedin.com/in/bastrove/" },
    /**
    { name: "github", url: "https://github.com/satnaing/astro-paper" },
    { name: "x", url: "https://x.com/username" },
    { name: "mail", url: "mailto:yourmail@gmail.com" },
      */
  ],
});