import { createApp } from 'vue'
import App from './App.vue'

// Si se pone asi en raíz busca el index.js, por lo cual ya no es necesario porlo asi: @/store/index.js
import store from '@/store'


// se aloja en el  nivel más alto 
createApp(App)
    .use( store )
        .mount('#app')
