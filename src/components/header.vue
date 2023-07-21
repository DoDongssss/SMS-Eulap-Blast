<template>
    <div class="sticky top-0 flex items-center justify-between h-[80px] bg-white/50 px-12 drop-shadow-xl z-50">
        <img src="/images/logo.png" alt="" class="min-h-full max-h-[7vw]">
        <div class="">
            <div class="flex gap-7">
                <li class="list-none text-default cursor-pointer text-[1.2rem] hover:text-primary">Home</li>
                <li class="list-none text-default cursor-pointer text-[1.2rem] hover:text-primary">About</li>
                <li class="list-none text-default cursor-pointer text-[1.2rem] hover:text-primary">Features</li>
                <li class="list-none text-default cursor-pointer text-[1.2rem] hover:text-primary">How it works</li>
            </div>
        </div>
        <div class="flex items-center gap-4">
            <button class="flex items-center px-4 py-[.60rem] cursor-pointer text-[1rem] text-white transition duration-200 ease-in-out rounded-md bg-primary/80 hover:bg-primary">Get Started</button>
            <input type="checkbox" class="toggle toggle-sm" 
                @change="changeTheme"
                :checked="selectTheme == 'light' ? checked : ''"/>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup () {
        const selectTheme = ref(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light")
        document.querySelector("html").setAttribute("data-theme", selectTheme.value)

        const changeTheme = ()=>{
            (selectTheme.value == "light" ? selectTheme.value = 'dark' : selectTheme.value = 'light')
            localStorage.setItem("theme", selectTheme.value)
            document.querySelector("html").setAttribute("data-theme", localStorage.getItem("theme"))
        }

        return {
            changeTheme,
            selectTheme
        }
    }
}
</script>

<style scoped>

</style>