const { createApp } = Vue

  createApp({
    data() {
      return {
        emailRand: [

        ]
      }
    },
    created(){
        for(let i=0; i < 10; i++){
            this.API()
        }
    },
    methods: {
        API(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(risposta => {
            this.emailRand.push(risposta.data.response)
            })
        },
        
    },
  }).mount('#app')