const Footer=({buttonText, onClick })=>{
  return(
    <footer style={styles.footer}>
      <hr stlye={styles.line}/> 
      <button className="footer_button" style={styles.button} onClick={onClick}>
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
    position: 'absolute',
    bottom: '0',
    width: '100%',

  },
  line: {
    width: '80%',
    height: '0',
    margin: '0',
    border: '1px solid #e6e6e6',
  },
  button: {
    width:'100%',
    height:'100%',
    color: 'black',
    backgroundColor:'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1.7rem',
    fontWeight:'bold',
  },
};