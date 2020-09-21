import React  from 'react';

export default class DataModifications extends React.Component {
    render() {
       return (
        <div className="container-fluid noPadding fontChange">
            {
                <React.Fragment>
                                            <div className="accordion pt-0" id="accordionExample">
                        
  <div className="card">
    <div className="card-header" id="headingOne">
      <h5 className="mb-0">
        <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <div className="row">
            <div className="col-12">
                APN Enable/Disable
                </div>
            </div>
        </button>
      </h5>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
      <div className="row">
        <div className="col-6">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">API Name</span>
        </div>
        <input type="text" className="form-control" placeholder="API Name" aria-label="apiName" aria-describedby="basic-addon1" />
        </div>
        </div>
        <div className="col-3">
        <button className="btn btn-primary pull-right" type="button">Enable</button>
        </div>
        <div className="col-3">
        <button className="btn btn-primary pull-right" type="button">Disable</button>
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
            <div className="col-12">
                GI DNS - Add/Modify
                </div>
            </div>
        </button>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
      <div className="row">
        <div className="col-4">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">API Name</span>
        </div>
        <input type="text" className="form-control" placeholder="API Name" aria-label="apiName" aria-describedby="basic-addon1" />
        </div>
        </div>
        <div className="col-4">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Primary IP</span>
        </div>
        <input type="text" className="form-control" placeholder="Primary IP" aria-label="primaryIP" aria-describedby="basic-addon1" />
        </div>
        </div>
        <div className="col-4">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Secondary IP</span>
        </div>
        <input type="text" className="form-control" placeholder="Secondary IP" aria-label="secondaryIP" aria-describedby="basic-addon1" />
        </div>
        </div>
        </div>

        <div className="row pull-right mb-3">
        <div className="col-6">
        <button className="btn btn-primary pull-right" type="button">Add</button>
        </div>
        <div className="col-6">
        <button className="btn btn-primary pull-right" type="button">Modify</button>
        </div>
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
                GY Inline
                </div>
            </div>
        </button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body">
      <div className="row">
        <div className="col-3">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">API Name</span>
        </div>
        <input type="text" className="form-control" placeholder="API Name" aria-label="apiName" aria-describedby="basic-addon1" />
        </div>
        </div>
        <div className="col-3">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Home</span>
        </div>
        <input type="text" className="form-control" placeholder="Home" aria-label="home" aria-describedby="basic-addon1" />
        </div>
        </div>
        <div className="col-3">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Visiting</span>
        </div>
        <input type="text" className="form-control" placeholder="Visiting" aria-label="visiting" aria-describedby="basic-addon1" />
        </div>
        </div>
        <div className="col-3">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Roaming</span>
        </div>
        <input type="text" className="form-control" placeholder="Roaming" aria-label="roaming" aria-describedby="basic-addon1" />
        </div>
        </div>
        </div>

        <div className="row pull-right mb-3">
        <div className="col-4">
        <button className="btn btn-primary pull-right" type="button">Home</button>
        </div>
        <div className="col-4">
        <button className="btn btn-primary pull-right" type="button">Visiting</button>
        </div>
        <div className="col-4">
        <button className="btn btn-primary pull-right" type="button">Roaming</button>
        </div>
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
                Gy Bypass
                </div>
            </div>
        </button>
      </h5>
    </div>
    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
      <div className="card-body">
      <div className="row">
        <div className="col-3">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">API Name</span>
        </div>
        <input type="text" className="form-control" placeholder="API Name" aria-label="apiName" aria-describedby="basic-addon1" />
        </div>
        </div>
        <div className="col-3">
        <button className="btn btn-primary pull-right" type="button">Home</button>
        </div>
        <div className="col-3">
        <button className="btn btn-primary pull-right" type="button">Visiting</button>
        </div>
        <div className="col-3">
        <button className="btn btn-primary pull-right" type="button">Roaming</button>
        </div>
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
                GX Inline
                </div>
            </div>
        </button>
      </h5>
    </div>
    <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
      <div className="card-body">
      <div className="row">
        <div className="col-3">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">API Name</span>
        </div>
        <input type="text" className="form-control" placeholder="API Name" aria-label="apiName" aria-describedby="basic-addon1" />
        </div>
        </div>
        <div className="col-3">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">GX Profile</span>
        </div>
        <input type="text" className="form-control" placeholder="GX Profile" aria-label="gxProfile" aria-describedby="basic-addon1" />
        </div>
        </div>
        <div className="col-3">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Primary Diameter Peer</span>
        </div>
        <input type="text" className="form-control" placeholder="Primary Diameter Peer" aria-label="primaryDiameterPeer" aria-describedby="basic-addon1" />
        </div>
        </div>
        <div className="col-3">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Secondary Diameter Peer</span>
        </div>
        <input type="text" className="form-control" placeholder="Secondary Diameter Peer" aria-label="secondaryDiameterPeer" aria-describedby="basic-addon1" />
        </div>
        </div>
        </div>

        <div className="row">
        <div className="col-6">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Diameter Group Peer</span>
        </div>
        <input type="text" className="form-control" placeholder="Diameter Group Peer" aria-label="diameterGroupPeer" aria-describedby="basic-addon1" />
        </div>
        </div>
        </div>
        <div className="row mb-3">
        <div className="col-2">
        <button className="btn btn-primary btn-block" type="button">API Shutdown</button>
        </div>
        <div className="col-2">
        <button className="btn btn-primary btn-block" type="button">Dynamic PCC</button>
        </div>
        <div className="col-2">
        <button className="btn btn-primary btn-block" type="button">Primary Diameter peer</button>
        </div>
        <div className="col-2">
        <button className="btn btn-primary btn-block" type="button">Secondary Diameter Peer</button>
        </div>
        <div className="col-2">
        <button className="btn btn-primary btn-block" type="button">Diameter Group Peer</button>
        </div>
        <div className="col-2">
        <button className="btn btn-primary btn-block" type="button">API No Shutdown</button>
        </div>
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
                GX Bypass
                </div>
            </div>
        </button>
      </h5>
    </div>
    <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
      <div className="card-body">
      <div className="row">
        <div className="col-12">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">API Name</span>
        </div>
        <input type="text" className="form-control" placeholder="API Name" aria-label="apiName" aria-describedby="basic-addon1" />
        </div>
        </div>
        </div>

        <div className="row mb-3">
        <div className="col-2">
        <button className="btn btn-primary btn-block" type="button">API Shutdown</button>
        </div>
        <div className="col-2">
        <button className="btn btn-primary btn-block" type="button">No Dynamic PCC</button>
        </div>
        <div className="col-2">
        <button className="btn btn-primary btn-block" type="button">No Primary Diameter peer</button>
        </div>
        <div className="col-2">
        <button className="btn btn-primary btn-block" type="button">No Secondary Diam. Peer</button>
        </div>
        <div className="col-2">
        <button className="btn btn-primary btn-block" type="button">No Diameter Group Peer</button>
        </div>
        <div className="col-2">
        <button className="btn btn-primary btn-block" type="button">API No Shutdown</button>
        </div>
        </div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingSix">
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
        <div className="row">
            <div className="col-12">
                GA Add/Modify
                </div>
            </div>
        </button>
      </h5>
    </div>
    <div id="collapseSeven" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
      <div className="card-body">
      <div className="row">
        <div className="col-4">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">API Name</span>
        </div>
        <input type="text" className="form-control" placeholder="API Name" aria-label="apiName" aria-describedby="basic-addon1" />
        </div>
        </div>
        <div className="col-4">
        <div className="input-group mb-3">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">GA Profile</span>
        </div>
        <input type="text" className="form-control" placeholder="GA Profile" aria-label="gaProfile" aria-describedby="basic-addon1" />
        </div>
        </div>
        <div className="col-4">
        <button className="btn btn-primary" type="button">Charging</button>
        </div>
        </div>
      </div>
    </div>
  </div>
</div>
                </React.Fragment>
            }
        </div>
        )
    }
}