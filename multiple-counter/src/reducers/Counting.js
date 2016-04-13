export default (state = [0], action) => {
  console.log(state, 'STATE')
  switch (action.type) {
    case 'INCREASE':
      const i = action.index
      return state.slice(0, i).concat(state[i] + 1).concat(state.slice(i + 1))
    case 'DECREASE':
      const j = action.index
      return state.slice(0, j).concat(state[j] - 1).concat(state.slice(j + 1))
    case 'ADD_COUNTER':
      return state.concat(0)
    case 'REMOVE_COUNTER':
      return state.slice(0, state.length - 1)
    default:
      return state
  }
}
