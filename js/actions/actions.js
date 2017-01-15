import Store from '../store/index.js'

const Actions = {
  initApp: function() {
    Store.Layers.new()
  }
}

export default Actions
