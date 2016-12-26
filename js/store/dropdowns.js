let dropdownsList = []

function createDropdown(component) {
  return {
    close: function() {
      component.setState({isOpen: false})
    }
  }
}

const Dropdowns = {
  register: function(component) {
    const dropdown = createDropdown(component)
    dropdownsList.push(dropdown)
    return dropdown
  },
  getAll: function() {
    return dropdownsList
  },
  close: function() {
    dropdownsList.forEach(function(dropdown) {
      dropdown.close()
    })
  }
}

export default Dropdowns
