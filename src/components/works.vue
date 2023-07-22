<template>
    <div class="m-h-screen flex flex-col items-center justify-center px-6 py-12 xl:p-12 text-default w-full">
        <h1 class="font-[900] text-4xl text-default">How it works?</h1>
        <div class="flex flex-col items-center justify-center gap-12 mt-[3rem] xl:mt-[6rem]">
            <div class="flex flex-wrap items-center justify-center gap-12">
                <div class="flex flex-col items-center justify-start w-[350px]">
                    <img src="/images/signup.png" alt="" class="w-[100px] xl:w-[120px]">
                    <h5 class="mt-5 text-default text-2xl"><span class="font-semibold text-primary">Sign Up</span></h5>
                    <p class="mt-5 text-center">Create an account with Eulap SMS Blast and get started.</p>
                </div>
                <div class="flex flex-col items-center justify-start w-[350px]">
                    <img src="/images/network.png" alt="" class="w-[100px] xl:w-[120px]">
                    <h5 class="mt-5 text-default text-2xl"><span class="font-semibold text-primary">Import Contacts</span></h5>
                    <p class="mt-5 text-center">customer contact list or segment your audience for targeted campaigns.</p>
                </div>
                <div class="flex flex-col items-center justify-start w-[350px]">
                    <img src="/images/mail.png" alt="" class="w-[100px] xl:w-[120px]">
                    <h5 class="mt-5 text-default text-2xl"><span class="font-semibold text-primary">Customize Messages</span></h5>
                    <p class="mt-5 text-center">Craft Upload your personalized SMS messages with your brand name or company identity.</p>
                </div>
            </div>
            <div class="flex gap-12 flex-wrap items-center justify-center">
                <div class="flex flex-col items-center justify-start w-[350px]">
                    <img src="/images/automation.png" alt="" class="w-[100px] xl:w-[120px]">
                    <h5 class="mt-5 text-default text-2xl"><span class="font-semibold text-primary">Schedule or Automate</span></h5>
                    <p class="mt-5 text-center">Plan your campaigns in advance and set the optimal delivery time for maximum impact.</p>
                </div>
                <div class="flex flex-col items-center justify-start w-[350px]">
                    <img src="/images/launch.png" alt="" class="w-[100px] xl:w-[120px]">
                    <h5 class="mt-5 text-default text-2xl"><span class="font-semibold text-primary">Blast Away</span></h5>
                    <p class="mt-5 text-center">Launch your  SMS blast and watch your messages reach and engage your audience instantly.</p>
                </div>
                <div class="flex flex-col items-center justify-start w-[350px]">
                    <img src="/images/optimization.png" alt="" class="w-[100px] xl:w-[120px]">
                    <h5 class="mt-5 text-default text-2xl"><span class="font-semibold text-primary">Analyze and Optimize</span></h5>
                    <p class="mt-5 text-center">Track campaign performance through analytics, and use insights to refine future
                        strategies.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style scoped>
.line-top {
    width: 200px;
    height:100px;
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