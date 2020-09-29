import React, { createContext, Component } from "react";
import axios from 'axios';
import { authEndpoint } from './environment';

const DefaultViewDataLayerContext = createContext();

export class DefaultViewDataProvider extends Component {
  state = {
    data: [],
    count: 0,
    loading: true
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      this.getDefaultViewData();
    });
}

componentWillUnmount() {
  /*
    stop getData() from continuing to run even
    after unmounting this component. Notice we are calling
    'clearTimeout()` here rather than `clearInterval()` as
    in the previous example.
  */
  clearTimeout(this.intervalID);
}

getDefaultViewData = () => {
  var self = this;
  axios
    .get(authEndpoint + "/api/diagnosticData/defaultView/724023900000009", {
        "Content-Type": "application/xml; charset=utf-8"
     })
    .then(function(response) {
        self.setState((state, props) => ({ loading: false, data: response.data, count: Object.keys(response.data).length }));
        self.intervalID = setTimeout(self.getDefaultViewData.bind(this), 5000);
    })
    .catch(function(error) {
        console.log(error);
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