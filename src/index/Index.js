import React from "react";
import DataLayerContext, { DataProvider } from '../DataLayerContext';
import "./Index.css";
// get our fontawesome imports
/*import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";*/

import SideBar from '../sideBar/SideBar';
import Main from '../main/Main';

function Index() {
    return (
    <div className = "home" >
        <form className = "mbr-form diagnostic-tool-form" action="search/" data-form-title = "Model store Form" id = "model-store-form" >
        <div className = "row row-sm-offset" >
        <div className = "col-md-12 col-sm-12 col-lg-12 col-xl-12 multi-horizontal" data-for = "" >
        <div className = "tabContainer scrollbar mobile-content-panel homePageContainer" >
            <div className="row">
            <DataProvider imsi="234500010400205">
            <div className="col-2">
                <SideBar />
            </div>
            <div className="col-10">
                <Main />
            </div>
            </DataProvider>
            </div>
        </div> 
        </div>
        </div>
        </form> 
    </div>
    );
}
//DefaultView.contextType = DefaultViewDataLayerContext;
SideBar.contextType = DataLayerContext;
export default Index;