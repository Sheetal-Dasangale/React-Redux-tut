import React, {useState} from "react";
export default function Counter (){
const [num, setNum]=useState(0);
    return(
        <div>
        <h2>Counter</h2>
          <h3>{num}</h3>
          <button onClick = {()=>setNum(num+1)}>Addition</button>  
          <button onClick = {()=>setNum(num-1)}>Subtraction</button>  
        </div>
    )
}