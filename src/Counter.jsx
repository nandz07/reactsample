// import React from 'react'

// function Counter({title,...obj}) {
     
//     return (
        
//         <div>
//             <h1>{title}{obj.count}{obj.place}</h1>
//         </div>
//     )
// }

// export default Counter

import React,{useState,useEffect} from 'react'

function Counter() {
    const [count,setCount]=useState(0)
    const [count2,setCount2]=useState(0)
    useEffect(()=>{
        console.log('mounting..')
        console.log('count1..'+count)
        console.log('count2..'+count2)
        
        
    },[count,count2])
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <h1>Hello I am component:{count}</h1>

            <button onClick={()=>setCount2(count2+1)}>Increment</button>
            <h1>Hello I am component 2:{count2}</h1>
        </div>
    )
}

export default Counter

