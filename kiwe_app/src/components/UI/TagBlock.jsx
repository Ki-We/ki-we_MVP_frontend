import React from 'react'

export default function TagBlock(props) {
  const tagBlockStyles = {
    backgroundColor: props.color || 'rgba(0, 0, 0, 0.25)',
    width: "auto",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0.2rem",
    borderRadius: "30px",
    boxShadow: "0 3px 3px 0",
    fontSize: "0.75rem",
    fontWeight:"600",
    color:"#040404",
  };
  return (
    <div className="tagBlockCover" style={tagBlockStyles}>
      {props.children}
    </div>
  )
}
