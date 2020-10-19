import React, { Component } from 'react';
import { CSVLink } from "react-csv";

const headers = [
  { label: "First Name", key: "firstName" },
  { label: "Last Name", key: "lastName" },
  { label: "Email", key: "email" },
  { label: "Age", key: "age" }
];



class AsyncCSV extends Component {

  constructor(props) {
    super(props);
    this.state = {
      csvReport: {
        data: [],
        headers: [],
        filename: 'Report.csv'
      }
    }
  }

  downloadReport = (event, done) => {

    // API call to get data 
    const objReport = {
      filename: 'Clue_Mediator_Report_Async.csv',
      headers: headers,
      data: this.props.csvData
    };
    this.setState({ csvReport: objReport }, () => {
      console.log("Successfully exported");
    });
  }

  render() {


    return (
      <CSVLink
      data={this.props.csvData}
        asyncOnClick={true}
        ><button
        className="btn btn-primary pull-right mr-4"
        color="primary"
        onClick={this.downloadReport}
    >
        Export to CSV
        </button>
      </CSVLink>
    );
  }
}

export default AsyncCSV;