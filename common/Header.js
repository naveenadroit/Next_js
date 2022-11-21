import React from "react";
import Logo from "./Head1";
import Head2 from "./head2";
import Head3 from "./Head3";

const Header = () => {
    return(
        <div className="container-fluid bg-light">
                <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <Logo/>
                    <Head2/>
                    <Head3/>
                </div>
            </div>
        </div>
    )
}

export default Header;