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

import { useState, useEffect } from "react"
import axios from "axios"

export default function App() {
  const [btnNumber, setBtnNumber] = useState(1)

  return (
    <>
      <button onClick={() => setBtnNumber(1)}>1</button>
      <button onClick={() => setBtnNumber(2)}>2</button>
      <button onClick={() => setBtnNumber(3)}>3</button>
      <button onClick={() => setBtnNumber(4)}>4</button>
      <Todo id={btnNumber} />

    </>
  )
}

function Todo({ id }) {
  const [todo, setTodo] = useState({});

  // useEffect(() => {
  //   axios.get("https://sum-server.100xdevs.com/todo?" + "id=" + id)
  //     .then(response => setTodo(response.data.todo))
  // }, [])   //dependency array is empty, axios api call will made only once when the 'Todo' comp will render for
  // for the first time

  //passing 'id' in the dependency aaray so that axios api call can be made everytime 'id' changes upon clicking
  // different buttons

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todo?" + "id=" + id)
      .then(response => setTodo(response.data.todo))
  }, [id])

  return (
    <>
      <p>Id : {id}</p>
      <h2>{todo.title}</h2>
      <p>{todo.description}</p>
    </>

  )
}
