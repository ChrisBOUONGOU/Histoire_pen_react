import React from 'react';
import {Link} from 'react-router-dom';
import './Cards.css';
function Cards(props) {
	return(
   <li className="cards__item">
       <Link className="cards__item__link" to={props.path}>
       <figure className="cards__item__pic-wrap">
         <img src={props.src} alt="dfsfds" className="cards__item__img" />
       </figure> 
        <div className="cards__item__info">
           
        </div>
       </Link>
      

      </li>     
       


		);
}

export default Cards;