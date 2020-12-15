import React from 'react';

import Cards from './Cards'
import afrique from './pictures/afrique.png';
import amerique from './pictures/amerique.png';
import asie from './pictures/asie.png';
import europe from './pictures/europe.png';
import oceanie from './pictures/oceanie.png';

function Histoire(){

	return (
    <>
     <section>
            <article class="cadre">
            <h2 class="cadri">Sélectionner un continent</h2>
            <div className="cards">
      
          <div className="cards__container">
           <div className="cards__wrapper">
             <ul className="cards__items">
               <Cards src={afrique}  path='/Afrique' />
               <Cards src={amerique}  path='/Amerique' />
               <Cards src={asie}  path='/Asie' />
             </ul>
             <ul className="cards__items">
               <Cards src={europe}  path='/Europe' />
               <Cards src={oceanie}  path='/Oceanie' />
              
             </ul>
           </div>
          </div>

        </div>
        </article>
        </section>
        

     
 

    </>
  );
}


export default Histoire;