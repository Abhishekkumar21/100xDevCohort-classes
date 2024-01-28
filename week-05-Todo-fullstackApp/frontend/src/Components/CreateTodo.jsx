import { useState } from "react";

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const addTodo = async () => {
        try {
            const response = await fetch('http://localhost:8081/addTodos',{
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-Type": "application/json"
                }
               
            });
            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            alert("Todo added");
        } catch (error) {
            console.error("Error adding todo:", error.message);
        }
    }

    return (
        <div>
            <input id = 'title'
             type='text' placeholder="title"
             onChange={function(event){
                const value = event.target.value;
                setTitle(value)
             }}
             ></input> 
            <br></br>
            <input 
            id="description"
            type="text" placeholder="description"
            onChange={function(event){
                const value = event.target.value;
                setDescription(value);
            }}
            ></input>
            <br></br>
            <button onClick ={addTodo}>Add Todo</button>
        </div>
    )
}   