import React from "react";
import Image from "next/image";

const Logo = () => {
    return(
        <div className="col-2 pl-2">
           <Image src="/logo.png" alt={"logo"} width={100} height={100} />
        </div>
    )
}

export default Logo;