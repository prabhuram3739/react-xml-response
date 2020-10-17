import React  from 'react';
import "./SideBar.css";

export default class SideBar extends React.Component {
    render() {
        // Get the data from the context api to manipulate the data for the circuit view
       const { data, count, loading } = this.context || {};
       const finalData = [];
       finalData.push(data);
       // Check if the count is zero or undefined to display the no records message
       if(!loading) {
       if((count === 0) || (count === undefined)) {
        return (
            <span className="ml-4">Sorry, No Options available</span>
        )
       }
    }
       return (

        <div className="container-fluid noPadding fontChange border-right sideBar">
            {
                // Display loader till the response appears and check for the validity of the data If exists
                loading ? <div className="v-loading-indicator second v-loading-indicator-delay v-loading-indicator-wait" ></div>  :
                (finalData && finalData.length > 0) &&
                finalData.map((item, index) => {
                    if(item.userType === "admin") {
                    return (
                        <React.Fragment key={item.id}>
                            <div className="col-12">
                                <div className="row">
                                    <h5 className="sideBarTitle">Resource Management</h5>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                    } else {
                        return(false);
                    }
                }) 
            }
        </div>
    );
    }
}