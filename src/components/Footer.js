import React from 'react'
import year from '../assets/year.png'

const Footer = () => {

  return(
    <div id="page-container">
      <div id="content-wrap">
        <footer> 
          <p> 
            &copy; Presented by the Instruction Team | <img src={ year } height="12" alt="2023 in cat font" />        
          </p>
        </footer>
      </div>
    </div>
  )
}

export default Footer;