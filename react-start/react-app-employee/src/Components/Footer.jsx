import React from "react";
import "./footer.css"

function Footer(){
    const year = new Date().getFullYear();
    return(
        <div id="footerd">
            <p style={{position: "fixed", bottom: "0", right: "0"}}>&copy; {year} This is the @yadnyeshkolte site, All rights reserved </p>
        </div>
    )
}

export default Footer;