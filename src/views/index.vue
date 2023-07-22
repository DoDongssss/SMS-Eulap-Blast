<template>
    <div class="min-h-screen relative">
        <headerView/>
        <div class="flex items-center justify-center px-6 xl:px-12 h-[calc(100vh-80px)] flex-col xl:flex-row xl:mt-0">
            <div class="flex items-center justify-center flex-col w-full xl:w-[50%]">
                <div class="w-full xl:w-[75%]">
                    <h1 class="font-semibold text-[1.5rem] xl:text-[2.5vw] text-default text-center xl:text-start ">Transform your business communication and soar to new heights of success.</h1>
                </div>
            </div>
            <div class="center w-full xl:w-[50%]">
                <div class="w-full xl:w-[50vw] flex flex-col xl:flex-row items-center justify-center relative">
                    <div class="w-full flex gap-2 items-center justify-center mt-6">
                        <span class="xl:absolute px-4 py-2 bg-primary/95 rounded-md text-white left-[80px] skew-x-[-15deg] flex text-[8px] xl:text-[1vw]">Quick Send </span>
                        <span class="xl:absolute px-4 py-2 bg-primary/95 rounded-md text-white left-[80px] skew-x-[-15deg] text-[8px] xl:text-[1vw] xl:mt-12">Send Using File</span>
                        <span class="xl:absolute px-4 py-2 bg-primary/95 rounded-md text-white left-[80px] skew-x-[-15deg] shadow-lg text-[8px] xl:text-[1vw] xl:mt-[95px]">Campaign Builder</span>
                    </div>
                    <img src="/images/indexVector.png" alt="" class="w-full">
                </div>
            </div>  
        </div>
        <chooseView/>
        <servicesView/>
        <aboutView/>
        <worksView/>
        <FAQsView />
        <footerView/>
        <backtotopView v-if="scrolltoTop"/>
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
import { ref } from 'vue'
export default {
    components: {
        headerView,
        aboutView,
        footerView,
        servicesView,
        chooseView,
        worksView,
        FAQsView,
        backtotopView
    },
    setup () {
        const scrolltoTop = ref(false)

        return {
            scrolltoTop
        }
    },
    mounted (){
        window.onscroll = function (e)
        {
            var scroll = this.scrollY;
            console.log(e)

            if(scroll > 500){
               this.scrolltoTop = true
            }
        }
    }
}
</script>

<style scoped>

</style>