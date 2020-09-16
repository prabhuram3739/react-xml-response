import React from 'react';

export default class GeneralInfo extends React.Component {
    render() {
       const { data, count, loading } = this.context || {};
       const finalData = [];
       finalData.push(data);
       if((count === 0) || (count === undefined)) {
        return (
            <span className="ml-4">Sorry, No General Information available</span>
        )
       }
       return (

        <div className="container-fluid noPadding fontChange">
            {
                //loading ? <div className = "d-flex justify-content-center custom-loader" ><div className = "spinner-border text-primary" role = "status" ><span className = "sr-only" > Loading... </span> </div> </div>  :
                
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
                            <td><span>{item.packetSwitch.imsi}</span></td>
                            <td className="textAlignRight"><label className="fontBold">MSISDN:</label></td>
                            <td><span>{item.packetSwitch.msisdn}</span></td>
                            <td className="textAlignRight"><label className="fontBold">IMEI:</label></td>
                            <td><span>{item.packetSwitch.imei}</span></td>
                        </tr>
                        <tr>
                            <td className="textAlignRight"><label className="fontBold">Up Time:</label></td>
                            <td><span>{item.packetSwitch.upTime}</span></td>
                            <td className="textAlignRight"><label className="fontBold">RAT Type:</label></td>
                            <td><span>{item.packetSwitch.ratType}</span></td>
                            <td className="textAlignRight"><label className="fontBold">Network MCC/Network MNC:</label></td>
                            <td><span>{item.packetSwitch.networkMNC}</span></td>
                        </tr>
                        <tr>
                            <td className="textAlignRight"><label className="fontBold">Cell ID:</label></td>
                            <td><span>{item.packetSwitch.cellID}</span></td>
                            <td className="textAlignRight"><label className="fontBold">Number of PDN Contexts:</label></td>
                            <td><span>{item.packetSwitch.numbercontexts}</span></td>
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