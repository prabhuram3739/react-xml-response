import React  from 'react';
import axios from 'axios';
import { authEndpoint } from '../environment';


export default class CircuitSwitch extends React.Component {
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
        <span >Sorry, No Circuit Switch Information available</span>
        )
       }
       return (

        <div className="container-fluid leftPadding fontChange">
            {
                //loading ? <div className = "d-flex justify-content-center custom-loader" ><div className = "spinner-border text-primary" role = "status" ><span className = "sr-only" > Loading... </span> </div> </div>  :
                
                loading ? <div className="v-loading-indicator second v-loading-indicator-delay" ></div>  :
                (finalData && finalData.length > 0) &&
                finalData.map((item) => {
                    return (
                        <>
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
                        <table className="table table-borderless" key={item.id}>
                        <tr>
                        <td>
                        <label className="fontBold">Subscriber Status:</label> </td>
                        <td><span>{item.circuitSwitch.subscriberStatus? 'IMSI Active' : 'IMSI Inactive'}</span></td>
                        <td>
                        <label className="fontBold">3G APN List:</label></td>
                        <td>
                        {item.circuitSwitch.threeGApn.map((threeGApnList, index) => {
                        return(
                        <span key={index}> {threeGApnList.apn};</span>
                        )
                        })}
                        </td>
                        <td>
                        <label className="fontBold">4G APN List:</label>
                        </td>
                        <td>
                        {item.circuitSwitch.threeGApn.map((fourGApnList, index) => {
                        return(
                        <span key={index}> {fourGApnList.apn};</span>
                        )
                        })}
                        </td>
                        <td>
                        <label className="fontBold">VLR Number:</label>
                        </td><td><span>{item.circuitSwitch.vlrNumber}</span>
                        </td>
                        </tr>

                        <tr>
                        <td>
                        <label className="fontBold">SGSN Number:</label>
                        </td>
                        <td> <span>{item.circuitSwitch.sgsnNumber}</span>
                        </td>
                        <td>
                        <label className="fontBold">MME ID:</label>
                        </td> 
                        <td><span>{item.circuitSwitch.mmeId}</span>
                        </td>
                        <td>
                        <label className="fontBold">O/G Call Status:</label>
                        </td> 
                        <td><span>{item.circuitSwitch.outgoingCallStatus}</span>
                        </td>
                        <td>
                        <label className="fontBold">I/C Call Status:</label>
                        </td> 
                        <td><span>{item.circuitSwitch.incomingCallStatus}</span>
                        </td>
                        </tr>

                        <tr>
                        <td>
                        <label className="fontBold">MO-SMS Status:</label>
                        </td> 
                        <td><span>{item.circuitSwitch.moSmsStatus}</span>
                        </td>
                        <td>
                        <label className="fontBold">MT-SMS Status:</label>
                        </td> 
                        <td><span>{item.circuitSwitch.mtSmsStatus}</span>
                        </td>
                        <td>
                        <label className="fontBold">3G DATA - Status:</label>
                        </td> 
                        <td><span>{item.circuitSwitch.threeGDataStatus}</span>
                        </td>
                        <td>
                        <label className="fontBold">3G DATA - ROAM:</label>
                        </td> 
                        <td><span>{item.circuitSwitch.threeGDataRoamStatus}</span>
                        </td>
                        </tr>

                        <tr>
                        <td>
                        <label className="fontBold">4G DATA - Status:</label>
                        </td> 
                        <td><span>{item.circuitSwitch.fourGDataStatus}</span>
                        </td>
                        <td>
                        <label className="fontBold">Prepaid/Camel Data:</label>
                        </td> 
                        <td><span>{item.circuitSwitch.camelSubscriptionStatus}</span>
                        </td>
                        </tr>
                        </table>
                        </div>
                        </>
                    ) 
                    
                }) 
            }
        </div>
    );
    }
}