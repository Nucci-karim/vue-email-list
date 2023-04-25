const { createApp } = Vue

  createApp({
    data() {
      return {
        emailRand: ''
      }
    },
    created(){
        
    },
    methods: {
        API(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(risposta => {
            this.emailRand = risposta.data.response
            })
        }
        
    },
  }).mount('#app')