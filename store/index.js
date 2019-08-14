export const state = () => ({
  displayMenu: false,
  name: 'Jake Kapitz'
})

export const mutations = {
  toggleDisplay(state) {
    state.displayMenu = !state.displayMenu
  }
}

export const getters = {
  name: (state) => {
    return state.name
  }
}
