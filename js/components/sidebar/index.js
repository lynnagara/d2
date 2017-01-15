/* eslint-disable no-unused-vars */
import {h, Component} from 'preact'
import Actions from '../../actions/actions.js'
import Dropdown from '../dropdown.js'
import Colors from './colors.js'
import Layers from './layers.js'

class Sidebar extends Component {
  render() {
    const style = {
      sidebar: {
        'width': '120px'
      }
    }

    return (
      <section>
        <div style={style.sidebar}>Drawing app</div>
        <section>
          <Dropdown>
            <button key="dropdown-button">Colors</button>
            <div key="dropdown-target"><Colors /></div>
          </Dropdown>
        </section>
        <Layers />
      </section>
    )
  }
}

export default Sidebar
