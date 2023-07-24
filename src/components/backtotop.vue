<template>
   <div
      class="fixed bottom-12 right-12 h-[50px] w-[50px] cursor-pointer rounded-full border border-primary/50 p-4 shadow-md"
   >
      <img
         src="/images/arrow-up.png"
         alt=""
         class="arrow h-[full] animate-bounce"
      />
   </div>
</template>

<script>


export default {
   setup() {
      return {
      }
   },
}
</script>

<style scoped>
.arrow {
   scale: 1.7;
}
</style>
