import React, { useState , useEffect } from 'react';
import CardList from "./components/card-list/CardList";
import SearchBox from './components/search-box/SearchBox';
import './App.css';

function App() {

  const [monster,setMonster] = useState([])
  const [input,setInput] = useState([])
  
  const fetchData = async() => {
    await fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(res=>{setMonster(res)})
  }

  useEffect(()=>{
    fetchData()
  },[])

  const filterMonster = monster.filter((item) => item.name.toLocaleLowerCase().includes(input))
  const onSearchChange = (e) => {
    setInput(e.target.value.toLocaleLowerCase())
  }

  return (
    <div className="app">
      <h1 className='title'>Monster Rolodex</h1>
      <SearchBox 
        className="search-box__monster"
        placeholder="search Monster"
        onChangeHandler={onSearchChange}/>
      <CardList 
        className="monsters"
        show={filterMonster} />
    </div>
  );
}

export default App;
