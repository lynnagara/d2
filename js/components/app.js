/* eslint-disable no-unused-vars */
import {h, Component} from 'preact'
import Sidebar from './sidebar/index.js'
import Layers from './layers.js'

class App extends Component {
  render({width, height}) {
    const style = {
      container: {
        'width': width,
        'height': height,
        'display': 'flex'
      }
    }

    return (
      <div style={style.container}>
        <Sidebar />
        <Layers />
      </div>
    )
  }
}

export default App
