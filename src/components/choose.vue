<template>
   <div class="mt-[50px] flex flex-col items-center justify-center p-6 xl:p-12">
      <h1
         data-aos="zoom-in"
         class="text-center text-2xl font-[900] text-default xl:text-4xl"
      >
         Why Choose Eulap SMS?
      </h1>
      <div
         class="mt-[3rem] flex flex-wrap items-start justify-center gap-6 xl:mt-[5rem] xl:items-center xl:gap-12"
      >
         <div
            data-aos="fade-right"
            class="c-box-shadow flex w-full flex-col items-center justify-center gap-6 rounded-xl bg-theme p-6 px-10 py-5 xl:w-[550px] xl:flex-row"
         >
            <div class="flex justify-center">
               <img
                  src="/images/integration.png"
                  alt=""
                  class="w-[25%] xl:w-[70%]"
               />
            </div>
            <div class="flex flex-col items-center gap-4 xl:items-start">
               <h1 class="text-center text-2xl font-semibold text-primary">
                  Seamless Integration
               </h1>
               <p class="text-justify text-default">
                  Easily integrate our SMS solution with your existing systems
                  and applications for a hassle-free experience.
               </p>
            </div>
         </div>
         <div
            data-aos="fade-left"
            class="c-box-shadow flex w-full flex-col items-center justify-center gap-6 rounded-xl bg-theme p-6 px-10 py-5 xl:w-[550px] xl:flex-row"
         >
            <div class="flex justify-center">
               <img
                  src="/images/scalable.png"
                  alt=""
                  class="w-[25%] xl:w-[70%]"
               />
            </div>
            <div class="flex flex-col items-center gap-4 xl:items-start">
               <h1 class="text-2xl font-semibold text-primary">Scalability</h1>
               <p class="text-justify text-default">
                  Whether you have a small customer base or millions of
                  recipients, our platform scales to meet your requirements.
               </p>
            </div>
         </div>
         <div
            data-aos="fade-up"
            class="c-box-shadow flex w-full flex-col items-center justify-center gap-6 rounded-xl bg-theme p-6 px-10 py-5 xl:w-[550px] xl:flex-row"
         >
            <div class="flex justify-center">
               <img
                  src="/images/settings.png"
                  alt=""
                  class="w-[25%] xl:w-[70%]"
               />
            </div>
            <div class="flex flex-col items-center gap-4 xl:items-start">
               <h1 class="text-2xl font-semibold text-primary">Support</h1>
               <p class="text-justify text-default">
                  At Eulap, prioritizing customers is our core belief. Our team
                  offers exceptional support, guiding your journey with
                  responsiveness and care.
               </p>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { ref } from 'vue'

export default {
   setup() {
      return {}
   },
   methods: {},
   mounted() {},
}
</script>

<style lang="scss" scoped></style>
