import React from 'react';
import TagBlock from './TagBlock';
import LikeButton from './LikeButton';
import './AlbumCard.css';


export default function AlbumCard() {
  
  const participantImg={
    width:"1.2rem",
    height:"1.2rem",
    filter:"invert(1)",
    marginRight:"1px",
  }
  
  
  return (
    <>
      <div className="albumCardContainer">
        <LikeButton top={"4%"} right={"4%"}/>
        <img className="albumBackgroundImg" src="./assets/album.jpg"/>
        <div className="albumTop">
          <img className="writerProfileImg" src="./assets/movie.jpg" />          
          <span className="albumTitle">저랑 K팝 얘기 할 친구 찾아요⭐</span>
        </div>
        <div className="infoContainer">
          <div className="infoTags">
            <TagBlock borderColor={0} boxShadow={1} color={"rgba(128, 228, 95, 0.98)"}> 23.03.12</TagBlock>
            <TagBlock borderColor={0} boxShadow={1} color={"rgba(191, 221, 238, 0.98)"}> Sinchon </TagBlock>
            <TagBlock borderColor={0} boxShadow={1} color={"rgba(202, 236, 210, 0.98)"}> English</TagBlock>
          </div>
          <div className="countParticipants">
            <TagBlock borderColor={0} boxShadow={1} color={"rgba(0, 0, 0, 0.5)"}>
              <img src="./assets/countParticipant.png" style={participantImg}/><span style={{color:"white"}}>2/5</span></TagBlock>
          </div>
        </div>
        
      </div>
    </>
  )
}
