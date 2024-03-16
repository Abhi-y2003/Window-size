import React, { useEffect, useState } from "react";
import './App.css'


function App() {
  const [Height, setHeight] = useState(window.innerHeight);

  const[Width, setWidth]  =useState(window.innerWidth);
  

  useEffect( ()=>{

    const resizeHandler =() =>{
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
    }

    window.addEventListener('resize', resizeHandler);

    return()=> {
      window.removeEventListener('resize', resizeHandler);
    }
  });
  return (
    <div className="App">
      Window size is  {Height} X  {Width}    
    </div>
  );
}

export default App;
