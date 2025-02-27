<template>
  <div class="min-h-screen flex flex-col">
    <main class="p-2 container mx-auto">
      <!-- แจ้งเตือนถ้าเป็นมือถือ -->
      <div class="block lg:hidden">
        <p class="text-center text-red-500">ไม่รองรับการแสดงผลบนอุปกรณ์นี้</p>
      </div>

      <!-- แสดงเนื้อหาเมื่ออยู่ในจอขนาดใหญ่ -->
      <div class="hidden lg:block">
        <slot />
      </div>
    </main>
    <footer class="uk-text-center uk-text-large uk-visible@m">
      <nav>
        <ul class="uk-subnav uk-subnav-divider uk-flex-center">
          <li :class="{ active: $route.path === '/' }">
            <NuxtLink :to="'/'">HOME</NuxtLink>
          </li>
          <li :class="{ active: $route.path === '/about' }">
            <NuxtLink :to="'/about'">ABOUT</NuxtLink>
          </li>
          <li :class="{ active: $route.path === '/experience' }">
            <NuxtLink :to="'/experience'">EXPERIENCE</NuxtLink>
          </li>
          <li :class="{ active: $route.path === '/contact' }">
            <NuxtLink :to="'/contact'">CONTACT</NuxtLink>
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>
<style scoped>
.active {
  font-weight: bold;
}
</style>
