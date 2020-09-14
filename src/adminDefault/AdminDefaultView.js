import React  from 'react';
import axios from 'axios';
import { authEndpoint } from '../environment';

export default class AdminDefaultView extends React.Component {
    //const [{user}, dispatch] = useDataLayerValue();
    componentDidMount() {
        var self = this;
        this.setState({ loading: true }, () => {
        axios
        .get("http://localhost:8080/api/diagnosticData", {
            "Content-Type": "application/xml; charset=utf-8"
         })
        .then(function(response) {
            self.setState((state, props) => ({ loading: false, data: response.data, count: response.data.length }));
        })
        .catch(function(error) {
            console.log(error);
        });
    });
    }

    render() {
       const { data, count, loading } = this.state || {};
       if((count === 0) || (count === undefined)) {
        return (
        <span >Sorry, No Information available</span>
        )
       }
       return (

        <div className="container-fluid leftPadding fontChange">
            {
                //loading ? <div className = "d-flex justify-content-center custom-loader" ><div className = "spinner-border text-primary" role = "status" ><span className = "sr-only" > Loading... </span> </div> </div>  :
                
                loading ? <div className="v-loading-indicator second v-loading-indicator-delay" ></div>  :
                (data && data.length > 0) &&
                data.map((item) => {
                    return (
                        <>
                        {/*<div key={item.id}>
                        <div className="row">
                        <div className="col-12">
                            <h4>Hostname: AMS_PROD_CMG </h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                            <label className="fontBold">Homers:</label> <span>{item.firstName}</span></div>
                        <div className="col-4">
                        <label className="fontBold">LTE PDN Sessions:</label> <span>{item.lastName}</span></div>
                        <div className="col-4">
                        <label className="fontBold">Real APNs:</label> <span>{item.lastName}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                            <label className="fontBold">Roamers:</label> <span>{item.firstName}</span></div>
                        <div className="col-4">
                        <label className="fontBold">2G/3G PDN Sessions:</label> <span>{item.lastName}</span></div>
                        <div className="col-4">
                        <label className="fontBold">Ga CDRs Buffered:</label> <span>{item.lastName}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                            <label className="fontBold">Visitors:</label> <span>{item.firstName}</span></div>
                        <div className="col-4">
                        <label className="fontBold">Total Number of UEs:</label> <span>{item.lastName}</span></div>
                        <div className="col-4">
                        <label className="fontBold">Gy CCRs Buffered:</label> <span>{item.lastName}</span></div>
                        </div>
                        <hr></hr>
                        <div className="row">
                        <div className="col-12">
                            <h4>Gy Statistics</h4>
                            </div>
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
                        <hr></hr>
                        <div className="row">
                        <div className="col-12">
                            <h4>Gx Statistics</h4>
                            </div>
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
                        <hr></hr>
                        <div className="row">
                        <div className="col-12">
                            <h4>Sx Statistics</h4>
                            </div>
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
                        <hr></hr>
                        <div className="row">
                        <div className="col-12">
                            <h4>Radius Statistics</h4>
                            </div>
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
                        <hr></hr>
                        <div className="row">
                        <div className="col-12">
                            <h4>Ga Statistics</h4>
                            </div>
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
                    </div>*/}

                        <div key={item.id}>
                       
                        <div class="accordion pt-3" id="accordionExample">
                        
                        <p>
                        
                        <button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="collapseOne collapseTwo collapseThree collapseFour collapseFive collapseSix">Collapse/Expand All</button>
</p>
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <div className="row">
                        <div className="col-12">
                            Hostname: AMS_PROD_CMG
                            </div>
                        </div>
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show multi-collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div class="card-body">
      <div className="row">
                            <div className="col-4">
                            <label className="fontBold">Homers:</label> <span>{item.firstName}</span></div>
                        <div className="col-4">
                        <label className="fontBold">LTE PDN Sessions:</label> <span>{item.lastName}</span></div>
                        <div className="col-4">
                        <label className="fontBold">Real APNs:</label> <span>{item.lastName}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                            <label className="fontBold">Roamers:</label> <span>{item.firstName}</span></div>
                        <div className="col-4">
                        <label className="fontBold">2G/3G PDN Sessions:</label> <span>{item.lastName}</span></div>
                        <div className="col-4">
                        <label className="fontBold">Ga CDRs Buffered:</label> <span>{item.lastName}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                            <label className="fontBold">Visitors:</label> <span>{item.firstName}</span></div>
                        <div className="col-4">
                        <label className="fontBold">Total Number of UEs:</label> <span>{item.lastName}</span></div>
                        <div className="col-4">
                        <label className="fontBold">Gy CCRs Buffered:</label> <span>{item.lastName}</span></div>
                        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-header" id="headingTwo">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <div className="row">
                        <div className="col-12">
                            Gy Statistics
                            </div>
                        </div>
        </button>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse show multi-collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div class="card-body">
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
  <div class="card">
    <div class="card-header" id="headingThree">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <div className="row">
                        <div className="col-12">
                            Gx Statistics
                            </div>
                        </div>
        </button>
      </h5>
    </div>
    <div id="collapseThree" class="collapse show multi-collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div class="card-body">
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
  <div class="card">
    <div class="card-header" id="headingFour">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        <div className="row">
                        <div className="col-12">
                            Sx Statistics
                            </div>
                        </div>
        </button>
      </h5>
    </div>
    <div id="collapseFour" class="collapse show multi-collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
      <div class="card-body">
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
  <div class="card">
    <div class="card-header" id="headingFive">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
        <div className="row">
                        <div className="col-12">
                            Radius Statistics
                            </div>
                        </div>
        </button>
      </h5>
    </div>
    <div id="collapseFive" class="collapse show multi-collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
      <div class="card-body">
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
  <div class="card">
    <div class="card-header" id="headingSix">
      <h5 class="mb-0">
        <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
        <div className="row">
                        <div className="col-12">
                            Ga Statistics
                            </div>
                        </div>
        </button>
      </h5>
    </div>
    <div id="collapseSix" class="collapse show multi-collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
      <div class="card-body">
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
<div class="pt-3">
<p>
                        
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target=".multi-collapse" aria-expanded="false" aria-controls="collapseOne collapseTwo collapseThree collapseFour collapseFive collapseSix">Collapse/Expand All</button>
</p>
</div>



                        </>
                    ) 
                    
                }) 
            }
        </div>
    );
    }
}