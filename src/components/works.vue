<template>
   <div
      class="m-h-screen flex w-full flex-col items-center justify-center px-6 py-12 text-default xl:p-12"
   >
      <h1 class="text-3xl font-[900] text-default xl:text-4xl">
         How it works?
      </h1>
      <div
         class="mt-[3rem] flex flex-col items-center justify-center gap-12 xl:mt-[6rem]"
      >
         <div class="flex flex-wrap items-center justify-center gap-12">
            <div class="flex w-[350px] flex-col items-center justify-start">
               <img
                  src="/images/signup.png"
                  alt=""
                  class="w-[60px] md:w-[100px] xl:w-[120px]"
               />
               <h5 class="mt-5 text-2xl text-default">
                  <span class="font-semibold text-primary">Sign Up</span>
               </h5>
               <p class="mt-5 text-center">
                  Create an account with Eulap SMS Blast and get started.
               </p>
            </div>
            <div class="flex w-[350px] flex-col items-center justify-start">
               <img
                  src="/images/network.png"
                  alt=""
                  class="w-[60px] md:w-[100px] xl:w-[120px]"
               />
               <h5 class="mt-5 text-2xl text-default">
                  <span class="font-semibold text-primary"
                     >Import Contacts</span
                  >
               </h5>
               <p class="mt-5 text-center">
                  customer contact list or segment your audience for targeted
                  campaigns.
               </p>
            </div>
            <div class="flex w-[350px] flex-col items-center justify-start">
               <img
                  src="/images/mail.png"
                  alt=""
                  class="w-[60px] md:w-[100px] xl:w-[120px]"
               />
               <h5 class="mt-5 text-2xl text-default">
                  <span class="font-semibold text-primary"
                     >Customize Messages</span
                  >
               </h5>
               <p class="mt-5 text-center">
                  Craft Upload your personalized SMS messages with your brand
                  name or company identity.
               </p>
            </div>
         </div>
         <div class="flex flex-wrap items-center justify-center gap-12">
            <div class="flex w-[350px] flex-col items-center justify-start">
               <img
                  src="/images/automation.png"
                  alt=""
                  class="w-[60px] md:w-[100px] xl:w-[120px]"
               />
               <h5 class="mt-5 text-2xl text-default">
                  <span class="font-semibold text-primary"
                     >Schedule or Automate</span
                  >
               </h5>
               <p class="mt-5 text-center">
                  Plan your campaigns in advance and set the optimal delivery
                  time for maximum impact.
               </p>
            </div>
            <div class="flex w-[350px] flex-col items-center justify-start">
               <img
                  src="/images/launch.png"
                  alt=""
                  class="w-[60px] md:w-[100px] xl:w-[120px]"
               />
               <h5 class="mt-5 text-2xl text-default">
                  <span class="font-semibold text-primary">Blast Away</span>
               </h5>
               <p class="mt-5 text-center">
                  Launch your SMS blast and watch your messages reach and engage
                  your audience instantly.
               </p>
            </div>
            <div class="flex w-[350px] flex-col items-center justify-start">
               <img
                  src="/images/optimization.png"
                  alt=""
                  class="w-[60px] md:w-[100px] xl:w-[120px]"
               />
               <h5 class="mt-5 text-2xl text-default">
                  <span class="font-semibold text-primary"
                     >Analyze and Optimize</span
                  >
               </h5>
               <p class="mt-5 text-center">
                  Track campaign performance through analytics, and use insights
                  to refine future strategies.
               </p>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   setup() {
      return {};
   },
};
</script>

<style scoped>
.line-top {
   width: 200px;
   height: 100px;
   z-index: -1;
   background: transparent;
   border: none;
   border-top: dashed 2px orange;
   padding: 40px 40px;
   border-radius: 50%;
   margin: 20px -50px 0;
}
.line-bottom {
   width: 200px;
   height: 100px;
   z-index: -1;
   background: transparent;
   border: none;
   border-bottom: dashed 2px orange;
   padding: 40px 40px;
   border-radius: 50%;
   margin: 20px -50px 0;
}
</style>
