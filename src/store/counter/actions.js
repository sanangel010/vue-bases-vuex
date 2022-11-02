import getRandomInt from "@/helpers/getRandomInt"

export const incrementRandomIntActions = async( { commit } ) => {

    // Se habilita el botón
    commit('setLoadingMutation', true)

        // se obtiene el número aleatorio del ayudador
        const randomInt = await getRandomInt()            
        commit('incrementMutationBy', randomInt)

        // Ya ejecutada la acción se in habilita para evitar estarle picando
        commit('setLoadingMutation', false)
}