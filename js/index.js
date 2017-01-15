/* eslint-disable no-unused-vars */
import { h, render } from 'preact'
import App from './components/app.js'
import Actions from './actions/actions.js'

const DEFAULT_WIDTH = 400
const DEFAULT_HEIGHT = 300

window.Draw = Draw

function Draw(el, params = {width: DEFAULT_WIDTH, height: DEFAULT_HEIGHT}) {
  Actions.initApp()
  render(
    <App width={params.width} height={params.height} />,
    el || document.body
  )
}
