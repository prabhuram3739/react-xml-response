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
      filename: 'Circuit_Switch_API_Response_Data.csv',
      headers: headers,
      data: this.props.csvData[0].circuitSwitch
    };
    this.setState({ csvReport: objReport }, () => {
      console.log("Successfully exported");
    });
  }

  checkNested(obj, level, ...rest) {
    if (obj === undefined) return false;
    if (rest.length === 0 && obj.hasOwnProperty(level)) return true;
    return this.checkNested(obj[level], ...rest);
  }


  render() {
    return (
      <CSVLink
      data={[this.props.csvData[0].circuitSwitch, ...this.props.csvData[0].circuitSwitch.threeGApnDataList, ...this.props.csvData[0].circuitSwitch.fourGApnDataList]}
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