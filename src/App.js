// // import {useState} from 'react'
// // //import Counter from './Counter'
// // import Employee from './Employee'
// // function App() {
// //   const [count,setCount]=useState(0)
// //   const addCount=()=>{
// //     setCount(count+1)
// //     console.log(count)
// //   }
// //   // let obj = {
// //   //   title:'1st counter',
// //   //   count
// //   //   ,
// //   //   place:'hello'
// //   // }
// //   let emp=[{name:'nandu',age:'15'},
// //   {name:'musk',age:'21'},
// //   {name:'tata',age:'25'}
// // ]
// //   return (
// //     <div className="App">
// //       <button onClick={addCount}>Add</button>
// //       {/* <Counter {...obj}/>
// //       <Counter title='2nd' count={count}/>
// //      */}
// //      {
// //        emp.map((obj,index)=>
// //         //  (<div>
// //           //  <h1>Hello</h1>
// //            <Employee key={index} {...obj}/>
// //           //  </div>)
// //        )
// //      }
// //     <br/>
// //     </div>
// //   );
// // }

// //import counter from "./counter";

// // export default App;
// import Counter from './Counter';
// import {useState} from 'react'
// function App(){
//   const [state,setState]=useState(false)
//   return(
//     <div className='App'> 
//     <h1 onClick={()=>setState(!state)}>show/hide</h1>
//     { state &&<Counter/> }
//       </div>
//   )
// }

// export default App

import React from 'react';
//import reactDom from 'react-dom';
import './App.css';
import {useState} from 'react';

function App() {
  const [toDos,setToDos]=useState([])
  const [toDo,setToDo]=useState('')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value ={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{ id:Date.now() ,text :toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj)=>{
        return(
          <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.checked)
              console.log(obj)
              setToDos(toDos.filter(obj2=>{
                if(obj2.id===obj.id){
                  obj2.status=e.target.checked
                }
                return obj2
              }))
            }} value={obj.status} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
            
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div> )
        })}
        {toDos.map((obj)=>{
            if(obj.status){
              return(<h1>{obj.text}</h1>)
            }
            return null
        })}
      </div>
    </div>
  );
}

export default App;
