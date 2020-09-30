import React, { createContext, Component } from "react";
import axios from 'axios';
import { authEndpoint } from './environment';

const DefaultViewDataLayerContext = createContext();

export class DefaultViewDataProvider extends Component {
  state = {
    data: [],
    count: 0,
    loading: true,
    refresh: false,
    refreshStatus: false
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      this.getDefaultViewData(this.props.imsi, this.state.refresh, this.state.refreshStatus);
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

/*componentWillReceiveProps(nextProps){
  this.setState({refresh: nextProps.refresh, refreshStatus: nextProps.refreshStatus});
  console.log("Initial Values:", nextProps.refresh, nextProps.refreshStatus);
  console.log("Initial Refresh Status:", this.state.refreshStatus);
  if(this.state.refreshStatus === false) {
    this.getDefaultViewData(this.props.imsi, nextProps.refresh, nextProps.refreshStatus);
  } else {
    this.getDefaultViewData(this.props.imsi, nextProps.refresh, this.state.refreshStatus);
  }
  
}*/

static getDerivedStateFromProps(nextProps, prevState) {
  if(nextProps.refreshStatus !== prevState.refreshStatus) {
    return {refresh: nextProps.refresh, refreshStatus: nextProps.refreshStatus};
  } else { 
   return null 
  }
}

componentDidUpdate(prevProps, prevState) {
 if(prevProps.refreshStatus !== this.props.refreshStatus) {
   console.log("Inside the ComponentdidUpdate:", prevProps.refreshStatus, this.props.refreshStatus);
   //Perform some operation here
   this.setState({refresh: prevProps.refresh, refreshStatus: prevState.refreshStatus});
   if(this.state.refreshStatus === false) {
    this.getDefaultViewData(this.props.imsi, prevProps.refresh, prevProps.refreshStatus);
  } else {
    this.getDefaultViewData(this.props.imsi, this.state.refresh, this.state.refreshStatus);
  }
 }
}

getDefaultViewData = (imsi, refresh, status) => {
  var self = this;
  imsi ="234500010400205";
  console.log(this.state.refresh);
  console.log(this.state.refreshStatus);
  if(refresh === undefined) {
    refresh = true;
  }
  if(status === undefined) {
    status = true;
  }
  if(refresh !== undefined && status !== undefined) {
  axios
    .get(authEndpoint + "/api/diagnosticData/defaultView/" + imsi, {
        "Content-Type": "application/xml; charset=utf-8"
     })
    .then(function(response) {
        self.setState((state, props) => ({ loading: false, data: response.data, count: Object.keys(response.data).length, refresh: refresh, refreshStatus: status }));
        console.log("Inside the method:", refresh, status);
        if((status === true && refresh === true) || (status === undefined && refresh === undefined)) {
            self.intervalID = setTimeout(self.getDefaultViewData.bind(this), 3000);
        }
    })
    .catch(function(error) {
        console.log(error);
    });
  }
}

  render() {
    const {data, count, loading, refresh, refreshStatus} = this.state || {};
    const {componentDidMount} = this;
    return(
      <DefaultViewDataLayerContext.Provider value = {{ data, count, loading, refresh, refreshStatus, componentDidMount }} > { this.props.children } 
      </DefaultViewDataLayerContext.Provider>
    )
  }
}

export default DefaultViewDataLayerContext;