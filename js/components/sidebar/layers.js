/* eslint-disable no-unused-vars */
import {h, Component} from 'preact'
import LayersStore from '../../store/layers.js'

class Layers extends Component {
  constructor() {
    super()
    LayersStore.all$.subscribe((layers) => {
      this.setState({layers: layers})
    })
  }

  toggleLayer(layer, isChecked) {
    layer.setVisibility(isChecked)
  }

  deleteLayer(layer) {
    LayersStore.deleteLayer(layer)
  }

  setActiveLayer(layer) {
    LayersStore.setActiveLayer(layer)
  }

  render(_props, state) {
    const style = {
      active: {
        'background-color': 'blue',
        'color': 'white'
      }
    }

    const layersList = state.layers.map((layer) => {
      return (
        <div key={layer.id} style={layer.active ? style.active : ''}>
          <label>
            <input
              type="checkbox"
              checked={layer.visible}
              onChange={(event) => this.toggleLayer(layer, event.target.checked)} />
          </label>
          <span onClick={() => this.setActiveLayer(layer)}>{layer.name}</span>
          <button onClick={() => this.deleteLayer(layer)}>Delete</button>
        </div>
      )
    })

    return (
      <div>
        <div>Layers</div>
        <div>{layersList}</div>
        <div>{LayersStore.layers}</div>
        <button onClick={() => LayersStore.new()}>Add</button>
      </div>
    )
  }
}

export default Layers
