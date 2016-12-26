/* eslint-disable no-unused-vars */
import {h, Component} from 'preact'
import Actions from '../actions/actions.js'
import colorsStore from '../store/colors.js'

class Drawing extends Component {
  constructor() {
    super()
    this.setState({'isDrawing': false})
    Actions.clearCanvasStream$.subscribe(() => this.clearCanvas())
  }

  clearCanvas() {
    this.context.clearRect(0,0, this.base.clientWidth, this.base.clientHeight)
  }

  addDot(x, y) {
    this.context.fillRect(x, y, 1, 1)
    this.context.fillStyle = colorsStore.getForeground()
    this.context.stroke()
  }

  drawLine([x1, y1], [x2, y2]) {
    this.context.strokeStyle = colorsStore.getForeground()
    this.context.beginPath()
    this.context.moveTo(x1, y1)
    this.context.lineTo(x2, y2)
    this.context.stroke()
  }

  onMouseDown({offsetX, offsetY}) {
    this.setState({
      isDrawing: true,
      lastPosition: [offsetX, offsetY]
    })
    this.addDot(offsetX, offsetY)
  }

  onMouseUp({offsetX, offsetY}) {
    this.addDot(offsetX, offsetY)
    this.setState({isDrawing: false})
  }

  onMouseMove({offsetX, offsetY}) {
    this.drawLine(this.state.lastPosition, [offsetX, offsetY])
    this.setState({
      lastPosition: [offsetX, offsetY]
    })
  }

  render(_props, state) {
    return (
      <canvas
        style={{'flex': 1, 'cursor': 'default'}}
        width={state.width}
        height={state.height}
        onMouseDown={(event) => this.onMouseDown(event)}
        onMouseUp={(event) => this.onMouseUp(event)}
        onMouseMove={(event) => state.isDrawing ? this.onMouseMove(event) : ''} />
    )
  }
  componentDidMount() {
    // set the actual width and height properties of the canvas element
    this.setState({
      width: this.base.clientWidth,
      height: this.base.clientHeight
    })
    this.context = this.base.getContext('2d')
  }
}

export default Drawing
