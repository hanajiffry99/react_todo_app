import React,{useState} from "react";
import Counter from "./Counter";


function Post()
{
  const [data,setdata]=useState(null);
  const [reply,setreply]=useState(false);

  const getData=(e)=>
  {
    //console.log(e.target.value);
    setdata(e.target.value);
  }

  return(
    <>
    <div>
      <div>
        {
          reply?<p>{data}</p>:null
        }
      </div>
      <div>
        {
          reply?null:<input type="text" placeholder="Enter your reply" onChange={getData}/>
        }
      </div><br/><br/>
      <button onClick={()=>setreply(true)}>Reply</button><br/><br/>
      <Counter/><br/><br/>
    </div>
    </>
  );
}

export default Post;