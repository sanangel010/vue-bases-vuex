<template>
  <h1> Counter - Vuex </h1>
  <h2> Direct acces: {{ $store.state.counter.count }} </h2>
  <h2> Computed: {{ countComputed }} </h2>

  <button @click="incrementLocal">+1</button>
  <button @click="incrementMutationByLocal(5)">+5</button>
  <button @click="incrementRandomIntActions" :disabled="isLoading">Random</button>

  <h1> mapState </h1>
  <h2> mapState: {{ count }} </h2>
  <h2> lastMutation: {{ lastMutation }} </h2>

  <!-- No se acostumbra hacer un get directo, pero se pudiera presentar algún caso. -->
  <h2> Direct getter: : {{ $store.getters['counter/squareCountGetters'] }} </h2>
</template>


<script>
import { mapState, mapActions } from 'vuex'

// Para obtener todo lo que se quiera del state


export default {

    // El problema con este llamado es que ya no es posible ocupar las propiedades
    // computadas personalizadas por lo que se debe hacer lo siguiente.
    //computed: mapState(['count'])

    computed: {
        countComputed() {
            return this.$store.state.counter.count
        },
        // Se desestructura para obtener las propiedades del state y poder usar ambos
        // a la vez state y propiedades computadas, esta es la forma más sencilla.
       ...mapState( 'counter', ['count', 'lastMutation','isLoading'])

        // otra forma en caso de querer renombrar las propiedades del state
        // ...mapState({
        //     count: state => state.count,
        //     lastMutation: state => state.lastMutation
        // })
    },

    methods: {
        incrementLocal() {
            this.$store.commit('counter/incrementMutation')
        },
        incrementMutationByLocal(valor){
            this.$store.commit('counter/incrementMutationBy', valor)
        },
        // llamado de actions
        // No tiene mucho sentido tener un método que lo único que haga sea llamar el dispath para ejecutar el actions
        // en su caso es mejor importar el mapActions
            // // incrementRandomIntLocal(){
            // //     this.$store.dispatch('incrementRandomIntActions')
            // // }
        // Esta forma es la más facil si se llaman igual los metodos y el actions, sin embargo si se requiere
        // renombrar el metodo de manera local se hace como la forma que queda descomentada
            //////...mapActions(['incrementRandomIntActions'])

            ...mapActions('counter', ['incrementRandomIntActions'])

            // // ...mapActions({
            // //     incrementRandomIntLocal: 'counter/incrementRandomIntActions'
            // // })

    }

}
</script>

