import React  from 'react';
import axios from 'axios';
import { authEndpoint } from '../environment';

export default class ParseXML extends React.Component {
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
        <span className="col-md-10" >Sorry, No General Information available</span>
        )
       }
       return (

        <div className="container-fluid leftPadding">
            {
                //loading ? <div className = "d-flex justify-content-center custom-loader" ><div className = "spinner-border text-primary" role = "status" ><span className = "sr-only" > Loading... </span> </div> </div>  :
                
                loading ? <div className="v-loading-indicator second v-loading-indicator-delay" ></div>  :
                (authors && authors.length > 0) &&
                authors.map((item) => {
                    return (
                         <span className="col-md-10" key={item.ID}>{item.FirstName}</span>
                    ) 
                    
                }) 
            }
        </div>
    );
    }
}