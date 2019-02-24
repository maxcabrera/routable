export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('routable-mgt')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)

  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('routable-mgt',serializedState)
  } catch (err) {
    //Ignore
    console.log('Error saving data locally :(')
  }
}