
// function App() {
//   return(
//     <>
//       <Header title='abhishek1'></Header>
//       <Header title='abhishek2'></Header>
//     </>

    
//     //<> </> : does not let you create a extra <div> and acts like the parent for these two <Header> child elements
//     // <React.Fragment></React.Fragment> also does the same thing (before using this tag, import it from 'react' lib)
//   )
// }

// function Header({title}) {
//   return(
//     <div>
//       {title}
//     </div>
//   )
// }

// export default App

//---------------------------------------------------------------------------------------------------------

// import { useState } from "react"
// function App() {
//    const [title, setTitle] = useState("My name is Abhishek1")

//    function udpateTitle(){
//       setTitle(`My name is ${Math.random()}`);
//    }

//   return(
//     <>
//       <button onClick={udpateTitle}>Update the title</button>
//       <Header title={title}></Header>
//       <Header title='My name is Abhishek2'></Header>
//     </>
//       )
// }

// function Header({title}) {
//   return(
//     <div>
//       {title}
//     </div>
//   )
// }

// export default App

//---------------------------------------------------------------------------------------------------------
// Reducing the number of re-renders

// import React, { useState } from "react"
// function App() {
//   return(
//     <>
//       <HeaderWithButton></HeaderWithButton>
//       <Header title='My name is Abhishek2'></Header>
//     </>
//       )
// }

// function HeaderWithButton(){
//   const [title, setTitle] = useState("My name is Abhishek1")

//    function udpateTitle(){
//       setTitle(`My name is ${Math.random()}`);
//    }

//    return(
//     <>
//       <button onClick={udpateTitle}>Updates only first header</button>
//       <div>
//         {title}
//       </div>
//       {/* <Header title={title}></Header> */}

//     </>
//    )
// }

// function Header({title}) {
//   return(
//     <div>
//       {title}
//     </div>
//   )
// }

// export default App


// To minimize the number of re-renders we can used React.memo() method also instead of 
// pushing down the state down to the parent(root) component into indivisual child comp

//---------------using React.memo()--------------------------------------------------------------------

// import React, { useState } from "react"
// function App() {
//    const [title, setTitle] = useState("My name is Abhishek1")
//   function udpateTitle(){
//       setTitle(`My name is ${Math.random()}`);
//    }

//   return(
//     <div>
//       <button onClick={udpateTitle}>Update the title</button>
//       <Header title={title}></Header>
//       <Header title='My name is Abhishek2'></Header>
//       <Header title='My name is Abhishek3'></Header>
//     </div>
//       )
// }

// const Header = React.memo(function Header({title}) {
//   return(
//     <div>
//       {title}
//     </div>
//   )
// })

// export default App


//--------------------------- Keys in react --------------------------------------------------------------

import { useState } from "react";

let counter = 4;

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: 'go to gym',
    description: 'got to gym 7-9 AM'
  }, {
    id: 2,
    title:'go to music class',
    desxription: 'music class: 10-12 AM'
  }, {
    id: 3,
    title: 'go to shopping',
    description: 'shopping: 4-5 PM'
  }
]);

  function addTodo(){
    setTodos([...todos, {
      id: counter++,
      title: `New todo : ${Math.random()}`,
      description: "This is new todo that is added"
    }])
  }

  return(
   <div>
    <button onClick={addTodo}>Add a todo</button>
    {todos.map(todo => <Todo title={todo.title} description={todo.description}/>)}
   </div>
  )

}

function Todo({title, description}){
  return(
    <div>
      <h2>
        {title}
      </h2>
      <h5>
        {description}
      </h5>
    </div>
  )
}

export default App