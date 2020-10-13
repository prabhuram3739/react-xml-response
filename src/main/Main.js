import React  from 'react';
import { faUser, faUsers, faSearch, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Main.css";

export default class Main extends React.Component {
    render() {
        // Get the data from the context api to manipulate the data for the circuit view
       //const { data, count, loading } = this.context || {};
       const { data, loading } = this.context || {};
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
                            <div className="col-12 pl-0">
                                
                                <div className="card-deck">
                        <div className="col-3 mt-1 pl-0">
                        <div className="card mb-3 shadow-soft p-3">
                        <div className="card-header"><FontAwesomeIcon icon = { faUser } className="mr-4" />Accounts</div>
                        </div>
                        </div>
                        <div className="col-3 mt-1 pl-0">
                        <div className="card mb-3 shadow-soft p-3">
                        <div className="card-header"><FontAwesomeIcon icon = { faUserFriends } className="mr-4" /> Sub-Accounts</div>
                        </div>
                        </div>
                        <div className="col-3 mt-1 pl-0">
                        <div className="card mb-3 shadow-soft p-3">
                        <div className="card-header"><FontAwesomeIcon icon = { faUsers } className="mr-4" /> Connections</div>
                        </div>
                        </div>

</div>
                                
                            </div>

                            <div className="col-12 pl-0">
        <div className = "row topSearchBox" >
        <div className = "col-12 searchBoxDiv" >
        <input type = "search" className = "form-control mr-sm-2 searchBox" name = "imsi" autoComplete = "off" placeholder = "Search for iccid, imsi, msisdn, account, tag" id = "search-box" aria-label = "Search" required / >
        <button className = "searchIcon" type="submit"><FontAwesomeIcon icon = { faSearch } /></button>
        </div> </div>
                            </div>

                            <div className="col-12 pl-0 mt-3">
                                
                        <div className="card-deck">
                        <div className="mt-1 pl-0">
                        <div className="card functionalCards mb-3 shadow-soft p-3">
                        <div className="card-header"><FontAwesomeIcon icon = { faUser } className="mr-4" />Move SIM</div>
                        </div>
                        </div>
                        <div className="mt-1 pl-0">
                        <div className="card functionalCards mb-3 shadow-soft p-3">
                        <div className="card-header"><FontAwesomeIcon icon = { faUserFriends } className="mr-4" /> Purge SIM</div>
                        </div>
                        </div>
                        <div className="mt-1 pl-0">
                        <div className="card functionalCards mb-3 shadow-soft p-3">
                        <div className="card-header"><FontAwesomeIcon icon = { faUsers } className="mr-4" /> Unassign SIM</div>
                        </div>
                        </div>
                        <div className="mt-1 pl-0">
                        <div className="card functionalCards mb-3 shadow-soft p-3">
                        <div className="card-header"><FontAwesomeIcon icon = { faUsers } className="mr-4" /> Replace SIM</div>
                        </div>
                        </div>
                        <div className="mt-1 pl-0">
                        <div className="card functionalCards mb-3 shadow-soft p-3">
                        <div className="card-header"><FontAwesomeIcon icon = { faUsers } className="mr-4" /> Change Price Plan</div>
                        </div>
                        </div>
                        <div className="mt-1 pl-0">
                        <div className="card functionalCards mb-3 shadow-soft p-3">
                        <div className="card-header"><FontAwesomeIcon icon = { faUsers } className="mr-4" /> Assign Tag</div>
                        </div>
                        </div>
                        <div className="mt-1 pl-0">
                        <div className="card functionalCards mb-3 shadow-soft p-3">
                        <div className="card-header"><FontAwesomeIcon icon = { faUsers } className="mr-4" /> Export</div>
                        </div>
                        </div>

</div>
                                
                            </div>

<div className="col-12 mt-3">
                            <table className="table table-striped customTable">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
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