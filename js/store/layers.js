import Rx from 'rxjs/Rx'

let layers = []
const getLayerId = layerIdGenerator()

class Layer {
  constructor(name) {
    this.id = getLayerId()
    this.name = name
    this.visible = true
    this.changed$ = new Rx.BehaviorSubject(this)
  }

  setVisibility(visibility = false) {
    this.visible = visibility
    this.changed$.next(this)
  }

  setActiveStatus(active = false) {
    this.active = active
    this.changed$.next(this)
  }
}

function layerIdGenerator() {
  let lastId = 0
  return function getLayerId() {
    lastId += 1
    return lastId
  }
}

const Layers = {
  all$: new Rx.BehaviorSubject(layers),
  new: function(name = `Layer ${layers.length + 1}`) {
    const layer = new Layer(name)
    layers.push(layer)
    this.all$.next(layers)
    if (layers.length === 1) {
      this.setActiveLayer(layer)
    }
  },
  deleteLayer: function(layerToDelete) {
    const idx = layers.findIndex((layer) => {
      return layer === layerToDelete
    })
    layerToDelete.changed$.complete()
    layers.splice(idx, 1)
    this.all$.next(layers)
  },
  setActiveLayer(activeLayer) {
    layers.forEach((layer) => {
      layer.setActiveStatus(activeLayer === layer)
    })
    this.all$.next(layers)
  }
}

export default Layers
