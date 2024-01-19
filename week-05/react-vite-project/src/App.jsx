// import  { useState } from 'react' //importing the hook- useState from 'react' core library

// import './App.css'

// //Defining a component - named 'App'
// function App() {
//   //initializing the state
//    const [count, setCount] = useState(0);

//     //updating the state - count
//   // function onClickHandler (){
//   //   setCount(count + 1);
//   // }

//   //returning the dynamic part
//   return (
//   //  <div>
//   //   <button onClick ={onClickHandler}> Counter {count}</button>
//   //  </div>
//   )
// }

// export default App





//------------------------------------------------------------------------------------------------------------------

import { useState } from 'react';


import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  );
}

//better way to defining your components and calling then inside the APP() component for rendering.
function CustomButton(props) {
  
  function onClickHandler() {
    props.setCount(props.count + 1);
  }

  return <button onClick={onClickHandler}>Counter {props.count}</button>;
}

export default App;

