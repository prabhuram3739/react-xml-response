import React, { useState } from "react";
import "./Home.css";
// get our fontawesome imports
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
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
        <div className = "row row-sm-offset" >
        <div className = "col-md-12 col-sm-12 col-lg-12 col-xl-12 multi-horizontal" data-for = "" >
        <div className = "tabContainer scrollbar mobile-content-panel homePageContainer" >
        {/*<nav className="navbar navbar-expand-sm sticky-top navbar-light bg-light noPadding">
      <div className="navbar-collapse nav nav-tabs" id = "nav-tab" role = "tablist">
      <a className = "nav-item nav-link active" id = "nav-general-info-tab" data-toggle = "tab" href = "#nav-general-info" role = "tab" aria-controls = "nav-general-info" aria-selected = "true"> General Information </a> 
      </div>
    </nav>*/}
        <div className="row">
            {/*<div className="col-4">
                <h4 className="marginLeftAlign">Statistical Data</h4>
            </div>
            <div className="col-4">
                <h4 className="centerAlignText">Dashboard</h4>
</div>*/}
        <div className="col-12">
        {/*<button type="button" className="btn btn-primary pull-right mr-1" onClick={ () => { setRefreshBoolean(false); setRefreshStatus(false); }}>Disable Auto Refresh <FontAwesomeIcon icon = { faSyncAlt } /> </button>*/}
        <button type="button" className={ refreshBoolean ? 'btn btn-danger pull-right refreshBtn' : 'btn btn-primary pull-right refreshBtn' } onClick={ () => { refreshBoolean ?  setRefreshBoolean(false) : setRefreshBoolean(true); refreshStatus ? setRefreshStatus(false) : setRefreshStatus(true); (buttonText === 'Enable') ? setButtonText('Disable') : setButtonText('Enable'); }}><FontAwesomeIcon icon = { faSyncAlt } /> </button>
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
        </form> 
    </div>
    );
}
DefaultView.contextType = DefaultViewDataLayerContext;
export default Home;