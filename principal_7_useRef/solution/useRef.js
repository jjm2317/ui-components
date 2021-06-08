import { addInfo } from './index.js'

const memoryCells = {}
let cursor = 0

document.addEventListener('initialize', () => {
  cursor = 0
})

function useRef(initialValue) {
  if (memoryCells[cursor] !== undefined) {
    addInfo('Cached object is returned.')
    const cachedObject = memoryCells[cursor]
    cursor++

    return cachedObject
  }

  const newObject = {
    current: initialValue,
  }
  memoryCells[cursor] = newObject
  cursor++

  return newObject
}

export default useRef

// debugging 용
window.memoryCells = memoryCells
