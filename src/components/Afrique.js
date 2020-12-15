import React from 'react';
import PageSection from './PageSection';
import southafrica from './pictures/southafrica.png';
import algerie from './pictures/algerie.png';
import angola from './pictures/angola.png';
import benin from './pictures/benin.png';
import botswana from './pictures/botswana.png';
import burkina from './pictures/burkina.png';
import burundi from './pictures/burundi.png';
import cameroun from './pictures/cameroun.png';
import capoverde from './pictures/capoverde.png';
import centrafrique from './pictures/centrafrique.png';
import comores from './pictures/comores.png';
import congob from './pictures/congob.png';
import congok from './pictures/congok.png';
import coteiv from './pictures/coteiv.png';
import djibouti from './pictures/djibouti.png';
import egypte from './pictures/egypte.png';
import erythre from './pictures/erythre.png';
import eswatini from './pictures/eswatini.png';
import ethiopie from './pictures/ethiopie.png';
import gabon from './pictures/gabon.png';
import gambie from './pictures/gambie.png';
import ghana from './pictures/ghana.png';
import guinee from './pictures/guinee.png';
import bissau from './pictures/buissau.png';
import equatoriale from './pictures/equatoriale.png';
import kenya from './pictures/kenya.png';
import lesotho from './pictures/lesotho.png';
import liberia from './pictures/liberia.png';
import libye from './pictures/libye.png';
import madagascar from './pictures/madagascar.png';
import malawie from './pictures/malawi.png';
import mali from './pictures/mali.png';
import maroc from './pictures/maroc.png';
import maurice from './pictures/maurice.png';
import mauritanie from './pictures/mauritanie.png';
import mozambique from './pictures/mozambique.png';
import namibie from './pictures/namibie.png';
import niger from './pictures/niger.png';
import nigeria from './pictures/nigeria.png';
import ouganda from './pictures/ouganda.png';
import rwanda from './pictures/rwanda.png';
import sao from './pictures/sao.png';
import senegal from './pictures/senegal.png';
import seychelles from './pictures/seychelles.png';
import sierra from './pictures/sierra.png';
import somalie from './pictures/somalie.png';
import soudan from './pictures/soudan.png';
import southsudan from './pictures/southsudan.png';
import tanzanie from './pictures/tanzanie.png';
import tchad from './pictures/tchad.png';
import togo from './pictures/togo.png';
import tunisie from './pictures/tunisie.png';
import zambie from './pictures/zambie.png';
import zimbabwe from './pictures/zimbabwe.png';

function Afrique(){
    return(
      <>
<section>
            <article class="cadre">
            <h2 class="cadri">Sélectionner un pays</h2>
            <div className="cards">
      
          <div className="cards___container">
           <div className="cards___wrapper">
             <div className="cards___items">
               <PageSection src={southafrica}  path='/' />
               <PageSection src={algerie}  path='/' />
               <PageSection src={angola}  path='/' />
               <PageSection src={benin}  path='/Asie' />
               <PageSection src={botswana}  path='/Asie' />
               <PageSection src={burkina}  path='/Asie' />
             </div>
             <div className="cards___items">
               <PageSection src={burundi}  path='/Europe' />
               <PageSection src={cameroun}  path='/Oceanie' />
               <PageSection src={capoverde}  path='/Asie' />
               <PageSection src={centrafrique}  path='/Asie' />
               <PageSection src={comores}  path='/Asie' />
               <PageSection src={congob}  path='/Asie' />
              
             </div>
             <div className="cards___items">
               <PageSection src={congok}  path='/Europe' />
               <PageSection src={coteiv}  path='/Oceanie' />
               <PageSection src={djibouti}  path='/Asie' />
               <PageSection src={egypte}  path='/Asie' />
               <PageSection src={erythre}  path='/Asie' />
               <PageSection src={eswatini}  path='/Asie' />
              
             </div>
             <div className="cards___items">
               <PageSection src={ethiopie}  path='/Europe' />
               <PageSection src={gabon}  path='/Oceanie' />
               <PageSection src={gambie}  path='/Asie' />
               <PageSection src={ghana}  path='/Asie' />
               <PageSection src={guinee}  path='/Asie' />
               <PageSection src={bissau}  path='/Asie' />
              
             </div>
             <div className="cards___items">
               <PageSection src={equatoriale}  path='/Europe' />
               <PageSection src={kenya}  path='/Oceanie' />
               <PageSection src={lesotho}  path='/Asie' />
               <PageSection src={liberia}  path='/Asie' />
               <PageSection src={libye}  path='/Asie' />
               <PageSection src={madagascar}  path='/Asie' />
              
             </div>

             <div className="cards___items">
               <PageSection src={malawie}  path='/Europe' />
               <PageSection src={mali}  path='/Oceanie' />
               <PageSection src={maroc}  path='/Asie' />
               <PageSection src={maurice}  path='/Asie' />
               <PageSection src={mauritanie}  path='/Asie' />
               <PageSection src={mozambique}  path='/Asie' />
              
             </div>

             <div className="cards___items">
               <PageSection src={namibie}  path='/Europe' />
               <PageSection src={niger}  path='/Oceanie' />
               <PageSection src={nigeria}  path='/Asie' />
               <PageSection src={ouganda}  path='/Asie' />
               <PageSection src={rwanda}  path='/Asie' />
               <PageSection src={sao}  path='/Asie' />
              
             </div>

             <div className="cards___items">
               <PageSection src={senegal}  path='/Europe' />
               <PageSection src={seychelles}  path='/Oceanie' />
               <PageSection src={sierra}  path='/Asie' />
               <PageSection src={somalie}  path='/Asie' />
               <PageSection src={soudan}  path='/Asie' />
               <PageSection src={southsudan}  path='/Asie' />
              
             </div>

             <div className="cards___items">
               <PageSection src={tanzanie}  path='/Europe' />
               <PageSection src={tchad}  path='/Oceanie' />
               <PageSection src={togo}  path='/Asie' />
               <PageSection src={tunisie}  path='/Asie' />
               <PageSection src={zambie}  path='/Asie' />
               <PageSection src={zimbabwe}  path='/Asie' />
              
             </div>
           </div>
          </div>

        </div>
        </article>
        </section>
      </>
    );
}







export default Afrique;