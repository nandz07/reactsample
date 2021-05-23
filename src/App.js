// import {useState} from 'react'
// //import Counter from './Counter'
// import Employee from './Employee'
// function App() {
//   const [count,setCount]=useState(0)
//   const addCount=()=>{
//     setCount(count+1)
//     console.log(count)
//   }
//   // let obj = {
//   //   title:'1st counter',
//   //   count
//   //   ,
//   //   place:'hello'
//   // }
//   let emp=[{name:'nandu',age:'15'},
//   {name:'musk',age:'21'},
//   {name:'tata',age:'25'}
// ]
//   return (
//     <div className="App">
//       <button onClick={addCount}>Add</button>
//       {/* <Counter {...obj}/>
//       <Counter title='2nd' count={count}/>
//      */}
//      {
//        emp.map((obj,index)=>
//         //  (<div>
//           //  <h1>Hello</h1>
//            <Employee key={index} {...obj}/>
//           //  </div>)
//        )
//      }
//     <br/>
//     </div>
//   );
// }

//import counter from "./counter";

// export default App;
import Counter from './Counter';
import {useState} from 'react'
function App(){
  const [state,setState]=useState(false)
  return(
    <div className='App'> 
    <h1 onClick={()=>setState(!state)}>show/hide</h1>
    { state &&<Counter/> }
      </div>
  )
}

export default App
