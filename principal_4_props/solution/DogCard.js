let prevProps = null
let prevElement = null

function DogCard(props) {
  // Props immutability validation
  if (typeof props !== 'object') {
    throw new Error('Props should be an object.')
  }

  const isPropsMutable = Object.keys(props)
    .map((key) => Object.getOwnPropertyDescriptor(props, key))
    .some((descriptor) => descriptor.configurable || descriptor.writable)
  if (isPropsMutable || !Object.isFrozen(props) || !Object.isSealed(props)) {
    throw new Error('Props should be immutable.')
  }

  if (prevProps !== null) {
    const shouldComponentUpdate = Object.keys(prevProps).some((Key) => prevProps[Key] !== props[Key])

    if (!shouldComponentUpdate) {
      return prevElement
    }
  }

  const dogCard = document.createElement('div')
  dogCard.style = `
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 300px;
    height: 600px;
    background-color: ivory;
    border: 5px solid blue;
    border-radius: 30px;
  `
  dogCard.innerHTML = `
    <h1>Name: ${props.name}</h1>
    </br>
    <img src=${props.imageUrl} alt="dog" >
    </br>
    <h2>Age: ${props.age}</h2>
    </br>
    <h3>Breed: ${props.breed}</h3>
    </br>
    <h4>Owner: ${props.owner}</h4>
    </br>
  `

  prevProps = props
  prevElement = dogCard

  console.log('DogCard rendered.')

  return dogCard
}

export default DogCard
