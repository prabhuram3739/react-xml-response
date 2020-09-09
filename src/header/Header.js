import React from 'react';
import './Header.css';
//import SearchIcon from "@material-ui/icons/Search";
//import { Avatar } from "@material-ui/core";
//import { useDataLayerValue } from "./DataLayer";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

function Header() {
    //const [{user}, dispatch] = useDataLayerValue();
    return (
        <div className="header">
            <header className="navbar">
                <a className="intelLogoClass" href="/">
                <picture>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 134.84" width="100" height="20" aria-label="Nokia logo" focusable="false">
                    <path fill="#124191" d="M38.52 133.18H0V2.18H66.62L143.05 99.98V2.18H181.57V133.18H116.3L38.52 33.71V133.18M365.87 92.67C365.87 110.88 362.65 117.16 357.32 123.18C349.15 132.14 337.26 134.84 314.35 134.84L248.58 134.84C225.67 134.84 213.76 132.14 205.6 123.18C200.27 117.16 197.05 110.88 197.05 92.67L197.05 42.17C197.05 23.97 200.27 17.7 205.6 11.67C213.77 2.7 225.67 0 248.58 0L314.35 0C337.26 0 349.15 2.7 357.32 11.67C362.65 17.7 365.87 23.97 365.87 42.17L365.87 92.67M312.73 101.65C321.53 101.65 324.63 101.13 326.74 99.21C328.71 97.42 329.58 95.11 329.58 87.41L329.58 47.43C329.58 39.73 328.71 37.44 326.74 35.64C324.63 33.71 321.53 33.2 312.73 33.2L250.19 33.2C241.39 33.2 238.29 33.71 236.19 35.64C234.21 37.44 233.34 39.73 233.34 47.43L233.34 87.41C233.34 95.11 234.21 97.42 236.19 99.21C238.29 101.13 241.39 101.65 250.19 101.65L312.73 101.65V101.65M421.85 2.18V133.18H381.6V2.18H421.85M489.85 2.18H542.99L471.27 63.45 552.16 133.18H495.3L421.85 64.86 489.85 2.18M559.58 2.18H599.84V133.18H559.58M753.31 133.18 741.4 110.36H663.51L651.74 133.17H607.27L678.62 2.18H728.66L800 133.18H753.31M677.5 81.91H727.55L702.52 34.48 677.5 81.91">
                    </path>
                    </svg>
                </picture>
                </a>
                <h1 className="appHeading">
                Diagnostic Tool
                </h1>
                <Link className="homeLink" to='/'><FontAwesomeIcon icon={faHome} /></Link>
            </header>
    </div>
  );
}

export default Header;