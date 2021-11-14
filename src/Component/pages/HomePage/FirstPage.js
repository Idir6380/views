import React from 'react'
import HelloSquare from './HelloSquare'
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import './FirstPage.css'

function FirstPage() {
  return
  <div className='row'>
    <div className='col-md-6 col-sm-6'>
      <HelloSquare />
    </div>
    <div className='col-md-6 col-sm-6'>
      <h1>Need a project?</h1>
    </div>
  </div>
}

export default FirstPage
