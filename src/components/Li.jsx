import React from "react";

export default function(props) {

    if (props.idName) {
        return(
            <li id={props.idName}>
                <a>
                    <img className={props.className} src={props.img} alt={props.alt} />          
                </a>
            </li>
        )
    } else if (props.className === "arrow-icon") {
        return(
            <li className={props.className}>
                <a>
                    {props.name}
                </a>
                <span>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="22" class="IconArrow-right css-48nvow"><g fill="none" stroke="currentColor"><path d="M11.889 16.728S13.249 9.433 21.778 7M11.889 16.728S10.529 9.433 2 7"></path></g></svg>
                </span>

            </li>
        )
    } else {
        return (
            <li className={props.className}>
                <a>
                    {props.name}
                </a>
            </li>
        )
    }



}