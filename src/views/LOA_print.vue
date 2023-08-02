<template>
   <div class="book">
      <div class="page relative">
         <div
            @click="print"
            class="print-btn tooltip-primary tooltip tooltip-bottom absolute right-3 top-3 cursor-pointer items-center"
            data-tip="Print"
         >
            <svg
               xmlns="http://www.w3.org/2000/svg"
               class="ionicon text-red-500"
               viewBox="0 0 512 512"
               height="30px"
               width="30px"
            >
               <path
                  d="M384 368h24a40.12 40.12 0 0040-40V168a40.12 40.12 0 00-40-40H104a40.12 40.12 0 00-40 40v160a40.12 40.12 0 0040 40h24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="38"
               />
               <rect
                  x="128"
                  y="240"
                  width="256"
                  height="208"
                  rx="24.32"
                  ry="24.32"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="38"
               />
               <path
                  d="M384 128v-24a40.12 40.12 0 00-40-40H168a40.12 40.12 0 00-40 40v24"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="38"
               />
               <circle cx="392" cy="184" r="24" />
            </svg>
         </div>
         <div class="subpage">
            <div class="flex w-[240px] flex-col font-bold">
               <p>{{ companyData.name }}</p>
               <p class="overflow-wrap whitespace-normal">
                  {{ companyData.address }}
               </p>
               <p>{{ companyData.city + ',' + companyData.province }}</p>
            </div>
            <h1 class="mt-[1cm] text-center text-[12pt] font-bold">
               Letter of Authorization
            </h1>
            <p class="mt-[1cm] font-bold">{{ companyData.date }}</p>
            <p class="mt-[1cm] text-justify">
               This is to confirm that sufficient authority has been given to
               Eulap Software Solutions its affiliates, partners, agents, and
               authorized representatives to act as a communications channel to
               send A2P SMS on its behalf within the indicated time frame below,
               upon its approval and subject to conditions which Eulap Software
               Solutions may in its sole discretion opt to impose, to customize
               the number appearing on the SMS recipient’s phone, making it
               appear that the SMS was sent by the SID/s listed below as the
               masked name/s for {{ companyData.name }}.
            </p>
            <p class="mt-6 text-justify">
               {{ companyData.name }} represents and warrants that the SID/s
               below and any and all title, rights and interest thereto are
               owned by {{ companyData.name }} and that no other person or
               entity has the right to use or cause the distribution thereof as
               SIDs. Accordingly, {{ companyData.name }}, hereby undertakes that
               it shall hold Globe Telecom, Inc., its directors, stockholders,
               officers, employees and agents, free, harmless and indemnified
               against any and all claims, suits, proceedings, actions, and
               other demands of third parties claiming title, ownership or any
               other interest with respect to the use of the SID/s below as
               {{ companyData.name }} masked name, trade name, trademark, domain
               name, or any name/designation, forwarded to the recipients.
            </p>
            <p class="mt-6 text-justify">
               Furthermore, {{ companyData.name }} undertakes that it shall at
               all times comply with applicable laws, rules and regulations
               relating to the sending of SMS and the use of a masked name in
               the sending of SMS. Accordingly, {{ companyData.name }} hereby
               undertakes to hold Globe Telecom, Inc. free, harmless and
               indemnified against any and all liabilities with respect to such
               laws, rules and regulations.
            </p>

            <!-- table -->
            <div class="mt-[1cm] overflow-x-auto">
               <table width="100%">
                  <!-- head -->
                  <thead>
                     <tr>
                        <th rowspan="2">Sender ID</th>
                        <th rowspan="2">Purpose of SMS Blast</th>
                        <th colspan="2">Validity</th>
                     </tr>
                     <tr>
                        <th>From</th>
                        <th>To</th>
                     </tr>
                  </thead>
                  <tbody v-for="(data, key) in messageTemplateData">
                     <tr>
                        <td class="font-bold">
                           <span class="font-normal">{{ key + 1 }}</span>
                           {{ '. ' + data.sender_id }}
                        </td>
                        <td>{{ data.purpose }}</td>
                        <td>{{ data.date_from }}</td>
                        <td>{{ data.date_to }}</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
      <div class="page">
         <div class="subpage">
            <!-- note -->
            <div class="flex flex-col">
               <p>Notes:</p>
               <div class="flex flex-col pl-6">
                  <li type="disc">
                     A maximum of eleven (11) alphanumeric characters is allowed
                     per SID.
                  </li>
                  <li type="disc">Both uppercase and lowercase are allowed.</li>
                  <li type="disc">
                     The allowed special characters are period(.) , dash(-) ,
                     underscore(_) , space only.
                  </li>
                  <li type="disc">
                     Each special character is equivalent to one (1) character.
                  </li>
                  <li type="disc">
                     SIDs will be case-specific and subject to permutations.
                  </li>
                  <li type="disc">
                     SID must be linked to the company name/brand/identity to
                     identify the SMS sender easily.
                  </li>
                  <li type="disc">
                     Use of common nouns as SIDs will not be allowed. (e.g.
                     Intl_school, local_banks)
                  </li>
                  <li type="disc">
                     SIDs must not be that of any other company or competitor.
                  </li>
                  <li type="disc">SIDs must not be derogatory.</li>
                  <li type="disc">
                     One (1) message part is 160 characters. Messages with more
                     than 160 characters will be counted per 153 characters per
                     message part.
                  </li>
               </div>
            </div>
            <h1 class="mt-[1cm] font-bold">
               Message Template (Optional – See Annex A)
            </h1>
            <h1 class="mt-[.5cm]">
               Kindly provide the copy that commonly goes into your SMS blasts
               per SID.
            </h1>
            <p class="mt-[.6cm]">
               Undersigned representative of {{ companyData.name }} warrants
               that they are duly authorized to sign this Letter of
               Authorization on its behalf.
            </p>

            <div class="mt-[1cm] flex flex-row gap-[7.1cm] font-bold">
               <h1>Submitted By:</h1>
               <h1>On behalf of:</h1>
            </div>
            <div class="mt-[1.8cm] flex flex-row gap-[4cm]">
               <div
                  class="flex w-[200px] flex-col border-t border-black font-bold"
               >
                  <h1>{{ companyData.CEO }}</h1>
                  <h1>{{ companyData.position }}</h1>
                  <h1>{{ companyData.name }}</h1>
               </div>
               <div
                  class="relative flex w-[200px] flex-col border-t border-black font-bold"
               >
                  <div class="absolute left-[-100px] top-[-220px]">
                     <img
                        src="/images/signature.png"
                        alt=""
                        class="scale-[.4]"
                     />
                  </div>
                  <h1>Lemuel Javellana</h1>
                  <h1>President</h1>
                  <h1>Eulap Software Solutions</h1>
               </div>
            </div>
            <div class="flex items-center justify-center">
               <span
                  class="mt-[1.5cm] flex w-fit border-b border-black text-center font-bold"
                  >Annex A: Message Template</span
               >
            </div>
            <!-- table -->
            <div class="mt-[1cm] overflow-x-auto">
               <table width="100%">
                  <!-- head -->
                  <thead>
                     <tr>
                        <th rowspan="2">Sender ID</th>
                        <th rowspan="2">Purpose</th>
                        <th colspan="2">Validity</th>
                        <th rowspan="2">Message</th>
                     </tr>
                     <tr>
                        <th>From</th>
                        <th>To</th>
                     </tr>
                  </thead>
                  <tbody v-for="(data, key) in messageTemplateData">
                     <tr>
                        <td class="font-bold">
                           <span class="font-normal">{{ key + 1 }}</span>
                           {{ '. ' + data.sender_id }}
                        </td>
                        <td>{{ data.purpose }}</td>
                        <td>{{ data.date_from }}</td>
                        <td>{{ data.date_to }}</td>
                        <td>{{ data.message }}</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
   setup() {
      const router = useRouter()
      const companyData = ref({})
      const messageTemplateData = ref({})

      const print = () => {
         window.print()
      }
      return {
         router,
         companyData,
         messageTemplateData,
         print,
      }
   },
   methods: {
      changeDateFormat(selectedDate) {
         const date = new Date(selectedDate)
         const options = { month: 'long', day: 'numeric', year: 'numeric' }
         let formattedDate = date.toLocaleDateString(undefined, options)
         this.companyData.date = formattedDate
      },
   },
   mounted() {
      if (
         sessionStorage.getItem('companyData') != null ||
         sessionStorage.getItem('messageTemplateData') != null
      ) {
         this.companyData = JSON.parse(sessionStorage.getItem('companyData'))
         this.messageTemplateData = JSON.parse(
            sessionStorage.getItem('messageTemplateData')
         )

         this.changeDateFormat(this.companyData.date)
      } else {
         this.router.push('/loa')
      }
      setTimeout(() => {
         window.print()
      }, 2000)
   },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
.book {
   color: black;
   font-size: 11pt !important;
   font-family: 'Questrial', sans-serif;
}
.page {
   width: 21cm;
   min-height: 29.7cm;
   height: 29.6cm;
   padding: 2.54cm;
   margin: 1cm auto;
   border: 1px #d3d3d3 solid;
   border-radius: 5px;
   background: white;
   box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
.subpage {
   height: 24.62cm;
}

@page {
   size: A4;
   margin: 0;
}
@media print {
   .page {
      margin: 0;
      border: initial;
      border-radius: initial;
      width: initial;
      min-height: initial;
      box-shadow: initial;
      background: initial;
      page-break-after: always;
   }
   .print-btn {
      display: none;
   }
}

table,
th,
td {
   border: 1px solid black;
   border-collapse: collapse;
   padding: 2.5px 5px;
}
</style>
