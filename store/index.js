export const state = () => ({
  displayMenu: false,
  name: 'Jake Kapitz',
  services: [
    {
      ref: 'design',
      name: 'Web Design & Branding',
      icon: "['fal', 'pencil-brush']",
      colorClass: '.orange-purple'
    },
    {
      ref: 'code',
      title: 'Website Development',
      icon: "['fal', 'laptop-code']",
      colorClass: '.blue-blue'
    },
    {
      ref: 'optimise',
      title: 'Business Optimisation',
      icon: "['fal', 'tachometer-fastest']",
      colorClass: '.pink-purple'
    }
  ]
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
