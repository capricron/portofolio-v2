import React from "react";

import { Link } from "react-router-dom";

import '../css/Navbar.css'

const menu = [
    'Home',
    'About',
    'Contact',
]

class Navbar extends React.Component { 

    garisBawah = (props) => {
        console.log(props)
    }

    render(){
        return(
            <React.Fragment>

            <div className="flex justify-center text-2xl font-prompt h-[70px]">
                {menu.map(
                    (item, index) => {
                        return(
                            <div key={item} className="p-[16px] navbar">
                                <Link to={"/"+item === '/Home' ? '/' : "/"+item.toString().toLowerCase()}>{item}</Link>
                            </div>
                        )
                    })
                }
            </div>
            </React.Fragment>
        )
    }
}

export default Navbar;