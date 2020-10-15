
import React  from 'react';
import axios from 'axios';
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Login.css';

export default class Login extends React.Component {

constructor(props){
  super(props);
  this.state={
  username:'',
  password:''
  }
 }

 handleClick(event){
    var apiBaseUrl = "http://localhost:4000/api/";
    var payload={
    "email":this.state.username,
    "password":this.state.password
    }
    axios.post(apiBaseUrl+'login', payload)
    .then(function (response) {
    console.log(response);
    if(response.data.code === 200){
    console.log("Login successfull");
    }
    else if(response.data.code === 204){
    console.log("Username password do not match");
    alert("username password do not match")
    }
    else{
    console.log("Username does not exists");
    alert("Username does not exist");
    }
    })
    .catch(function (error) {
    console.log(error);
    });
    }
render() {
    return (
        <React.Fragment>
<div id="ROOT-2521314" className="v-app nokia mavocenterui">
        <div className="login-background">
    <div className="login-panel-container layout horizontal center center-justified">
        <div className="login-panel layout horizontal">
            <div className="nokia-logo layout vertical">
            <img className="login-logo" alt="Nokia" src={"https://jt-poc.nokiawing.com/VAADIN/themes/nokia/layouts/../img/nokia_white.svg"} />
                <p className="nokia-product">Diagnostic Portal</p>
                <p className="nokia-descriptor">Enterprise Portal</p>
                <p className="nokia-version">Release: <span location="app_version"><div className="v-label v-widget login-label v-label-login-label v-label-undef-w">4.3</div></span></p>
                <p className="flex"></p>
                <p className="nokia-status">Based on WING © by Nokia</p>
            </div>
            <div className="login-form layout vertical center-justified" location="login-form"><div className="v-customlayout v-layout v-widget v-has-width" style={{borderStyle: "none", margin: 0, padding: 0}}><div className="login-form-content nokia-fields layout vertical center-justified">
    <div className="flex layout vertical center-justified">
        <div className="login-fields-input">
    <div location="user_name_field"><div className="v-captionwrapper"><div className="v-caption v-caption-inline-icon" id="gwt-uid-3" for="gwt-uid-4"><FontAwesomeIcon icon = { faUser } className="v-icon ml-3" style={{marginTop: 38}} /><div className="v-captiontext">E-mail</div></div><input type="text" className="v-textfield v-widget inline-icon v-textfield-inline-icon" id="gwt-uid-4" aria-labelledby="gwt-uid-3" tabindex="0"  /></div></div>
            <div location="password_field"><div className="v-captionwrapper"><div className="v-caption v-caption-inline-icon" id="gwt-uid-5" for="gwt-uid-6"><FontAwesomeIcon icon = { faLock } className="v-icon ml-3" style={{marginTop: 38}} /><div className="v-captiontext">Password</div></div><input type="password" className="v-textfield v-widget inline-icon v-textfield-inline-icon" id="gwt-uid-6" aria-labelledby="gwt-uid-5" tabindex="0" /></div></div>
            <div className="nokia-options layout horizontal justified">
                <div className="self-start layout horizontal center" location="remember_me"><span className="v-checkbox v-widget"><input type="checkbox" value="on" id="gwt-uid-2" tabindex="0" /><label for="gwt-uid-2">Remember username</label></span></div>
                <div className="self-end" location="reset_password"><div tabindex="0" role="button" className="v-button v-widget link v-button-link"><span className="v-button-wrap"><span className="v-button-caption">Forgot password?</span></span></div></div>
            </div>
        </div>
        <div className="layout horizontal self-end" style={{paddingBottom: 10}} location="captcha"></div>
        <div location="submit_button"><div tabindex="0" role="button" className="v-button v-widget primary v-button-primary"><span className="v-button-wrap"><span className="v-button-caption">Sign In</span></span></div></div>
        <div location="cas_login_button"></div>
    </div>
    <div className="nokia-language layout horizontal center">
        <div style={{paddingBottom: 1}}>Language:</div>
        <div location="lang_menu"><div tabindex="0" className="v-menubar v-widget borderless v-menubar-borderless language-menu v-menubar-language-menu"><span className="v-menubar-menuitem"><span className="v-menubar-submenu-indicator">►</span><span className="v-menubar-menuitem-caption">English</span></span></div></div>
    </div>
</div></div></div>
        </div>
    </div>
</div>
</div></React.Fragment>
    );
  }
}