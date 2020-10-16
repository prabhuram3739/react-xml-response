import React from "react";
import "./Searchview.css";
// get our fontawesome imports
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CircuitSwitch from "../circuitSwitch/CircuitSwitch";
import PacketSwitch from "../packetSwitch/PacketSwitch";
import GeneralInfo from '../generalInfo/GeneralInfo';
//import DataModifications from '../dataModifications/DataModifications';
import DataLayerContext, { DataProvider } from '../DataLayerContext';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import CircuitSwitchDataEdit from "../circuitSwitchDataEdit/CircuitSwitchDataEdit";

function Searchview() {

    //Circuit Core Details Data Enrichment Modals
    const [ModalEigthShow, setModalEigthShow] = React.useState(false);
    /*const [ModalNinthShow, setModalNinthShow] = React.useState(false);
    const [ModalTenthShow, setModalTenthShow] = React.useState(false);
    const [ModalEleventhShow, setModalEleventhShow] = React.useState(false);
    const [ModalTwenlthShow, setModalTwenlthShow] = React.useState(false);
    const [ModalThirteenthShow, setModalThirteenthShow] = React.useState(false);
    const [ModalFourteenthShow, setModalFourteenthShow] = React.useState(false);
    const [ModalFIfteenthShow, setModalFIfteenthShow] = React.useState(false);
    const [ModalSixteenthShow, setModalSixteenthShow] = React.useState(false);
    const [ModalSeventeenthShow, setModalSeventeenthShow] = React.useState(false);
    const [ModalEighteenthShow, setModalEighteenthShow] = React.useState(false);
    const [ModalNinteenthShow, setModalNinteenthShow] = React.useState(false);
    const [ModalTwentyShow, setModalTwentyShow] = React.useState(false);
    const [ModalTwentyFirstShow, setModalTwentyFirstShow] = React.useState(false);
    const [ModalTwentySecondShow, setModalTwentySecondShow] = React.useState(false);*/

    const location = useLocation();
    let [tabIndex, setTabIndex] = React.useState(0);
    let handleTabSelect = (index) => {
        tabIndex = index;
        setTabIndex(tabIndex);
        return tabIndex;
    }
    return (
    <div className = "home" >
        <form className = "mbr-form diagnostic-tool-form" data-form-title = "Model store Form" id = "model-store-form" >
        <DataProvider imsi={queryString.parse(location.search).imsi} >
        <div className = "row topSearchBox" >
        <div className = "col-12 searchBoxDiv" >
        <input type = "search" className = "form-control mr-sm-2 searchBox" name = "imsi" autoComplete = "off" placeholder = "IMSI Search" id = "search-box" aria-label = "Search" required / >
        <button className = "searchIcon" type="submit"><FontAwesomeIcon icon = { faSearch } /></button>
        </div> </div>
        <div className = "row">
        <GeneralInfo />
        </div>
        <div className = "tab-content" id = "myTabContent" >
        <div className = "tab-pane fade show active" id = "platform" role = "tabpanel" aria-labelledby = "platform-tab" >
        <div className = "row row-sm-offset" >
        {/*<div className = "col-md-7 col-sm-12 col-lg-7 col-xl-8 multi-horizontal" data-for = "" > */}
        <div className = "col-md-12 col-sm-12 col-lg-12 col-xl-12 multi-horizontal" data-for = "" >
        <div className = "tabContainer scrollbar mobile-content-panel searchPageContainer" >
        <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-light noPadding">
        <div className="navbar-collapse nav nav-tabs fontReduce" id = "nav-tab" role = "tablist">
        { /*<a className = "nav-item nav-link active" onClick={() => handleTabSelect(0)} id = "nav-general-info-tab" data-toggle = "tab" href = "#nav-general-info" role = "tab" aria-controls = "nav-general-info" aria-selected = "true"> General Information </a> */}
        <a className = "nav-item nav-link active" onClick={() => handleTabSelect(1)} id = "nav-home-tab" data-toggle = "tab" href = "#nav-home" role = "tab" aria-controls = "nav-home" aria-selected = "true"> Packet Core Details </a> 
        <a className = "nav-item nav-link" onClick={() => handleTabSelect(2)} id = "nav-profile-tab" data-toggle = "tab" href = "#nav-profile" role = "tab" aria-controls = "nav-profile" aria-selected = "false"> Circuit Core Details </a> 
        {/*<a className = "nav-item nav-link" id = "nav-data-mod-tab" data-toggle = "tab" href = "#nav-data-mod" role = "tab" aria-controls = "nav-data-mod" aria-selected = "false"> Data Modifications </a>  */}
        </div>
       {/*} { (tabIndex === 1) ?
        <ul className="nav nav-bar nav-tabs dropleft pull-right">
        <li className="nav-item dropdown" style={{marginTop: -6}}>
            <a className="nav-link" data-toggle="dropdown" href="test" role="button" aria-haspopup="true" aria-expanded="false">
            <svg viewBox="0 0 100 80" width="20" height="31" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
            </svg>
            </a>
            <div className="dropdown-menu">
            <span className="dropdown-item">
                <span className="reducedPaddingTop" type="button" onClick={() => setModalOneShow(true)}>APN Enable/Disable</span>
                <ApnEnableDisableModal show={ModalOneShow} onHide={() => setModalOneShow(false)} />
            </span>
            <div className="dropdown-divider"></div>
            <span className="dropdown-item">
                <span className="reducedPaddingTop" type="button" onClick={() => setModalTwoShow(true)}>GI DNS - Add/Modify</span>
                <GIDNSModal show={ModalTwoShow} onHide={() => setModalTwoShow(false)} />
            </span>
            
            <div className="dropdown-divider"></div>

            <span className="dropdown-item">
                <span className="reducedPaddingTop" type="button" onClick={() => setModalThreeShow(true)}>GY Inline</span>
                <GYInlineModal show={ModalThreeShow} onHide={() => setModalThreeShow(false)} />
            </span>

            <div className="dropdown-divider"></div>
 
            <span className="dropdown-item">
                <span className="reducedPaddingTop" type="button" onClick={() => setModalFourthShow(true)}>GY Bypass</span>
                <GYBypassModal show={ModalFourthShow} onHide={() => setModalFourthShow(false)} />
            </span>

            <div className="dropdown-divider"></div>

            <span className="dropdown-item">
                <span className="reducedPaddingTop" type="button" onClick={() => setModalFifthShow(true)}>GX Inline</span>
                <ApnShutdownInlineModal show={ModalFifthShow} onHide={(value) => setModalFifthShow(value)}  />
            </span>

            <div className="dropdown-divider"></div>

            <span className="dropdown-item">
                <span className="reducedPaddingTop" type="button" onClick={() => setModalSixthShow(true)}>GX Bypass</span>
                <APNShutdownBypassModal show={ModalSixthShow} onHide={(value) => setModalSixthShow(value)} />
            </span>

            <div className="dropdown-divider"></div>

            <span className="dropdown-item">
                <span className="reducedPaddingTop" type="button" onClick={() => setModalSeventhShow(true)}>GA - Add/Modify</span>
                <GAModal show={ModalSeventhShow} onHide={() => setModalSeventhShow(false)} />
            </span>

            </div>
        </li>
        </ul> : */}  { (tabIndex === 2) ?
        <ul className="nav nav-bar nav-tabs dropleft pull-right">
        <li className="nav-item dropdown" style={{marginTop: -6}}>
            <a className="nav-link" data-toggle="dropdown" href="test" role="button" aria-haspopup="true" aria-expanded="false">
            <svg viewBox="0 0 100 80" width="20" height="31" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="20"></rect>
                <rect y="30" width="100" height="20"></rect>
                <rect y="60" width="100" height="20"></rect>
            </svg>
            </a>
            <div className="dropdown-menu">
            <span className="dropdown-item">
            <span className="reducedPaddingTop" type="button" onClick={() => setModalEigthShow(true)}>Circuit Core Data Edit</span>
            <CircuitSwitchDataEdit imsi={queryString.parse(location.search).imsi} show={ModalEigthShow} onHide={() => setModalEigthShow(false)} />
            </span>
            {/*<span className="dropdown-item">
                <span className="reducedPaddingTop" type="button" onClick={() => setModalEigthShow(true)}>Subscriber Status - Activate/Deactive</span>
                <ApnEnableDisableModal show={ModalEigthShow} onHide={() => setModalEigthShow(false)} />
            </span>
            <div className="dropdown-divider"></div>
            <span className="dropdown-item">
                <span className="reducedPaddingTop" type="button" onClick={() => setModalNinthShow(true)}>Voice - Provision/Deprovision</span>
                <GIDNSModal show={ModalNinthShow} onHide={() => setModalNinthShow(false)} />
            </span>
            
            <div className="dropdown-divider"></div>

            <span className="dropdown-item">
                <span className="reducedPaddingTop" type="button" onClick={() => setModalTenthShow(true)}>Voice MO - Activate/Deactivate</span>
                <GYInlineModal show={ModalTenthShow} onHide={() => setModalTenthShow(false)} />
            </span>

            <div className="dropdown-divider"></div>
 
            <span className="dropdown-item">
                <span className="reducedPaddingTop" type="button" onClick={() => setModalEleventhShow(true)}>Voice MT - Activate/Deactivate</span>
                <GYBypassModal show={ModalEleventhShow} onHide={() => setModalEleventhShow(false)} />
            </span>

            <div className="dropdown-divider"></div>

            <span className="dropdown-item">
                <span className="reducedPaddingTop" type="button" onClick={() => setModalTwenlthShow(true)}>SMS MO - Provision/Deprovision</span>
                <ApnShutdownInlineModal show={ModalTwenlthShow} onHide={(value) => setModalTwenlthShow(value)}  />
            </span>

            <div className="dropdown-divider"></div>

            <span className="dropdown-item">
                <span className="reducedPaddingTop" type="button" onClick={() => setModalThirteenthShow(true)}>SMS MT - Provision/Deprovision</span>
                <APNShutdownBypassModal show={ModalThirteenthShow} onHide={(value) => setModalThirteenthShow(value)} />
            </span>

            <div className="dropdown-divider"></div>

            <span className="dropdown-item">
                <span className="reducedPaddingTop" type="button" onClick={() => setModalFourteenthShow(true)}>SMS MO - Activate/Deactivate</span>
                <GAModal show={ModalFourteenthShow} onHide={() => setModalFourteenthShow(false)} />
            </span>

            <div className="dropdown-divider"></div>

            <span className="dropdown-item">
                <span className="reducedPaddingTop" type="button" onClick={() => setModalTwentySecondShow(true)}>SMS MT - Activate/Deactivate</span>
                <GAModal show={ModalTwentySecondShow} onHide={() => setModalTwentySecondShow(false)} />
            </span>

            <div className="dropdown-divider"></div>

<span className="dropdown-item">
    <span className="reducedPaddingTop" type="button" onClick={() => setModalFIfteenthShow(true)}>3G Data - Activate/Deactivate</span>
    <GAModal show={ModalFIfteenthShow} onHide={() => setModalFIfteenthShow(false)} />
</span>

<div className="dropdown-divider"></div>

<span className="dropdown-item">
    <span className="reducedPaddingTop" type="button" onClick={() => setModalSixteenthShow(true)}>3G Data Roam - Activate/Deactivate</span>
    <GAModal show={ModalSixteenthShow} onHide={() => setModalSixteenthShow(false)} />
</span>

<div className="dropdown-divider"></div>

<span className="dropdown-item">
    <span className="reducedPaddingTop" type="button" onClick={() => setModalSeventeenthShow(true)}>4G Data - Activate/Deactivate</span>
    <GAModal show={ModalSeventeenthShow} onHide={() => setModalSeventeenthShow(false)} />
</span>

<div className="dropdown-divider"></div>

<span className="dropdown-item">
    <span className="reducedPaddingTop" type="button" onClick={() => setModalEighteenthShow(true)}>SIM Purge</span>
    <GAModal show={ModalEighteenthShow} onHide={() => setModalEighteenthShow(false)} />
</span>

<div className="dropdown-divider"></div>

<span className="dropdown-item">
    <span className="reducedPaddingTop" type="button" onClick={() => setModalNinteenthShow(true)}>SIM Swap</span>
    <GAModal show={ModalNinteenthShow} onHide={() => setModalNinteenthShow(false)} />
</span>

<div className="dropdown-divider"></div>

<span className="dropdown-item">
    <span className="reducedPaddingTop" type="button" onClick={() => setModalTwentyShow(true)}>3G APN - Provision/Deprovision</span>
    <GAModal show={ModalTwentyShow} onHide={() => setModalTwentyShow(false)} />
</span>

<div className="dropdown-divider"></div>

<span className="dropdown-item">
    <span className="reducedPaddingTop" type="button" onClick={() => setModalTwentyFirstShow(true)}>4G APN - Provision/Deprovision</span>
    <GAModal show={ModalTwentyFirstShow} onHide={() => setModalTwentyFirstShow(false)} />
</span>*/}

            </div>
        </li>
        </ul> : ""
}
        </nav>

        <div className = "tab-content" id = "nav-tabContent" > 
        <div className = "tab-pane fade show active" id = "nav-home" role = "tabpanel" aria-labelledby = "nav-home-tab">
        <PacketSwitch />
        </div> 
        <div className = "tab-pane fade" id = "nav-profile" role = "tabpanel" aria-labelledby = "nav-profile-tab" >
        <CircuitSwitch /> 
        </div> 
        {/*<div className = "tab-pane fade" id = "nav-data-mod" role = "tabpanel" aria-labelledby = "nav-data-mod-tab" >
        <DataModifications />
    `   </div>*/}
        </div>
        </div> 
        </div>
        </div>
        </div> 
        </div> 
        </DataProvider> 
        </form> 
    </div>
    );
}
GeneralInfo.contextType = DataLayerContext;
PacketSwitch.contextType = DataLayerContext;
CircuitSwitch.contextType = DataLayerContext;
CircuitSwitchDataEdit.contextType = DataLayerContext;
export default Searchview;