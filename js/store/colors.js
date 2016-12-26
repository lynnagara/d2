const colorPresets = [
  '#000000',
  '#FF0000',
  '#FFFF00',
  '#00FFFF',
  '#0000FF'
]

let selectedColor = colorPresets[0]

const Colors = {
  getPresets: function() {
    return colorPresets
  },
  getForeground: function() {
    return selectedColor
  },
  setForeground: function(color) {
    selectedColor = color
  }
}

export default Colors
