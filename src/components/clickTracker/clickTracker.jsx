import React from "react";
import "./clickTracker.css";

function ClickTracker(props){  
  const [clicks, setClicks] = React.useState(0)
  
  function handleSubstract(){
    // validación
    setClicks(clicks - 1)
  }

  return (
    <div className="divT">
      <button className="button1" disabled={ clicks <= 1 } onClick={ handleSubstract}>➖</button>
      <p className="texto">Cantidad Comprada: {clicks}</p>
      <button className="button2" onClick={ ()=> setClicks(clicks + 1)}>➕</button>
    </div>
  )
}

export default ClickTracker;