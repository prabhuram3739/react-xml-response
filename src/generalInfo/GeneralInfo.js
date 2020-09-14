import React  from 'react';
import axios from 'axios';
import { authEndpoint } from '../environment';

export default class GeneralInfo extends React.Component {
    //const [{user}, dispatch] = useDataLayerValue();
    componentDidMount() {
        var self = this;
        this.setState({ loading: true }, () => {
        axios
        .get("http://localhost:8080/api/diagnosticData/724023900000009", {
            "Content-Type": "application/xml; charset=utf-8"
         })
        .then(function(response) {
            self.setState((state, props) => ({ loading: false, data: response.data, count: Object.keys(response.data).length }));
        })
        .catch(function(error) {
            console.log(error);
        });
    });
    }

    render() {
       const { data, count, loading } = this.state || {};
       const finalData = [];
       finalData.push(data);
       if((count === 0) || (count === undefined)) {
        return (
        <span >Sorry, No General Information available</span>
        )
       }
       return (

        <div className="container-fluid noPadding fontChange">
            {
                //loading ? <div className = "d-flex justify-content-center custom-loader" ><div className = "spinner-border text-primary" role = "status" ><span className = "sr-only" > Loading... </span> </div> </div>  :
                
                loading ? <div className="v-loading-indicator second v-loading-indicator-delay" ></div>  :
                (finalData && finalData.length > 0) &&
                finalData.map((item, index) => {
                    if(item.userType === "admin") {
                    return (
                        <>

                        {/*<div key={index}>
                        <div className="row">
                        <div className="col-3">
                        <label className="fontBold">IMSI:</label> <span>{item.packetSwitch.imsi}</span></div>
                        <div className="col-3">
                        <label className="fontBold">MSISDN:</label> <span>{item.packetSwitch.msisdn}</span></div>
                        <div className="col-3">
                        <label className="fontBold">IMEI:</label> <span>{item.packetSwitch.imei}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Up Time:</label> <span>{item.packetSwitch.upTime}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label className="fontBold">RAT Type:</label> <span>{item.packetSwitch.ratType}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Network MCC/Network MNC:</label> <span>{item.packetSwitch.networkMNC}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Cell ID:</label> <span>{item.packetSwitch.cellID}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Number of PDN Contexts:</label> <span>{item.packetSwitch.numbercontexts}</span></div>
                        </div>
                        </div>*/}

                        <div className="table-responsive" key={index}>
                        <table className="table table-striped table-border" >
                        <tbody>
                        <tr>
                            <td class="textAlignRight"><label className="fontBold">IMSI:</label></td>
                            <td><span>{item.packetSwitch.imsi}</span></td>
                            <td class="textAlignRight"><label className="fontBold">MSISDN:</label></td>
                            <td><span>{item.packetSwitch.msisdn}</span></td>
                            <td class="textAlignRight"><label className="fontBold">IMEI:</label></td>
                            <td><span>{item.packetSwitch.imei}</span></td>
                        </tr>
                        <tr>
                            <td class="textAlignRight"><label className="fontBold">Up Time:</label></td>
                            <td><span>{item.packetSwitch.upTime}</span></td>
                            <td class="textAlignRight"><label className="fontBold">RAT Type:</label></td>
                            <td><span>{item.packetSwitch.ratType}</span></td>
                            <td class="textAlignRight"><label className="fontBold">Network MCC/Network MNC:</label></td>
                            <td><span>{item.packetSwitch.networkMNC}</span></td>
                        </tr>
                        <tr>
                            <td class="textAlignRight"><label className="fontBold">Cell ID:</label></td>
                            <td><span>{item.packetSwitch.cellID}</span></td>
                            <td class="textAlignRight"><label className="fontBold">Number of PDN Contexts:</label></td>
                            <td><span>{item.packetSwitch.numbercontexts}</span></td>
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                        </table>
                        </div>
                        </>
                    )
                    }
                }) 
            }
        </div>
    );
    }
}