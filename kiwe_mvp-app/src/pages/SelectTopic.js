import '../styles/selectTopicPage.css';
import Grid from '@mui/material/Grid';
import '../styles/selectTopic.css';

const interests=[
  {name: '문화/전시/공연', imgUrl: ''},
  {name: '한국문화', imgUrl: ''},
  {name: '맛집/카페', imgUrl: ''},
  {name: '스포츠', imgUrl: ''},
  {name: '놀이공원', imgUrl: ''},
  {name: '여행', imgUrl: ''},
  {name: '스터디', imgUrl: ''},
  {name: '게임/보드게임', imgUrl: ''},
  {name: '파티/클럽', imgUrl: ''},
  {name: 'K-pop', imgUrl: ''},
  {name: '영화/드라마/애니', imgUrl: ''},
  {name: '음악/악기', imgUrl: ''},
  {name: '댄스', imgUrl: ''},
  {name: '봉사활동', imgUrl: ''},
  {name: '쇼핑', imgUrl: ''},
  {name: '수공예/그림', imgUrl: ''},
  {name: '반려동물', imgUrl: ''},
  {name: '술', imgUrl: ''},
];

const SelectTopic=()=>{
  const TopicItem=({imgUrl, topicName,onClick })=>{
    return(
      <>
        <button className="topic-btn" onClick={onClick}>
        <img src={imgUrl} alt="topic-img-btn"/> 
        </button>
        <div className="topicName">{topicName}</div>
      </>
      
    );
  };

  const handleBtnClick=(interest)=>{
    console.log(`you clicked the ${interest.name} button!`);
  }
  return(
    <>
        <div className="top-title">
          <h3>관심 주제를</h3>
          <h3>1개 이상 선택해주세요.</h3>
        </div>
        <Grid container spacing={3.5}  >
              {interests.map((interest)=>(
                <Grid item xs={4}>
                  <TopicItem 
                  key={interest.name}
                  imgUrl={interest.imgUrl}
                  topicName={interest.name}
                  onClick={()=>handleBtnClick(interest)}/> 
                </Grid>
              ))}
        </Grid>
    </>
  );
}
export default SelectTopic;