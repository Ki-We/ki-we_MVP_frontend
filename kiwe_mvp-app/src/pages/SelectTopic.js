import '../styles/selectTopicPage.css';


const interests=[
  {name: '문화/전시/공연', imgUrl: '../assets/img/exampleIcon.jpeg'},
  {name: '한국문화', imgUrl: '../assets/img/exampleIcon.jpeg'},
  {name: '맛집/카페', imgUrl: '../assets/img/exampleIcon.jpeg'},
  {name: '스포츠', imgUrl: '../assets/img/exampleIcon.jpeg'},
  {name: '놀이공원', imgUrl: '../assets/img/exampleIcon.jpeg'},
  {name: '여행', imgUrl: '../assets/img/exampleIcon.jpeg'},
  {name: '스터디', imgUrl: '../assets/img/exampleIcon.jpeg'},
  {name: '게임/보드게임', imgUrl: '../assets/img/exampleIcon.jpeg'},
  {name: '파티/클럽', imgUrl: '../assets/img/exampleIcon.jpeg'},
  {name: 'K-pop', imgUrl: '../assets/img/exampleIcon.jpeg'},
  {name: '영화/드라마/애니', imgUrl: '../assets/img/exampleIcon.jpeg'},
  {name: '음악/악기', imgUrl: '../assets/img/exampleIcon.jpeg'},
  {name: '댄스', imgUrl: '../assets/img/exampleIcon.jpeg'},
  {name: '봉사활동', imgUrl: '../assets/img/exampleIcon.jpeg'},
  {name: '쇼핑', imgUrl: '../assets/img/exampleIcon.jpeg'},
  {name: '수공예/그림', imgUrl: '../assets/img/exampleIcon.jpeg'},
  {name: '반려동물', imgUrl: '../assets/img/exampleIcon.jpeg'},
  {name: '술', imgUrl: '../assets/img/exampleIcon.jpeg'},
];

const SelectTopic=()=>{
  const TopicItem=({imgUrl, topicName,onClick})=>{
    return(
      <div className="topic-container">
      <button className="topic-btn" onClick={onClick}>
        <img src={imgUrl} alt="topic-img-btn"/> 
      </button>
      <div className="topicName">{topicName}</div>
    </div>
    );
  };

  const handleButoonClick=(interest)=>{
    console.log(`you clicked the ${interest.name} button!`);
  }
  return(
    <>
      <div className="top-title">
        <h2>관심 주제를</h2>
        <h2>1개 이상 선택해주세요.</h2>
      </div>
      <div className="topics-btns">
        {interests.map((interest)=>(
          <TopicItem 
          key={interest.name}
          imgUrl={interest.imgUrl}
          topicName={interest.name}
          onClick={()=>handleButoonClick}/>
        ))}
      </div>
      
    </>
  );
}
export default SelectTopic;