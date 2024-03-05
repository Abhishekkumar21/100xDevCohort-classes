import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      {/* <Count count={count} />
      <Buttons count={count} setCount={setCount} /> */}
      <Count count={count} setCount={setCount} />
    </div>
  )
}

function Count({ count, setCount }) {
  return (
    <div>
      <CountRender count={count} />
      <Buttons count={count} setCount={setCount} />
    </div>
  )
}

function CountRender({ count }) {
  return (
    <div>
      The count is: {count}
    </div>
  )
}

function Buttons({ count, setCount }) {
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  )
}

export default App;


//In the above code, you can see prop drilling is performed and some of the components have been passed
//with props which are not needed to them. The Count component actual does not need setCount state but it is
// just passed to Count component sp that it can pass the setCount to button component. However, this codebase
// is not excessively deep but you can use some techniques(eg: Context API) to make your code more readable,
//understandable, managable