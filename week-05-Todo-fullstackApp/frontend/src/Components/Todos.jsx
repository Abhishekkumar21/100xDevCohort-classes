/**
 * @returns 
  todos = [
    {
        title: "go to gym"
        dexcription: 
    },
    {
        title:"go to market"
        dexcription: 
    }
  ]
 */

import PropTpyes from 'prop-types'





export function Todos({todos}){
    //return  a div which renders all the todos

    return (
        <div>
            {todos.map((todo, index) => {
                return <div key={index}>
                    <h2>{todo.title}</h2>
                    <p> {todo.description} </p>
                    <button>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
                     </div>
            })}
        </div>
    )
}



Todos.propTypes = {
    todos: PropTpyes.array,
}