import React, { Component } from 'react';
import { CSVLink } from "react-csv";
import { faFileExport } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    var data = "";
    if(this.props.name === 'circuitSwitch') {
      data = this.props.csvData[0].circuitSwitch;
    } else if(this.props.name === 'packetSwitch') {
      data = this.props.csvData[0].packetSwitch;
    }
    // API call to get data 
    const objReport = {
      filename: 'Circuit_Core_API_Response.csv',
      headers: headers,
      data: data
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
      <CSVLink filename={this.props.name === 'circuitSwitch' ? 'Circuit_Core_API_Response.csv' : 'Packet_Core_API_Response.csv'}
      data={this.props.name === 'circuitSwitch' ? [this.props.csvData[0].circuitSwitch, ...this.props.csvData[0].circuitSwitch.threeGApnDataList, ...this.props.csvData[0].circuitSwitch.fourGApnDataList] : [this.props.csvData[0].packetSwitch,  ...this.props.csvData[0].packetSwitch.ratingGroupDataList]}
        asyncOnClick={true}
        ><button
        className="btn pull-right mr-2 alignPlacement"
        color="primary"
        onClick={this.downloadReport}
    >
        <FontAwesomeIcon icon = { faFileExport } />
        </button>
      </CSVLink>
    );
  }
}

export default AsyncCSV;