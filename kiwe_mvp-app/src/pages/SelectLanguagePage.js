import React, {useState}  from 'react';
import '../styles/langPage.css';
const SelectLanguagePage=()=>{
  const [termCheck,setTermCheck]= useState(false);
  const [privacyCheck,setPrivacyCheck]= useState(false);

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
  return(
    <>
      <div className="logobox">
          <img src="/assets/kiwes_logo.png" alt="키위새"/>
          <span className="title">KiWES</span>
      </div>
      
      <form method="post" action="" className="form">
        <div className="languageSwitch-form">
          <button className="rectangleBox">한국어</button>
          <button className="rectangleBox">English</button>
        </div>
        <div className="agreement_form">
          <div className="agreement_set">
            <input type="checkbox" id="terms-check" checked={termCheck} onChange={termBtnEvent}/>
            <label htmlFor="terms-check">이용약관/  Terms and Conditions Agreement</label>
          </div>
          <div className="agreement_set">
            <input type="checkbox" id="terms-privacy" checked={privacyCheck} onChange={privacyBtnEvent}/>
            <label class="privacy-text" htmlFor="terms-privacy">개인정보 처리방침 동의/ Privacy Policy Agreement</label>                     
          </div>
        </div>
      </form>
      
    </>
  )
}
export default SelectLanguagePage;