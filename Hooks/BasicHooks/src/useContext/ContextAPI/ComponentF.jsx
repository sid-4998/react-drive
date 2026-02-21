import { DataContext } from '../Context'

const ComponentF = () => {
  return (
    // In order to consume data sent by the Provider we need to use a callback
    <DataContext.Consumer>
        {(data) => (
            <h2>I'm {data.name} and I'm {data.age} years old</h2>
        )}
    </DataContext.Consumer>
  )
}

export default ComponentF;