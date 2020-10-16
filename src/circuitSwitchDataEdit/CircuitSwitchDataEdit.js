import React from "react";
import { Modal } from 'react-bootstrap';
import './CircuitSwitchDataEdit.css';
import BootstrapSwitchButton from 'bootstrap-switch-button-react';

export default class GeneralInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }

    render() {
      // Get the data from the context api to manipulate the data for the circuit view
      const { data, count, loading } = this.context || {};
      const finalData = [];
      finalData.push(data);
      // Check if the count is zero or undefined to display the no records message
      if(!loading) {
      if((count === 0) || (count === undefined)) {
       return (
           <span className="ml-4">Sorry, No Circuit Switch Information available</span>
       )
      }
   }
    return (
        <form>
      <Modal
        {...this.props}
        size="xl"
        aria-labelledby="contained-Modal-title-vcenter"
        centered
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-Modal-title-vcenter">
            Circuit Switch Data Edit
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="heightAlign">
<div className="container-fluid noPadding fontChange">
{
//loading ? <div className = "d-flex justify-content-center custom-loader" ><div className = "spinner-border text-primary" role = "status" ><span className = "sr-only" > Loading... </span> </div> </div>  :
// Display loader till the response appears and check for the validity of the data If exists
loading ? <div className="v-loading-indicator second v-loading-indicator-delay" ></div>  :
(finalData && finalData.length > 0) &&
finalData
.map((item, index) => {
if(item.userType === "admin") {
return (
<React.Fragment key={item.id}>
<div className="table-responsive">
<table className="table table-striped noBorderTableTD mb-0 whiteBackground" >
<tr>
<th>Parameter</th>
<th>Current Status</th>
<th>Operations</th>
<th>Result</th>
</tr>
<tbody>
<tr>
<td><input type="text" className="txtBoxHeight" value="Subscriber Status"  readOnly disabled /></td>
<td><input type="text" className="txtBoxHeight" value={item.circuitSwitch.subscriberStatus === true ? 'IMSI Active' : 'IMSI Inactive'}  readOnly disabled /></td>
<td className="p-0">
<BootstrapSwitchButton checked={item.circuitSwitch.subscriberStatus === true ? true : false} onlabel='Active' offlabel='Inactive' onChange={(checked) => {this.setState({  })}} onstyle="success" offstyle="danger" width={150} />
</td>
<td><textarea value={item.circuitSwitch.subscriberStatus ? item.circuitSwitch.subscriberStatus : 'No Data Available'} ></textarea></td>
</tr>

<tr>
<td><input type="text" className="txtBoxHeight" value="Voice Provision/Deprovision"  readOnly disabled /></td>
<td><input type="text" className="txtBoxHeight" value={item.circuitSwitch.outgoingCallStatus ? item.circuitSwitch.outgoingCallStatus : 'No Data Available'}  readOnly disabled /></td>
<td className="p-0">
<BootstrapSwitchButton checked={item.circuitSwitch.outgoingCallStatus === 'O/G call Unbarred' ? true : false} onlabel='Provision' offlabel='Deprovision' onChange={(checked) => {this.setState({  })}} onstyle="success" offstyle="danger" width={150} />
</td>
<td><textarea value={item.circuitSwitch.outgoingCallStatus ? item.circuitSwitch.outgoingCallStatus : 'No Data Available'} ></textarea></td>
</tr>

<tr>
<td><input type="text" className="txtBoxHeight" value="Voice MO Activate/Deactivate"  readOnly disabled /></td>
<td><input type="text" className="txtBoxHeight" value={item.circuitSwitch.outgoingCallStatus ? item.circuitSwitch.outgoingCallStatus : 'No Data Available'}  readOnly disabled /></td>
<td className="p-0">
<BootstrapSwitchButton checked={item.circuitSwitch.outgoingCallStatus === 'O/G call Unbarred' ? true : false} onlabel='Activate' offlabel='Deactivate' onChange={(checked) => {this.setState({  })}} onstyle="success" offstyle="danger" width={150} />
</td>
<td><textarea value={item.circuitSwitch.outgoingCallStatus ? item.circuitSwitch.outgoingCallStatus : 'No Data Available'} ></textarea></td>
</tr>
<tr>
<td><input type="text" className="txtBoxHeight" value="Voice MT Activate/Deactivate"  readOnly disabled /></td>
<td><input type="text" className="txtBoxHeight" value={item.circuitSwitch.incomingCallStatus ? item.circuitSwitch.incomingCallStatus : 'No Data Available'}  readOnly disabled /></td>
<td className="p-0">
<BootstrapSwitchButton checked={item.circuitSwitch.incomingCallStatus === 'I/C call Unbarred' ? true : false} onlabel='Activate' offlabel='Deactivate' onChange={(checked) => {this.setState({  })}} onstyle="success" offstyle="danger" width={150} />
</td>
<td><textarea value={item.circuitSwitch.incomingCallStatus ? item.circuitSwitch.incomingCallStatus : 'No Data Available'} ></textarea></td>
</tr>
<tr>
<td><input type="text" className="txtBoxHeight" value="SMS MO Provision/Deprovision"  readOnly disabled /></td>
<td><input type="text" className="txtBoxHeight" value={item.circuitSwitch.moSmsStatus ? item.circuitSwitch.moSmsStatus : 'No Data Available'}  readOnly disabled /></td>
<td className="p-0">
<BootstrapSwitchButton checked={item.circuitSwitch.moSmsStatus === 'MO-SMS Unbarred' ? true : false} onlabel='Provision' offlabel='Deprovision' onChange={(checked) => {this.setState({  })}} onstyle="success" offstyle="danger" width={150} />
</td>
<td><textarea value={item.circuitSwitch.moSmsStatus ? item.circuitSwitch.moSmsStatus : 'No Data Available'} ></textarea></td>
</tr>
<tr>
<td><input type="text" className="txtBoxHeight" value="SMS MT Provision/Deprovision"  readOnly disabled /></td>
<td><input type="text" className="txtBoxHeight" value={item.circuitSwitch.mtSmsStatus ? item.circuitSwitch.mtSmsStatus : 'No Data Available'}  readOnly disabled /></td>
<td className="p-0">
<BootstrapSwitchButton checked={item.circuitSwitch.mtSmsStatus === 'MT-SMS Unbarred' ? true : false} onlabel='Provision' offlabel='Deprovision' onChange={(checked) => {this.setState({  })}} onstyle="success" offstyle="danger" width={150} />
</td>
<td><textarea value={item.circuitSwitch.mtSmsStatus ? item.circuitSwitch.mtSmsStatus : 'No Data Available'} ></textarea></td>
</tr>
<tr>
<td><input type="text" className="txtBoxHeight" value="SMS MO - Activate/Deactivate"  readOnly disabled /></td>
<td><input type="text" className="txtBoxHeight" value={item.circuitSwitch.moSmsStatus ? item.circuitSwitch.moSmsStatus : 'No Data Available'}  readOnly disabled /></td>
<td className="p-0">
<BootstrapSwitchButton checked={item.circuitSwitch.moSmsStatus === 'MO-SMS Unbarred' ? true : false} onlabel='Activate' offlabel='Deactivate' onChange={(checked) => {this.setState({  })}} onstyle="success" offstyle="danger" width={150} />
</td>
<td><textarea value={item.circuitSwitch.moSmsStatus ? item.circuitSwitch.moSmsStatus : 'No Data Available'} ></textarea></td>
</tr>
<tr>
<td><input type="text" className="txtBoxHeight" value="SMS MT Activate/Deactivate"  readOnly disabled /></td>
<td><input type="text" className="txtBoxHeight" value={item.circuitSwitch.mtSmsStatus ? item.circuitSwitch.mtSmsStatus : 'No Data Available'}  readOnly disabled /></td>
<td className="p-0">
<BootstrapSwitchButton checked={item.circuitSwitch.mtSmsStatus === 'MT-SMS Unbarred' ? true : false} onlabel='Activate' offlabel='Deactivate' onChange={(checked) => {this.setState({  })}} onstyle="success" offstyle="danger" width={150} />
</td>
<td><textarea value={item.circuitSwitch.mtSmsStatus ? item.circuitSwitch.mtSmsStatus : 'No Data Available'} ></textarea></td>
</tr>
<tr>
<td><input type="text" className="txtBoxHeight" value="3G Data - Activate/Deactivate"  readOnly disabled /></td>
<td><input type="text" className="txtBoxHeight" value={item.circuitSwitch.threeGDataStatus ? item.circuitSwitch.threeGDataStatus : 'No Data Available'}  readOnly disabled /></td>
<td className="p-0">
<BootstrapSwitchButton checked={item.circuitSwitch.threeGDataStatus === 'Not Allowed in Roaming' ? true : false} onlabel='Activate' offlabel='Deactivate' onChange={(checked) => {this.setState({  })}} onstyle="success" offstyle="danger" width={150} />
</td>
<td><textarea value={item.circuitSwitch.threeGDataStatus ? item.circuitSwitch.threeGDataStatus : 'No Data Available'} ></textarea></td>
</tr>
<tr>
<td><input type="text" className="txtBoxHeight" value="3G Data Roam - Activate/Deactivate"  readOnly disabled /></td>
<td><input type="text" className="txtBoxHeight" value={item.circuitSwitch.threeGDataRoamStatus ? item.circuitSwitch.threeGDataRoamStatus : 'No Data Available'}  readOnly disabled /></td>
<td className="p-0">
<BootstrapSwitchButton checked={item.circuitSwitch.threeGDataRoamStatus === 'Roaming Not allowed for 3G Data' ? true : false} onlabel='Activate' offlabel='Deactivate' onChange={(checked) => {this.setState({  })}} onstyle="success" offstyle="danger" width={150} />
</td>
<td><textarea value={item.circuitSwitch.threeGDataRoamStatus ? item.circuitSwitch.threeGDataRoamStatus : 'No Data Available'} ></textarea></td>
</tr>
<tr>
<td><input type="text" className="txtBoxHeight" value="4G Data - Activate/Deactivate"  readOnly disabled /></td>
<td><input type="text" className="txtBoxHeight" value={item.circuitSwitch.fourGDataStatus ? item.circuitSwitch.fourGDataStatus : 'No Data Available'}  readOnly disabled /></td>
<td className="p-0">
<BootstrapSwitchButton checked={item.circuitSwitch.fourGDataStatus === '4G Not provisioned' ? true : false} onlabel='Activate' offlabel='Deactivate' onChange={(checked) => {this.setState({  })}} onstyle="success" offstyle="danger" width={150} />
</td>
<td><textarea value={item.circuitSwitch.fourGDataStatus ? item.circuitSwitch.fourGDataStatus : 'No Data Available'} ></textarea></td>
</tr>
<tr>
<td><input type="text" className="txtBoxHeight" value="SIM Purge"  readOnly disabled /></td>
<td><input type="text" className="txtBoxHeight" value={item.circuitSwitch.outgoingCallStatus ? item.circuitSwitch.outgoingCallStatus : 'No Data Available'}  readOnly disabled /></td>
<td className="p-0">
<BootstrapSwitchButton checked={item.circuitSwitch.outgoingCallStatus === 'O/G call Unbarred' ? true : false} onlabel='Activate' offlabel='Deactivate' onChange={(checked) => {this.setState({  })}} onstyle="success" offstyle="danger" width={150} />
</td>
<td><textarea value={item.circuitSwitch.outgoingCallStatus ? item.circuitSwitch.outgoingCallStatus : 'No Data Available'} ></textarea></td>
</tr>
<tr>
<td><input type="text" className="txtBoxHeight" value="SIM Swap"  readOnly disabled /></td>
<td><input type="text" className="txtBoxHeight" value={item.circuitSwitch.outgoingCallStatus ? item.circuitSwitch.outgoingCallStatus : 'No Data Available'}  readOnly disabled /></td>
<td className="p-0">
<BootstrapSwitchButton checked={item.circuitSwitch.outgoingCallStatus === 'O/G call Unbarred' ? true : false} onlabel='Activate' offlabel='Deactivate' onChange={(checked) => {this.setState({  })}} onstyle="success" offstyle="danger" width={150} />
</td>
<td><textarea value={item.circuitSwitch.outgoingCallStatus ? item.circuitSwitch.outgoingCallStatus : 'No Data Available'} ></textarea></td>
</tr>
<tr>
<td><input type="text" className="txtBoxHeight" value="3G APN - Provision/Deprovision"  readOnly disabled /></td>
<td><input type="text" className="txtBoxHeight" value={item.circuitSwitch.outgoingCallStatus ? item.circuitSwitch.outgoingCallStatus : 'No Data Available'}  readOnly disabled /></td>
<td className="p-0">
<BootstrapSwitchButton checked={item.circuitSwitch.outgoingCallStatus === 'O/G call Unbarred' ? true : false} onlabel='Provision' offlabel='Deprovision' onChange={(checked) => {this.setState({  })}} onstyle="success" offstyle="danger" width={150} />
</td>
<td><textarea value={item.circuitSwitch.outgoingCallStatus ? item.circuitSwitch.outgoingCallStatus : 'No Data Available'} ></textarea></td>
</tr>
<tr>
<td><input type="text" className="txtBoxHeight" value="4G APN - Provision/Deprovision"  readOnly disabled /></td>
<td><input type="text" className="txtBoxHeight" value={item.circuitSwitch.outgoingCallStatus ? item.circuitSwitch.outgoingCallStatus : 'No Data Available'}  readOnly disabled /></td>
<td className="p-0">
<BootstrapSwitchButton checked={item.circuitSwitch.outgoingCallStatus === 'O/G call Unbarred' ? true : false} onlabel='Activate' offlabel='Deactivate' onChange={(checked) => {this.setState({  })}} onstyle="success" offstyle="danger" width={150} />
</td>
<td><textarea value={item.circuitSwitch.outgoingCallStatus ? item.circuitSwitch.outgoingCallStatus : 'No Data Available'} ></textarea></td>
</tr>
</tbody>
</table>
</div>
</React.Fragment>
)

} else {
return(false);
}
}) 
}
</div>
</Modal.Body>
<Modal.Footer>
<div className="row pull-right">
<div className="col-6">
<button className="btn btn-primary" type="submit">Submit</button>
</div>
<div className="col-6">
<button className="btn btn-primary" type="button" onClick={this.props.onHide}>Cancel</button>
</div>
</div>
</Modal.Footer>
</Modal>
</form>
);
}
}