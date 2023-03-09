import React, {useState}  from 'react';

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
    if(privacyBtnEvent===false){
      setPrivacyCheck(true)
    }else{
      setPrivacyCheck(false)
    }
  }
  return(
    <>
      <img id= "logo" src="" alt="키위새"></img>
      <h2>KiWES</h2>
      

      <form method="post" action="" className="form">
        <div className="languageSwitch-form">
          <button>한국어</button>
          <button>English</button>
        </div>
        <div className="agreement_form">
          <div className="agreement_terms">
            <input type="checkbox" id="terms-check" checked={termCheck} onChange={termBtnEvent}/>
            <label htmlFor="terms-check">이용약관/ Terms and Conditions Agreement</label>
            <input type="checkbox" id="terms-privacy" checked={privacyCheck} onChange={privacyBtnEvent}/>
            <label htmlFor="terms-check">이용약관/ Terms and Conditions Agreement</label>                     
          </div>
        </div>
        <button className="btn-next" type="submit"> 
          NEXT 
        </button>
      </form>
      
    </>
  )
}
export default SelectLanguagePage;