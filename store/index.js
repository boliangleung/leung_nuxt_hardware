export const state = () => ({
  tabNative: 'home',
})
export const mutations = {
  toggleTab(state, val) {
    state.tabNative = val
  },
}
