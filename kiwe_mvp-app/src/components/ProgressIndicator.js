import { useState } from 'react';

const ProgressIndicator=(props)=>{
  const[progress, setProgress]=useState(props.progress||0);

  return(
  <header style={{position:"fixed", zIndex:"999", top:0, left:0, right:0 , backgroundColor:"white", paddingTop:"15%"}}>
    <div style={{
      display:"flex",
      alignItems: "center",
      justifyContent:"center"
    }}>
    <img src="/assets/back-arrow.png" onClick={handleBackClick}
      style={{marginLeft:"10px",}}/>
    <div className="progress-bar"
      style={{
        height:"4px",
        width:"40.4%",
        margin:"0 auto",
        backgroundColor:"#ddd",
        position:"relative",
        
      }}>
      <div
        className="progress-bar-fill"
        style={{width: `${progress}%`,
        height:"100%",
        backgroundColor:"#0f161e",
        position:"absolute",
        left:"0",
        top:"0"
      }}
      />
    </div>
    </div>
  </header>);
}
export default ProgressIndicator;

