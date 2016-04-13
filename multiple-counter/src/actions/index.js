export const increase = (index) => {
  console.log('increased')
  return {
    type: 'INCREASE',
    index: index
  }
}

export const decrease = (index) => {
  console.log('decreased')
  return {
    type: 'DECREASE',
    index: index
  }
}

export const addCounter = () => {
  console.log('add counter action')
  return {
    type: 'ADD_COUNTER'
  }
}

export const removeCounter = () => {
  console.log('remove counter action')
  return {
    type: 'REMOVE_COUNTER'
  }
}
