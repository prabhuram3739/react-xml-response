import React, { createContext, Component } from "react";
import axios from 'axios';

const DataLayerContext = createContext();

export class DataProvider extends Component {
  state = {
    data: [],
    count: 0,
    loading: true
  }

  componentDidMount() {
    var self = this;
    this.setState({ loading: true }, () => {
    axios
    .get("http://localhost:8080/api/diagnosticData/searchView/724023900000009", {
        "Content-Type": "application/xml; charset=utf-8"
     })
    .then(function(response) {
        self.setState((state, props) => ({ loading: false, data: response.data, count: Object.keys(response.data).length }));
    })
    .catch(function(error) {
        console.log(error);
    });
});
}

  render() {
    const {data, count, loading} = this.state || {};
    const {componentDidMount} = this;
    return(
      <DataLayerContext.Provider value = {{ data, count, loading, componentDidMount }} > { this.props.children } 
      </DataLayerContext.Provider>
    )
  }
}

export default DataLayerContext;