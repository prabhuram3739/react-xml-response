import React  from 'react';
import axios from 'axios';

export default class ParseXML extends React.Component {
    //const [{user}, dispatch] = useDataLayerValue();
    componentDidMount() {
        var self = this;
        axios
        .get("https://fakerestapi.azurewebsites.net/api/Authors", {
            "Content-Type": "application/xml; charset=utf-8"
         })
        .then(function(response) {
            self.setState((state, props) => ({ authors: response.data, count: response.data.length }));
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    render() {
       const { authors } = this.state || {};
       const { count } = this.state || {};
       console.log(count);
       if(count === 0) {
        return (
        <span className="col-md-10" >Sorry, No General Information available</span>
        )
       }
       return (
        <div className="container-fluid">
            {
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