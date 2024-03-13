// import { useState } from 'react';

// function App() {
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       {/* <Count count={count} />
//       <Buttons count={count} setCount={setCount} /> */}
//       <Count count={count} setCount={setCount} />
//     </div>
//   )
// }

// function Count({ count, setCount }) {
//   return (
//     <div>
//       <CountRender count={count} />
//       <Buttons count={count} setCount={setCount} />
//     </div>
//   )
// }

// function CountRender({ count }) {
//   return (
//     <div>
//       The count is: {count}
//     </div>
//   )
// }

// function Buttons({ count, setCount }) {
//   return (
//     <div>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   )
// }

// export default App;


//In the above code, you can see prop drilling is performed and some of the components have been passed
//with props which are not needed to them. The Count component actual does not need setCount state but it is
// just passed to Count component sp that it can pass the setCount to button component. However, this codebase
// is not excessively deep but you can use some techniques(eg: Context API) to make your code more readable,
//understandable, managable


// Replace props drilling with context, in above codebase:
//========================================================================
//Step 1: Create the context 
//Step 2: Use the context hook
//Step 3: Provide the context

import { useContext, useState } from "react";
import { CountContext } from "./context";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </div>
  )
}

function Count() {
  return (
    <div>
      {console.log("This is from Count Component.")}
      <CountRenderer />
      <Buttons />
    </div>
  )
}

function CountRenderer() {
  const { count } = useContext(CountContext);
  return (
    <div>
      {console.log("This is from CountRenderer")}
      {count}
    </div>
  )
}

function Buttons() {
  const { count, setCount } = useContext(CountContext);
  return (
    <div>
      {
        console.log("this is from buttons")
      }
      <button onClick={() => setCount(count + 1)} >Increment</button>
      <button onClick={() => setCount(count - 1)} >Decrement</button>
    </div>
  )
}

export default App;