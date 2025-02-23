<template>
  <div class="h-[90vh] flex flex-col bg-black uk-light overflow-auto">
    <div class="flex-1 flex flex-col">
      <div class="flex-grow-[8] rounded-2xl">
        <div class="w-full h-full p-2">
          <div
            class="w-full ps-12 pt-8 p-2 flex justify-center items-center mt-16"
            uk-scrollspy="cls: uk-animation-fade; target: .fade-item; delay: 100; repeat: true"
          >
            <div class="p-2 fade-item">
              <p class="w-96 h-18 text-6xl font-bold">ABOUT</p>
              <p class="w-160 text-xl">
                Hello, my name is Aekthana Boonsawai. I graduated from Rajamangala
                University of Technology Isan and currently reside in Bangkok (Hua Mak,
                Bang Kapi District).
                <br />
                I have 1 year and 5 months of experience working as a programmer, with
                expertise in PHP (pure PHP), Nuxt.js 2, and Nest.js. I am also proficient
                in UI development using Ant Design, Tailwind CSS, and Bootstrap.
                <br />
                I am committed to continuous learning and self-improvement and am eager to
                apply my knowledge and skills to contribute to high-quality, innovative
                projects in an organization that values innovation.
              </p>
            </div>
            <div class="ms-16">
              <img src="/public/hero.gif" alt="hero" />
            </div>
          </div>
          <div
            class="p-2 w-full border-t-6 border-gray-900 flex justify-center items-center mt-12 flex-col"
            uk-scrollspy="cls: uk-animation-fade; target: .fade-item; delay: 200; repeat: true"
          >
            <p class="text-center w-96 h-18 text-6xl font-bold pt-2 fade-item">TOOL!NG</p>
            <div
              class="grid grid-cols-5 gap-2 w-[85%] p-4 rounded-xl bg-gray-900 fade-item"
            >
              <div class="flex justify-around items-center h-12 bg-gray-700 fade-item">
                <img src="/public/nuxt_icon.ico" alt="nuxt Icon" class="w-10 h-10" />
                <p class="text-xl">NUXT</p>
              </div>
              <div class="flex justify-around items-center h-12 bg-gray-700 fade-item">
                <img src="/public/nest_icon.ico" alt="nest Icon" class="w-10 h-10" />
                <p class="text-xl">NEST</p>
              </div>
              <div class="flex justify-around items-center h-12 bg-gray-700 fade-item">
                <img src="/public/php_icon.ico" alt="php Icon" class="w-10 h-10" />
                <p class="text-xl">PHP</p>
              </div>
              <div class="flex justify-around items-center h-12 bg-gray-700 fade-item">
                <img src="/public/ant_design_icon.ico" alt="ant Icon" class="w-10 h-10" />
                <p class="text-xl">ANT</p>
              </div>
              <div class="flex justify-around items-center h-12 bg-gray-700 fade-item">
                <img
                  src="/public/tailwind_icon.ico"
                  alt="tailwind Icon"
                  class="w-10 h-10"
                />
                <p class="text-xl">TAILWIND</p>
              </div>
              <div class="flex justify-around items-center h-12 bg-gray-700 fade-item">
                <img
                  src="/public/bootstrap_icon.ico"
                  alt="bootstrap Icon"
                  class="w-10 h-10"
                />
                <p class="text-xl">BOOTSTRAP</p>
              </div>
              <div class="flex justify-around items-center h-12 bg-gray-700 fade-item">
                <img src="/public/sql_icon.ico" alt="sql Icon" class="w-10 h-10" />
                <p class="text-xl">SQL</p>
              </div>
              <div class="flex justify-around items-center h-12 bg-gray-700 fade-item">
                <img src="/public/git_icon.ico" alt="git Icon" class="w-10 h-10" />
                <p class="text-xl">GIT</p>
              </div>
              <div class="flex justify-around items-center h-12 bg-gray-700 fade-item">
                <img src="/public/linux_icon.ico" alt="linux Icon" class="w-10 h-10" />
                <p class="text-xl">LINUX</p>
              </div>
              <div class="flex justify-around items-center h-12 bg-gray-700 fade-item">
                <img
                  src="/public/postman_icon.ico"
                  alt="postman Icon"
                  class="w-10 h-10"
                />
                <p class="text-xl">POSTMAN</p>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="w-full h-70 border-1 border-b-amber-500"></div> -->
      </div>
    </div>
  </div>
</template>

<style></style>
