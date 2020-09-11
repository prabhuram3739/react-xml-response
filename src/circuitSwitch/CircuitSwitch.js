import React  from 'react';
import axios from 'axios';
import { authEndpoint } from '../environment';

export default class CircuitSwitch extends React.Component {
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
        <span >Sorry, No Circuit Switch Information available</span>
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
                            <label class="fontBold">Subscriber Status:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">3G APN List:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">4G APN List:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">O/G Call Status:</label> <span>{item.lastName}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                            <label class="fontBold">I/C Call Status:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">MO-SMS Status:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">MT-SMS Status:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">3G DATA - Status:</label> <span>{item.lastName}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                            <label class="fontBold">3G DATA - ROAM:</label> <span>{item.firstName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">4G DATA - Status:</label> <span>{item.lastName}</span></div>
                        <div className="col-3">
                        <label class="fontBold">Prepaid/Camel Data:</label> <span>{item.firstName}</span></div>
                        </div>
                        </>
                    ) 
                    
                }) 
            }
        </div>
    );
    }
}