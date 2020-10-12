import React  from 'react';
import "./Main.css";

export default class Main extends React.Component {
    render() {
        // Get the data from the context api to manipulate the data for the circuit view
       const { data, count, loading } = this.context || {};
       const finalData = [];
       finalData.push(data);
       // Check if the count is zero or undefined to display the no records message
       if(!loading) {
       /*if((count === 0) || (count === undefined)) {
        return (
            <span className="ml-4">Sorry, No content available</span>
        )
       }*/
    }
       return (

        <div className="container-fluid noPadding fontChange border-right main">
            {
                // Display loader till the response appears and check for the validity of the data If exists
                loading ? <div className="v-loading-indicator second v-loading-indicator-delay" ></div>  :
                (finalData && finalData.length > 0) &&
                finalData.map((item, index) => {
                    //if(item.userType === "admin") {
                    return (
                        <React.Fragment>
                            <div className="col-12">
                                <div className="row">
                                    <h5 className="sideBarTitle">Main Content</h5>
                                </div>
                                <div className="row">
                                <div className="card-deck">
                        <div className="row">
                        <div className="col-4 mt-1">
                        <div className="card mb-3 shadow-soft p-3">
                        <div className="card-header">Accounts</div>
                        </div>
                        </div>
                        <div className="col-4 mt-1">
                        <div className="card mb-3 shadow-soft p-3">
                        <div className="card-header">Sub-Accounts</div>
                        </div>
                        </div>
                        <div className="col-4 mt-1">
                        <div className="card mb-3 shadow-soft p-3">
                        <div className="card-header">Connections</div>
                        </div>
                        </div>

                    </div></div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                    /*} else {
                        return(false);
                    }*/
                }) 
            }
        </div>
    );
    }
}