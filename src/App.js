import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import { useState,useEffect } from 'react';
import axios from 'axios';



function App() {
   //implementar un estado de characters
const[characters,setCharacters]=useState([]);
//peticion a un aapi se puede realizar con axios le pasa la url
//y esta concatenando un id el cual nos traera el dato 
const onSearch=(id) =>{
   axios(`https://rickandmortyapi.com/api/character/${id}`)
   .then(Response=> Response.data)
   .then((data) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
         
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}

//funcion close 
const onClose=(id)=>{
   const charactersFiltered=characters.filter(character=>
      character.id!== Number(id))
      setCharacters(charactersFiltered)
}

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose}/>
         
      </div>
   );
}

export default App;
