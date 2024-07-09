import { useState, useEffect } from "react";

// import Navbar from "./navbar/navbar"

// const App = () => {
//   return (  
//        <Navbar />
//   )
// }

// export default App

function Counter (){
  const [count, setCount] = useState(0)
  const [calculate, setCalculate] = useState(0)

  useEffect(() => {
    setCalculate(() => count * 3)
  },[count])

  return(
    <>
    <p>Hisoblash: {count}</p>
    <button onClick={() => setCount((c) => c + 1)}> + </button>
    <p>Calculate: {calculate}</p>
    </>
  )
}

export default Counter;


