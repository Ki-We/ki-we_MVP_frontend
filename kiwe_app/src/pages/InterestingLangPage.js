import '../styles/interestingLang.css';
import Footer from '../Footer';
import ProgressIndicator from "../components/ProgressIndicator";
import React, { useEffect,useState} from 'react';
import Grid from '@mui/material/Grid';

const interestLang=[
  {lang_display:'한국어', lang_name:'Korean'},
  {lang_display:'English', lang_name:'English'},
  {lang_display:'日本語', lang_name:'Japanese'},
  {lang_display:'繁體中文', lang_name:'Tranditional_chinese'},
  {lang_display:'简体中文', lang_name:'Simplified Chinese'},
  {lang_display:'Français', lang_name:'France'},
  {lang_display:'Deutsch', lang_name:'Dutch'},
  {lang_display:'español', lang_name:'Spanish'},
  {lang_display:'Tiếng Việt', lang_name:'Vietnam'},
  {lang_display:'русский', lang_name:'Russian'},
  {lang_display:'others', lang_name:'etc'},
]

const InterestingLangPage=()=>{
  const[interestingLang, setInterestingLang]=useState([]);
  const[isFormComplete, setIsFormComplete]=useState(false);

  useEffect(()=>{
    console.log(interestLang);
    setIsFormComplete(interestingLang.length>0);
  },[interestingLang, isFormComplete]);

  const LangItem=({lang_display,onClick})=>{
    if(lang_display==='others'){
      return(
        <div className="lang-box-container">
          <input 
            type="text"
            placeholder="언어 직접입력"
            className={(e)=>
            onClick({lang_display:e.target.value,lang_name:"etc"})}/>
        </div>
      );
    }
    return(
        <div className="lang-box-container">
          <button className='lang-btn' onClick={onClick}>
            {lang_display}
          </button>
        </div>
    );
  };

  const handleBtnClick=(lang)=>{
    const isAlreadySelected = interestingLang.find(item=>item.langName===lang.langName);
    if(isAlreadySelected){
      setInterestingLang(prevInterestingLang =>prevInterestingLang.filter(item=>item.langName !==lang.langName));
    }else{
      setInterestingLang(prevInterestingLang=>[...prevInterestingLang,lang]);
    }
  }

  return(
    <>
      <ProgressIndicator progress={100}/>
        <div className="lang-select-container">
          <div className="top-title">
            <h2>관심언어를</h2>
            <h2>1개 이상 선택해 주세요.</h2>
          </div>
          <div className="lang-grid">
            <Grid container spacing={3}>
              {interestLang.map((lang)=>(
                <Grid item xs={4} key={lang.lang_name}>
                  <LangItem
                  lang_display={lang.lang_display}
                  onClick={()=>handleBtnClick(lang)}/>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      <Footer buttonText="선택완료" isFormComplete={isFormComplete}/>
    </>
  );
}

export default InterestingLangPage;