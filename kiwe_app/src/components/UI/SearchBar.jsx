import React, {useState} from 'react';

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm]=useState("");

  const handleChange= (e)=>{
    setSearchTerm(e.target.value)
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    props.onSearch(searchTerm);
  }
  
  const searchBarStyle = {
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    margin: '0 auto',
    maxWidth: '300px',
  };
  
  const searchInputStyle = {
    border: 'none',
    borderBottom: '1.5px solid #868686',
    outline: 'none',
    padding: '7px',
  };
  
  const searchSubmitBtnStyle = {
    border: 'none',
    background: 'none',
    marginLeft: '8px',
    cursor: 'pointer',
  };
  
  const searchIconStyle = {
    width: '20px',
    height: '20px',
  };

  return (
    <form onSubmit={handleSubmit} style={searchBarStyle}>
      <input type="text" value={searchTerm} onChange={handleChange} placeholder="키워드를 검색해 주세요." style={searchInputStyle}/>
      <button className="searchSubmitBtn" type="submit" style={searchSubmitBtnStyle}><img src="./assets/search.png" alt="Search icon" style={searchIconStyle}/></button>
    </form>
  )
}
