import '../styles/selectTopicPage.css';
import Grid from '@mui/material/Grid';
import ProgressIndicator from "../components/ProgressIndicator";
import Footer from '../Footer';
import React, { useEffect,useState} from 'react';

const interests=[
  {name: '문화/전시/공연', imgUrl: '/assets/movie.jpg'},
  {name: '한국문화', imgUrl: '/assets/movie.jpg'},
  {name: '맛집/카페', imgUrl: '/assets/movie.jpg'},
  {name: '스포츠', imgUrl: '/assets/movie.jpg'},
  {name: '놀이공원', imgUrl: '/assets/movie.jpg'},
  {name: '여행', imgUrl: '/assets/movie.jpg'},
  {name: '스터디', imgUrl: '/assets/movie.jpg'},
  {name: '게임/보드게임', imgUrl: '/assets/movie.jpg'},
  {name: '파티/클럽', imgUrl: '/assets/movie.jpg'},
  {name: 'K-pop', imgUrl: '/assets/movie.jpg'},
  {name: '영화/드라마/애니', imgUrl: '/assets/movie.jpg'},
  {name: '음악/악기', imgUrl: '/assets/movie.jpg'},
  {name: '댄스', imgUrl: '/assets/movie.jpg'},
  {name: '봉사활동', imgUrl: '/assets/movie.jpg'},
  {name: '쇼핑', imgUrl: '/assets/movie.jpg'},
  {name: '수공예/그림', imgUrl: '/assets/movie.jpg'},
  {name: '반려동물', imgUrl: '/assets/movie.jpg'},
  {name: '술', imgUrl: '/assets/movie.jpg'},
];

const SelectTopic=()=>{
  const[selectedTopic,setSelectedTopic]=useState([]); //선택된 관심주제
  const[isFormComplete, setIsFormComplete]= useState(false);
  
  useEffect(() => {
    console.log(selectedTopic);
    setIsFormComplete(selectedTopic.length>0); //관심주제 하나이상 들어오면 activate
  }, [selectedTopic,isFormComplete]);
  
  const TopicItem=({imgUrl,topicName,onClick})=>{
    const isSelected= selectedTopic.some((interest)=>interest.name=== topicName);
    return(
      <>
        <div className="topic-box-container">
          <button className='topic-btn' onClick={onClick} >
          <img className={`topic-img ${isSelected? "selected":''}`}src={imgUrl} alt="topic-img-btn"  /> 
          </button>
          <div className="topicName">{topicName}</div>
        </div>
      </>
      
    );
  };

  const handleBtnClick=(interest)=>{
    const isAlreadySelected=selectedTopic.find(item=>item.name===interest.name);
    
    if(isAlreadySelected){
      //Remove the object
      setSelectedTopic(prevSelectedTopic=> prevSelectedTopic.filter(item=>item.name!==interest.name));
    }else{
      setSelectedTopic(prevSelectedTopic=>[...prevSelectedTopic, interest]);
    }
  }
  return(
    <>
      <ProgressIndicator progress={70}/>
        <div className="topic-page-box">
          <div className="top-title">
            <h2>관심 주제를</h2>
            <h2>1개 이상 선택해 주세요.</h2>
          </div>
          <div className="topic-grid">
            <Grid  container spacing={3.3}>
                  {interests.map((interest)=>(
                    <Grid item xs={4} key={interest.name}>
                      <TopicItem 
                      imgUrl={interest.imgUrl}
                      topicName={interest.name}
                      isSelected={selectedTopic.includes(interest)}
                      onClick={()=>handleBtnClick(interest)}/> 
                    </Grid>
                  ))}
            </Grid>
          </div>
        </div>
      <Footer
        buttonText="선택완료"
        isFormComplete={isFormComplete}
      />
    </>
  );
}
export default SelectTopic;