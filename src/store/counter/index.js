import state from './state'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const counterStore = {

        // TODO: falta algo
        namespaced: true,

        // Es como el data
        state: state,

        // Las mutaciones solo pueden ser Síncronas
        // Las mutaciones permiten modificar el state 
        //y se pueden ver como los métodos que realizan los cambios en el state.
        mutations: mutations,
    
        // Son métodos que pueden ser Asíncronos, sirven para comprobar algo contra un backend
        // disparan un commit de una mutation
        // LAs acciones cambian el state mediante una mutación nunca de manera directa
        actions: actions,
    
        // Son parecidos a las computed properties y pueden ser llamados en cualquier moemnto
        getters: getters
}


export default counterStore