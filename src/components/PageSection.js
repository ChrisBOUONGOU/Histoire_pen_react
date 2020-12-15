import React from 'react';
import {Link} from 'react-router-dom';
import './PageSection.css';
function PageSection(props) {
	return(
   <li className="cards___item">
       <Link className="cards___item__link" to={props.path}>
       <figure className="cards___item__pic-wrap">
         <img src={props.src} alt="dfsfds" className="cards___item__img" />
       </figure> 
        <div className="cards___item__info">
           
        </div>
       </Link>
      

      </li>     
       


		);
}


export default PageSection;