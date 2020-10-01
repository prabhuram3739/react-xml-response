import React, { useState } from "react";
import "./Home.css";
// get our fontawesome imports
import { faSearch, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DefaultViewDataLayerContext, { DefaultViewDataProvider } from '../DefaultViewDataLayerContext';
import DefaultView from "../defaultView/DefaultView";
import { useLocation } from 'react-router';
import queryString from 'query-string';

function Home() {
    const location = useLocation();
    let [refreshBoolean, setRefreshBoolean] = useState(false);
    let [refreshStatus, setRefreshStatus] = useState(false);
    let [buttonText, setButtonText] = useState("Enable");
    return (
    <div className = "home" >
        <form className = "mbr-form diagnostic-tool-form" action="search/" data-form-title = "Model store Form" id = "model-store-form" >
        <div className = "row topSearchBox" >
        <div className = "col-12 searchBoxDiv" >
        <input type = "search" className = "form-control mr-sm-2 searchBox" name = "imsi" autoComplete = "off" placeholder = "IMSI Search" id = "search-box" aria-label = "Search" required / >
        <button className = "searchIcon" type="submit">
        <FontAwesomeIcon icon = { faSearch } /> 
        </button>
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
        <div className="row">
        <div className="col-12">
        {/*<button type="button" className="btn btn-primary pull-right mr-1" onClick={ () => { setRefreshBoolean(false); setRefreshStatus(false); }}>Disable Auto Refresh <FontAwesomeIcon icon = { faSyncAlt } /> </button>*/}
        <button type="button" className="btn btn-primary pull-right mr-1" onClick={ () => { refreshBoolean ?  setRefreshBoolean(false) : setRefreshBoolean(true); refreshStatus ? setRefreshStatus(false) : setRefreshStatus(true); (buttonText === 'Enable') ? setButtonText('Disable') : setButtonText('Enable'); }}>{ buttonText } Auto Refresh <FontAwesomeIcon icon = { faSyncAlt } /> </button>
        </div>
        </div>
        <DefaultViewDataProvider imsi={queryString.parse(location.search).imsi}  refresh={refreshBoolean} refreshStatus={refreshStatus} >
        <div className = "row" >
        <DefaultView />
        </div>
        </DefaultViewDataProvider> 
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
DefaultView.contextType = DefaultViewDataLayerContext;
export default Home;