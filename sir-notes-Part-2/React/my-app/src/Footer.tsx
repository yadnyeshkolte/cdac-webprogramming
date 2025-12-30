import React from 'react'

//The CSS Class is set to div element using className attribute. In ReactJs, we use className instead of class to avoid conflict with the reserved keyword 'class' in JavaScript.
export default function Footer() {
    const year : number = new Date().getFullYear();
  return (
    <div className='bottom-div'>
        <i>&copy; All Rights Reserved. Powered by React - {year}</i>
    </div>
  )
}
