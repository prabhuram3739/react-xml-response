import React  from 'react';
import axios from 'axios';
import { authEndpoint } from '../environment';

export default class GerneralInfo extends React.Component {
    //const [{user}, dispatch] = useDataLayerValue();
    componentDidMount() {
        var self = this;
        this.setState({ loading: true }, () => {
        axios
        .get("http://localhost:8080/api/diagnosticData/724023900000009", {
            "Content-Type": "application/xml; charset=utf-8"
         })
        .then(function(response) {
            console.log(response.data);
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
       if(count === 0) {
        return (
        <span >Sorry, No General Information available</span>
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
                        <div key={item.id}>
                        <div className="row">
                        <div className="col-3">
                        <label class="fontBold">IMSI:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">MSISDN:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">IMEI:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">Up Time:</label> <span>{item.lastName}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label class="fontBold">RAT Type:</label> <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">Network MCC/Network MNC:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">Cell ID:</label> <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">Number of PDN Contexts:</label> <span>{item.lastName}</span></div>
                        </div>
                        </div>
                        </>
                    ) 
                    
                }) 
            }
        </div>
    );
    }
}