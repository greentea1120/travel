let mutations = {
  changeCity(state, city) {
    state.city = city
    localStorage.city = city
  }
}

export default mutations
