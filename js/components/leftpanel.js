import {h, Component} from 'preact'

class LeftPanel extends Component {
  render() {
    const style = {
      leftpanel: {
        width: '120px'
      }
    }

    return (
      <div style={style.leftpanel}>Drawing app</div>
    )
  }
}

export default LeftPanel
