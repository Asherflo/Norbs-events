import React from "react";
import Header from "./Header";
import SideNav from "./SideNav";

const Container = (pros) => {
    return(
        <div>
            <Header/>
            <div>
                <SideNav/>
                {pros.children}
            </div>
        </div>
    )

}

export  default Container