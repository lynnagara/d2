/* eslint-disable no-unused-vars */
import {h, Component} from 'preact'

class Drawing extends Component {
  constructor() {
    super()
    this.setState({'isDrawing': false})
  }

  addDot(x, y) {
    this.context.fillRect(x, y, 1, 1)
    this.context.stroke()
  }

  onMouseDown(event) {
    this.setState({isDrawing: true})
    console.log('mouse down')
  }

  onMouseUp(event) {
    // draw rest of line
    this.addDot(event.offsetX, event.offsetY)
    this.setState({isDrawing: false})
  }

  onMouseMove(event) {
    this.addDot(event.offsetX, event.offsetY)
  }

  render(_props, state) {
    return (
      <canvas
        style={{flex: 1, cursor: 'default'}}
        width={state.width}
        height={state.height}
        onMouseDown={this.onMouseDown.bind(this)}
        onMouseUp={this.onMouseUp.bind(this)}
        onMouseMove={state.isDrawing ? this.onMouseMove.bind(this) : ''} />
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
