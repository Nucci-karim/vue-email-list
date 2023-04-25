const { createApp } = Vue

  createApp({
    data() {
      return {
        
      }
    },
    created(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(function(response){
            console.log(response.data)
        })
    },
    methods: {
        
    },
  }).mount('#app')