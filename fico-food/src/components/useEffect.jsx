import { useEffect, useState } from "react";
function App2() {
    const [name,setName] = useState("")
    const [windowWidth,setWindow] = useState(window.innerWidth);
    const  handleChange = (e) => {
        setName(e.target.value)
    }
    useEffect(() => {
        window.addEventListener("resize",updateWindow)
    },[])
    const updateWindow = () =>{
         setWindow(window.innerWidth)
     }
    
    // useEffect(() => {
    //  console.log("app mounted...");
    // //cleanup => before it re-renders there happen umounting and we can do something 
    //  return () =>{
    //      console.log("we unmounted...");
    //  }
    // },[name])
    return (
        <div>
            <h1>The window width is : {windowWidth}</h1>
            <form>
            <label htmlFor="">Name:</label>
            <input type="text" name="name" value={name} onChange={handleChange}  />
        </form> 
        </div>
        
     );
}

export default App2;