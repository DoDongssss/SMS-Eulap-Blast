<template>
   <div
      class="flex w-full flex-col items-center p-6 xl:h-screen xl:flex-row"
      id="about"
   >
      <div class="flex h-full w-full items-center justify-center xl:w-[60%]">
         <div
            data-aos="fade-right"
            class="flex h-full w-full items-center justify-center xl:w-[70vw]"
         >
            <img src="/images/Vector2.png" alt="" class="w-full" />
         </div>
      </div>
      <div
         class="flex w-full flex-col items-center justify-center sm:w-[90%] xl:w-[40%] xl:px-12"
      >
         <h2
            data-aos="zoom-in"
            class="text-center text-3xl font-[900] text-primary"
         >
            About Eualp SMS
         </h2>
         <p
            data-aos="zoom-in-up"
            class="mt-8 text-justify text-[17px] leading-loose text-default"
         >
            Introducing Eulap SMS - a revolutionary communication solution
            revolutionizing businesses' marketing endeavors. Its user-friendly
            interface and advanced features make customer engagement effortless,
            taking marketing efforts to unprecedented levels. By enabling
            personalized messages with brand identity, businesses can easily
            reach and engage their audience, all starting with a simple account
            signup process.
         </p>
         <div class="mt-6 flex w-full justify-center xl:justify-end">
            <button
               data-aos="fade-right"
               class="flex cursor-pointer items-center rounded-md bg-primary/80 px-4 py-[.60rem] text-[1rem] text-white transition duration-200 ease-in-out hover:bg-primary"
            >
               Learn More
            </button>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   setup() {
      return {}
   },
}
</script>

<style lang="scss" scoped></style>
