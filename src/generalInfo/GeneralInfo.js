import React from 'react';

export default class GeneralInfo extends React.Component {
    render() {
        // Get the data from the context api to manipulate the data for the General Information page
       const { data, count, loading } = this.context || {};
       const finalData = [];
       finalData.push(data);
       // Check if the count is zero or undefined to display the no records message
       if(!loading) {
       if((count === 0) || (count === undefined)) {
        return (
            <span className="ml-4">Sorry, No General Information available</span>
        )
       }
    }
       return (

        <div className="container-fluid noPadding fontChange">
            {
                //loading ? <div className = "d-flex justify-content-center custom-loader" ><div className = "spinner-border text-primary" role = "status" ><span className = "sr-only" > Loading... </span> </div> </div>  :
                // Display loader till the response appears and check for the validity of the data If exists
                !loading ? <div className="v-loading-indicator second v-loading-indicator-delay" ></div>  :
                (finalData && finalData.length > 0) &&
                finalData
                .map((item, index) => {
                    if(item.userType === "admin") {
                    return (
                        <React.Fragment key={item.id}>
                        <div className="table-responsive">
                        <table className="table noBorderTableTD mb-0 whiteBackground" >
                        <tbody>
                        <tr>
                            <td className="textAlignRight"><label className="fontBold">IMSI:</label></td>
                            <td><input type="text" className="txtBoxHeight" value={item.circuitSwitch.id ? item.circuitSwitch.id : 'No Data Available'}  readOnly disabled /></td>
                            <td className="textAlignRight"><label className="fontBold">MSIDN:</label></td>
                            <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.msisdn ? item.packetSwitch.msisdn : 'No Data Available'}  readOnly disabled /></td>
                            <td className="textAlignRight"><label className="fontBold">ICID:</label></td>
                            <td><input type="text" className="txtBoxHeight" value={item.packetSwitch.imei ? item.packetSwitch.imei : 'No Data Available'}  readOnly disabled /></td>
                        </tr>
                        </tbody>
                        </table>
                    </div>

                        {/*<div className="card-deck">
                        <div className="row">
                        <div className="col-3 mt-1">
                        <div className="card text-white bg-primary mb-3 shadow-soft p-3">
                        <div className="card-header">IMSI</div>
                        <div className="card-body">
                            <p className="card-text">{item.packetSwitch.imsi ? item.packetSwitch.imsi : 'No Data Available'}</p>
                        </div>
                        </div>
                        </div>
                        <div className="col-3 mt-1">
                        <div className="card text-white bg-secondary mb-3 shadow-soft p-3">
                        <div className="card-header">MSISDN</div>
                        <div className="card-body">
                            <p className="card-text">{item.packetSwitch.msisdn ? item.packetSwitch.msisdn : 'No Data Available'}</p>
                        </div>
                        </div>
                        </div>
                        <div className="col-3 mt-1">
                        <div className="card text-white bg-success mb-3 shadow-soft p-3">
                        <div className="card-header">IMEI</div>
                        <div className="card-body">
                            <p className="card-text">{item.packetSwitch.imei ? item.packetSwitch.imei : 'No Data Available'}</p>
                        </div>
                        </div>
                        </div>
                        <div className="col-3 mt-1">
                        <div className="card text-white bg-danger mb-3 shadow-soft p-3" >
                        <div className="card-header">Up Time</div>
                        <div className="card-body">
                            <p className="card-text">{item.packetSwitch.upTime ? item.packetSwitch.upTime : 'No Data Available'}</p>
                        </div>
                        </div>
                        </div>
                        <div className="col-3 mt-1">
                        <div className="card text-white bg-warning mb-3 shadow-soft p-3" >
                        <div className="card-header">RAT Type</div>
                        <div className="card-body">
                            <p className="card-text">{item.packetSwitch.ratType ? item.packetSwitch.ratType : 'No Data Available'}</p>
                        </div>
                        </div>
                        </div>
                        <div className="col-3 mt-1">
                        <div className="card text-white bg-info mb-3 shadow-soft p-3" >
                        <div className="card-header">Network MCC/Network MNC</div>
                        <div className="card-body">
                            <p className="card-text">{item.packetSwitch.networkMCCMNC ? item.packetSwitch.networkMCCMNC : 'No Data Available'}</p>
                        </div>
                        </div>
                        </div>
                        <div className="col-3 mt-1">
                        <div className="card bg-light mb-3 shadow-lg shadow-soft p-3" >
                        <div className="card-header">Cell ID</div>
                        <div className="card-body">
                            <p className="card-text">{item.packetSwitch.cellID ? item.packetSwitch.cellID : 'No Data Available'}</p>
                        </div>
                        </div>
                        </div>
                        <div className="col-3 mt-1">
                        <div className="card text-white bg-dark mb-3 shadow-soft p-3" >
                        <div className="card-header">Number of PDN Contexts</div>
                        <div className="card-body">
                            <p className="card-text">{item.packetSwitch.numbercontexts ? item.packetSwitch.numbercontexts : 'No Data Available'}</p>
                        </div>
                        </div>
                        </div>
                    </div></div>*/}



                        {/*<div className="card-deck">
                        <div className="row marginLeftAlignCards">
                        <div className="col-3 mt-3">
                        <div className="card shadow-soft border-light text-center py-4">
                        <div className="card-header boldFont">IMSI</div>
                        <div className="card-body">
                            <p className="card-text">{item.packetSwitch.imsi ? item.packetSwitch.imsi : 'No Data Available'}</p>
                            <button type="button" className="btn btn-primary shadow-soft btn-block w-50 marginLeft5">Change Status</button>
                        </div>
                        </div>
                        </div>
                        <div className="col-3 mt-3">
                        <div className="card shadow-soft border-light text-center py-4">
                        <div className="card-header boldFont">MSISDN</div>
                        <div className="card-body">
                            <p className="card-text">{item.packetSwitch.msisdn ? item.packetSwitch.msisdn : 'No Data Available'}</p>
                            <button type="button" className="btn btn-primary shadow-soft btn-block w-50 marginLeft5">Change Status</button>
                        </div>
                        </div>
                        </div>
                        <div className="col-3 mt-3">
                        <div className="card shadow-soft border-light text-center py-4">
                        <div className="card-header boldFont">IMEI</div>
                        <div className="card-body">
                            <p className="card-text">{item.packetSwitch.imei ? item.packetSwitch.imei : 'No Data Available'}</p>
                            <button type="button" className="btn btn-primary shadow-soft btn-block w-50 marginLeft5">Change Status</button>
                        </div>
                        </div>
                        </div>
                        <div className="col-3 mt-3">
                        <div className="card shadow-soft border-light text-center py-4" >
                        <div className="card-header boldFont">Up Time</div>
                        <div className="card-body">
                            <p className="card-text">{item.packetSwitch.upTime ? item.packetSwitch.upTime : 'No Data Available'}</p>
                            <button type="button" className="btn btn-primary shadow-soft btn-block w-50 marginLeft5">Change Status</button>
                        </div>
                        </div>
                        </div>
                        <div className="col-3 mt-3">
                        <div className="card shadow-soft border-light text-center py-4" >
                        <div className="card-header boldFont">RAT Type</div>
                        <div className="card-body">
                            <p className="card-text">{item.packetSwitch.ratType ? item.packetSwitch.ratType : 'No Data Available'}</p>
                            <button type="button" className="btn btn-primary shadow-soft btn-block w-50 marginLeft5">Change Status</button>
                        </div>
                        </div>
                        </div>
                        <div className="col-3 mt-3">
                        <div className="card shadow-soft border-light text-center py-4" >
                        <div className="card-header boldFont">Network MCC/Network MNC</div>
                        <div className="card-body">
                            <p className="card-text">{item.packetSwitch.networkMCCMNC ? item.packetSwitch.networkMCCMNC : 'No Data Available'}</p>
                            <button type="button" className="btn btn-primary shadow-soft btn-block w-50 marginLeft5">Change Status</button>
                        </div>
                        </div>
                        </div>
                        <div className="col-3 mt-3">
                        <div className="card shadow-soft border-light text-center py-4" >
                        <div className="card-header boldFont">Cell ID</div>
                        <div className="card-body">
                            <p className="card-text">{item.packetSwitch.cellID ? item.packetSwitch.cellID : 'No Data Available'}</p>
                            <button type="button" className="btn btn-primary shadow-soft btn-block w-50 marginLeft5">Change Status</button>
                        </div>
                        </div>
                        </div>
                        <div className="col-3 mt-3">
                        <div className="card shadow-soft border-light text-center py-4" >
                        <div className="card-header boldFont">Number of PDN Contexts</div>
                        <div className="card-body">
                            <p className="card-text">{item.packetSwitch.numbercontexts ? item.packetSwitch.numbercontexts : 'No Data Available'}</p>
                            <button type="button" className="btn btn-primary shadow-soft btn-block w-50 marginLeft5">Change Status</button>
                        </div>
                        </div>
                        </div>
                        </div></div>*/}
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
