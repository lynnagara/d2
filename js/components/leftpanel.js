/* eslint-disable no-unused-vars */
import {h, Component} from 'preact'
import Actions from '../actions/actions.js'
import Dropdowns from '../store/dropdowns.js'
import Dropdown from './dropdown.js'
import Colors from './colors.js'

class LeftPanel extends Component {
  clearCanvas() {
    Actions.clearCanvasStream$.next()
  }

  render() {
    const style = {
      leftpanel: {
        'width': '120px'
      }
    }

    return (
      <section>
        <div style={style.leftpanel}>Drawing app</div>
        <section>
          <Dropdown>
            <button key="dropdown-button">Colors</button>
            <div key="dropdown-target"><Colors /></div>
          </Dropdown>
        </section>
        <button onClick={this.clearCanvas}>Clear</button>
      </section>
    )
  }
}

export default LeftPanel
