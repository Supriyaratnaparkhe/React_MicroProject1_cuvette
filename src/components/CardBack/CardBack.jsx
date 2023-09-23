import React from 'react'
import './CardBack.css';
function CardBack(props) {
  return (
    <div>
      <div className='card2'>
        <div className='header'>        
        </div>
        <div className='cvv'>
            <div className='cvvDisplay'>{props.cvv || '000'}</div>
        </div>
        <div className='dummyText'>
            <div className='row1'>
                <div className='ele1'></div>
                <div className='ele2'></div>
                <div className='ele3'></div>
                <div className='ele4'></div>
            </div>
            <div className='row2'>
                <div className='ele5'></div>
                <div className='ele6'></div>
                <div className='ele7'></div>
                <div className='ele8'></div>
            </div>
            <div className='row3'>
                <div className='ele9'></div>
                <div className='ele10'></div>
                <div className='ele11'></div>
                <div className='ele12'></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CardBack
