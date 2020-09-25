import React  from 'react';

export default class DefaultView extends React.Component {
    render() {
      // Get the data from the context api to manipulate the data for the default view
      const { data, count, loading } = this.context || {};
      const finalData = [];
      finalData.push(data.packetSwitchAdminDefaultViewVO);
      // Check if the count is zero or undefined to display the no records message
       if((count === 0) || (count === undefined)) {
        return (
        <span className="ml-4">Sorry, No Information available</span>
        )
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
                       
                        <div className="accordion pt-3" id="accordionExample">
                        
                        <p>
                        
                        <button className="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="collapseOne collapseTwo collapseThree collapseFour collapseFive collapseSix">Collapse/Expand All</button>
</p>
  <div className="card">
    <div className="card-header" id="headingOne">
      <h5 className="mb-0">
        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <div className="row">
                        <div className="col-12">
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
                            <label className="fontBold">Homers:</label> <span>{item.homers ? item.homers : 'No Data'}</span></div>
                        <div className="col-4">
                        <label className="fontBold">LTE PDN Sessions:</label> <span>{item.ltePdnSessions ? item.ltePdnSessions : 'No Data'}</span></div>
                        <div className="col-4">
                        <label className="fontBold">Real APNs:</label> <span>{item.realApns ? item.realApns : 'No Data'}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                            <label className="fontBold">Roamers:</label> <span>{item.roamers ? item.roamers : 'No Data'}</span></div>
                        <div className="col-4">
                        <label className="fontBold">2G/3G PDN Sessions:</label> <span>{item.twoGthreeGPdnSessions ? item.twoGthreeGPdnSessions : 'No Data'}</span></div>
                        <div className="col-4">
                        <label className="fontBold">Ga CDRs Buffered:</label> <span>{item.gACdrsBuffered ? item.gACdrsBuffered : 'No Data'}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                            <label className="fontBold">Visitors:</label> <span>{item.visitors ? item.visitors : 'No Data'}</span></div>
                        <div className="col-4">
                        <label className="fontBold">Total Number of UEs:</label> <span>{item.totalNumberOfUes ? item.totalNumberOfUes : 'No Data'}</span></div>
                        <div className="col-4">
                        <label className="fontBold">Gy CCRs Buffered:</label> <span>{item.gyCcrsBuffered ? item.gyCcrsBuffered : 'No Data'}</span></div>
                        </div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <div className="row">
                        <div className="col-12">
                            Gy Statistics
                            </div>
                        </div>
        </button>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse show multi-collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
      <div className="row">
                            <div className="col-3">
                            <label className="fontBold">Dia Peer Prof:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Peer Address:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Path Mgmt State:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Detail State:</label> <span>{item.lastName}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                            <label className="fontBold">Dia Peer Prof:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Peer Address:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Path Mgmt State:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Detail State:</label> <span>{item.lastName}</span></div>
                        </div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingThree">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <div className="row">
                        <div className="col-12">
                            Gx Statistics
                            </div>
                        </div>
        </button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse show multi-collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body">
      <div className="row">
                            <div className="col-3">
                            <label className="fontBold">Dia Peer Prof:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Peer Address:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Path Mgmt State:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Detail State:</label> <span>{item.lastName}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                            <label className="fontBold">Dia Peer Prof:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Peer Address:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Path Mgmt State:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Detail State:</label> <span>{item.lastName}</span></div>
                        </div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingFour">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        <div className="row">
                        <div className="col-12">
                            Sx Statistics
                            </div>
                        </div>
        </button>
      </h5>
    </div>
    <div id="collapseFour" className="collapse show multi-collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
      <div className="card-body">
      <div className="row">
                            <div className="col-3">
                            <label className="fontBold">Up Association:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Peer Address:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Path Mgmt State:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Last Change Time:</label> <span>{item.lastName}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                            <label className="fontBold">Up Association:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Peer Address:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Path Mgmt State:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Last Change Time:</label> <span>{item.lastName}</span></div>
                        </div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingFive">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        <div className="row">
                        <div className="col-12">
                            Radius Statistics
                            </div>
                        </div>
        </button>
      </h5>
    </div>
    <div id="collapseFive" className="collapse show multi-collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
      <div className="card-body">
      <div className="row">
                            <div className="col-3">
                            <label className="fontBold">Group Name:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Peer Address:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Operation State:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Admin State:</label> <span>{item.lastName}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                            <label className="fontBold">Group Name:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Peer Address:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Operation State:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Admin State:</label> <span>{item.lastName}</span></div>
                        </div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingSix">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        <div className="row">
                        <div className="col-12">
                            Ga Statistics
                            </div>
                        </div>
        </button>
      </h5>
    </div>
    <div id="collapseSix" className="collapse show multi-collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
      <div className="card-body">
      <div className="row">
                            <div className="col-3">
                            <label className="fontBold">GTP Prim Grp:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Peer Address:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Operation State:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Up Time:</label> <span>{item.lastName}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                            <label className="fontBold">GTP Prim Grp:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Peer Address:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Operation State:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Up Time:</label> <span>{item.lastName}</span></div>
                        </div>
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