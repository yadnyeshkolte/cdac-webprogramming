import React from "react";

import mypicture from '../assets/flogimages.jpg'
function Image(){
    const picture: string = mypicture;
    return(
        <>
        <div style={{}}>
            <p>hi there</p>
            <img src={picture} alt="My Picture" style={{height:"50dvh"}} />
        </div>
        </>
    )
}

export default Image;