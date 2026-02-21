import ComponentC from "./ComponentC";

const ComponentB = ({user}) => {
  return (
    <>
        <h1>Component B</h1>
        <ComponentC user = {user} />
    </>
  )
}

export default ComponentB;