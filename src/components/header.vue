<template>
   <div
      class="sticky top-0 z-50 flex h-[80px] items-center justify-between bg-white/50 px-6 drop-shadow-xl xl:px-12"
   >
      <div class="navbar-start w-auto md:hidden">
         <div class="dropdown">
            <label tabindex="0" class="btn btn-circle btn-ghost text-default">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
               >
                  <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     stroke-width="2"
                     d="M4 6h16M4 12h16M4 18h7"
                  />
               </svg>
            </label>
            <ul
               tabindex="0"
               class="menu dropdown-content rounded-box menu-sm z-[1] mt-4 w-52 gap-4 bg-secondary p-4 shadow"
            >
               <li
                  class="cursor-pointer list-none text-[1.2rem] text-default hover:text-primary"
               >
                  <a class="text-[1.2rem]" href="#">Home</a> 
               </li>
               <li
                  class="cursor-pointer list-none text-[1.2rem] text-default hover:text-primary"
               >
                  <a class="text-[1.2rem]" href="#about">About</a> 
               </li>
               <li
                  class="cursor-pointer list-none text-[1.2rem] text-default hover:text-primary text"
               >
                  <a class="text-[1.2rem]" href="#features">Features</a> 
               </li>
               <li
                  class="cursor-pointer list-none text-[1.2rem] text-default hover:text-primary"
               >
                  <a class="text-[1.2rem]" href="#work">How it works</a> 
               </li>
            </ul>
         </div>
      </div>
      <img src="/images/logo.png" alt="" class="max-h-[6vw] min-h-full  py-4"/>
      <div class="hidden md:block">
         <div class="flex gap-7">
            <li
               class="cursor-pointer list-none text-[1.2rem] text-default hover:text-primary"
            >
               <a href="#">Home  </a> 
            </li>
            <li
               class="cursor-pointer list-none text-[1.2rem] text-default hover:text-primary"
            >
               <a href="#about">About</a>
            </li>
            <li
               class="cursor-pointer list-none text-[1.2rem] text-default hover:text-primary"
            >
            <a href="#features">Features</a> 
            </li>
            <li
               class="cursor-pointer list-none text-[1.2rem] text-default hover:text-primary"
            >
              <a href="#work"> How it works  </a>
            </li>
         </div>
      </div>
      <div class="flex items-center justify-center gap-4">
         <button
            class="hidden cursor-pointer items-center rounded-md bg-primary/80 px-4 py-[.60rem] text-[1rem] text-white transition duration-200 ease-in-out hover:bg-primary xl:flex"
         >
         <a href="sms.eulap.com">Get Started</a> 
         </button>
         <label class="swap-rotate swap">
            <!-- this hidden checkbox controls the state -->
            <input type="checkbox" @change="changeTheme" />

            <!-- sun icon -->
            <svg
               class="swap-on h-6 w-6 fill-primary"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
            >
               <path
                  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"
               />
            </svg>

            <!-- moon icon -->
            <!-- <svg class="swap-off fill-primary/90 w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg> -->

            <svg
               viewBox="0 0 24 24"
               fill="none"
               class="swap-off h-6 w-6 fill-primary/90"
            >
               <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                  class="fill-sky-400/20"
               ></path>
               <path
                  d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                  class="fill-sky-500"
               ></path>
               <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                  class="fill-sky-500"
               ></path>
            </svg>
         </label>
         <!-- <input type="checkbox" class="toggle toggle-sm" 
                @change="changeTheme"
                :checked="selectTheme == 'light' ? checked : ''"/> -->
      </div>
   </div>
</template>

<script>
import { ref } from "vue"



export default {
   setup() {
      const selectTheme = ref(
         localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
      )
      document
         .querySelector("html")
         .setAttribute("data-theme", selectTheme.value)

      const changeTheme = () => {
         selectTheme.value == "light"
            ? (selectTheme.value = "dark")
            : (selectTheme.value = "light")
         localStorage.setItem("theme", selectTheme.value)
         document
            .querySelector("html")
            .setAttribute("data-theme", localStorage.getItem("theme"))
      }

      return {
         changeTheme,
         selectTheme,
      
      }
   },
}
</script>

<style scoped></style>
