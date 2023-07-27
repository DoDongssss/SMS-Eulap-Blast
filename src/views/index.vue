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
                  ref="tagline"
                  class="text-center text-[1.5rem] font-semibold text-default xl:text-start xl:text-[2.5vw]"
               >
                  Transform your business communication and soar to new heights
                  of success.
               </h1>
            </div>
            <button
               class="mt-5 flex cursor-pointer items-center rounded-md border border-primary px-4 py-[.60rem] text-[1rem] font-semibold text-primary transition duration-200 ease-in-out hover:bg-primary hover:bg-primary/80 xl:hidden"
            >
               <a href="https://smsportal.eulap.com/login">Get Started</a>
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
                     ref="cardOne"
                     class="left-[80px] z-10 flex skew-x-[-15deg] rounded-md bg-primary/95 px-4 py-2 text-[8px] text-white xl:absolute xl:text-[1vw]"
                     >Quick Send
                  </span>
                  <span
                     ref="cardTwo"
                     class="left-[80px] z-10 skew-x-[-15deg] rounded-md bg-primary/95 px-4 py-2 text-[8px] text-white xl:absolute xl:mt-[80px] xl:text-[1vw]"
                     >Send Using File</span
                  >
                  <span
                     ref="cardThree"
                     class="left-[80px] z-10 skew-x-[-15deg] rounded-md bg-primary/95 px-4 py-2 text-[8px] text-white shadow-lg xl:absolute xl:mt-[160px] xl:text-[1vw]"
                     >Campaign Builder</span
                  >
               </div>
               <img
                  ref="bgIndex"
                  src="/images/indexVector.png"
                  alt=""
                  class="w-full"
               />
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
      <!-- <chatpluginView /> -->
   </div>
</template>

<script>
import headerView from '../../src/components/header.vue'
import aboutView from '../../src/components/about.vue'
import servicesView from '../../src/components/services.vue'
import chooseView from '../../src/components/choose.vue'
import FAQsView from '../../src/components/FAQs.vue'
import worksView from '../../src/components/works.vue'
import footerView from '../../src/components/footer.vue'
import backtotopView from '../../src/components/backtotop.vue'
import { gsap } from 'gsap'
import { ref } from 'vue'
// import chatpluginView from '../../src/components/chatplugin.vue'

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
      // chatpluginView,
   },
   setup() {
      const tagline = ref(null)
      const bgIndex = ref(null)
      const cardOne = ref(null)
      const cardTwo = ref(null)
      const cardThree = ref(null)
      const backtotop = () => {
         window.scrollTo(0, 0)
      }

      return {
         backtotop,
         tagline,
         bgIndex,
         cardOne,
         cardTwo,
         cardThree,
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
               document.getElementById('scrolltotop').classList.remove('hidden')
            } else {
               document.getElementById('scrolltotop').classList.add('hidden')
            }
         }
      },

      // animation
      taglineAniamtion() {
         gsap.from(this.tagline, {
            delay: 0.5,
            duration: 1,
            x: '-100',
            autoAlpha: 0,
            ease: 'back.out(1.5)',
         })
      },
      vectorAnimation() {
         const trans = gsap.timeline({ delay: 0.5, paused: true })
         trans.from(this.bgIndex, { x: '+200', autoAlpha: 0, duration: 0.5 })
         trans.from(this.cardOne, { x: '-200', autoAlpha: 0, duration: 0.25 })
         trans.from(this.cardTwo, { x: '-200', autoAlpha: 0, duration: 0.25 })
         trans.from(this.cardThree, { x: '-200', autoAlpha: 0, duration: 0.25 })
         trans.play()
      },
   },
   mounted() {
      this.scrollTop()

      // animation
      //for smooth scroll effect

      this.taglineAniamtion()
      this.vectorAnimation()
   },
}
</script>

<style scoped></style>
