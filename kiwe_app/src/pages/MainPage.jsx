import React, {useState} from 'react';
import SearchBar from '../components/UI/SearchBar';
import AlbumCard from '../components/UI/AlbumCard';
import TagBlock from '../components/UI/TagBlock';
import Card from '../components/UI/Card';
import './MainPage.css';

export default function MainPage() {
  const [cardIndex, setCardIndex] = useState(0);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch= searchTerm=>{
    setSearchResults([...searchResults, searchTerm]); //user가 검색한 검색어들
  }
  const handlePrevClick = () => {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
    }
  };
    const handleNextClick = () => {
      // assuming there are 5 cards total
      if (cardIndex < 5) {
        setCardIndex(cardIndex + 1);
      }
    };
  
  return (
    <div className="mainContainer">
      <div className="searchBar">
        <SearchBar onSearch={handleSearch}/>
      </div>
      <div className="popularPost">
        <span className="mainTitle">인기 모임</span>
        <AlbumCard width={"100%"} heigh={"100%"}/>
      </div>
      <div className="postCategory">
        <span className="mainTitle">카데고리별 모임</span>
        <div className="categories">
          <TagBlock>🐱 반려동물</TagBlock>
          <TagBlock>🥨 맛집/카페</TagBlock>
          <TagBlock>👛 쇼핑</TagBlock>
          <TagBlock>🇰🇷 한국 문화</TagBlock>
          <TagBlock>🎟️ 문화/전시/공연</TagBlock>
          <TagBlock>🎬 영화/드라마/애니</TagBlock>
          <TagBlock>🎡 놀이공원</TagBlock>
          <TagBlock>✈️ 여행</TagBlock>
          <TagBlock>🎧 K-pop</TagBlock>
          <TagBlock>📚 스터디</TagBlock>
          <TagBlock>💗 봉사활동</TagBlock>
          <TagBlock>🏀 스포츠</TagBlock>
          <TagBlock>🎵 음악/악기</TagBlock>
          <TagBlock>🎨 수공예/그림</TagBlock>
          <TagBlock>🎮 게임/보드게임</TagBlock>
          <TagBlock>🍺 술</TagBlock>
          <TagBlock>🩰 댄스</TagBlock>
          <TagBlock>🪩 파티/클럽</TagBlock>
        </div>
      </div>
      <div className="recoPost">
        <span className="mainTitle">추천 모임</span>
        <div className="recoSection">
          <button className="recoPostBtn" onClick={handlePrevClick}><img src="./assets/previous.png"/></button>
          <Card className="cardPosition" likeWidth={"4%"} likeTop={"210%"} likeRight={"4%"} />
          <button className="recoPostBtn" onClick={handleNextClick}><img src="./assets/next.png"/></button>
        </div>
      </div>
    </div>
  );
}
