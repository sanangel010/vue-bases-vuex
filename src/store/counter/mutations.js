export const incrementMutation = ( state ) => {
    state.count ++
    state.lastMutation = 'increment'
}

// PAra el paso de parámetros
export const incrementMutationBy = ( state, valor ) => {
    state.count += valor
    state.lastMutation = 'incrementBy:' + valor
    state.lastRandomInt = valor
}

export const setLoadingMutation = ( state, valor ) => {
    state.isLoading = valor
    state.lastMutation = 'SetLoading:' + valor
}