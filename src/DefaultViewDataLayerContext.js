import React, { createContext, Component } from "react";
import axios from 'axios';
import { authEndpoint } from './environment';

const DefaultViewDataLayerContext = createContext();

export class DefaultViewDataProvider extends Component {
  state = {
    data: [],
    count: 0,
    loading: true,
    refresh: false
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      this.getDefaultViewData(this.props.imsi, this.state.refresh);
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

componentWillReceiveProps(nextProps){
  this.setState({refresh: nextProps.refresh});
  //console.log(nextProps.refresh);
  this.getDefaultViewData(this.props.imsi, true);
}

getDefaultViewData = (imsi, refresh) => {
  var self = this;
  imsi ="234500010400205";
  axios
    .get(authEndpoint + "/api/diagnosticData/defaultView/" + imsi, {
        "Content-Type": "application/xml; charset=utf-8"
     })
    .then(function(response) {
        self.setState((state, props) => ({ loading: false, data: response.data, count: Object.keys(response.data).length }));
        //console.log(refresh);
        if((refresh === true) || (refresh === undefined)) {
          self.intervalID = setTimeout(self.getDefaultViewData.bind(this), 60000);
        }
    })
    .catch(function(error) {
        console.log(error);
    });
}

  render() {
    const {data, count, loading, refresh} = this.state || {};
    const {componentDidMount} = this;
    return(
      <DefaultViewDataLayerContext.Provider value = {{ data, count, loading, refresh, componentDidMount }} > { this.props.children } 
      </DefaultViewDataLayerContext.Provider>
    )
  }
}

export default DefaultViewDataLayerContext;