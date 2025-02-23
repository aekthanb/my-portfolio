<template>
  <div
    ref="scrollContainer"
    class="border-1 h-[90vh] overflow-auto custom-scrollbar bg-black uk-light pb-24 relative"
    uk-scrollspy="cls: uk-animation-fade; target: .fade-item; delay: 300; repeat: true"
  >
    <div class="w-full flex justify-center items-center mt-12 fade-item">
      <p class="text-center border-1 w-96 h-18 text-6xl font-bold bg-black">EXPERIENCE</p>
    </div>
    <div
      class="relative w-1.5 bg-white h-[200vh] mx-auto"
      uk-scrollspy="cls: uk-animation-slide-bottom; repeat: true"
    >
      <!-- เส้น timeline ที่จะเปลี่ยนสี -->
      <div
        id="timeline"
        class="absolute top-0 left-0 w-full bg-black border-1 border-white"
        :style="{
          height: `${progress}%`,
        }"
      />
      <!-- วงกลมที่ขยับตาม progress -->
      <div
        v-for="(circle, index) in circles"
        :key="index"
        :class="{ 'bg-black': progress >= circle, 'bg-white': progress < circle }"
        class="absolute left-[-8px] w-5 h-5 border-2 border-white rounded-full transition-all duration-200 ease-in-out"
        :style="{ top: `${circle}%` }"
      />
      <!-- กล่องข้อความที่แสดงเมื่อถึงวงกลม -->
      <div
        v-for="(circle, index) in circles"
        :key="index"
        v-show="progress >= circle"
        :class="index % 2 === 0 ? 'left-[20px] text-left' : 'right-[20px] text-right'"
        class="w-140 2xl:w-170 absolute p-2 shadow transition-all duration-200 ease-in-out"
        :style="{ top: `${circle}%`, transform: 'translateY(-50%)' }"
        uk-scrollspy="cls: uk-animation-fade; repeat: true"
      >
        <h4>{{ dateMessage[index] }}</h4>
        <h6>{{ headerMessage[index] }}</h6>
        <p>{{ messages[index] }}</p>
        <div
          class="flex gap-2 flex-wrap 2xl:flex-nowrap"
          :class="index % 2 === 0 ? 'justify-start' : 'flex-row-reverse'"
        >
          <div
            v-for="tool in tools[index]"
            :key="tool"
            class="uk-button uk-button-default text-sm"
          >
            {{ tool }}
          </div>
        </div>
      </div>
      <div
        v-for="(circle, index) in circles"
        :key="index"
        v-show="progress >= circle"
        :class="index % 2 !== 0 ? 'left-[20px]' : 'right-[20px]'"
        class="absolute p-2 text-black rounded shadow transition-all duration-200 ease-in-out w-130 h-70 overflow-hidden"
        :style="{ top: `${circle}%`, transform: 'translateY(-50%)' }"
        uk-scrollspy="cls: uk-animation-fade; repeat: true"
      >
        <img :src="img[index]" alt="img" class="w-130 h-70" />
      </div>
    </div>
    <!-- <div class="fixed bottom-22 right-60 flex justify-center">
      <div class="bg-black p-2">
        <img src="public/arrow.gif" alt="img" class="w-20 h-20" />
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const progress = ref(0);
const scrollContainer = ref(null);

const circles = ref([35, 75]); // ตำแหน่งของวงกลมใน %
const dateMessage = ref(["June 2023 - April 2024", "Sep 2024 - Feb 2025"]); // วันที่สำหรับแต่ละวงกลม
const headerMessage = ref(["Programmer · 3BB PUBLIC COMPANY", "Developer · SCGJWD"]); // ข้อความสำหรับแต่ละวงกลม
const messages = ref([
  "Develop and design the Alarm System, oversee Web Engineering, and query the SQL Server database based on the manager's requirements, including writing scripts to control the router's operations.",
  "Develop and design the HR system and TimeSheet reporting system, as fix various bugs in Web Dynamic One.",
]); // ข้อความสำหรับแต่ละวงกลม
const tools = ref([
  ["PHP", "JavaScript", "Bootstrap", "MySql"],
  ["NUXT", "NEST", "PostgreSQL", "Tailwind css", "Ant Design"],
]); // เครื่องมือสำหรับแต่ละวงกลม
// const img = ref(["public/experience-1.gif", "public/experience-2.gif"]); // รูปภาพสำหรับแต่ละวงกลม
const img = ref(["/experience-1.gif", "/experience-2.gif"]);

const updateProgress = () => {
  const scrollTop = scrollContainer.value.scrollTop; // ระยะที่เลื่อนลงมา
  const scrollHeight = scrollContainer.value.scrollHeight; // ความสูงของเนื้อหาทั้งหมด
  const clientHeight = scrollContainer.value.clientHeight; // ความสูงของ div ที่มองเห็นได้

  progress.value = (scrollTop / (scrollHeight - clientHeight)) * 100; // คำนวณ % การเลื่อน
};

onMounted(() => {
  scrollContainer.value.addEventListener("scroll", updateProgress);
  updateProgress(); // เรียกใช้งานทันทีเมื่อโหลดหน้า
});

onUnmounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener("scroll", updateProgress);
  }
});
</script>

<style scoped></style>
