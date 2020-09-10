import React, { useEffect } from "react";
import "./Searchview.css";
// get our fontawesome imports
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDataLayerValue } from "../DataLayer";
import axios from 'axios';
import CircuitSwitch from "../circuitSwitch/CircuitSwitch";
import PacketSwitch from "../packetSwitch/PacketSwitch";
import GeneralInfo from '../generalInfo/GeneralInfo';

function Searchview() {
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
        <div className = "searchIcon" >
        <FontAwesomeIcon icon = { faSearch }/> 
        </div> </div> </div>

        <div className = "tab-content" id = "myTabContent" >
        <div className = "tab-pane fade show active" id = "platform" role = "tabpanel" aria-labelledby = "platform-tab" >
        <div className = "row row-sm-offset" >
        {/*<div className = "col-md-7 col-sm-12 col-lg-7 col-xl-8 multi-horizontal" data-for = "" > */}
        <div className = "col-md-12 col-sm-12 col-lg-12 col-xl-12 multi-horizontal" data-for = "" >
        <div className = "tabContainer scrollbar mobile-content-panel homePageContainer" >
        <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-light noPadding">
        <div className="navbar-collapse nav nav-tabs" id = "nav-tab" role = "tablist">
        <a className = "nav-item nav-link active" id = "nav-general-info-tab" data-toggle = "tab" href = "#nav-general-info" role = "tab" aria-controls = "nav-general-info" aria-selected = "true"> General Information </a> 
        <a className = "nav-item nav-link" id = "nav-home-tab" data-toggle = "tab" href = "#nav-home" role = "tab" aria-controls = "nav-home" aria-selected = "true"> Packet Switch Details </a> 
        <a className = "nav-item nav-link" id = "nav-profile-tab" data-toggle = "tab" href = "#nav-profile" role = "tab" aria-controls = "nav-profile" aria-selected = "false"> Circuit Switch Details </a> 
        </div> 
        </nav>

        <div className = "tab-content noOverflowX" id = "nav-tabContent" >
        <div className = "tab-pane fade show active" id = "nav-general-info" role = "tabpanel" aria-labelledby = "nav-general-info-tab" >
        <GeneralInfo />
        </div> 
        <div className = "tab-pane fade" id = "nav-home" role = "tabpanel" aria-labelledby = "nav-home-tab">
        <PacketSwitch />
                
        </div> 
        <div className = "tab-pane fade" id = "nav-profile" role = "tabpanel" aria-labelledby = "nav-profile-tab" >
        <CircuitSwitch /> 
        </div> 
        </div> 
        </div> 
        </div>

       { /*<div id = "overviewPanel" className = "col-md-5 col-sm-12 col-lg-5 col-xl-4 multi-horizontal" data-for = "" >
        <div className = "content homePageContainer scrollbar" id = "overviewDetail" >
        <h4 id = "platformDetailTitle" > General Information </h4>
        <div className = "d-flex justify-content-center custom-loader" >
        <div className = "spinner-border text-primary" role = "status" >
        <span className = "sr-only" > Loading... </span> 
        </div> 
        </div> 
        </div> 
        </div> */}
        </div>
        </div> 
        </div> 
        </form> 
    </div>
    );
}

export default Searchview;