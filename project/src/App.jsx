
import { useState } from "react"
import { accordionData } from "./utils/content"
import { TiArrowSortedDown } from "react-icons/ti";
import { TiArrowSortedUp } from "react-icons/ti";


const Test = ({title,content}) =>{
   const [isActive,setIsActive] = useState(false)
   const [backgroundColor,setBackgroundColor] = useState("transparent")
   
    
   const handle = (e) => {
    if(e.target.button) {
        setIsActive(isActive)
    } else {
        setIsActive(!isActive)
        setBackgroundColor(backgroundColor === "transparent" ? "aqua" : "transparent")
    }
   }

   return(
     <>
      <button style={{background:"black", color:"white", padding:"10px",borderRadius:"5px", textAlign:"center",fontSize:"13px",fontFamily:"sans-serif",marginLeft:"10px", }}   onClick={handle}>
        {title} {isActive === false ? < TiArrowSortedDown /> : < TiArrowSortedUp />}
      </button>

      <div  style={{backgroundColor,color:"black",padding:"5px 10px",borderRadius:"5px", marginLeft:"80px", marginTop:"10px",marginBottom:"20px"}}>
        {isActive && <p style={{fontFamily:"sans-serif",fontSize:"12px"}} >{content}</p>}
      </div>
       
     </>
    )
}

const App = () => {
  return (
      <>
      <div className="container">
     {accordionData.map(({title,content})=>(
        <Test title={title} content={content} key={Math.random() * 10}/>
     ))}
      
      </div>
     </>
   )
 }
 
 export default App;

