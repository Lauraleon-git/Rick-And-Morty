import Card from './Card';

function Cards({characters,onClose}) {
   
   return (
   <div>
      {
         characters.map(({id,name,status,gender,origin,image})=>{
            return(
             <Card
               key={id}
               id={id}
               name={name}
               status={status}
               specie={gender}
               image={image}
               origin={origin.name}
               onClose={onClose}
                  />
            );
         })
         
      }
      

   </div>
   )
   
}
export default Cards;