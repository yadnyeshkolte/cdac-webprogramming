import React from 'react'
import mypic from './assets/mypic.jpg'
//React gives a Element called fragment, which is a common pattern in ReactJs to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.    
export default function UserInfo() {
    const name : string = "Phaniraj";
    const email : string = "phanirajbn@gmail.com"
    const pic : string = mypic; 
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="card">
                        <img className='card-image img-thumbnail rounded-5 card-sm' src={pic} alt="My Pic" />
                        <h2 className='card-title'>{name}</h2>
                        <hr />
                        <p className='card-text'>{email}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
