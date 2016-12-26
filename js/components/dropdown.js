/* eslint-disable no-unused-vars */
import {h, Component} from 'preact'
import Dropdowns from '../store/dropdowns.js'

class Dropdown extends Component {
  constructor() {
    super()
    this.setState({
      isOpen: false,
      dropdown: Dropdowns.register(this),
      position: {}
    })
  }

  render(props, state) {
    const button = props.children.find((node) => {
      return node.key === 'dropdown-button'
    })

    button.attributes.onClick = () => {
      const shouldOpen = !state.isOpen
      Dropdowns.close()
      this.setState({isOpen: shouldOpen})
    }

    const target = props.children.find((node) => {
      return node.key === 'dropdown-target'
    })

    const styles = {
      dropdown: {
        'display': 'inline-block',
        'position': 'relative'
      },
      target: {
        'display': state.isOpen ? 'block' : 'none',
        'left': state.position.left,
        'top': state.position.top,
        'position': 'absolute'
      }
    }

    return (
      <div style={styles.dropdown}>
        {button}
        <div style={styles.target}>
          {target}
        </div>
      </div>
    )
  }

  componentDidMount() {
    const rect = this.base.getBoundingClientRect()
    this.setState({position: {
      left: rect.right,
      top: 0
    }})
  }
}

export default Dropdown
