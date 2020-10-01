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
                loading ? <div className="v-loading-indicator second v-loading-indicator-delay" ></div>  :
                (finalData && finalData.length > 0) &&
                finalData
                .map((item, index) => {
                    if(item.userType === "admin") {
                    return (
                        <React.Fragment key={item.id}>
                        <div className="table-responsive">
                        <table className="table table-striped table-border" >
                        <tbody>
                        <tr>
                            <td className="textAlignRight"><label className="fontBold">IMSI:</label></td>
                            <td><span>{item.packetSwitch.imsi ? item.packetSwitch.imsi : 'No Data Available'}</span></td>
                            <td className="textAlignRight"><label className="fontBold">MSISDN:</label></td>
                            <td><span>{item.packetSwitch.msisdn ? item.packetSwitch.msisdn : 'No Data Available'}</span></td>
                            <td className="textAlignRight"><label className="fontBold">IMEI:</label></td>
                            <td><span>{item.packetSwitch.imei ? item.packetSwitch.imei : 'No Data Available'}</span></td>
                        </tr>
                        <tr>
                            <td className="textAlignRight"><label className="fontBold">Up Time:</label></td>
                            <td><span>{item.packetSwitch.upTime ? item.packetSwitch.upTime : 'No Data Available'}</span></td>
                            <td className="textAlignRight"><label className="fontBold">RAT Type:</label></td>
                            <td><span>{item.packetSwitch.ratType ? item.packetSwitch.ratType : 'No Data Available'}</span></td>
                            <td className="textAlignRight"><label className="fontBold">Network MCC/Network MNC:</label></td>
                            <td><span>{item.packetSwitch.networkMCCMNC ? item.packetSwitch.networkMCCMNC : 'No Data Available'}</span></td>
                        </tr>
                        <tr>
                            <td className="textAlignRight"><label className="fontBold">Cell ID:</label></td>
                            <td><span>{item.packetSwitch.cellID ? item.packetSwitch.cellID : 'No Data Available'}</span></td>
                            <td className="textAlignRight"><label className="fontBold">Number of PDN Contexts:</label></td>
                            <td><span>{item.packetSwitch.numbercontexts ? item.packetSwitch.numbercontexts : 'No Data Available'}</span></td>
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