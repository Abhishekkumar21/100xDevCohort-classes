//useState() -
// useEffect()-

// import { useState, useEffect } from 'react'
// import axios from 'axios'

// export default function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(response => setTodos(response.data.todos))
//   }, [])

//   return (
//     <>
//       {todos.map((todo) => <Todo title={todo.title} description={todo.description} />)}
//     </>
//   )
// }

// function Todo({ title, description }) {
//   return (
//     <div>
//       <h1> {title}</h1>
//       <p>{description}</p>
//     </div>
//   )
// }

//-------------------------------------------------------------------------------------------------------------
//Problem statemet: Write a component that takes a todo id as an input
// And fetches the data for that todo from the given endpoint
// And then renders it
// How would the dependency array change?
// https://sum-server.100xdevs.com/todo?id=1

// import { useState, useEffect } from "react"
// import axios from "axios"

// export default function App() {
//   const [btnNumber, setBtnNumber] = useState(1)

//   return (
//     <>
//       <button onClick={() => setBtnNumber(1)}>1</button>
//       <button onClick={() => setBtnNumber(2)}>2</button>
//       <button onClick={() => setBtnNumber(3)}>3</button>
//       <button onClick={() => setBtnNumber(4)}>4</button>
//       <Todo id={btnNumber} />

//     </>
//   )
// }

// function Todo({ id }) {
//   const [todo, setTodo] = useState({});

//   // useEffect(() => {
//   //   axios.get("https://sum-server.100xdevs.com/todo?" + "id=" + id)
//   //     .then(response => setTodo(response.data.todo))
//   // }, [])   //dependency array is empty, axios api call will made only once when the 'Todo' comp will render for
//   // for the first time

//   //passing 'id' in the dependency aaray so that axios api call can be made everytime 'id' changes upon clicking
//   // different buttons

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todo?" + "id=" + id)
//       .then(response => setTodo(response.data.todo))
//   }, [id])

//   return (
//     <>
//       <p>Id : {id}</p>
//       <h2>{todo.title}</h2>
//       <p>{todo.description}</p>
//     </>

//   )
// }



//------------useMemo() hook ---------------------------------------------------------------------------------

//If I ask you to create an app that does two things -
// 1. Increases a counter by 1
// 2. Lets user put a value in an input box (n) and you need
// to show sum from 1-n
// One restriction - everything needs to be inside App

// import { useState } from "react";
// import { useMemo } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [userInput, setUserInput] = useState(1);


//   // let sum = 0;
//   // for (let i = 1; i <= userInput; i++) {
//   //   sum = sum + i;
//   // }

//   //useMemo - sum will render only when the userInput is changed, not everytime App component renders
//   let sum = useMemo(() => {
//     let sum = 0;
//     for (let i = 1; i <= userInput; i++) {
//       sum = sum + i;
//     }
//     return sum;
//   }, [userInput])

//   function onClickHandler() {
//     setCount(count + 1)
//   }
//   function onChangeHandler(e) {
//     setUserInput(e.target.value)
//     console.log(userInput)
//   }

//   return (
//     <>
//       <input type='text' placeholder="Enter the number(n):" onChange={onChangeHandler}></input>
//       <br />
//       The sum from 1 to {userInput} : {sum}
//       <br />
//       <button onClick={onClickHandler}>Counter({count})</button>
//     </>
//   )
// }

//Que: is the above codebase is optimal? - No
// Why is this codebase is not optiomal?
//when you click on the counter button -> state variable"count" gets changed and re-render
// of the App component happens => count value on button changed , also the re-render of input element happened& also the sum operation
// also happend again  which an expensive operation
// Every time, button clicked -> counter changes, also the sum operations happens again whether input is changed or not
// So, runnig the sum operation with  each click on couter button, making the codebase
// not optimized.
//Ideally what should happen with 'sum' thing? - this opearation should happen only when the input changes.
// so to skip the re-render or "Sum", we'll pass its logic to a hook - useMemo()
//useMemo() is similar to useEffect() - syntax-wise.
// useEffect() can also be used in this case but it make us create an extra state variable and which causes the on extra render than useMemo().

//Explore: Diff. b/w useMemo() and useEffect()



//--------useCallback():------------------------------------------------------------
// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. 
//Use useCallback to ensure that these functions are not recreated on every render.
// import { memo, useCallback, useState } from 'react'

// export default function App() {
//     const [count, setCount] = useState(0);

//     const incrementHandler = useCallback(
//         function () {
//             setCount(Currentcount => Currentcount + 1)
//         }, []
//     )

//     const decrementHandler = useCallback(
//         function () {
//             setCount(Currentcount => Currentcount - 1)
//         }, []
//     )


//     console.log("Parent App component re-rendered")
//     return (
//         <>
//             <p>Count : {count}</p>
//             <ChildComponent increment={incrementHandler} decrement={decrementHandler} />
//         </>
//     )
// }

// const ChildComponent = memo(
//     function ({ increment, decrement }) {
//         console.log("Child Component re-rendered")
//         return (
//             <>
//                 <button onClick={increment}>Increment</button>
//                 <button onClick={decrement}>Decrement</button>
//             </>
//         )
//     }
// )

// function ChildComponent({ increment, decrement }) {
//     console.log("Child Component re-rendered")
//     return (
//         <>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//         </>
//     )
// }


//----------------useRef()---------------------------------------------------------
//useRef lets you reference a value across the re-renders and also lets you reference 
// a DOM element and then you can manipulate that element explicitly

//use case: Manipulating the DOM
// create a component that have an input text box and a button - focus to the text box  when clicked
//use case: Retaining a value across the re-renders -
// create a component that calculate and displays the number of times component has renders


//1.create a component that have an input text box and a button - focus to the text box  when clicked
import { useState, useRef, useEffect } from 'react';

export default function App() {

    const [, setDummyState] = useState(0);
    const numberOfTimesReRenders = useRef(0)
    useEffect(() => {
        numberOfTimesReRenders.current = numberOfTimesReRenders.current + 1
    })

    console.log("Component re-rendered")
    return (
        <>
            <p> The component has rendered {numberOfTimesReRenders.current} times.</p>
            <button onClick={() => setDummyState(Math.random())}>Force re-render</button>
        </>
    )

}





