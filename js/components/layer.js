/* eslint-disable no-unused-vars */
import {h, Component} from 'preact'
import Actions from '../actions/actions.js'
import ColorsStore from '../store/colors.js'

class Layer extends Component {
  constructor(props) {
    super()
    props.layer.changed$.subscribe((layer) => {
      this.setState({isVisible: layer.visible})
      this.setState({isActive: layer.active})
    })
  }

  addDot(x, y) {
    const context = this.base.getContext('2d')
    context.fillRect(x, y, 1, 1)
    context.fillStyle = ColorsStore.getForeground()
    context.stroke()
  }

  drawLine([x1, y1], [x2, y2]) {
    const context = this.base.getContext('2d')
    context.strokeStyle = ColorsStore.getForeground()
    context.beginPath()
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.stroke()
  }

  onMouseDown({offsetX, offsetY}) {
    this.setState({lastPosition: [offsetX, offsetY]})
    this.addDot(offsetX, offsetY)
  }

  onMouseUp({offsetX, offsetY}) {
    this.addDot(offsetX, offsetY)
  }

  onMouseMove({offsetX, offsetY}) {
    this.drawLine(this.state.lastPosition, [offsetX, offsetY])
    this.setState({
      lastPosition: [offsetX, offsetY]
    })
  }

  render(props, state) {
    const style = {
      'position': 'absolute',
      'cursor': 'default',
      'width': '100%',
      'height': '100%',
      'display': state.isVisible ? 'block' : 'none'
    }

    return (
      <canvas
        style={style}
        width={state.width}
        height={state.height} />
    )
  }

  componentDidMount() {
    // set the actual width and height properties of the canvas element
    this.setState({
      width: this.base.clientWidth,
      height: this.base.clientHeight
    })
  }
}

export default Layer
