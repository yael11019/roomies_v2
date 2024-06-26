const module = {
  namespaced: true,
  state() {
    return {
      channels: [
        { id: 1, name: 'General', messages: 27 },
        { id: 2, name: 'Emergencias', messages: null },
        { id: 3, name: 'Anuncios', messages: 2 },
        { id: 4, name: 'Proyecto 1', messages: 24 },
        { id: 5, name: 'Non-work', messages: null },
        { id: 6, name: 'Atención a clientes', messages: 120 }
      ]
    }
  },
  getters: {
    getChannels: (state, getters, rootState, rootGetters) => (search) => {
      return state.channels
        .filter(
          (channel) => channel.name
            .toLowerCase()
            .includes(search.toLowerCase())
        ).map((channel) => {
          const messages = rootGetters['messages/getUnreadMessages'](channel.id);
          return {
            ...channel,
            messages
          }
        })
    }
  }
}

export default module
