import { DataContext, DataContext1 } from '../Context'
import { useContext } from 'react'

// Due to multiple contexts, the problem of callback hell arises
// To solve this we use useContext Hook

const ComponentF = () => {
  return (
    <>
        {/* In order to consume data sent by the Provider we need to use a callback */}
        <DataContext.Consumer>
            {(data) => { // Access data from first Provider
                return (
                    <DataContext1.Consumer>
                        {(data1) => { // Access data1 from second Provider
                            return (
                                <>
                                    <h2>I'm {data.name} and I'm {data.age} years old</h2>
                                    <h3>I'm {data1.name} and I'm {data1.age} years old</h3>
                                </>
                            )
                        }}
                    </DataContext1.Consumer>
                )
            }}    
        </DataContext.Consumer>
        <ComponentF1 />
    </>    
  )
}

const ComponentF1 = () => {
    const elderData = useContext(DataContext);
    const youngerData = useContext(DataContext1);
    
    return (
        <>
            <h2>{elderData.name}{' '}-{' '}{elderData.age}</h2>
            <h3>{youngerData.name}{' '}-{' '}{youngerData.age}</h3>
        </>
    )
}

export default ComponentF;