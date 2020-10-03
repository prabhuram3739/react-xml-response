import React  from 'react';

export default class DefaultView extends React.Component {
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
                        <div key={index}>
                       
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
        <label className="fontBold textAlignRight">Homers:</label> <span>{item.packetSwitchAdminDefaultHeaderVO.homers ? item.packetSwitchAdminDefaultHeaderVO.homers : 'No Data Available'}</span></div>
        <div className="col-4">
        <label className="fontBold textAlignRight">LTE PDN Sessions:</label> <span>{item.packetSwitchAdminDefaultHeaderVO.ltePdnSessions ? item.packetSwitchAdminDefaultHeaderVO.ltePdnSessions : 'No Data Available'}</span></div>
        <div className="col-4">
        <label className="fontBold textAlignRight">Real APNs:</label> <span>{item.packetSwitchAdminDefaultHeaderVO.realApns ? item.packetSwitchAdminDefaultHeaderVO.realApns : 'No Data Available'}</span></div>
        </div>
        <div className="row">
        <div className="col-4">
        <label className="fontBold textAlignRight">Roamers:</label> <span>{item.packetSwitchAdminDefaultHeaderVO.roamers ? item.packetSwitchAdminDefaultHeaderVO.roamers : 'No Data Available'}</span></div>
        <div className="col-4">
        <label className="fontBold textAlignRight">2G/3G PDN Sessions:</label> <span>{item.packetSwitchAdminDefaultHeaderVO.twoGthreeGPdnSessions ? item.packetSwitchAdminDefaultHeaderVO.twoGthreeGPdnSessions : 'No Data Available'}</span></div>
        <div className="col-4">
        <label className="fontBold textAlignRight">Ga CDRs Buffered:</label> <span>{item.packetSwitchAdminDefaultHeaderVO.gACdrsBuffered ? item.packetSwitchAdminDefaultHeaderVO.gACdrsBuffered : 'No Data Available'}</span></div>
        </div>
        <div className="row">
        <div className="col-4">
        <label className="fontBold textAlignRight">Visitors:</label> <span>{item.packetSwitchAdminDefaultHeaderVO.visitors ? item.packetSwitchAdminDefaultHeaderVO.visitors : 'No Data Available'}</span></div>
        <div className="col-4">
        <label className="fontBold textAlignRight">Total Number of UEs:</label> <span>{item.packetSwitchAdminDefaultHeaderVO.totalNumberOfUes ? item.packetSwitchAdminDefaultHeaderVO.totalNumberOfUes : 'No Data Available'}</span></div>
        <div className="col-4">
        <label className="fontBold textAlignRight">Gy CCRs Buffered:</label> <span>{item.packetSwitchAdminDefaultHeaderVO.gyCcrsBuffered ? item.packetSwitchAdminDefaultHeaderVO.gyCcrsBuffered : 'No Data Available'}</span></div>
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
</div>



</React.Fragment>
                    ) 
                  
                })
            }
        </div>
    );
    }
}