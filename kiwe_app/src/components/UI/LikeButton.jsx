import React,{useState} from 'react'

export default function LikeButton(props) {
  const [likeBtnImg, setLikeBtnImg]=useState('./assets/likebutton.png');

  const likeBtnStyle={
    width: props.width,
    height: props.height, 
    display: 'inline', 
    top: props.top,
    right: props.right,
    position:'absolute',
    zIndex:'4',
  }
  const likeBtnImgStyle={
    width:'100%',
    height:'100%',
  }
  const likeButtonClick=()=>{
    if(likeBtnImg==='./assets/likebutton.png'){
      setLikeBtnImg('./assets/likebutton_green.png');
    }else{
      setLikeBtnImg('./assets/likebutton.png');
    }
  }
  return (
    <>
      <div className="likeButton" style= {likeBtnStyle} onClick={likeButtonClick}>
        <img src={likeBtnImg} style={likeBtnImgStyle}/>
      </div>
    </>
  )
}

