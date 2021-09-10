import React,{useState} from "react";

function Counter()
{
    const [count,setcount]=useState(0);
    return(
        <>
        <p>Let us add a counter</p>

        <p>No of likes : {count} </p><br/>
        <button onClick={()=>setcount(count=>count+1)}>Increment</button><br/>
        <button onClick={()=>setcount(count=>count-1)}>Decrement</button>
        </>
    )
}

export default Counter;