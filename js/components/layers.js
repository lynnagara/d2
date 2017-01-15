/* eslint-disable no-unused-vars */
import {h, Component} from 'preact'
import Layer from './layer.js'
import LayersStore from '../store/layers.js'

class Layers extends Component {
  constructor() {
    super()
    this.setState({'isDrawing': false})
    LayersStore.all$.subscribe((layers) => {
      this.setState({layers: layers})
    })
  }

  onMouseDown(event) {
    this.setState({isDrawing: true})
    this.activeLayer.onMouseDown(event)
  }

  onMouseUp(event) {
    this.activeLayer.onMouseUp(event)
    this.setState({isDrawing: false})
  }

  onMouseMove(event) {
    this.activeLayer.onMouseMove(event)
  }

  render(props, state) {
    const style = {
      section: {
        'position': 'relative',
        'flex': 1
      }
    }

    const layersList = state.layers.map((layer) => {
      return (
        <Layer
          layer={layer}
          key={layer.id}
          ref={(component) => {if (layer.active) {this.activeLayer = component}}} />
      )
    })

    return (
      <section
        style={style.section}
        onMouseDown={(event) => this.onMouseDown(event)}
        onMouseUp={(event) => this.onMouseUp(event)}
        onMouseMove={(event) => state.isDrawing ? this.onMouseMove(event) : ''}>
        {layersList}
      </section>
    )
  }
}

export default Layers
