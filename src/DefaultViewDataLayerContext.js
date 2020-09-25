import React, { createContext, Component } from "react";
import axios from 'axios';

const DefaultViewDataLayerContext = createContext();

export class DefaultViewDataProvider extends Component {
  state = {
    data: [],
    count: 0,
    loading: true
  }

  componentDidMount() {
    var self = this;
    this.setState({ loading: true }, () => {
    axios
    .get("http://localhost:8080/api/diagnosticData/defaultView/724023900000009", {
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
      <DefaultViewDataLayerContext.Provider value = {{ data, count, loading, componentDidMount }} > { this.props.children } 
      </DefaultViewDataLayerContext.Provider>
    )
  }
}

export default DefaultViewDataLayerContext;