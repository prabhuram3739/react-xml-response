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
    let [timeInterval, setTimeInterval] = useState(3000);
    let [autoRefresh, setAutoRefresh] = useState("Disable");
    console.log(timeInterval);
    return (
    <div className = "home" >
        <form className = "mbr-form diagnostic-tool-form" action="search/" data-form-title = "Model store Form" id = "model-store-form" >
        <div className = "row row-sm-offset" >
        <div className = "col-md-12 col-sm-12 col-lg-12 col-xl-12 multi-horizontal" data-for = "" >
        <div className = "tabContainer scrollbar mobile-content-panel homePageContainer" >
        <div className="row">
        <div className="col-12">
        <ul className="nav nav-bar nav-tabs dropleft pull-right refreshBtn">
        <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="test" role="button" aria-haspopup="true" aria-expanded="false" style={{borderColor: "white"}}>
            <button type="button" className='btn btn-primary pull-right'><FontAwesomeIcon icon = { faSyncAlt } /> </button>
            </a>

            <div className="dropdown-menu" >
            <span className="dropdown-item">
            <input className="reducedPaddingTop" disabled={(autoRefresh === 'Disable') ? true : false} type="checkbox" onChange={ () => { refreshBoolean ?  setRefreshBoolean(false) : setRefreshBoolean(true); refreshStatus ? setRefreshStatus(false) : setRefreshStatus(true); (buttonText === 'Enable') ? setButtonText('Disable') : setButtonText('Enable'); timeInterval ? setTimeInterval(timeInterval) : setTimeInterval(0); }}/>
            <span className="autoRefreshTxt ml-1">Auto refresh</span>
            </span>
            <div className="dropdown-divider"></div>
            <span className="dropdown-item">
                <span>Refresh interval</span>
            </span>
            
            <div className="dropdown-divider"></div>

            <span className="dropdown-item">
                <input type="radio" checked={timeInterval === 10000 ?  true : false} onChange={ () => { timeInterval === 3000? setTimeInterval(10000) : setTimeInterval(3000); (autoRefresh === 'Disable') ? setAutoRefresh('Enable') : setButtonText('Disable'); }}/> 10 Seconds
            </span>

            <div className="dropdown-divider"></div>
 
            <span className="dropdown-item">
            <input type="radio" checked={timeInterval === 60000 ?  true : false} onChange={ () => { timeInterval === 3000? setTimeInterval(60000) : setTimeInterval(3000); (autoRefresh === 'Disable') ? setAutoRefresh('Enable') : setButtonText('Disable'); }}/> 1 Minute
            </span>

            <div className="dropdown-divider"></div>

            <span className="dropdown-item">
            <input type="radio" checked={timeInterval === 120000 ?  true : false} onChange={ () => { timeInterval === 3000? setTimeInterval(120000) : setTimeInterval(3000); (autoRefresh === 'Disable') ? setAutoRefresh('Enable') : setButtonText('Disable'); }}/> 2 Minutes
            </span>

            <div className="dropdown-divider"></div>

            <span className="dropdown-item">
            <input type="radio" checked={timeInterval === 300000 ?  true : false} onChange={ () => { timeInterval === 3000? setTimeInterval(300000) : setTimeInterval(3000); (autoRefresh === 'Disable') ? setAutoRefresh('Enable') : setButtonText('Disable'); }}/> 5 Minutes
            </span>

            <div className="dropdown-divider"></div>

            <span className="dropdown-item">
            <input type="radio" checked={timeInterval === 600000 ?  true : false} onChange={ () => { timeInterval === 3000? setTimeInterval(600000) : setTimeInterval(3000); (autoRefresh === 'Disable') ? setAutoRefresh('Enable') : setButtonText('Disable'); }}/> 10 Minutes
            </span>
            </div>
        </li>
        </ul>
        
        </div>
        </div>
        <DefaultViewDataProvider imsi={queryString.parse(location.search).imsi}  refresh={refreshBoolean} refreshStatus={refreshStatus} timeInterval={timeInterval} >
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