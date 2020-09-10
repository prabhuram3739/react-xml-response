import React  from 'react';
import axios from 'axios';
import { authEndpoint } from '../environment';

export default class GerneralInfo extends React.Component {
    //const [{user}, dispatch] = useDataLayerValue();
    componentDidMount() {
        var self = this;
        this.setState({ loading: true }, () => {
        axios
        .get("https://fakerestapi.azurewebsites.net/api/Authors", {
            "Content-Type": "application/xml; charset=utf-8"
         })
        .then(function(response) {
            self.setState((state, props) => ({ loading: false, authors: response.data, count: response.data.length }));
        })
        .catch(function(error) {
            console.log(error);
        });
    });
    }

    render() {
       const { authors, count, loading } = this.state || {};
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
                (authors && authors.length > 0) &&
                authors.map((item) => {
                    return (
                        <>
                        <div className="row">
                        <div className="col-3">
                        RAT Type: <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        Network MCC/Network MNC: <span>{item.lastName}</span></div>
                        <div className="col-3">
                        Cell ID: <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        Number of PDN Contexts: <span>{item.lastName}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        APN Requested: <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        Virtual APN: <span>{item.lastName}</span></div>
                        <div className="col-3">
                        PDN Type: <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        UL APN AMBR: <span>{item.FirstName}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        DL APN AMBR: <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        UE IPV4 Address: <span>{item.lastName}</span></div>
                        <div className="col-3">
                        S8 DL Bytes: <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        SGL UL Bytes: <span>{item.FirstName}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        Primary DNS IPV4 Address: <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        Secondary DNS IPv4 address: <span>{item.lastName}</span></div>
                        <div className="col-3">
                        Primary DNS IPv6 address: <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        Secondary DNS IPv6 address: <span>{item.FirstName}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        S8 PGW Data addr: <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        S8 SGW V4 Ctl Adr: <span>{item.lastName}</span></div>
                        <div className="col-3">
                        S8 SGW Data addr: <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        Gx peer profile in use: <span>{item.FirstName}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        Gx failover count: <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        PCRF hostname: <span>{item.lastName}</span></div>
                        <div className="col-3">
                        PCRF address: <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        PCRF destination host: <span>{item.FirstName}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        Rule Base Name: <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        SDF rule name: <span>{item.lastName}</span></div>
                        <div className="col-3">
                        SDF precedence: <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        SDF rule name: <span>{item.FirstName}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        SDF precedence: <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        DCCA Profile: <span>{item.lastName}</span></div>
                        <div className="col-3">
                        Peer-profile In-use: <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        Failover Count: <span>{item.FirstName}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        OCS Address: <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        OCS Destination Realm: <span>{item.lastName}</span></div>
                        <div className="col-3">
                        OCS Destination Host: <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        Rating Group: <span>{item.FirstName}</span></div>
                        </div>
                        </>
                    ) 
                    
                }) 
            }
        </div>
    );
    }
}