import React, { Component } from "react";
import "./paragraph.css";
import k2 from '../../imgs/Gallery/gallery-2-631x587.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHelicopter } from '@fortawesome/free-solid-svg-icons';
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import Leftparagraoh from "./leftparagraoh.js";
import Features from "./features";
class paragraph extends Component {
  render() {
    return (
      <div className="parent">
        <div className='container'>
        <Leftparagraoh  />
          <div className="paragraph">
              <Features  header='A FEW WORDS ABOUT US' 
              paragraph=' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum. Sed
              ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur.' />
              {/* <Features header='OFFERING THE BEST PIZZA IN LOS ANGELES' paragraph=' Lotus advenas ducunt ad gemna. Ubi est domesticus domina? Heu,
              barbatus mens! Cum elogium favere, omnes lubaes tractare talis,
              barbatus adiuratores. Mirabilis hydras ducunt ad danista. Dominas
              sunt accentors de germanus cacula. Amicitias prarere in alta muta!
              Ecce, bubo! Nunquam promissio verpa. Talis, primus fugas recte
              consumere de audax, festus indictio. Nunquam quaestio scutum.
              Valebats Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.' />
              <Features header='OFFERING THE BEST PIZZA IN LOS ANGELES' paragraph='Lotus advenas ducunt ad gemna. Ubi est domesticus domina? Heu,
                  barbatus mens! Cum elogium favere, omnes lubaes tractare talis,
                  barbatus adiuratores. Mirabilis hydras ducunt ad danista. Dominas
                  sunt accentors de germanus cacula. Amicitias prarere in alta muta!
                  Ecce, bubo! Nunquam promissio verpa. Talis, primus fugas recte
                  consumere de audax, festus indictio. Nunquam quaestio scutum.
                  Valebats Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.' />
                  <Features header='OFFERING THE BEST PIZZA IN LOS ANGELES' paragraph='Lotus advenas ducunt ad gemna. Ubi est domesticus domina? Heu,
                  barbatus mens! Cum elogium favere, omnes lubaes tractare talis,
                  barbatus adiuratores. Mirabilis hydras ducunt ad danista. Dominas
                  sunt accentors de germanus cacula. Amicitias prarere in alta muta!
                  Ecce, bubo! Nunquam promissio verpa. Talis, primus fugas recte
                  consumere de audax, festus indictio. Nunquam quaestio scutum.
                  Valebats Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.'  />
                  <Features header='PROVIDING TOP-NOTCH CUSTOMER SERVICE' paragraph='  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                  quae ab illo inventore veritatis et quasi architecto beatae vitae
                  dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
                  eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                  est, qui dolorem ipsum quia dolor sit amet, consectetur. Lotus
                  advenas ducunt ad gemna. Ubi est domesticus domina? Heu, barbatus
                  mens! Cum elogium favere, omnes lubaes tractare talis, barbatus
                  adiuratores. Mirabilis hydras ducunt ad danista. Dominas sunt
                  accentors de germanus cacula. Amicitias prarere in alta muta!
                  Ecce, bubo! Nunquam promissio verpa. Talis, primus fugas recte
                  consumere de audax, festus indictio. Nunquam quaestio scutum.
                  Valebats' />
            <Features header='INTEGRITY & DEDICATION' paragraph='Albus, dexter particulas grauiter consumere de ferox, bi-color
                  abactus. Impositios studere, tanquam mirabilis hippotoxota. Cur
                  torus manducare? Pol, vox! Cum barcas nocere, omnes specieses
                  contactus Lotus advenas ducunt ad gemna. Ubi est domesticus
                  domina? Heu, barbatus mens! Cum elogium favere, omnes lubaes
                  tractare talis, barbatus adiuratores. Mirabilis hydras ducunt ad
                  danista. Dominas sunt accentors de germanus cacula. Amicitias
                  prarere in alta muta! Ecce, bubo! Nunquam promissio verpa. Talis,
                  primus fugas recte consumere de audax, festus indictio. Nunquam
                  quaestio scutum. Valebats' /> */}
              </div>
              
              <div className="photo">
                <img src={k2} alt="" width="800" height="418"></img>
              </div>
            </div>
            <div className="ourfeatures">
              <div className="boxes">
                <div className="box1">
                  <FontAwesomeIcon icon={faHelicopter} className='icons'></FontAwesomeIcon>
                  <h3>Free Delivery</h3>
                  <p>Lotus advenas ducunt ad gemna. Ubi est domesticus domina heu.</p>
                </div>
                <div className="box2">
                  <FontAwesomeIcon icon={faPizzaSlice} className='icons'></FontAwesomeIcon>
                  <h3>20+ Pizza Options</h3>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</p>
                </div>
                <div className="box3">
                  <FontAwesomeIcon icon={faLeaf} className='icons'></FontAwesomeIcon>
                  <h3>Fresh Ingredients</h3>
                  <p>Albus, dexter particulas grauiter consumere de ferox, bi-color abactus.</p>
                </div>

              </div>

            </div>
          </div>
        );
  }
}

        export default paragraph;
