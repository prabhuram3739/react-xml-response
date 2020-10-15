import React  from 'react';

export default class CircuitSwitch extends React.Component {
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

        <div className="container-fluid noPadding fontChange">
            {
                //loading ? <div className = "d-flex justify-content-center custom-loader" ><div className = "spinner-border text-primary" role = "status" ><span className = "sr-only" > Loading...   readOnly disabled /> </div> </div>  :
                // Display loader till the response appears and check for the validity of the data If exists
                loading ? <div className="v-loading-indicator second v-loading-indicator-delay" ></div>  :
                (finalData && finalData.length > 0) &&
                finalData.map((item, index) => {
                    if(item.userType === "admin") {
                    return (
                        <React.Fragment key={item.id}>
                        {/*<div key={item.id}>
                        <div className="row">
                        <div className="col-4">
                        <label className="fontBold">Subscriber Status:</label> 
                         <input type="text" className="txtBoxHeight" value={item.subscriberStatus? 'IMSI Active' : 'IMSI Inactive'}  readOnly disabled />
                        </div>
                        <div className="col-4">
                        <label className="fontBold">3G APN List:</label>
                        {item.threeGApn.map((threeGApnList) => {
                        return(
                         <input type="text" className="txtBoxHeight" value= {threeGApnList.apn};  readOnly disabled />
                        )
                        })}
                        </div>
                        <div className="col-4">
                        <label className="fontBold">4G APN List:</label>
                        {item.threeGApn.map((fourGApnList) => {
                        return(
                         <input type="text" className="txtBoxHeight" value= {fourGApnList.apn};  readOnly disabled />
                        )
                        })}
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-4">
                        <label className="fontBold">VLR Number:</label>  <input type="text" className="txtBoxHeight" value={item.vlrNumber}  readOnly disabled />
                        </div>
                        <div className="col-4">
                        <label className="fontBold">SGSN Number:</label>  <input type="text" className="txtBoxHeight" value={item.sgsnNumber}  readOnly disabled />
                        </div>
                        <div className="col-4">
                        <label className="fontBold">MME ID:</label>  <input type="text" className="txtBoxHeight" value={item.mmeId}  readOnly disabled />
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-4">
                        <label className="fontBold">O/G Call Status:</label>  <input type="text" className="txtBoxHeight" value={item.outgoingCallStatus}  readOnly disabled />
                        </div>
                        <div className="col-4">
                        <label className="fontBold">I/C Call Status:</label>  <input type="text" className="txtBoxHeight" value={item.incomingCallStatus}  readOnly disabled />
                        </div>
                        <div className="col-4">
                        <label className="fontBold">MO-SMS Status:</label>  <input type="text" className="txtBoxHeight" value={item.moSmsStatus}  readOnly disabled />
                        </div>
                        </div>
                        <divv className="row">
                        <div className="col-4">
                        <label className="fontBold">MT-SMS Status:</label>  <input type="text" className="txtBoxHeight" value={item.mtSmsStatus}  readOnly disabled />
                        </div>
                        <div className="col-4">
                        <label className="fontBold">3G DATA - Status:</label>  <input type="text" className="txtBoxHeight" value={item.threeGDataStatus}  readOnly disabled />
                        </div>
                        <div className="col-4">
                        <label className="fontBold">3G DATA - ROAM:</label>  <input type="text" className="txtBoxHeight" value={item.threeGDataRoamStatus}  readOnly disabled />
                        </div>
                        </divv>
                        <div className="row">
                        <div className="col-4">
                        <label className="fontBold">4G DATA - Status:</label>  <input type="text" className="txtBoxHeight" value={item.fourGDataStatus}  readOnly disabled />
                        </div>
                        <div className="col-4">
                        <label className="fontBold">Prepaid/Camel Data:</label>  <input type="text" className="txtBoxHeight" value={item.camelSubscriptionStatus}  readOnly disabled />
                        </div>
                        </div>
                    </div>*/}

                        <div className="table-responsive">
                        <table className="table table-striped noBorderTableTD" key={index}>
                        <tbody>
                        <tr>
                        <td className="textAlignRight"><label className="fontBold">IMSI:</label>
                        </td>
                        <td> <input type="text" className="txtBoxHeight" value={item.circuitSwitch.id ? item.circuitSwitch.id : 'No Data Available'}  readOnly disabled />
                        </td>
                        <td className="textAlignRight"><label className="fontBold">MSIDN:</label>
                        </td>
                        <td>  <input type="text" className="txtBoxHeight" value={item.circuitSwitch.msidn ? item.circuitSwitch.msidn : 'No Data Available'}  readOnly disabled />
                        </td>
                        <td className="textAlignRight"><label className="fontBold">Subscriber Status:</label> </td>
                        <td> <input type="text" className="txtBoxHeight" value={item.circuitSwitch.subscriberStatus === true ? 'IMSI Active' : 'IMSI Inactive'}  readOnly disabled /></td>
                        </tr>
                        <tr>
                        
                        <td className="textAlignRight"><label className="fontBold">3G APN List:</label></td>
                        <td>
                        {item.circuitSwitch.threeGApnDataList.map((threeGApnList, index) => {
                        return(
                            <input type="text" className="txtBoxHeight" key={index} value={threeGApnList.apn ? threeGApnList.apn : 'No Data Available'}  readOnly disabled />
                        )
                        })}
                        </td>
                        <td className="textAlignRight"><label className="fontBold">4G APN List:</label>
                        </td>
                        <td>
                        {item.circuitSwitch.fourGApnDataList.map((fourGApnList, index) => {
                        return(
                            <input type="text" className="txtBoxHeight" key={index} value= {fourGApnList.apn ? fourGApnList.apn : 'No Data Available'}  readOnly disabled />
                        )
                        })}
                        </td>
                        <td className="textAlignRight"><label className="fontBold">VLR Number:</label>
                        </td>
                        <td> <input type="text" className="txtBoxHeight" value={item.circuitSwitch.vlrNumber ? item.circuitSwitch.vlrNumber : 'No Data Available'}  readOnly disabled />
                        </td>
                        </tr>

                        <tr>
                        
                        <td className="textAlignRight"><label className="fontBold">SGSN Number:</label>
                        </td>
                        <td>  <input type="text" className="txtBoxHeight" value={item.circuitSwitch.sgsnNumber ? item.circuitSwitch.sgsnNumber : 'No Data Available'}  readOnly disabled />
                        </td>
                        <td className="textAlignRight"><label className="fontBold">MME ID:</label>
                        </td> 
                        <td> <input type="text" className="txtBoxHeight" value={item.circuitSwitch.mmeId ? item.circuitSwitch.mmeId : 'No Data Available'}  readOnly disabled />
                        </td>
                        <td className="textAlignRight"><label className="fontBold">Voice MO Status:</label>
                        </td> 
                        <td> <input type="text" className="txtBoxHeight" value={item.circuitSwitch.outgoingCallStatus ? item.circuitSwitch.outgoingCallStatus : 'No Data Available'}  readOnly disabled />
                        </td>
                        </tr>

                        <tr>
                        
                        <td className="textAlignRight"><label className="fontBold">Voice MT Status:</label>
                        </td> 
                        <td> <input type="text" className="txtBoxHeight" value={item.circuitSwitch.incomingCallStatus ? item.circuitSwitch.incomingCallStatus : 'No Data Available'}  readOnly disabled />
                        </td>
                        <td className="textAlignRight"><label className="fontBold">SMS-Mo Status:</label>
                        </td> 
                        <td> <input type="text" className="txtBoxHeight" value={item.circuitSwitch.moSmsStatus ? item.circuitSwitch.moSmsStatus : 'No Data Available'}  readOnly disabled />
                        </td>
                        <td className="textAlignRight"><label className="fontBold">SMS-MT Status:</label>
                        </td> 
                        <td> <input type="text" className="txtBoxHeight" value={item.circuitSwitch.mtSmsStatus ? item.circuitSwitch.mtSmsStatus : 'No Data Available'}  readOnly disabled />
                        </td>
                        </tr>

                        <tr>
                        
                        <td className="textAlignRight"><label className="fontBold">3G DATA - Status:</label>
                        </td> 
                        <td> <input type="text" className="txtBoxHeight" value={item.circuitSwitch.threeGDataStatus ? item.circuitSwitch.threeGDataStatus : 'No Data Available'}  readOnly disabled />
                        </td>
                        <td className="textAlignRight"><label className="fontBold">3G Roaming Profile</label>
                        </td> 
                        <td> <input type="text" className="txtBoxHeight" value={item.circuitSwitch.threeGDataRoamStatus ? item.circuitSwitch.threeGDataRoamStatus : 'No Data Available'}  readOnly disabled />
                        </td>
                        <td className="textAlignRight"><label className="fontBold">4G Roaming Profile</label>
                        </td> 
                        <td> <input type="text" className="txtBoxHeight" value={item.circuitSwitch.fourGDataStatus ? item.circuitSwitch.fourGDataStatus : 'No Data Available'}  readOnly disabled />
                        </td>
                        </tr>

                        <tr>
                        <td className="textAlignRight"><label className="fontBold">4G DATA - Status:</label>
                        </td> 
                        <td> <input type="text" className="txtBoxHeight" value={item.circuitSwitch.fourGDataStatus ? item.circuitSwitch.fourGDataStatus : 'No Data Available'}  readOnly disabled />
                        </td>
                        <td className="textAlignRight"><label className="fontBold">Prepaid/Camel Data:</label>
                        </td> 
                        <td> <input type="text" className="txtBoxHeight" value={item.circuitSwitch.camelSubscriptionStatus ? item.circuitSwitch.camelSubscriptionStatus : 'No Data Available'}  readOnly disabled />
                        </td>
                        <td></td>
                        <td></td>
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
    );
    }
}