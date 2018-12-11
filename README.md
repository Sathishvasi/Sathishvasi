# Vue JS APP

Link for Live Preview: https://sathishvasi.github.io/

FUNCTIONALITIES:
* Used customised Twitter API from herokuapp for data response
* It will auto refresh for every 30 seconds
* Based on given search value, It will display datas as cards from API response
* Also made it as resposive for both tablet view and mobile view
* Tablet: 2 column view
* Mobile: Single card view

Technologies Used:
* vue-cli -> (vue-router, vue-resources)
* axios package used for API call 
* vue-router -> Used for page routing
* vue-resource -> Used to get API response from "axios.get('<url>')"
* vue-init -> Used for component binding
* Mounted() function used to pass props from one component to another
* Made one common service "getData.js" to retrieve API data
* All vue elements used -> (vue-if, vue-else, vue-html, vue-model, vue-on:click, vue-on:submit)
* bootstrap
* jquery
* javascript
* css3
* Followed proper folder structure 

My Folder Structure:
*Folder-> Component
     File-> TwitterHeader.vue
     File-> TwitterContent.vue
*Folder-> router
     File-> index.js
*Folder-> services
     File-> DataService.vue
File -> App.vue
File -> main.js
  
  
