import {h, Component} from 'preact'
import LeftPanel from './leftpanel.js'
import Drawing from './drawing.js'

class App extends Component {
  render({width, height}) {
    const style = {
      container: {
        width: width,
        height: height,
        display: 'flex'
      }
    }

    return (
      <div style={style.container}>
        <LeftPanel />
        <Drawing />
      </div>
    )
  }
}

export default App
