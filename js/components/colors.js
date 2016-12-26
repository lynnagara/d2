/* eslint-disable no-unused-vars */
import {h, Component} from 'preact'
import colorsStore from '../store/colors.js'

class Colors extends Component {
  selectColor(color) {
    colorsStore.setForeground(color)
  }

  render(props, state) {
    const styles = {
      list: {
        'display': 'flex',
        'width': '50px',
        'flex-wrap': 'wrap'
      },
      colorBase: {
        'width': '16px',
        'height': '16px',
        'margin': '0 2px 2px 0',
        'border': '1px solid #454545'
      }
    }

    const colorsList = colorsStore.getPresets().map((color) => {
      return (
        <div
          style={{...styles.colorBase, 'background-color': color}}
          onClick={() => this.selectColor(color)}>
        </div>
      )
    })

    return <div style={styles.list}>{colorsList}</div>
  }
}

export default Colors
