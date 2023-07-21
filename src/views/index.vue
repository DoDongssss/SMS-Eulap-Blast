<template>
    <div class="min-h-screen relative">
        <headerView/>
        <div class="flex items-center justify-center px-12 h-screen xl:h-[calc(100vh-80px)] flex-col xl:flex-row mt-[100px] xl:mt-0">
            <div class="flex items-center justify-center flex-col w-full xl:w-[50%]">
                <div class="w-full xl:w-[75%]">
                    <h1 class="font-semibold text-[2.5rem] xl:text-[2.5vw] text-default text-center xl:text-start ">Transform your business communication and soar to new heights of success.</h1>
                </div>
            </div>
            <div class="h-full center w-full xl:w-[50%]">
                <div class="h-full w-full xl:w-[50vw] flex items-center justify-center relative">
                    <div>
                        <span class="absolute px-4 py-2 bg-primary/95 rounded-md text-white left-[80px] skew-x-[-15deg] flex text-[1vw]">
                            Quick Send
                        </span>
                        <span class="absolute px-4 py-2 bg-primary/95 rounded-md text-white left-[80px] skew-x-[-15deg] text-[1vw] mt-12">Send Using File</span>
                        <span class="absolute px-4 py-2 bg-primary/95 rounded-md text-white left-[80px] skew-x-[-15deg] shadow-lg text-[1vw] mt-[95px]">Campaign Builder</span>
                    </div>
                    <img src="images/indexVector.png" alt="">
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