import React from 'react'
import noCats from '../assets/notfound.png'
const NotFound = () => {

  return(
    <> 
      <img src={noCats} class="rounded-circle" alt="kitten holding a comment bubble stating not found" width="304" height="400"/>
    </>
  )
}

export default NotFound;