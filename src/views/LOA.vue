<template>
   <div class="flex justify-center p-6">
      <form
         action=""
         class="flex flex-col gap-8 rounded-md border border-default px-8 py-10"
         @submit.prevent="handleGenerate"
      >
         <div class="flex flex-col gap-8">
            <h1 class="text-xl font-semibold">Company Information</h1>
            <div class="mt-2 flex flex-wrap gap-6">
               <div class="flex flex-1 flex-col">
                  <span class="text-[.8rem] font-semibold text-default"
                     ><span class="mr-1 text-red-500">*</span>Company name</span
                  >
                  <input
                     v-model="companyData.name"
                     type="text"
                     class="mt-2 h-[26px] w-full border-0 border-b border-default pl-1 focus:border-primary focus:outline-none"
                     required
                  />
               </div>
               <div class="flex flex-1 flex-col">
                  <span class="text-[.8rem] font-semibold text-default"
                     ><span class="mr-1 text-red-500">*</span>Address</span
                  >
                  <input
                     v-model="companyData.city"
                     type="text"
                     class="mt-2 h-[26px] w-full border-0 border-b border-default pl-1 focus:border-primary focus:outline-none"
                     required
                  />
               </div>
               <div class="flex flex-1 flex-col">
                  <span class="text-[.8rem] font-semibold text-default"
                     ><span class="mr-1 text-red-500">*</span>City,
                     Province</span
                  >
                  <input
                     v-model="companyData.province"
                     type="text"
                     class="mt-2 h-[26px] w-full border-0 border-b border-default pl-1 focus:border-primary focus:outline-none"
                     required
                  />
               </div>
            </div>
            <div class="flex flex-wrap gap-6">
               <div class="flex flex-1 flex-col">
                  <span class="text-[.8rem] font-semibold text-default"
                     ><span class="mr-1 text-red-500">*</span>Date</span
                  >
                  <input
                     v-model="companyData.date"
                     type="date"
                     class="mt-2 h-[26px] w-full border-0 border-b border-default pl-1 focus:border-primary focus:outline-none"
                     required
                  />
               </div>
               <div class="flex flex-1 flex-col">
                  <span class="text-[.8rem] font-semibold text-default"
                     ><span class="mr-1 text-red-500">*</span
                     >CEO/Representative</span
                  >
                  <input
                     v-model="companyData.CEO"
                     type="text"
                     class="mt-2 h-[26px] w-full border-0 border-b border-default pl-1 focus:border-primary focus:outline-none"
                     required
                  />
               </div>
               <div class="flex flex-1 flex-col">
                  <span class="text-[.8rem] font-semibold text-default"
                     ><span class="mr-1 text-red-500">*</span>Position</span
                  >
                  <input
                     v-model="companyData.position"
                     type="text"
                     class="mt-2 h-[26px] w-full border-0 border-b border-default pl-1 focus:border-primary focus:outline-none"
                     required
                  />
               </div>
            </div>
         </div>

         <div class="mt-5 flex flex-col gap-8">
            <div class="flex justify-between">
               <h1 class="text-xl font-semibold">Message Template</h1>
               <button
                  @click="add()"
                  type="button"
                  class="flex h-[24px] w-[24px] items-center justify-center rounded-md bg-primary/90 p-5 text-xl font-[900] text-white transition-all hover:bg-primary"
               >
                  +
               </button>
            </div>
            <div v-for="(data, key) in messageTemplateData" class="flex gap-2">
               <div
                  class="relative flex flex-1 flex-col gap-8 rounded-md border border-default/50 p-6"
               >
                  <span
                     class="absolute left-[-15px] top-[-15px] flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-center font-bold text-white"
                     >{{ key + 1 }}</span
                  >
                  <div class="mt-2 flex flex-wrap gap-6">
                     <div class="flex flex-1 flex-col">
                        <span class="text-[.8rem] font-semibold text-default"
                           ><span class="mr-1 text-red-500">*</span>Sender
                           ID</span
                        >
                        <input
                           v-model="data.sender_id"
                           type="text"
                           class="mt-2 h-[26px] w-full border-0 border-b border-default pl-1 focus:border-primary focus:outline-none"
                           required
                        />
                     </div>
                     <div class="flex flex-1 flex-col">
                        <span class="text-[.8rem] font-semibold text-default"
                           ><span class="mr-1 text-red-500">*</span
                           >Purpose</span
                        >
                        <input
                           v-model="data.purpose"
                           type="text"
                           class="mt-2 h-[26px] w-full border-0 border-b border-default pl-1 focus:border-primary focus:outline-none"
                           required
                        />
                     </div>
                     <div class="flex flex-1 flex-col">
                        <span class="text-[.8rem] font-semibold text-default"
                           ><span class="mr-1 text-red-500">*</span>Date
                           From</span
                        >
                        <input
                           v-model="data.date_from"
                           type="date"
                           class="mt-2 h-[26px] w-full border-0 border-b border-default pl-1 focus:border-primary focus:outline-none"
                           required
                        />
                     </div>
                     <div class="flex flex-1 flex-col">
                        <span class="text-[.8rem] font-semibold text-default"
                           ><span class="mr-1 text-red-500">*</span>Date
                           To</span
                        >
                        <input
                           v-model="data.date_to"
                           type="date"
                           class="mt-2 h-[26px] w-full border-0 border-b border-default pl-1 focus:border-primary focus:outline-none"
                           required
                        />
                     </div>
                  </div>
                  <div class="mt-2 flex flex-wrap gap-6">
                     <div class="flex flex-1 flex-col">
                        <span class="text-[.8rem] font-semibold text-default"
                           ><span class="mr-1 text-red-500">*</span
                           >Message</span
                        >
                        <input
                           v-model="data.message"
                           type="text"
                           class="mt-2 h-[26px] w-full border-0 border-b border-default pl-1 focus:border-primary focus:outline-none"
                           required
                        />
                     </div>
                  </div>
               </div>
               <div
                  v-if="key != 0"
                  @click="remove(key)"
                  class="flex h-full cursor-pointer items-center justify-center rounded bg-red-500 px-2 transition-all hover:bg-red-600"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     class="ionicon text-white"
                     viewBox="0 0 512 512"
                     height="24px"
                     width="24px"
                  >
                     <path
                        d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="40"
                     />
                     <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-miterlimit="10"
                        stroke-width="40"
                        d="M80 112h352"
                     />
                     <path
                        d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="40"
                     />
                  </svg>
               </div>
            </div>
         </div>
         <button
            class="rounded bg-green-500 px-4 py-3 font-semibold text-white transition-all hover:bg-green-700"
         >
            Generate LOA
         </button>
      </form>
      <dialog id="LOA_modal" class="modal">
         <form method="dialog" class="modal-box">
            <h3 class="text-lg font-bold">Hello!</h3>
            <p class="py-4">Press ESC key or click the button below to close</p>
            <div class="modal-action">
               <!-- if there is a button in form, it will close the modal -->
               <button class="btn">Close</button>
            </div>
         </form>
      </dialog>
   </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
   setup() {
      const router = useRouter()
      const companyData = ref({
         name: null,
         city: null,
         province: null,
         date: null,
         CEO: null,
         position: null,
      })
      const messageTemplateData = ref([
         {
            sender_id: null,
            purpose: null,
            date_from: null,
            date_to: null,
            message: null,
         },
      ])

      const add = () => {
         messageTemplateData.value.push({
            sender_id: null,
            purpose: null,
            date_from: null,
            date_to: null,
            message: null,
         })
      }

      const remove = (index) => {
         messageTemplateData.value.splice(index)
      }

      const handleGenerate = async () => {
         sessionStorage.setItem(
            'companyData',
            JSON.stringify(companyData.value)
         )
         sessionStorage.setItem(
            'messageTemplateData',
            JSON.stringify(messageTemplateData.value)
         )

         router.push('/loa/print')
      }
      return {
         companyData,
         messageTemplateData,
         add,
         remove,
         handleGenerate,
      }
   },
   methods: {},
   mounted() {
      sessionStorage.removeItem('companyData')
      sessionStorage.removeItem('messageTemplateData')
   },
}
</script>

<style lang="scss" scoped></style>
