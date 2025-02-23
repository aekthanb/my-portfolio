import NProgress from "nprogress";
import { useRouter } from "vue-router";

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter();

  router.beforeEach(() => {
    NProgress.start(); // เริ่ม Progress Bar
  });

  router.afterEach(() => {
    NProgress.done(); // จบ Progress Bar
  });
});
