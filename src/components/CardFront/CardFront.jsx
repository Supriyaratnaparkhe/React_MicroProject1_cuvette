import React from 'react';
import './CardFront.css';
import Ellipse1 from './Ellipse1.png';
import Ellipse2 from './Ellipse2.png';
function CardFront(props) {
  return (
    <div className='card1'>
      <div className='cardf'>
        <div className='ellipse'>
            <div><img src={Ellipse1} alt="" /></div>
            <div><img src={Ellipse2} alt="" /></div>
        </div>
        <div className="displayCardNumber">
            <div>{props.cardNumber || '0000 0000 0000 0000'}</div>
        </div>
        <div className="nameExp">
            <div className="displayHolderName">
            { props.holderName || 'JANE APPLESEED' }
            </div>
            <div className="displayExp">
              {props.month || '00'}/{props.year || '00'}
            </div>
        </div>      
      </div>     
    </div>
  )
}

export default CardFront
