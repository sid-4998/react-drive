import ComponentB from "./ComponentB";

const ComponentA = () => {

  const name = 'Sid'
  return (
    <>
         <h1>Component A</h1>
         <ComponentB user={name} />
    </>
  )
}

export default ComponentA;