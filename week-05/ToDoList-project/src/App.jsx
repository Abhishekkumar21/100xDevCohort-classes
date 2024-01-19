
//Todo-list App (in-memory)

import {useState} from 'react'

function App() {
  //Intializing the state variable and set function using hook- useState()
  const [todos, setTodos] = useState([]);



  function addTodo() {
    let newTodos = [];
    for(let i=0; i<todos.length; i++){
      newTodos.push(todos[i]);
    }

    newTodos.push({
      title: "Gym",
      description: "go to gym from 7-9AM"
    })

    //updating the state variable - todos with the new array "newTodos"
    setTodos(newTodos);
  }

  //Rendering the UI
  return (
    <div>
      <button onClick={addTodo}> Add a random todo</button>
      {/*iterating over each element of todos array and for each element rendering a Todo component */}
      {todos.map((todo, index) => {
        return <Todo key={index} title={todo.title} description={todo.description} />
      })}
    </div>
  )

}

//Todo Component: Component to represent a single todo item
function Todo(props){
  return(
    <div>
        <h2>{props.title}</h2>
      <h2>{props.description}</h2>
    </div>
  )
}
export default App;