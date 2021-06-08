function render(ComponentToRender, container) {
  // Validation
  if (!container) {
    throw new Error('Container should be provided to render a component.')
  }

  while (container.firstChild) {
    container.removeChild(container.lastChild)
  }
  container.appendChild(ComponentToRender())
}

export default {
  render,
}
