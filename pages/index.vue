<template>
  <div class="min-h-[90vh] flex flex-col bg-black uk-light">
    <div class="flex-1 flex flex-col">
      <div class="flex-grow-[8] rounded-2xl flex">
        <div class="w-1/2">
          <p class="ps-12 pt-8 text-xl font-bold">AEKTHANA BOONSAWAI</p>
        </div>
        <div class="w-1/2 flex flex-col justify-center items-center uk-animation-fade">
          <p class="text-7xl leading-20 typing-effect">
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 animate-rainbow"
            >
              " Welcome
            </span>
            to my
            <br />
            world! <br /> Explore my <br />
            portfolio.
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-yellow-500 to-red-500 animate-rainbow"
              >"</span
            >
          </p>
          <button  @click="openPdfInNewTab" class="uk-button uk-button-default" >Resume</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openPdfInNewTab() {
      window.open('/AEKTHANA BOONSAWAI.pdf', '_blank')
    },
  },
}
</script>

<style>
/* @keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

.typing-effect {
  overflow: hidden;
  white-space: nowrap;
  border-right: 0.15em solid orange;
  animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
} */
</style>
