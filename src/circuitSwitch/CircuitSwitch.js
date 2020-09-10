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
                        Subscriber Status: <span>{item.firstName}</span></div>
                        <div className="col-3">
                        3G APN List: <span>{item.lastName}</span></div>
                        <div className="col-3">
                        4G APN List: <span>{item.firstName}</span></div>
                        <div className="col-3">
                        O/G Call Status: <span>{item.lastName}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                        I/C Call Status: <span>{item.firstName}</span></div>
                        <div className="col-3">
                        MO-SMS Status: <span>{item.lastName}</span></div>
                        <div className="col-3">
                        MT-SMS Status: <span>{item.firstName}</span></div>
                        <div className="col-3">
                        3G DATA - Status: <span>{item.lastName}</span></div>
                        </div>
                        <div className="row">
                            <div className="col-3">
                        3G DATA - ROAM: <span>{item.firstName}</span></div>
                        <div className="col-3">
                        4G DATA - Status: <span>{item.lastName}</span></div>
                        <div className="col-3">
                        Prepaid/Camel Data: <span>{item.firstName}</span></div>
                        </div>
                        </>
                    ) 
                    
                }) 
            }
        </div>
    );
    }
}