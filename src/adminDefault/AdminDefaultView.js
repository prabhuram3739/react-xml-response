import React  from 'react';
import axios from 'axios';
import { authEndpoint } from '../environment';

export default class AdminDefaultView extends React.Component {
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
       if((count === 0) || (count === undefined)) {
        return (
        <span >Sorry, No Information available</span>
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
                        <div className="col-6">
                            <h4>Hostname: AMS_PROD_CMG </h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                            <label className="fontBold">Homers:</label> <span>{item.firstName}</span></div>
                        <div className="col-4">
                        <label className="fontBold">LTE PDN Sessions:</label> <span>{item.lastName}</span></div>
                        <div className="col-4">
                        <label className="fontBold">Real APNs:</label> <span>{item.lastName}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                            <label className="fontBold">Roamers:</label> <span>{item.firstName}</span></div>
                        <div className="col-4">
                        <label className="fontBold">2G/3G PDN Sessions:</label> <span>{item.lastName}</span></div>
                        <div className="col-4">
                        <label className="fontBold">Ga CDRs Buffered:</label> <span>{item.lastName}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                            <label className="fontBold">Visitors:</label> <span>{item.firstName}</span></div>
                        <div className="col-4">
                        <label className="fontBold">Total Number of UEs:</label> <span>{item.lastName}</span></div>
                        <div className="col-4">
                        <label className="fontBold">Gy CCRs Buffered:</label> <span>{item.lastName}</span></div>
                        </div>
                        <hr></hr>
                        <div className="row">
                        <div className="col-6">
                            <h4>Gy Statistics</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                            <label className="fontBold">Dia Peer Prof:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Peer Address:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Path Mgmt State:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Detail State:</label> <span>{item.lastName}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                            <label className="fontBold">Dia Peer Prof:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Peer Address:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Path Mgmt State:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Detail State:</label> <span>{item.lastName}</span></div>
                        </div>
                        <hr></hr>
                        <div className="row">
                        <div className="col-6">
                            <h4>Gx Statistics</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                            <label className="fontBold">Dia Peer Prof:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Peer Address:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Path Mgmt State:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Detail State:</label> <span>{item.lastName}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                            <label className="fontBold">Dia Peer Prof:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Peer Address:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Path Mgmt State:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Detail State:</label> <span>{item.lastName}</span></div>
                        </div>
                        <hr></hr>
                        <div className="row">
                        <div className="col-6">
                            <h4>Sx Statistics</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                            <label className="fontBold">Up Association:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Peer Address:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Path Mgmt State:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Last Change Time:</label> <span>{item.lastName}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                            <label className="fontBold">Up Association:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Peer Address:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Path Mgmt State:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Last Change Time:</label> <span>{item.lastName}</span></div>
                        </div>
                        <hr></hr>
                        <div className="row">
                        <div className="col-6">
                            <h4>Radius Statistics</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                            <label className="fontBold">Group Name:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Peer Address:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Operation State:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Admin State:</label> <span>{item.lastName}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                            <label className="fontBold">Group Name:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Peer Address:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Operation State:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Admin State:</label> <span>{item.lastName}</span></div>
                        </div>
                        <hr></hr>
                        <div className="row">
                        <div className="col-6">
                            <h4>Ga Statistics</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                            <label className="fontBold">GTP Prim Grp:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Peer Address:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Operation State:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Up Time:</label> <span>{item.lastName}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                            <label className="fontBold">GTP Prim Grp:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Peer Address:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Operation State:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label className="fontBold">Up Time:</label> <span>{item.lastName}</span></div>
                        </div>
                        </>
                    ) 
                    
                }) 
            }
        </div>
    );
    }
}