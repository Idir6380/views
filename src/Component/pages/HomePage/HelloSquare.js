import React from 'react'
import LeftImage from './Image'
import './HelloSquare.css'
function HelloSquare() {
  return (
    <div className='left-half row'>
      <div className='col'>
        <div className='hello-square'>
          <h1>
            <span>Hel</span>lo
          </h1>
          <p>Welcome to our portfolio</p>
        </div>
        <div className='white-circle'>
          <LeftImage />
        </div>
      </div>
      <div className='col-md-6 col-sm-6'>
        <h1>Need a project?</h1>
      </div>
    </div>
  )
}
export default HelloSquare
