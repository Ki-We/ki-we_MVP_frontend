//test
const Footer=({buttonText, isFormComplete })=>{
  const buttonStyle={
    width:'100%',
    height:'100%',
    color: isFormComplete?"white":"black",
    backgroundColor:'white',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1.5rem',
    letterSpacing:"-2px",
    fontWeight:'1000',
    backgroundColor: isFormComplete? "#3dbe14" :"white",
};

  return(
    <footer style={styles.footer}>
      <hr stlye={styles.line}/> 
      <button className="footer_button" style={buttonStyle} >
        {buttonText}
      </button>
    </footer>
  )
}
export default Footer;

const styles = {
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '13%',
    borderTop: '1px solid #e6e6e6',
    backgroundColor: '#f9f9f9',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    

  },
  line: {
    width: '80%',
    height: '0',
    margin: '0',
    border: '1px solid #e6e6e6',
  },
  
};