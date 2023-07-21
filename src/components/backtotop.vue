<template >
    <div class="w-[50px] h-[50px] p-4 rounded-full border border-primary/50 shadow-md fixed right-12 bottom-12 cursor-pointer">
        <img src="/images/arrow-up.png" alt="" class="h-[full] arrow-movement">
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    },
}
</script>

<style scoped>

.arrow-movement{
    transform: scale(1.5);
    animation: arrow-movement 2s ease-in-out infinite;
}

@keyframes arrow-movement {
    0%{
        transform: translateY();
    }
    50%{
        transform: translateY(5px);
    }
    50%{
        transform: translateY(-5px);
    }
}

</style>