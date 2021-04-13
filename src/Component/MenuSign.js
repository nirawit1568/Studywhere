import React from 'react'
import logo from '../img/logo.png'


function MenuBar () {
    return(
        <div className="menubar">
            <div className="left">
                <ul>
                    <li><a href=""><img src={logo}/></a></li>
                    <div className="studywhere">
                        <b>Study</b>Where
                    </div>
                </ul>
            </div>
            <div className="right">
                <ul>
                    <li><a href="">MY Course</a></li>
                    <li><a href="">LOGOUT</a></li>
                </ul>
            </div>
        </div>
    );
}
export default MenuBar;