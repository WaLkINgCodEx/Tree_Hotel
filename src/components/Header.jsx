import React from "react";
import Li from "./Li";


export default function Header() {
    return (
        <div className="hero-section">
            <div class="nav-top">
                <div class="nav-bar-1">
                    <ul>
                        <Li idName="logo" className="icon-logo" img="./assets/images/icon-logo-green-2.svg" alt="icon-logo" />
                        <Li name="ABOUT" />
                        <Li name="OFFERS" />
                        <Li name="ACCOMMODATION" />
                        <Li name="DINING" />
                        <Li name="SPA" />
                        <Li name="EXPERIENCE" />
                        <Li name="MORE" className="arrow-icon" />
                        <Li name="EN" className="arrow-icon" />
                        <Li name="BOOK NOW" className="bookNowButton"/>
                    </ul>
                </div>
            </div>

            <div className="heroView">
                <div className="heroFrame">
                    <img src="./assets/images/BTTHKB_KP_1020_lobby_HR0005-1.jpg"></img>
                </div>
                <div className="heroText">
                    <h1>BANYAN TREE KRABI</h1>
                    <p>Krabi, Thailand</p>
                </div>
            </div>

            <div class="nav-bottom">
                <div class="nav-bar-2">
                    <ul>
                        <Li name="Home" className="arrow-icon" />
                        <Li name="Thailand" className="arrow-icon" />
                        <strong><Li name="Banyan Tree Krabi" /></strong>
                    </ul>
                </div>
            </div>
        </div>
    )
}