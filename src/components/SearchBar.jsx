 import { useState } from "react";
 
 function SearchBar({onSearch}) {

   const [id,setId]=useState('');

   const handlechange=(event)=>{
      //console.log(event)
      setId(event.target.value)//una ves pase esto pasa a vacio
      
   }
   return (
      <div>
         {/* en el value se debe tener el mismo dato de value con id  */}
          <input type='search'  onChange={handlechange} value={id}/>
         <button onClick={()=>{onSearch(id); setId('')}}>Agregar</button> 
         {/* se debe poner el callback cuano se necesite pasar arumentos a una funcion   */}
      </div>
   );
}
export default SearchBar