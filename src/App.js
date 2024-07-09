import { useState, useEffect } from "react";

// import Navbar from "./navbar/navbar"

// const App = () => {
//   return (  
//        <Navbar />
//   )
// }

// export default App

// function Counter(){
//   const [count, setCount] = useState(0)
//   const [calculate, setCalculate] = useState(0)
//   useEffect(() => {
//     setTimeout(() => {
//       setCalculate( count * 2)
//     })
//     });
   

//   return (
//     <>
//     <p>Count: {count}</p>
//     <p>Calculate: {calculate}</p>
//     <button onClick={() => setCount(count + 1)}>Increment</button>
//     </>
//   )
// }

// export default Counter;


// const Counter = () => {
// const [count, setCount] = useState(0)
//  function handClick () {
//   setCount(count + 1)
//  }

//  return (
//   <button onClick={handClick}>clicked {count} times</button>
//  )
// };

// export default Counter;

import ReactDOM from "react-dom/client";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}
export default Counter;


