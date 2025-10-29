import React from "react";

function Footer() {
    const year: number = new Date().getFullYear();
    return (

        <div style={{ position: "absolute", bottom: "0"}}>
            <p>&copy; This is the @yadnyeshkolte site, All rights reserved {year}</p>
        </div>
    )
}

export default Footer;