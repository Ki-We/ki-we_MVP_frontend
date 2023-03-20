import React from 'react'
import './Card.css';
import LikeButton from './LikeButton';

export default function Card({CardImgURL, CardTitle, InfoDate, InfoLocation, InfoLang}) {
  return (
    <div>
      <div className="cardWrapper">
        <div className="cardContainer">
          <img className="cardImg" src="./assets/movie.jpg"/>
          <div className="infoSection">
            <span className="cardTitle">타이틀예시라구요</span>
            <ul className="cardDetailInfo">
              <li>
                <div className="infoImgContainer">
                <img id="dateIcon" alt="날짜" src="./assets/calendar.png"/>
                </div>
                <span className="infoContent">23.03.18</span>
              </li>
              <li>
                <div className="infoImgContainer">
                <img id="locationIcon" alt="위치" src="./assets/location.png"/>
                </div>
                <span className="infoContent">서울턱별시</span>
              </li>
              <li>
                <div className="infoImgContainer">
                <img id="langIcon" alt="언어" src="./assets/language.png"/>
                </div>
                <span className="infoContent">한국어 English</span>
              </li>
            </ul>
          </div>
        </div>
        <LikeButton width={"5%"} height={"13%"} top={"80%"} right={"4%"}/>

      </div>
    </div>
  )
}
