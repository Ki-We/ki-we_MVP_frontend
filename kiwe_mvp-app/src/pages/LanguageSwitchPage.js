import React, {useState}  from 'react';

const LanguageSwitchPage=()=>{
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
      

      <form method="post" action="" class="form">
        <div class="languageSwitch-form">
          <button>한국어</button>
          <button>English</button>
        </div>
        <div class="agreement_form">
          <div class="agreement_terms">
            <input type="checkbox" id="terms-check" checked={termCheck} onChange={termBtnEvent}/>
            <label for="terms-check">이용약관/ Terms and Conditions Agreement</label>
            <input type="checkbox" id="terms-privacy" checked={privacyCheck} onChange={privacyBtnEvent}/>
            <label for="terms-check">이용약관/ Terms and Conditions Agreement</label>                     
          </div>
        </div>
        <div class="btn-next" type="submit"> 
          NEXT 
        </div>
      </form>
      
    </>
  )
}
export default LanguageSwitchPage;