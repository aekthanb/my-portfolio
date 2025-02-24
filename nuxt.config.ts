import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-02-23",
  target: "static",
  router: {
    base: "/my-portfolio/",
  },
  devtools: { enabled: false },
  css: [
    "~/assets/css/main.css",
    "uikit/dist/css/uikit.min.css",
    "nprogress/nprogress.css",
    "~/assets/css/nprogress.css",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      link: [{ rel: "icon", href: "/tailwind_icon.ico" }],
    },
  },
});
