import React from 'react'

export default function Card({CardImgURL, CardTitle, InfoDate, InfoLocation, InfoLang}) {
  return (
    <div>
      <div className="CardContainer">
        <img className="CardImg" src={CardImgURL}/>
        <span className="CardTitle">{CardTitle}</span>
        <ul className="CardDetailInfo">
          <li>
            <img className="InfoIcon" alt="날짜" src=""/>
            <span>{InfoDate}</span>
          </li>
          <li>
            <img className="InfoIcon" alt="위치" src=""/>
            <span>{InfoLocation}</span>
          </li>
          <li>
            <img className="InfoIcon" alt="언어" src="./assets/language.png"/>
            <span>{InfoLang}</span>
          </li>
        </ul>
        <img className="likeIcon" src="" alt="좋아요"/>
      </div>
    </div>
  )
}
