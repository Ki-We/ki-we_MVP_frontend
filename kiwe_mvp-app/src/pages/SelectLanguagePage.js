import React, {useState,useEffect}  from 'react';
import '../styles/langPage.css';
import Footer from '../Footer';

const SelectLanguagePage=()=>{
  const [termCheck,setTermCheck]= useState(false);
  const [privacyCheck,setPrivacyCheck]= useState(false);
  const [selectedLanguage, setSelectedLanguages]= useState(null);
  const [isFormComplete, setIsFormComplete]= useState(false);

  //언어선택 버튼
  const handleButtonClick=(language)=>{
    setSelectedLanguages(language);
  }

  const termBtnEvent=()=>{
    if(termCheck===false){
      setTermCheck(true)
    }else{
      setTermCheck(false)
    }
  }
  const privacyBtnEvent=()=>{
    if(privacyCheck===false){
      setPrivacyCheck(true)
    }else{
      setPrivacyCheck(false)
    }
  }
  //to update whether user clicked everything.
  useEffect(()=>{
    if(termCheck&&privacyCheck&&selectedLanguage){
      setIsFormComplete(true);
    }else{
      setIsFormComplete(false);
    }
  },[termCheck, privacyCheck, selectedLanguage]);

  return(
    <>
      <div className="logobox">
          <img src="/assets/kiwes_logo.png" alt="키위새"/>
          <span className="title">KiWES</span>
      </div>
      <div fclassName="form">
        <div className="languageSwitch-form">
          <button className={`rectangleBox ${selectedLanguage === "ko" ? "active" : ""}`}
        onClick={() => handleButtonClick("ko")}
          >한국어</button>
          <button  className={`rectangleBox ${selectedLanguage === "en" ? "active" : ""}`}
        onClick={() => handleButtonClick("en")}
          >English</button>
        </div>
        <div className="agreement_form">
          <div className="agreement_set">
            <input type="checkbox" id="terms-check" checked={termCheck} onChange={termBtnEvent} required/>
            <label htmlFor="terms-check">이용약관/  Terms and Conditions Agreement</label>
          </div>
          <div className="agreement_set">
            <input type="checkbox" id="terms-privacy" checked={privacyCheck} onChange={privacyBtnEvent} required/>
            <label class="privacy-text" htmlFor="terms-privacy">개인정보 처리방침 동의/ Privacy Policy Agreement</label>                     
          </div>
        </div>
      </div>
      <Footer 
        buttonText="NEXT"
      />
    </>
  )
}
export default SelectLanguagePage;