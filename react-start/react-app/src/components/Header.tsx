import React from "react";



function Header() {
    return(
        <div style={{position: "fixed", top: "0"}}>
            <h2>Welcome to my First app</h2>
            <hr />
            <nav>
                <ul >
                    <li style={{display:"inline", marginRight:"10px"}}>Home</li>
                    <li style={{display:"inline", marginRight:"10px"}}>About</li>
                    <li style={{display:"inline", marginRight:"10px"}}>Contact</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;