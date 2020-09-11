import React  from 'react';
import axios from 'axios';
import { authEndpoint } from '../environment';

export default class PacketSwitch extends React.Component {
    //const [{user}, dispatch] = useDataLayerValue();
    componentDidMount() {
        var self = this;
        this.setState({ loading: true }, () => {
        axios
        .get("http://localhost:8080/api/users", {
            "Content-Type": "application/xml; charset=utf-8"
         })
        .then(function(response) {
            self.setState((state, props) => ({ loading: false, users: response.data, count: response.data.length }));
        })
        .catch(function(error) {
            console.log(error);
        });
    });
    }

    render() {
       const { users, count, loading } = this.state || {};
       console.log(count);
       if((count === 0) || (count === undefined)) {
        return (
        <span >Sorry, No Packet Switch Information available</span>
        )
       }
       return (

        <div className="container-fluid leftPadding fontChange">
            {
                //loading ? <div className = "d-flex justify-content-center custom-loader" ><div className = "spinner-border text-primary" role = "status" ><span className = "sr-only" > Loading... </span> </div> </div>  :
                
                loading ? <div className="v-loading-indicator second v-loading-indicator-delay" ></div>  :
                (users && users.length > 0) &&
                users.map((item) => {
                    return (
                        <>
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
                        <div className="row">
                        <div className="col-3">
                        <label class="fontBold">APN Requested:</label> <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">Virtual APN:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">PDN Type:</label> <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">UL APN AMBR:</label> <span>{item.FirstName}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label class="fontBold">DL APN AMBR:</label> <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">UE IPV4 Address:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">S8 DL Bytes:</label> <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">SGL UL Bytes:</label> <span>{item.FirstName}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label class="fontBold">Primary DNS IPV4 Address:</label> <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">Secondary DNS IPv4 address:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">Primary DNS IPv6 address:</label> <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">Secondary DNS IPv6 address:</label> <span>{item.FirstName}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label class="fontBold">S8 PGW Data addr:</label> <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">S8 SGW V4 Ctl Adr:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">S8 SGW Data addr:</label> <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">Gx peer profile in use:</label> <span>{item.FirstName}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label class="fontBold">Gx failover count:</label> <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">PCRF hostname:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">PCRF address:</label> <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">PCRF destination host:</label> <span>{item.FirstName}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label class="fontBold">Rule Base Name:</label> <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">SDF rule name:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">SDF precedence:</label> <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">SDF rule name:</label> <span>{item.FirstName}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label class="fontBold">SDF precedence:</label> <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">DCCA Profile:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">Peer-profile In-use:</label> <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">Failover Count:</label> <span>{item.FirstName}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label class="fontBold">OCS Address:</label> <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">OCS Destination Realm:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">OCS Destination Host:</label> <span>{item.FirstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">Rating Group:</label> <span>{item.FirstName}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label class="fontBold">Used Total Octets:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">Diameter Code:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">Rating Group:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">Used Total Octets:</label> <span>{item.firstName}</span></div>
                        </div>
                        <div className="row">
                        <div className="col-3">
                        <label class="fontBold">Diameter Code:</label> <span>{item.lastName}</span></div>
                        </div>
                        </>
                    ) 
                    
                }) 
            }
        </div>
    );
    }
}