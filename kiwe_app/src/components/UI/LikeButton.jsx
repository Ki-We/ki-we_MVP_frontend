import React,{useState} from 'react'

export default function LikeButton(props) {
  const [likeBtnImg, setLikeBtnImg]=useState('./assets/LikeButton_white.png');
  const [likeButtonFilter, setLikeButtonFilter] = useState("brightness(100)");

  const likeBtnStyle={
    width: '7%',
    height: '7.3%', 
    display: 'inline', 
    position: 'absolute', 
    top: props.top,
    right: props.right,
  }
  const likeBtnImgStyle={
    width:'100%',
    height:'100%',
    filter:likeButtonFilter,
  }
  const likeButtonClick=()=>{
    if(likeBtnImg==='./assets/LikeButton_white.png'){
      setLikeBtnImg('./assets/LikeButton_hover.png');
      setLikeButtonFilter("none");
    }else{
      setLikeBtnImg('./assets/LikeButton_white.png');
      setLikeButtonFilter("brightness(100)");
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

