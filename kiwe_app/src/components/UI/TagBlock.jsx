import React from 'react'

export default function TagBlock(props) {
  const tagBlockStyles = {
    backgroundColor: props.color || 'white',
    width: "auto",
    minWidth: "3.5rem",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.2rem",
    borderRadius: "30px",
    boxShadow: props.boxShadow== 1 ? "0 3px 3px 0 rgba(0,0,0,0.3)" : "none", 
    border: props.borderColor==0? "none": 'solid 1px #3dbe14', 
    fontSize: "0.75rem",
    fontWeight: "600",
    color: "#040404",
  };
  
  return (
    <div className="tagBlockCover" style={tagBlockStyles}>
      {props.children}
    </div>
  )
}