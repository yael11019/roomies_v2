const getters = {
  getMessages: (state) => (channelId) => {
    return state.messages.filter((message) => message.channelId === parseInt(channelId))
  },
  getUnreadMessages: (state, getters) => (channelId) => {
    return getters.getMessages(channelId).filter((message) => message.read === false).length
  },
  getMessage: (state) => (id) => {
    return state.messages.find((message) => message.id === id)
  } 
}

export default getters