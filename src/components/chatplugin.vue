<template>
   <div>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" class="fb-customerchat"></div>
   </div>
</template>

<script>
export default {
   mounted() {
      this.initFacebookSDK()
   },
   methods: {
      initFacebookSDK() {
         window.fbAsyncInit = function () {
            FB.init({
               xfbml: true,
               version: "v17.0",
            })
         }
         ;(function (d, s, id) {
            var js,
               fjs = d.getElementsByTagName(s)[0]
            if (d.getElementById(id)) return
            js = d.createElement(s)
            js.id = id
            js.src =
               "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"
            fjs.parentNode.insertBefore(js, fjs)
         })(document, "script", "facebook-jssdk")

         // Set the page_id and attribution attributes after the SDK is loaded
         this.setChatPluginAttributes()
      },
      setChatPluginAttributes() {
         var chatbox = document.getElementById("fb-customer-chat")
         chatbox.setAttribute("page_id", "1592548130994748") // Replace this with your Facebook Page ID
         chatbox.setAttribute("attribution", "biz_inbox")
      },
   },
}
</script>

<style>
/* Add any necessary CSS styles for the chat plugin here */
</style>
