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
                //loading ? <div className = "d-flex justify-content-center custom-loader" ><div className = "spinner-border text-primary" role = "status" ><span className = "sr-only" > Loading... </span> </div> </div>  :
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
                        <span>{item.subscriberStatus? 'IMSI Active' : 'IMSI Inactive'}</span>
                        </div>
                        <div className="col-4">
                        <label className="fontBold">3G APN List:</label>
                        {item.threeGApn.map((threeGApnList) => {
                        return(
                        <span> {threeGApnList.apn};</span>
                        )
                        })}
                        </div>
                        <div className="col-4">
                        <label className="fontBold">4G APN List:</label>
                        {item.threeGApn.map((fourGApnList) => {
                        return(
                        <span> {fourGApnList.apn};</span>
                        )
                        })}
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-4">
                        <label className="fontBold">VLR Number:</label> <span>{item.vlrNumber}</span>
                        </div>
                        <div className="col-4">
                        <label className="fontBold">SGSN Number:</label> <span>{item.sgsnNumber}</span>
                        </div>
                        <div className="col-4">
                        <label className="fontBold">MME ID:</label> <span>{item.mmeId}</span>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-4">
                        <label className="fontBold">O/G Call Status:</label> <span>{item.outgoingCallStatus}</span>
                        </div>
                        <div className="col-4">
                        <label className="fontBold">I/C Call Status:</label> <span>{item.incomingCallStatus}</span>
                        </div>
                        <div className="col-4">
                        <label className="fontBold">MO-SMS Status:</label> <span>{item.moSmsStatus}</span>
                        </div>
                        </div>
                        <divv className="row">
                        <div className="col-4">
                        <label className="fontBold">MT-SMS Status:</label> <span>{item.mtSmsStatus}</span>
                        </div>
                        <div className="col-4">
                        <label className="fontBold">3G DATA - Status:</label> <span>{item.threeGDataStatus}</span>
                        </div>
                        <div className="col-4">
                        <label className="fontBold">3G DATA - ROAM:</label> <span>{item.threeGDataRoamStatus}</span>
                        </div>
                        </divv>
                        <div className="row">
                        <div className="col-4">
                        <label className="fontBold">4G DATA - Status:</label> <span>{item.fourGDataStatus}</span>
                        </div>
                        <div className="col-4">
                        <label className="fontBold">Prepaid/Camel Data:</label> <span>{item.camelSubscriptionStatus}</span>
                        </div>
                        </div>
                    </div>*/}

                        <div className="table-responsive">
                        <table className="table table-striped table-border" key={index}>
                        <tbody>
                        <tr>
                        <td className="textAlignRight"><label className="fontBold">Subscriber Status:</label> </td>
                        <td><span>{item.circuitSwitch.subscriberStatus? 'IMSI Active' : 'IMSI Inactive'}</span></td>
                        <td className="textAlignRight"><label className="fontBold">3G APN List:</label></td>
                        <td>
                        {item.circuitSwitch.threeGApnDataList.map((threeGApnList, index) => {
                        return(
                        <span key={index}> {threeGApnList.apn ? threeGApnList.apn : 'No Data Available'};</span>
                        )
                        })}
                        </td>
                        <td className="textAlignRight"><label className="fontBold">4G APN List:</label>
                        </td>
                        <td>
                        {item.circuitSwitch.fourGApnDataList.map((fourGApnList, index) => {
                        return(
                        <span key={index}> {fourGApnList.apn ? fourGApnList.apn : 'No Data Available'};</span>
                        )
                        })}
                        </td>
                        </tr>

                        <tr>
                        <td className="textAlignRight"><label className="fontBold">VLR Number:</label>
                        </td>
                        <td><span>{item.circuitSwitch.vlrNumber ? item.circuitSwitch.vlrNumber : 'No Data Available'}</span>
                        </td>
                        <td className="textAlignRight"><label className="fontBold">SGSN Number:</label>
                        </td>
                        <td> <span>{item.circuitSwitch.sgsnNumber ? item.circuitSwitch.sgsnNumber : 'No Data Available'}</span>
                        </td>
                        <td className="textAlignRight"><label className="fontBold">MME ID:</label>
                        </td> 
                        <td><span>{item.circuitSwitch.mmeId ? item.circuitSwitch.mmeId : 'No Data Available'}</span>
                        </td>
                        </tr>

                        <tr>
                        <td className="textAlignRight"><label className="fontBold">Voice MO Status:</label>
                        </td> 
                        <td><span>{item.circuitSwitch.outgoingCallStatus ? item.circuitSwitch.outgoingCallStatus : 'No Data Available'}</span>
                        </td>
                        <td className="textAlignRight"><label className="fontBold">Voice MT Status:</label>
                        </td> 
                        <td><span>{item.circuitSwitch.incomingCallStatus ? item.circuitSwitch.incomingCallStatus : 'No Data Available'}</span>
                        </td>
                        <td className="textAlignRight"><label className="fontBold">SMS-Mo Status:</label>
                        </td> 
                        <td><span>{item.circuitSwitch.moSmsStatus ? item.circuitSwitch.moSmsStatus : 'No Data Available'}</span>
                        </td>
                        </tr>

                        <tr>
                        <td className="textAlignRight"><label className="fontBold">SMS-MT Status:</label>
                        </td> 
                        <td><span>{item.circuitSwitch.mtSmsStatus ? item.circuitSwitch.mtSmsStatus : 'No Data Available'}</span>
                        </td>
                        <td className="textAlignRight"><label className="fontBold">3G DATA - Status:</label>
                        </td> 
                        <td><span>{item.circuitSwitch.threeGDataStatus ? item.circuitSwitch.threeGDataStatus : 'No Data Available'}</span>
                        </td>
                        <td className="textAlignRight"><label className="fontBold">3G DATA - ROAM:</label>
                        </td> 
                        <td><span>{item.circuitSwitch.threeGDataRoamStatus ? item.circuitSwitch.threeGDataRoamStatus : 'No Data Available'}</span>
                        </td>
                        </tr>

                        <tr>
                        <td className="textAlignRight"><label className="fontBold">4G DATA - Status:</label>
                        </td> 
                        <td><span>{item.circuitSwitch.fourGDataStatus ? item.circuitSwitch.fourGDataStatus : 'No Data Available'}</span>
                        </td>
                        <td className="textAlignRight"><label className="fontBold">Prepaid/Camel Data:</label>
                        </td> 
                        <td><span>{item.circuitSwitch.camelSubscriptionStatus ? item.circuitSwitch.camelSubscriptionStatus : 'No Data Available'}</span>
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