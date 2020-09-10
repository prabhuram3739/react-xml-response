import React, { useEffect } from "react";
import "./Home.css";
// get our fontawesome imports
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDataLayerValue } from "../DataLayer";
import CircuitSwitch from '../circuitSwitch/CircuitSwitch';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [{ disp_data }, dispatch] = useDataLayerValue();
    useEffect(() => {
        axios
        .get("https://fakerestapi.azurewebsites.net/api/Authors", {
            "Content-Type": "application/xml; charset=utf-8"
         }).then((response)=> {
            dispatch({
                type: "DISP_DATA",
                data: response.data,
            });
        });
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
    <div className = "home" >
        <form className = "mbr-form diagnostic-tool-form" data-form-title = "Model store Form" id = "model-store-form" >
        <div className = "row topSearchBox" >
        <div className = "col-12 searchBoxDiv" >
        <input type = "search" className = "form-control mr-sm-2 searchBox" name = "searchBox" autoComplete = "off" placeholder = "IMSI/MSDN Search" id = "search-box" aria-label = "Search" / >
        <Link to='/search'><div className = "searchIcon" >
        <FontAwesomeIcon icon = { faSearch } /> 
        </div> </Link>
        </div> 
        </div>

        <div className = "tab-content" id = "myTabContent" >
        <div className = "tab-pane fade show active" id = "platform" role = "tabpanel" aria-labelledby = "platform-tab" >
        <div className = "row row-sm-offset" >
        <div className = "col-md-12 col-sm-12 col-lg-12 col-xl-12 multi-horizontal" data-for = "" >
        <div className = "tabContainer scrollbar mobile-content-panel homePageContainer" >
        {/*<nav className="navbar navbar-expand-sm sticky-top navbar-light bg-light noPadding">
      <div className="navbar-collapse nav nav-tabs" id = "nav-tab" role = "tablist">
      <a className = "nav-item nav-link active" id = "nav-general-info-tab" data-toggle = "tab" href = "#nav-general-info" role = "tab" aria-controls = "nav-general-info" aria-selected = "true"> General Information </a> 
      </div>
    </nav>*/}
        <div className = "tab-content noOverflowX" id = "nav-tabContent" >
        <div className = "tab-pane fade show active" id = "nav-general-info" role = "tabpanel" aria-labelledby = "nav-general-info-tab" >
        <div className = "row" >
        <CircuitSwitch />
        </div>  
        </div> 
        </div> 
        </div> 
        </div>
        </div>
        </div> 
        </div> 
        </form> 
    </div>
    );
}

export default Home;