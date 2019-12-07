import React, { useRef, useEffect, useState } from 'react'
import { TweenMax, Power3 } from 'gsap'





class Animination {



}

//BACK BUTTON
function BackBtn({ text }) {

  return (
    <button
      // onMouseEnter={btnExpand(backBtn)}
      // onMouseLeave={btnEStrink(backBtn)}
      className="back-btn"
      style={BackBtnStyle}
    >
      <div className="back-btn-icon" style={{ transform: 'rotate(180deg)' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="17.465" height="8.237" viewBox="0 0 17.465 8.237">
          <g transform="translate(-2.3 -7.881)">
            <line x2="16" transform="translate(3 12)" strokeWidth="1.6" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M12,5l3.129,3.129L12,11.258" transform="translate(3.936 3.871)" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          </g>
        </svg>
      </div>
      {text}
    </button>
  )
}

//VIEW BUTTON
function ViewBtn({ text }) {

  return (

    <button
      // onMouseEnter={btnExpand(viewBtn)}
      // onMouseLeave={btnEStrink(viewBtn)}
      className="back-btn"

    >
      {text}
      <div className="back-btn-icon" style={{ marginLeft: '1rem' }} >
        <svg xmlns="http://www.w3.org/2000/svg" width="17.465" height="8.237" viewBox="0 0 17.465 8.237">
          <g transform="translate(-2.3 -7.881)">
            <line x2="16" transform="translate(3 12)" strokeWidth="1.6" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M12,5l3.129,3.129L12,11.258" transform="translate(3.936 3.871)" fill="none" stroke="#ffffff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" />
          </g>
        </svg>
      </div>
    </button>
  )
}

const BackBtnStyle = {
  position: 'fixed',
  bottom: '10%',
  left: '5%'
}


export { BackBtn, ViewBtn }
