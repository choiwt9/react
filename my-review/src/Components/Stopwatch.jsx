import { useEffect, useState } from "react";


const Stopwatch = () => {

    const[time, setTime] = useState(0);
    const[running, isRunning] = useState(false);

    useEffect(() => {
        
        let timer;

        console.log(running);
        

        if(running){
            timer = setInterval(()=>{
                 setTime(t => t+1);
            }, 1000);
        }

        return() => clearInterval(timer);
         
    },[running]);

    
    return(
    <>
      <h1>Stopwatch</h1>
      <h3>{parseInt(time/60)}:{time % 60}</h3>

      <button onClick={()=>{isRunning(true)}}>start</button>
      <button onClick={()=>{isRunning(false)}}>stop</button>
      <button onClick={()=>{isRunning(false);setTime(0);}}>reset</button>
      </>
)
}
export default Stopwatch;

