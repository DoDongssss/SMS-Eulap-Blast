<template>
   <div class="relative min-h-screen">
      <headerView />
      <div
         class="flex h-[calc(100vh-80px)] flex-col items-center justify-center px-6 xl:mt-0 xl:flex-row xl:px-12"
      >
         <div
            class="flex w-full flex-col items-center justify-center xl:w-[50%]"
         >
            <div class="w-full md:w-[75%]">
               <h1
                  class="text-center text-[1.5rem] font-semibold text-default xl:text-start xl:text-[2.5vw]"
               >
                  Transform your business communication and soar to new heights
                  of success.
               </h1>
            </div>
            <button
               class="mt-5 flex cursor-pointer items-center rounded-md border border-primary px-4 py-[.60rem] text-[1rem] font-semibold text-primary transition duration-200 ease-in-out hover:bg-primary hover:bg-primary/80 xl:hidden"
            >
               <a href="sms.eulap.com">Get Started</a> 
            </button>
         </div>
         <div class="center w-full xl:w-[50%]">
            <div
               class="relative flex w-full flex-col-reverse items-center justify-center xl:w-[50vw] xl:flex-row"
            >
               <div
                  class="flex w-full items-center justify-center gap-2 xl:mt-12"
               >
                  <span
                     class="left-[80px] flex skew-x-[-15deg] rounded-md bg-primary/95 px-4 py-2 text-[8px] text-white xl:absolute xl:text-[1vw]"
                     >Quick Send
                  </span>
                  <span
                     class="left-[80px] skew-x-[-15deg] rounded-md bg-primary/95 px-4 py-2 text-[8px] text-white xl:absolute xl:mt-[80px] xl:text-[1vw]"
                     >Send Using File</span
                  >
                  <span
                     class="left-[80px] skew-x-[-15deg] rounded-md bg-primary/95 px-4 py-2 text-[8px] text-white shadow-lg xl:absolute xl:mt-[160px] xl:text-[1vw]"
                     >Campaign Builder</span
                  >
               </div>
               <img src="/images/indexVector.png" alt="" class="w-full" />
            </div>
         </div>
      </div>
      <chooseView />
      <servicesView />
      <aboutView />
      <worksView />
      <FAQsView />
      <footerView />
      <backtotopView id="scrolltotop" class="hidden" @click="backtotop" />
   </div>
</template>

<script>
import headerView from "../../src/components/header.vue"
import aboutView from "../../src/components/about.vue"
import servicesView from "../../src/components/services.vue"
import chooseView from "../../src/components/choose.vue"
import FAQsView from "../../src/components/FAQs.vue"
import worksView from "../../src/components/works.vue"
import footerView from "../../src/components/footer.vue"
import backtotopView from "../../src/components/backtotop.vue"
import { ref } from "vue"
export default {
   components: {
      headerView,
      aboutView,
      footerView,
      servicesView,
      chooseView,
      worksView,
      FAQsView,
      backtotopView,
   },
   setup() {
      const backtotop = () => {
         window.scrollTo(0, 0)
      }

      return {
         backtotop,
      }
   },
   data() {
      return {}
   },
   methods: {
      scrollTop() {
         window.onscroll = function (e) {
            var scroll = this.scrollY

            if (scroll > 500) {
               document.getElementById("scrolltotop").classList.remove("hidden")
            } else {
               document.getElementById("scrolltotop").classList.add("hidden")
            }
         }
      },
   },
   mounted() {
      this.scrollTop()
   },
}
</script>

<style scoped></style>
