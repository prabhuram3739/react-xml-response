import React  from 'react';
import { faSearch, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class DefaultView extends React.Component {
  //let [btnIndex, setBtnIndex] = React.useState(0);
  constructor(props) {
    super(props);
    this.state = {
      btnIndex: null
    };
  }
  handleBtnSelect(index) {
    this.setState({btnIndex : index});
    return this.state.btnIndex;
}
    render() {
      // Get the data from the context api to manipulate the data for the default view
      const { data, count, loading } = this.context || {};
      const finalData = [];
      finalData.push(data.packetSwitchAdminDefaultViewVO);

      
      // Check if the count is zero or undefined to display the no records message
      if(!loading) {
       if((count === 0) || (count === undefined)) {
        return (
        <span className="ml-4">Sorry, No Information available</span>
        )
       }
      }
    return (

<div className="container-fluid fontChange">
{
//loading ? <div className = "d-flex justify-content-center custom-loader" ><div className = "spinner-border text-primary" role = "status" ><span className = "sr-only" > Loading... </span> </div> </div>  :
// Display loader till the response appears and check for the validity of the data If exists
loading ? <div className="v-loading-indicator second v-loading-indicator-delay" ></div>  :
(finalData && finalData.length > 0) &&
finalData.map((item, index) => {
return (
<React.Fragment key={item.id}>
{/*<div key={index}>

<div className="accordion" id="accordionExample">

<p>

<button className="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="collapseOne collapseTwo collapseThree collapseFour collapseFive collapseSix">Collapse/Expand All</button>
</p>
<div className="card">
<div className="card-header" id="headingOne">
<h5 className="mb-0">
<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
<div className="row">
<div className="col-12 removePaddingLeft">
Hostname: AMS_PROD_CMG
</div>
</div>
</button>
</h5>
</div>

    <div id="collapseOne" className="collapse show multi-collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
      <div className="row">
        <div className="col-4">
        <label className="fontBold">Homers:</label> <span>{item.packetSwitchAdminDefaultHeaderVO.homers ? item.packetSwitchAdminDefaultHeaderVO.homers : 'No Data Available'}</span></div>
        <div className="col-4">
        <label className="fontBold">LTE PDN Sessions:</label> <span>{item.packetSwitchAdminDefaultHeaderVO.ltePdnSessions ? item.packetSwitchAdminDefaultHeaderVO.ltePdnSessions : 'No Data Available'}</span></div>
        <div className="col-4">
        <label className="fontBold">Real APNs:</label> <span>{item.packetSwitchAdminDefaultHeaderVO.realApns ? item.packetSwitchAdminDefaultHeaderVO.realApns : 'No Data Available'}</span></div>
        </div>
        <div className="row">
        <div className="col-4">
        <label className="fontBold">Roamers:</label> <span>{item.packetSwitchAdminDefaultHeaderVO.roamers ? item.packetSwitchAdminDefaultHeaderVO.roamers : 'No Data Available'}</span></div>
        <div className="col-4">
        <label className="fontBold">2G/3G PDN Sessions:</label> <span>{item.packetSwitchAdminDefaultHeaderVO.twoGthreeGPdnSessions ? item.packetSwitchAdminDefaultHeaderVO.twoGthreeGPdnSessions : 'No Data Available'}</span></div>
        <div className="col-4">
        <label className="fontBold">Ga CDRs Buffered:</label> <span>{item.packetSwitchAdminDefaultHeaderVO.gACdrsBuffered ? item.packetSwitchAdminDefaultHeaderVO.gACdrsBuffered : 'No Data Available'}</span></div>
        </div>
        <div className="row">
        <div className="col-4">
        <label className="fontBold">Visitors:</label> <span>{item.packetSwitchAdminDefaultHeaderVO.visitors ? item.packetSwitchAdminDefaultHeaderVO.visitors : 'No Data Available'}</span></div>
        <div className="col-4">
        <label className="fontBold">Total Number of UEs:</label> <span>{item.packetSwitchAdminDefaultHeaderVO.totalNumberOfUes ? item.packetSwitchAdminDefaultHeaderVO.totalNumberOfUes : 'No Data Available'}</span></div>
        <div className="col-4">
        <label className="fontBold">Gy CCRs Buffered:</label> <span>{item.packetSwitchAdminDefaultHeaderVO.gyCcrsBuffered ? item.packetSwitchAdminDefaultHeaderVO.gyCcrsBuffered : 'No Data Available'}</span></div>
        </div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <div className="row">
          <div className="col-12 removePaddingLeft">
              Gy Statistics
              </div>
          </div>
        </button>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse show multi-collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
    <div className="card-body">
    {(item.gyStatisticsList !== null) && item.gyStatisticsList.map((gyStatistics, index) => {
    return(
    <div className="row" key={index}>
    <div className="col-3">
    <label className="fontBold">Dia Peer Prof:</label> <span>{gyStatistics.diaPeerProf ? gyStatistics.diaPeerProf : 'No Data Available'}</span></div>
    <div className="col-3">
    <label className="fontBold">Peer Address:</label> <span>{gyStatistics.peerAddress ? gyStatistics.peerAddress : 'No Data Available'}</span></div>
    <div className="col-3">
    <label className="fontBold">Path Mgmt State:</label> <span>{gyStatistics.pathMgmtState ? gyStatistics.pathMgmtState : 'No Data Available'}</span></div>
    <div className="col-3">
    <label className="fontBold">Detail State:</label> <span>{gyStatistics.detailState ? gyStatistics.detailState : 'No Data Available'}</span></div>
    </div>
    )})
    }
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <div className="row">
          <div className="col-12 removePaddingLeft">
              Gx Statistics
              </div>
          </div>
        </button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse show multi-collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body">
      {(item.gxStatisticsList !== null) && item.gxStatisticsList.map((gxStatistics, index) => {
    return(
    <div className="row" key={index}>
    <div className="col-3">
    <label className="fontBold">Dia Peer Prof:</label> <span>{gxStatistics.diaPeerProf ? gxStatistics.diaPeerProf : 'No Data Available'}</span></div>
    <div className="col-3">
    <label className="fontBold">Peer Address:</label> <span>{gxStatistics.peerAddress ? gxStatistics.peerAddress : 'No Data Available'}</span></div>
    <div className="col-3">
    <label className="fontBold">Path Mgmt State:</label> <span>{gxStatistics.pathMgmtState ? gxStatistics.pathMgmtState : 'No Data Available'}</span></div>
    <div className="col-3">
    <label className="fontBold">Detail State:</label> <span>{gxStatistics.detailState ? gxStatistics.detailState : 'No Data Available'}</span></div>
    </div>
    )})
    }
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingFour">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        <div className="row">
          <div className="col-12 removePaddingLeft">
              Sx Statistics
              </div>
          </div>
        </button>
      </h5>
    </div>
    <div id="collapseFour" className="collapse show multi-collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
      <div className="card-body">
      {(item.sxStatisticsList !== null) && item.sxStatisticsList.map((sxStatistics, index) => {
    return(
    <div className="row" key={index}>
    <div className="col-3">
    <label className="fontBold">UP Assosication:</label> <span>{sxStatistics.uPAssociation ? sxStatistics.uPAssociation : 'No Data Available'}</span></div>
    <div className="col-3">
    <label className="fontBold">Peer Address:</label> <span>{sxStatistics.peerAddress ? sxStatistics.peerAddress : 'No Data Available'}</span></div>
    <div className="col-3">
    <label className="fontBold">Path Mgmt State:</label> <span>{sxStatistics.pathMgmtState ? sxStatistics.pathMgmtState : 'No Data Available'}</span></div>
    <div className="col-3">
    <label className="fontBold">Last Change Time:</label> <span>{sxStatistics.lastChangeTime ? sxStatistics.lastChangeTime : 'No Data Available'}</span></div>
    </div>
    )})
    }
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingFive">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        <div className="row">
          <div className="col-12 removePaddingLeft">
              Radius Statistics
              </div>
          </div>
        </button>
      </h5>
    </div>
    <div id="collapseFive" className="collapse show multi-collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
      <div className="card-body">
      {(item.radStatisticsList !== null) && item.radStatisticsList.map((radStatistics, index) => {
    return(
    <div className="row" key={index}>
    <div className="col-3">
    <label className="fontBold">Group Name:</label> <span>{radStatistics.groupName ? radStatistics.groupName : 'No Data Available'}</span></div>
    <div className="col-3">
    <label className="fontBold">Peer Address:</label> <span>{radStatistics.peerAddress ? radStatistics.peerAddress : 'No Data Available'}</span></div>
    <div className="col-3">
    <label className="fontBold">Operation State:</label> <span>{radStatistics.operationState ? radStatistics.operationState : 'No Data Available'}</span></div>
    <div className="col-3">
    <label className="fontBold">Admin State:</label> <span>{radStatistics.adminState ? radStatistics.adminState : 'No Data Available'}</span></div>
    </div>
    )})
    }
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingSix">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        <div className="row">
          <div className="col-12 removePaddingLeft">
              Ga Statistics
              </div>
          </div>
        </button>
      </h5>
    </div>
    <div id="collapseSix" className="collapse show multi-collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
      <div className="card-body">
      {(item.gaStatisticsList !== null) && item.gaStatisticsList.map((gaStatistics, index) => {
    return(
    <div className="row" key={index}>
    <div className="col-3">
    <label className="fontBold">GTP Prim Grp:</label> <span>{gaStatistics.gtpPrimGrp ? gaStatistics.gtpPrimGrp : 'No Data Available'}</span></div>
    <div className="col-3">
    <label className="fontBold">Peer Address:</label> <span>{gaStatistics.peerAddress ? gaStatistics.peerAddress : 'No Data Available'}</span></div>
    <div className="col-3">
    <label className="fontBold">Operation State:</label> <span>{gaStatistics.operState ? gaStatistics.operState : 'No Data Available'}</span></div>
    <div className="col-3">
    <label className="fontBold">Up Time:</label> <span>{gaStatistics.upTime ? gaStatistics.upTime : 'No Data Available'}</span></div>
    </div>
    )})
    }
      </div>
    </div>
  </div>
</div>

</div>
<div className="pt-3">
<p>
                        
  <button className="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="collapseOne collapseTwo collapseThree collapseFour collapseFive collapseSix">Collapse/Expand All</button>
</p>
</div>*/}



{/* Tab panel */}
{/*<div className="tabSection">
<div className = "tab-content" id = "myTabContent" >
        <div className = "tab-pane fade show active" id = "platform" role = "tabpanel" aria-labelledby = "platform-tab" >
        <div className = "row row-sm-offset" >
        <div className = "col-md-12 col-sm-12 col-lg-12 col-xl-12 multi-horizontal" data-for = "" >
        <nav className="navbar navbar-expand-sm sticky-top navbar-light bg-light noPadding">
        <div className="navbar-collapse nav nav-tabs fontReduce" id = "nav-tab" role = "tablist">
        <a className = "nav-item nav-link greyColorTxt active" id = "nav-general-info-tab" data-toggle = "tab" href = "#nav-general-info" role = "tab" aria-controls = "nav-general-info" aria-selected = "true"> Inventory </a>
        </div>
        <ul className="nav nav-bar nav-tabs dropleft pull-right">
        <li className="nav-item dropdown" style={{marginTop: -6, marginRight: 18}}>
          <span>Current Date and Time</span>
        </li>
        </ul>
        </nav>

        <div className = "tab-content" id = "nav-tabContent" >
        <div className = "tab-pane fade show active" id = "nav-general-info" role = "tabpanel" aria-labelledby = "nav-general-info-tab" >
        <div className="card-deck">
                        <div className="col-2 mt-3">
                        <div className="card shadow-soft border-light text-center py-4 ">
                        <div className="boldFont">Total number of UEs</div>
                        <div className="card-body">
                        <p className="card-text greenTxt">{item.totalNumberOfUes ? item.totalNumberOfUes : 'No Data Available'}</p>
                        </div>
                        </div>
                        </div>
                        <div className="col-2 mt-3">
                        <div className="card shadow-soft border-light text-center py-4 ">
                        <div className="boldFont">LTE PDN Sessions</div>
                        <div className="card-body">
                            <p className="card-text greenTxt">{item.ltePdnSessions ? item.ltePdnSessions : 'No Data Available'}</p>
                        </div>
                        </div>
                        </div>
                        <div className="col-2 mt-3">
                        <div className="card shadow-soft border-light text-center py-4 ">
                        <div className="boldFont">2G/3G PDN Sessions</div>
                        <div className="card-body">
                            <p className="card-text greenTxt">{item.twoGthreeGPdnSessions ? item.twoGthreeGPdnSessions : 'No Data Available'}</p>
                        </div>
                        </div>
                        </div>
                        <div className="col-2 mt-3">
                        <div className="card shadow-soft border-light text-center py-4 " >
                        <div className="boldFont">Total number of APNs</div>
                        <div className="card-body">
                            <p className="card-text greenTxt">{item.realApns ? item.realApns : 'No Data Available'}</p>
                        </div>
                        </div>
                        </div>
                        <div className="col-2 mt-3">
                        <div className="card shadow-soft border-light text-center py-4 " >
                        <div className="boldFont">System Uptime</div>
                        <div className="card-body">
                            <p className="card-text greenTxt">{item.totalNumberOfUes ? item.totalNumberOfUes : 'No Data Available'}</p>
                        </div>
                        </div>
                        </div>
                        <div className="col-2 mt-3">
                        <div className="card shadow-soft border-light text-center py-4 " >
                        <div className="boldFont">Operations</div>
                        <div className="card-body">
                            <p className="card-text"><FontAwesomeIcon className="fontCursorPointer" icon = { faEllipsisV } /></p>
                        </div>
                        </div>
                        </div>
</div>

<div className="card-deck">
<div className="col-4 mt-3">
<div className="card shadow-soft border-light text-center py-4 ">
<div className="boldFont">IMSI Search</div>
<div className="card-body">
<div className="card-text">
<div className = "row topSearchBox" >
<div className = "col-12 searchBoxDiv" >
<input type = "search" className = "form-control mr-sm-2 searchBox" name = "imsi" autoComplete = "off" placeholder = "IMSI Search" id = "search-box" aria-label = "Search" required / >
<button className = "searchIcon" type="submit">
<FontAwesomeIcon icon = { faSearch } /> 
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-6 mt-3">
<div className="card shadow-soft border-light text-center py-4 ">
<div className="card-text">
<div className = "row px-5" >
  <div className="col-4">
  <button className="btn btn-primary btn-block" type="button" onClick={() => this.handleBtnSelect(0)}>Gy Statistics</button>
  </div>
  <div className="col-4">
  <button className="btn btn-primary btn-block" type="button" onClick={() => this.handleBtnSelect(1)}>Gx Statistics</button>
  </div>
  <div className="col-4">
  <button className="btn btn-primary btn-block" type="button" onClick={() => this.handleBtnSelect(2)}>Sx Statistics</button>
  </div>
  <div className="col-4 mt-4">
  <button className="btn btn-primary btn-block" type="button" onClick={() => this.handleBtnSelect(3)}>Ga Statistics</button>
  </div>
  <div className="col-4 mt-4">
  <button className="btn btn-primary btn-block" type="button" onClick={() => this.handleBtnSelect(4)}>Radius Statistics</button>
  </div>
  <div className="col-4 mt-4">
  <button className="btn btn-primary btn-block" type="button" onClick={() => this.handleBtnSelect(5)}>Hw Summary</button>
  </div>
</div>
</div>
</div>
</div>

<div className="col-2 mt-3">
<div className="card shadow-soft border-light text-center py-4 ">
<div className="boldFont">Operations</div>
<div className="card-body">
<div className="card-text">
<button type="button" className="btn btn-primary marginLeftBtnAlign" onClick={ () => this.handleBtnSelect(6) }> All Data </button>
</div>
</div>
</div>
</div>
</div>

<div className="card-deck">
<div className="col-12 mt-3">
<div className="card shadow-soft border-light text-center py-4 ">
<div className="card-body">
<div className="card-text">
<div key={index}>
{ (this.state.btnIndex === 0) ?
<div className="card animated fadeIn">
    <div className="card-header" id="headingTwo">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <div className="row">
          <div className="col-12 removePaddingLeft">
              Gy Statistics
              </div>
          </div>
        </button>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse show multi-collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
    <div className="card-body">
    {(item.gyStatisticsList !== null) && item.gyStatisticsList.map((gyStatistics, index) => {
    return(
    <div className="row" key={index}>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Dia Peer Prof:</label>
    </div> 
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gyStatistics.diaPeerProf ? gyStatistics.diaPeerProf : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Peer Address:</label>
    </div> 
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gyStatistics.peerAddress ? gyStatistics.peerAddress : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Path Mgmt State:</label>
    </div> 
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gyStatistics.pathMgmtState ? gyStatistics.pathMgmtState : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Detail State:</label>
    </div>
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gyStatistics.detailState ? gyStatistics.detailState : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    </div>
    )})
    }
    </div>
    </div>
  </div> : (this.state.btnIndex === 1) ? 
    <div className="card animated fadeIn">
    <div className="card-header" id="headingThree">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <div className="row">
          <div className="col-12 removePaddingLeft">
              Gx Statistics
              </div>
          </div>
        </button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse show multi-collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
    <div className="card-body">
    {(item.gxStatisticsList !== null) && item.gxStatisticsList.map((gxStatistics, index) => {
    return(
    <div className="row" key={index}>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Dia Peer Prof:</label>
    </div>
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gxStatistics.diaPeerProf ? gxStatistics.diaPeerProf : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Peer Address:</label>
    </div>
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gxStatistics.peerAddress ? gxStatistics.peerAddress : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Path Mgmt State:</label>
    </div>
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gxStatistics.pathMgmtState ? gxStatistics.pathMgmtState : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Detail State:</label>
    </div> 
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gxStatistics.detailState ? gxStatistics.detailState : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    </div>
    )})
    }
    </div>
    </div>
  </div> : (this.state.btnIndex === 2) ? 
  <div className="card animated fadeIn">
  <div className="card-header" id="headingFour">
    <h5 className="mb-0">
      <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      <div className="row">
        <div className="col-12 removePaddingLeft">
            Sx Statistics
            </div>
        </div>
      </button>
    </h5>
  </div>
  <div id="collapseFour" className="collapse show multi-collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
  <div className="card-body">
  {(item.sxStatisticsList !== null) && item.sxStatisticsList.map((sxStatistics, index) => {
  return(
  <div className="row" key={index}>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">UP Assosication:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={sxStatistics.uPAssociation ? sxStatistics.uPAssociation : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Peer Address:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={sxStatistics.peerAddress ? sxStatistics.peerAddress : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Path Mgmt State:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={sxStatistics.pathMgmtState ? sxStatistics.pathMgmtState : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Last Change Time:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={sxStatistics.lastChangeTime ? sxStatistics.lastChangeTime : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  </div>
  )})
  }
  </div>
  </div>
</div> : (this.state.btnIndex === 3) ? 
  <div className="card animated fadeIn">
  <div className="card-header" id="headingSix">
    <h5 className="mb-0">
      <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
      <div className="row">
        <div className="col-12 removePaddingLeft">
            Ga Statistics
            </div>
        </div>
      </button>
    </h5>
  </div>
  <div id="collapseSix" className="collapse show multi-collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
  <div className="card-body">
  {(item.gaStatisticsList !== null) && item.gaStatisticsList.map((gaStatistics, index) => {
  return(
  <div className="row" key={index}>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">GTP Prim Grp:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={gaStatistics.gtpPrimGrp ? gaStatistics.gtpPrimGrp : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Peer Address:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={gaStatistics.peerAddress ? gaStatistics.peerAddress : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Operation State:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={gaStatistics.operState ? gaStatistics.operState : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Up Time:</label>
  </div> 
  <div className="right">
  <input type="text" className="txtBoxHeight" value={gaStatistics.upTime ? gaStatistics.upTime : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  </div>
  )})
  }
  </div>
  </div>
</div> : (this.state.btnIndex === 4) ?
  <div className="card animated fadeIn">
  <div className="card-header" id="headingFive">
    <h5 className="mb-0">
      <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      <div className="row">
        <div className="col-12 removePaddingLeft">
            Radius Statistics
            </div>
        </div>
      </button>
    </h5>
  </div>
  <div id="collapseFive" className="collapse show multi-collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
  <div className="card-body">
  {(item.radiusStatisticsList !== null) && item.radiusStatisticsList.map((radStatistics, index) => {
  return(
  <div className="row" key={index}>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Group Name:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={radStatistics.groupName ? radStatistics.groupName : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Peer Address:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={radStatistics.peerAddress ? radStatistics.peerAddress : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Operation State:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={radStatistics.operationState ? radStatistics.operationState : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Admin State:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={radStatistics.adminState ? radStatistics.adminState : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  </div>
  )})
  }
  </div>
  </div>
</div>  : (this.state.btnIndex === 5) ?
<div className="card animated fadeIn">
<div className="card-header" id="headingOne">
<h5 className="mb-0">
<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
<div className="row">
<div className="col-12 removePaddingLeft">
Hostname: AMS_PROD_CMG
</div>
</div>
</button>
</h5>
</div>

    <div id="collapseOne" className="collapse show multi-collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
      <div className="row">
        <div className="col-4">
          <div className="left">
        <label className="fontBold">Homers:</label> 
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.homers ? item.homers : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        <div className="col-4">
        <div className="left">
        <label className="fontBold">LTE PDN Sessions:</label>
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.ltePdnSessions ? item.ltePdnSessions : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        <div className="col-4">
        <div className="left">
        <label className="fontBold">Real APNs:</label> 
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.realApns ? item.realApns : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-4">
          <div className="left">
        <label className="fontBold">Roamers:</label> 
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.roamers ? item.roamers : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        <div className="col-4">
          <div className="left">
        <label className="fontBold">2G/3G PDN Sessions:</label> 
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.twoGthreeGPdnSessions ? item.twoGthreeGPdnSessions : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        <div className="col-4">
          <div className="left">
        <label className="fontBold">Ga CDRs Buffered:</label>
        </div>
        <div className="right"> 
        <input type="text" className="txtBoxHeight" value={item.gACdrsBuffered ? item.gACdrsBuffered : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-4">
        <div className="left">
        <label className="fontBold">Visitors:</label> 
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.visitors ? item.visitors : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        <div className="col-4">
          <div className="left">
        <label className="fontBold">Total Number of UEs:</label>
        </div>
        <div className="right"> 
        <input type="text" className="txtBoxHeight" value={item.totalNumberOfUes ? item.totalNumberOfUes : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        <div className="col-4">
          <div className="left">
        <label className="fontBold">Gy CCRs Buffered:</label> 
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.gyCcrsBuffered ? item.gyCcrsBuffered : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  : ((this.state.btnIndex === 6) || (this.state.btnIndex === null)) ?
<div className="accordion" id="accordionExample">
<p className="col-12 pull-right">
<button className="btn btn-primary pull-left" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="collapseOne collapseTwo collapseThree collapseFour collapseFive collapseSix">Collapse/Expand All</button>
</p>
<div className="card">
<div className="card-header" id="headingOne">
<h5 className="mb-0">
<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
<div className="row">
<div className="col-12 removePaddingLeft">
Hostname: AMS_PROD_CMG
</div>
</div>
</button>
</h5>
</div>

    <div id="collapseOne" className="collapse show multi-collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
    <div className="card-body">
      <div className="row">
        <div className="col-4">
          <div className="left">
        <label className="fontBold">Homers:</label> 
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.homers ? item.homers : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        <div className="col-4">
        <div className="left">
        <label className="fontBold">LTE PDN Sessions:</label>
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.ltePdnSessions ? item.ltePdnSessions : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        <div className="col-4">
        <div className="left">
        <label className="fontBold">Real APNs:</label> 
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.realApns ? item.realApns : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-4">
          <div className="left">
        <label className="fontBold">Roamers:</label> 
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.roamers ? item.roamers : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        <div className="col-4">
          <div className="left">
        <label className="fontBold">2G/3G PDN Sessions:</label> 
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.twoGthreeGPdnSessions ? item.twoGthreeGPdnSessions : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        <div className="col-4">
          <div className="left">
        <label className="fontBold">Ga CDRs Buffered:</label>
        </div>
        <div className="right"> 
        <input type="text" className="txtBoxHeight" value={item.gACdrsBuffered ? item.gACdrsBuffered : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-4">
        <div className="left">
        <label className="fontBold">Visitors:</label> 
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.visitors ? item.visitors : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        <div className="col-4">
          <div className="left">
        <label className="fontBold">Total Number of UEs:</label>
        </div>
        <div className="right"> 
        <input type="text" className="txtBoxHeight" value={item.totalNumberOfUes ? item.totalNumberOfUes : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        <div className="col-4">
          <div className="left">
        <label className="fontBold">Gy CCRs Buffered:</label> 
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.gyCcrsBuffered ? item.gyCcrsBuffered : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <div className="row">
          <div className="col-12 removePaddingLeft">
              Gy Statistics
              </div>
          </div>
        </button>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse show multi-collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
    <div className="card-body">
    {(item.gyStatisticsList !== null) && item.gyStatisticsList.map((gyStatistics, index) => {
    return(
    <div className="row" key={index}>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Dia Peer Prof:</label>
    </div> 
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gyStatistics.diaPeerProf ? gyStatistics.diaPeerProf : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Peer Address:</label>
    </div> 
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gyStatistics.peerAddress ? gyStatistics.peerAddress : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Path Mgmt State:</label>
    </div> 
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gyStatistics.pathMgmtState ? gyStatistics.pathMgmtState : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Detail State:</label>
    </div>
    <div className="right">
     <input type="text" className="txtBoxHeight" value={gyStatistics.detailState ? gyStatistics.detailState : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    </div>
    )})
    }
    </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <div className="row">
          <div className="col-12 removePaddingLeft">
              Gx Statistics
              </div>
          </div>
        </button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse show multi-collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
    <div className="card-body">
    {(item.gxStatisticsList !== null) && item.gxStatisticsList.map((gxStatistics, index) => {
    return(
    <div className="row" key={index}>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Dia Peer Prof:</label>
    </div>
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gxStatistics.diaPeerProf ? gxStatistics.diaPeerProf : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Peer Address:</label>
    </div>
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gxStatistics.peerAddress ? gxStatistics.peerAddress : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Path Mgmt State:</label>
    </div>
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gxStatistics.pathMgmtState ? gxStatistics.pathMgmtState : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Detail State:</label>
    </div> 
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gxStatistics.detailState ? gxStatistics.detailState : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    </div>
    )})
    }
    </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingFour">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        <div className="row">
          <div className="col-12 removePaddingLeft">
              Sx Statistics
              </div>
          </div>
        </button>
      </h5>
    </div>
    <div id="collapseFour" className="collapse show multi-collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
    <div className="card-body">
  {(item.sxStatisticsList !== null) && item.sxStatisticsList.map((sxStatistics, index) => {
  return(
  <div className="row" key={index}>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">UP Assosication:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={sxStatistics.uPAssociation ? sxStatistics.uPAssociation : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Peer Address:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={sxStatistics.peerAddress ? sxStatistics.peerAddress : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Path Mgmt State:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={sxStatistics.pathMgmtState ? sxStatistics.pathMgmtState : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Last Change Time:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={sxStatistics.lastChangeTime ? sxStatistics.lastChangeTime : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  </div>
  )})
  }
  </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingFive">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        <div className="row">
          <div className="col-12 removePaddingLeft">
              Radius Statistics
              </div>
          </div>
        </button>
      </h5>
    </div>
    <div id="collapseFive" className="collapse show multi-collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
    <div className="card-body">
  {(item.radiusStatisticsList !== null) && item.radiusStatisticsList.map((radStatistics, index) => {
  return(
  <div className="row" key={index}>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Group Name:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={radStatistics.groupName ? radStatistics.groupName : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Peer Address:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={radStatistics.peerAddress ? radStatistics.peerAddress : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Operation State:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={radStatistics.operationState ? radStatistics.operationState : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Admin State:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={radStatistics.adminState ? radStatistics.adminState : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  </div>
  )})
  }
  </div>
  </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingSix">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        <div className="row">
          <div className="col-12 removePaddingLeft">
              Ga Statistics
              </div>
          </div>
        </button>
      </h5>
    </div>
    <div id="collapseSix" className="collapse show multi-collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
    <div className="card-body">
  {(item.gaStatisticsList !== null) && item.gaStatisticsList.map((gaStatistics, index) => {
  return(
  <div className="row" key={index}>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">GTP Prim Grp:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={gaStatistics.gtpPrimGrp ? gaStatistics.gtpPrimGrp : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Peer Address:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={gaStatistics.peerAddress ? gaStatistics.peerAddress : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Operation State:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={gaStatistics.operState ? gaStatistics.operState : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Up Time:</label>
  </div> 
  <div className="right">
  <input type="text" className="txtBoxHeight" value={gaStatistics.upTime ? gaStatistics.upTime : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  </div>
  )})
  }
  </div>
    </div>
  </div>
</div> : "Sorry No Data Available"
}
</div>
<div className="pt-3">
<p className="col-12 pull-right">
                        
  <button className="btn btn-primary pull-left" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="collapseOne collapseTwo collapseThree collapseFour collapseFive collapseSix">Collapse/Expand All</button>
</p>
</div>
</div>
</div>
</div>
</div>
</div>
        </div> 
        </div>
        </div>
        </div>
        </div>
        </div>
</div>*/}

{/* New Look and Feel according to the design */}
<div className="tabSection">
<div className = "tab-content" id = "myTabContent" >
<div className = "tab-pane fade show active" id = "platform" role = "tabpanel" aria-labelledby = "platform-tab" >
<div className = "row row-sm-offset" >
<div className = "col-md-12 col-sm-12 col-lg-12 col-xl-12 multi-horizontal" data-for = "" >
<nav className="navbar navbar-expand-sm sticky-top navbar-light bg-light noPadding">
<div className="navbar-collapse nav nav-tabs fontReduce" id = "nav-tab" role = "tablist">
<a className = "nav-item nav-link greyColorTxt active" id = "nav-general-info-tab" data-toggle = "tab" href = "#nav-general-info" role = "tab" aria-controls = "nav-general-info" aria-selected = "true"> Inventory </a>
</div>
<ul className="nav nav-bar nav-tabs dropleft pull-right">
<li className="nav-item dropdown" style={{marginTop: -6, marginRight: 18}}>
  <span>Current Date and Time</span>
</li>
</ul>
</nav>

<div className = "tab-content" id = "nav-tabContent" >
<div className = "tab-pane fade show active" id = "nav-general-info" role = "tabpanel" aria-labelledby = "nav-general-info-tab" >
<div className="card-deck shadowDeck">
<div className="col-2 mt-3 border-right mb-3">
<div className="text-center py-4 ">
<div className="boldFont">Total number of UEs</div>
<div className="card-body">
<p className="card-text greenTxt">{item.totalNumberOfUes ? item.totalNumberOfUes : 'No Data Available'}</p>
</div>
</div>
</div>
<div className="col-2 mt-3 border-right mb-3">
<div className="text-center py-4 ">
<div className="boldFont">LTE PDN Sessions</div>
<div className="card-body">
    <p className="card-text greenTxt">{item.ltePdnSessions ? item.ltePdnSessions : 'No Data Available'}</p>
</div>
</div>
</div>
<div className="col-2 mt-3 border-right mb-3">
<div className="text-center py-4 ">
<div className="boldFont">2G/3G PDN Sessions</div>
<div className="card-body">
    <p className="card-text greenTxt">{item.twoGthreeGPdnSessions ? item.twoGthreeGPdnSessions : 'No Data Available'}</p>
</div>
</div>
</div>
<div className="col-2 mt-3 border-right mb-3">
<div className="text-center py-4 " >
<div className="boldFont">Total number of APNs</div>
<div className="card-body">
    <p className="card-text greenTxt">{item.realApns ? item.realApns : 'No Data Available'}</p>
</div>
</div>
</div>
<div className="col-2 mt-3 border-right mb-3">
<div className="border-light text-center py-4 " >
<div className="boldFont">System Uptime</div>
<div className="card-body">
    <p className="card-text greenTxt">{item.totalNumberOfUes ? item.totalNumberOfUes : 'No Data Available'}</p>
</div>
</div>
</div>
<div className="col-2 mt-3 mb-3">
<div className="border-light text-center py-4 " >
<div className="boldFont"></div>
<div className="card-body">
    <p className="card-text"><FontAwesomeIcon className="fontCursorPointer" icon = { faEllipsisV } /></p>
</div>
</div>
</div>
</div>

<div className="card-deck shadowDeck mt-2">
<div className="col-4 mt-3 border-right mb-3">
<div className="text-center py-4 ">
<div className="boldFont">IMSI Search</div>
<div className="card-body">
<div className="card-text">
<div className = "row topSearchBox" >
<div className = "col-12 searchBoxDiv" >
<input type = "search" className = "form-control mr-sm-2 searchBox" name = "imsi" autoComplete = "off" placeholder = "IMSI Search" id = "search-box" aria-label = "Search" required / >
<button className = "searchIcon" type="submit">
<FontAwesomeIcon icon = { faSearch } /> 
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="col-6 mt-3 border-right mb-3">
<div className="text-center py-4 ">
<div className="card-text">
<div className = "row px-5" >
<div className="col-4">
<button className="btn btn-primary btn-block" type="button" onClick={() => this.handleBtnSelect(0)}>Gy Statistics</button>
</div>
<div className="col-4">
<button className="btn btn-primary btn-block" type="button" onClick={() => this.handleBtnSelect(1)}>Gx Statistics</button>
</div>
<div className="col-4">
<button className="btn btn-primary btn-block" type="button" onClick={() => this.handleBtnSelect(2)}>Sx Statistics</button>
</div>
<div className="col-4 mt-4">
<button className="btn btn-primary btn-block" type="button" onClick={() => this.handleBtnSelect(3)}>Ga Statistics</button>
</div>
<div className="col-4 mt-4">
<button className="btn btn-primary btn-block" type="button" onClick={() => this.handleBtnSelect(4)}>Radius Statistics</button>
</div>
<div className="col-4 mt-4">
<button className="btn btn-primary btn-block" type="button" onClick={() => this.handleBtnSelect(5)}>Hw Summary</button>
</div>
</div>
</div>
</div>
</div>

<div className="col-2 mt-3 mb-3">
<div className="text-center py-4 ">
<div className="boldFont"></div>
<div className="card-body">
<div className="card-text">
<button type="button" className="btn btn-primary marginLeftBtnAlign" onClick={ () => this.handleBtnSelect(6) }> All Data </button>
</div>
</div>
</div>
</div>
</div>

<div className="card-deck shadowDeck mt-2">
<div className="col-12 mt-3">
<div className="text-center py-4 ">
<div className="card-body">
<div className="card-text">
<div key={index}>
{ (this.state.btnIndex === 0) ?
<div className="accordion" id="accordionExample">
<p className="col-12 pull-right">
<button className="btn btn-primary pull-left" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="collapseTwo">Collapse/Expand</button>
</p>
<div className="card animated fadeIn">
    <div className="card-header" id="headingTwo">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <div className="row">
          <div className="col-12 removePaddingLeft">
              Gy Statistics
              </div>
          </div>
        </button>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse show multi-collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
    <div className="card-body">
    {(item.gyStatisticsList !== null) && item.gyStatisticsList.map((gyStatistics, index) => {
    return(
    <div className="row" key={index}>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Dia Peer Prof:</label>
    </div> 
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gyStatistics.diaPeerProf ? gyStatistics.diaPeerProf : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Peer Address:</label>
    </div> 
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gyStatistics.peerAddress ? gyStatistics.peerAddress : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Path Mgmt State:</label>
    </div> 
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gyStatistics.pathMgmtState ? gyStatistics.pathMgmtState : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Detail State:</label>
    </div>
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gyStatistics.detailState ? gyStatistics.detailState : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    </div>
    )})
    }
    </div>
    </div>
  </div></div> : (this.state.btnIndex === 1) ? 
    <div className="accordion" id="accordionExample">
    <p className="col-12 pull-right">
    <button className="btn btn-primary pull-left" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="collapseThree">Collapse/Expand</button>
    </p>
    <div className="card animated fadeIn">
    <div className="card-header" id="headingThree">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <div className="row">
          <div className="col-12 removePaddingLeft">
              Gx Statistics
              </div>
          </div>
        </button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse show multi-collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
    <div className="card-body">
    {(item.gxStatisticsList !== null) && item.gxStatisticsList.map((gxStatistics, index) => {
    return(
    <div className="row" key={index}>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Dia Peer Prof:</label>
    </div>
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gxStatistics.diaPeerProf ? gxStatistics.diaPeerProf : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Peer Address:</label>
    </div>
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gxStatistics.peerAddress ? gxStatistics.peerAddress : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Path Mgmt State:</label>
    </div>
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gxStatistics.pathMgmtState ? gxStatistics.pathMgmtState : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Detail State:</label>
    </div> 
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gxStatistics.detailState ? gxStatistics.detailState : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    </div>
    )})
    }
    </div>
    </div>
  </div></div> : (this.state.btnIndex === 2) ? 
  <div className="accordion" id="accordionExample">
  <p className="col-12 pull-right">
  <button className="btn btn-primary pull-left" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="collapseFour">Collapse/Expand</button>
  </p>
  <div className="card animated fadeIn">
  <div className="card-header" id="headingFour">
    <h5 className="mb-0">
      <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
      <div className="row">
        <div className="col-12 removePaddingLeft">
            Sx Statistics
            </div>
        </div>
      </button>
    </h5>
  </div>
  <div id="collapseFour" className="collapse show multi-collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
  <div className="card-body">
  {(item.sxStatisticsList !== null) && item.sxStatisticsList.map((sxStatistics, index) => {
  return(
  <div className="row" key={index}>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">UP Assosication:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={sxStatistics.uPAssociation ? sxStatistics.uPAssociation : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Peer Address:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={sxStatistics.peerAddress ? sxStatistics.peerAddress : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Path Mgmt State:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={sxStatistics.pathMgmtState ? sxStatistics.pathMgmtState : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Last Change Time:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={sxStatistics.lastChangeTime ? sxStatistics.lastChangeTime : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  </div>
  )})
  }
  </div>
  </div>
</div></div> : (this.state.btnIndex === 3) ? 
  <div className="accordion" id="accordionExample">
  <p className="col-12 pull-right">
  <button className="btn btn-primary pull-left" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="collapseSix">Collapse/Expand</button>
  </p>
  <div className="card animated fadeIn">
  <div className="card-header" id="headingSix">
    <h5 className="mb-0">
      <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
      <div className="row">
        <div className="col-12 removePaddingLeft">
            Ga Statistics
            </div>
        </div>
      </button>
    </h5>
  </div>
  <div id="collapseSix" className="collapse show multi-collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
  <div className="card-body">
  {(item.gaStatisticsList !== null) && item.gaStatisticsList.map((gaStatistics, index) => {
  return(
  <div className="row" key={index}>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">GTP Prim Grp:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={gaStatistics.gtpPrimGrp ? gaStatistics.gtpPrimGrp : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Peer Address:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={gaStatistics.peerAddress ? gaStatistics.peerAddress : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Operation State:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={gaStatistics.operState ? gaStatistics.operState : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Up Time:</label>
  </div> 
  <div className="right">
  <input type="text" className="txtBoxHeight" value={gaStatistics.upTime ? gaStatistics.upTime : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  </div>
  )})
  }
  </div>
  </div>
</div></div> : (this.state.btnIndex === 4) ?
  <div className="accordion" id="accordionExample">
  <p className="col-12 pull-right">
  <button className="btn btn-primary pull-left" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="collapseFive">Collapse/Expand</button>
  </p>
  <div className="card animated fadeIn">
  <div className="card-header" id="headingFive">
    <h5 className="mb-0">
      <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
      <div className="row">
        <div className="col-12 removePaddingLeft">
            Radius Statistics
            </div>
        </div>
      </button>
    </h5>
  </div>
  <div id="collapseFive" className="collapse show multi-collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
  <div className="card-body">
  {(item.radiusStatisticsList !== null) && item.radiusStatisticsList.map((radStatistics, index) => {
  return(
  <div className="row" key={index}>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Group Name:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={radStatistics.groupName ? radStatistics.groupName : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Peer Address:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={radStatistics.peerAddress ? radStatistics.peerAddress : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Operation State:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={radStatistics.operationState ? radStatistics.operationState : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Admin State:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={radStatistics.adminState ? radStatistics.adminState : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  </div>
  )})
  }
  </div>
  </div>
</div></div>  : (this.state.btnIndex === 5) ?
<div className="accordion" id="accordionExample">
<p className="col-12 pull-right">
<button className="btn btn-primary pull-left" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="collapseOne">Collapse/Expand</button>
</p>
<div className="card animated fadeIn">
<div className="card-header" id="headingOne">
<h5 className="mb-0">
<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
<div className="row">
<div className="col-12 removePaddingLeft">
Hostname: AMS_PROD_CMG
</div>
</div>
</button>
</h5>
</div>

    <div id="collapseOne" className="collapse show multi-collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
      <div className="row">
        <div className="col-4">
          <div className="left">
        <label className="fontBold">Homers:</label> 
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.homers ? item.homers : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        <div className="col-4">
        <div className="left">
        <label className="fontBold">LTE PDN Sessions:</label>
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.ltePdnSessions ? item.ltePdnSessions : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        <div className="col-4">
        <div className="left">
        <label className="fontBold">Real APNs:</label> 
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.realApns ? item.realApns : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-4">
          <div className="left">
        <label className="fontBold">Roamers:</label> 
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.roamers ? item.roamers : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        <div className="col-4">
          <div className="left">
        <label className="fontBold">2G/3G PDN Sessions:</label> 
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.twoGthreeGPdnSessions ? item.twoGthreeGPdnSessions : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        <div className="col-4">
          <div className="left">
        <label className="fontBold">Ga CDRs Buffered:</label>
        </div>
        <div className="right"> 
        <input type="text" className="txtBoxHeight" value={item.gACdrsBuffered ? item.gACdrsBuffered : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-4">
        <div className="left">
        <label className="fontBold">Visitors:</label> 
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.visitors ? item.visitors : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        <div className="col-4">
          <div className="left">
        <label className="fontBold">Total Number of UEs:</label>
        </div>
        <div className="right"> 
        <input type="text" className="txtBoxHeight" value={item.totalNumberOfUes ? item.totalNumberOfUes : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        <div className="col-4">
          <div className="left">
        <label className="fontBold">Gy CCRs Buffered:</label> 
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.gyCcrsBuffered ? item.gyCcrsBuffered : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        </div>
      </div>
    </div>
  </div></div>
  : ((this.state.btnIndex === 6) || (this.state.btnIndex === null)) ?
<div className="accordion" id="accordionExample">
<p className="col-12 pull-right">
<button className="btn btn-primary pull-left" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="collapseOne collapseTwo collapseThree collapseFour collapseFive collapseSix">Collapse/Expand All</button>
</p>
<div className="card">
<div className="card-header" id="headingOne">
<h5 className="mb-0">
<button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
<div className="row">
<div className="col-12 removePaddingLeft">
Hostname: AMS_PROD_CMG
</div>
</div>
</button>
</h5>
</div>

    <div id="collapseOne" className="collapse show multi-collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
    <div className="card-body">
      <div className="row">
        <div className="col-4">
          <div className="left">
        <label className="fontBold">Homers:</label> 
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.homers ? item.homers : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        <div className="col-4">
        <div className="left">
        <label className="fontBold">LTE PDN Sessions:</label>
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.ltePdnSessions ? item.ltePdnSessions : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        <div className="col-4">
        <div className="left">
        <label className="fontBold">Real APNs:</label> 
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.realApns ? item.realApns : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-4">
          <div className="left">
        <label className="fontBold">Roamers:</label> 
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.roamers ? item.roamers : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        <div className="col-4">
          <div className="left">
        <label className="fontBold">2G/3G PDN Sessions:</label> 
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.twoGthreeGPdnSessions ? item.twoGthreeGPdnSessions : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        <div className="col-4">
          <div className="left">
        <label className="fontBold">Ga CDRs Buffered:</label>
        </div>
        <div className="right"> 
        <input type="text" className="txtBoxHeight" value={item.gACdrsBuffered ? item.gACdrsBuffered : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        </div>
        <div className="row">
        <div className="col-4">
        <div className="left">
        <label className="fontBold">Visitors:</label> 
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.visitors ? item.visitors : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        <div className="col-4">
          <div className="left">
        <label className="fontBold">Total Number of UEs:</label>
        </div>
        <div className="right"> 
        <input type="text" className="txtBoxHeight" value={item.totalNumberOfUes ? item.totalNumberOfUes : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        <div className="col-4">
          <div className="left">
        <label className="fontBold">Gy CCRs Buffered:</label> 
        </div>
        <div className="right">
        <input type="text" className="txtBoxHeight" value={item.gyCcrsBuffered ? item.gyCcrsBuffered : 'No Data Available'}  readOnly disabled />
        </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <div className="row">
          <div className="col-12 removePaddingLeft">
              Gy Statistics
              </div>
          </div>
        </button>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse show multi-collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
    <div className="card-body">
    {(item.gyStatisticsList !== null) && item.gyStatisticsList.map((gyStatistics, index) => {
    return(
    <div className="row" key={index}>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Dia Peer Prof:</label>
    </div> 
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gyStatistics.diaPeerProf ? gyStatistics.diaPeerProf : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Peer Address:</label>
    </div> 
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gyStatistics.peerAddress ? gyStatistics.peerAddress : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Path Mgmt State:</label>
    </div> 
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gyStatistics.pathMgmtState ? gyStatistics.pathMgmtState : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Detail State:</label>
    </div>
    <div className="right">
     <input type="text" className="txtBoxHeight" value={gyStatistics.detailState ? gyStatistics.detailState : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    </div>
    )})
    }
    </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <div className="row">
          <div className="col-12 removePaddingLeft">
              Gx Statistics
              </div>
          </div>
        </button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse show multi-collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
    <div className="card-body">
    {(item.gxStatisticsList !== null) && item.gxStatisticsList.map((gxStatistics, index) => {
    return(
    <div className="row" key={index}>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Dia Peer Prof:</label>
    </div>
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gxStatistics.diaPeerProf ? gxStatistics.diaPeerProf : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Peer Address:</label>
    </div>
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gxStatistics.peerAddress ? gxStatistics.peerAddress : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Path Mgmt State:</label>
    </div>
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gxStatistics.pathMgmtState ? gxStatistics.pathMgmtState : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    <div className="col-3">
    <div className="left">
    <label className="fontBold">Detail State:</label>
    </div> 
    <div className="right">
    <input type="text" className="txtBoxHeight" value={gxStatistics.detailState ? gxStatistics.detailState : 'No Data Available'}  readOnly disabled />
    </div>
    </div>
    </div>
    )})
    }
    </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingFour">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        <div className="row">
          <div className="col-12 removePaddingLeft">
              Sx Statistics
              </div>
          </div>
        </button>
      </h5>
    </div>
    <div id="collapseFour" className="collapse show multi-collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
    <div className="card-body">
  {(item.sxStatisticsList !== null) && item.sxStatisticsList.map((sxStatistics, index) => {
  return(
  <div className="row" key={index}>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">UP Assosication:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={sxStatistics.uPAssociation ? sxStatistics.uPAssociation : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Peer Address:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={sxStatistics.peerAddress ? sxStatistics.peerAddress : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Path Mgmt State:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={sxStatistics.pathMgmtState ? sxStatistics.pathMgmtState : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Last Change Time:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={sxStatistics.lastChangeTime ? sxStatistics.lastChangeTime : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  </div>
  )})
  }
  </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingFive">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        <div className="row">
          <div className="col-12 removePaddingLeft">
              Radius Statistics
              </div>
          </div>
        </button>
      </h5>
    </div>
    <div id="collapseFive" className="collapse show multi-collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
    <div className="card-body">
  {(item.radiusStatisticsList !== null) && item.radiusStatisticsList.map((radStatistics, index) => {
  return(
  <div className="row" key={index}>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Group Name:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={radStatistics.groupName ? radStatistics.groupName : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Peer Address:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={radStatistics.peerAddress ? radStatistics.peerAddress : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Operation State:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={radStatistics.operationState ? radStatistics.operationState : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Admin State:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={radStatistics.adminState ? radStatistics.adminState : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  </div>
  )})
  }
  </div>
  </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingSix">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        <div className="row">
          <div className="col-12 removePaddingLeft">
              Ga Statistics
              </div>
          </div>
        </button>
      </h5>
    </div>
    <div id="collapseSix" className="collapse show multi-collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
    <div className="card-body">
  {(item.gaStatisticsList !== null) && item.gaStatisticsList.map((gaStatistics, index) => {
  return(
  <div className="row" key={index}>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">GTP Prim Grp:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={gaStatistics.gtpPrimGrp ? gaStatistics.gtpPrimGrp : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Peer Address:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={gaStatistics.peerAddress ? gaStatistics.peerAddress : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Operation State:</label>
  </div>
  <div className="right">
  <input type="text" className="txtBoxHeight" value={gaStatistics.operState ? gaStatistics.operState : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  <div className="col-3">
  <div className="left">
  <label className="fontBold">Up Time:</label>
  </div> 
  <div className="right">
  <input type="text" className="txtBoxHeight" value={gaStatistics.upTime ? gaStatistics.upTime : 'No Data Available'}  readOnly disabled />
  </div>
  </div>
  </div>
  )})
  }
  </div>
    </div>
  </div>
</div> : "Sorry No Data Available"
}
</div>
<div className="pt-3">
<p className="col-12 pull-right">
  {  ((this.state.btnIndex === 6) || (this.state.btnIndex === null)) ?                    
  <button className="btn btn-primary pull-left" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="collapseOne collapseTwo collapseThree collapseFour collapseFive collapseSix">Collapse/Expand All</button>
    : <button className="btn btn-primary pull-left" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="collapseOne collapseTwo collapseThree collapseFour collapseFive collapseSix">Collapse/Expand</button>
}
</p>
</div>
</div>
</div>
</div>
</div>
</div>
        </div> 
        </div>
        </div>
        </div>
        </div>
        </div>
</div>

</React.Fragment>
                    ) 
                  
                })
            }
        </div>
    );
    }
}