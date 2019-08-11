
import React, {Component} from "react";
import '../NavigationBar/Navibar.css'
import * as actions from "../../actions/auth"
import logo from "../../resources/images/logo.svg"
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import swal from "sweetalert";

require('dotenv').config()

class NaviBar extends Component{
    constructor(props){
        super(props)
        this.state = {
			firstname : '' , 
			lastname : '' ,
			username : '' ,
            password : '',
            message: '',
            isHidden: "false",
        }
    }

    componentWillReceiveProps(newProps) {
		
	}

    componentDidMount(){
        
    }

    onChangeFirstName(e) {
        this.setState({
            firstname: e.target.value,
            firstnameError: ""
        })
    }

    onChangeLastName(e) {
        this.setState({
            lastname: e.target.value,
            lastnameError: "",
        })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
            usernameError: "",
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
            passwordError: "",
        })
    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value,
            emailError: "",
        })
    }

submitSignup() {
    console.log("Inside frontend signup")
    console.log("Values")
    console.log(this.state.firstname, this.state.lastname, this.state.username, this.state.password)
    this.setState({
        firstnameError: "",
        lastnameError: "",
        usernameError: "",
        passwordError: "",
        emailError: "",
        formError: "",
    })
    let isFormValid = true;
    if(this.state.firstname === ''){
        this.setState({firstnameError: "Please enter a valid first name"})
        isFormValid = false;
    }
    if(this.state.lastname === ''){
        this.setState({lastnameError: "Please enter a valid last name"})
        isFormValid = false;
    }
    if(this.state.username === ''){
        this.setState({usernameError: "Please enter a valid username"})
        isFormValid = false;
    }
    if(this.state.password === ''){
        this.setState({passwordError: "Please enter a valid password"})
        isFormValid = false;
    }
    if(this.state.email === ''){
        this.setState({emailError: "Please enter a valid email"})
        isFormValid = false;
    }
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(String(this.state.email).toLowerCase()))
    if(!re.test(String(this.state.email).toLowerCase())){
        this.setState({emailError: "Please enter a valid email"})
        isFormValid = false;
    }
    if(isFormValid){
        this.props.addAdmin(this.state.firstname, this.state.lastname, this.state.username, this.state.password, this.props.username, this.state.email)
    }
        
}

handleSignin(){
    let isFormValid = true;
    if(this.state.username === ''){
        this.setState({usernameError:"Please enter your Username"});
        isFormValid = false;
    }
    if(this.state.password === ''){
        this.setState({passwordError:"Please enter your Password"});
        isFormValid = false;
    }
    if(isFormValid){
        console.log("Form valid - in login frontend, URL ->")
        this.props.login(this.state.username, this.state.password)
    }
}

render(){
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg navbar-light navbar-container"> 
                        <a className="navbar-brand" href="/"><img id="f5logo" src={logo} alt="f5logo"></img></a>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <div className="container message-container">
                                <div className="row" id="welcome-message">
                                    <span id="message-h4"><h1 className="text-block">Back To Work<br></br></h1></span>
                                </div>
                            </div>
                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul class="navbar-nav">
                                <li class="nav-item active">
                                    <a class="nav-link" href="#" hidden={!this.state.isHidden}>Candidate Login <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" hidden={!this.state.isHidden}>Recruiter Login</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" hidden={this.state.isHidden}>{this.state.username}</a>
                                </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            
            <div className="modal fade" id="exampleModal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add New User</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <span className="error-span">{this.state.formError}</span>
                        <form>
                            <div className="form-row">
                                <div className="col-lg-6 col-md-6 mb-6">
                                    <label htmlFor="validationServer01">First Name</label>
                                    <input type="text" className="form-control" onChange={this.onChangeFirstName.bind(this)} placeholder="First Name" required/>
                                    <span className="error-span">{this.state.firstnameError}</span>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-6">
                                    <label htmlFor="validationServer02">Last Name</label>
                                    <input type="text" className="form-control" onChange={this.onChangeLastName.bind(this)} placeholder="Last Name" required/>
                                    <span className="error-span">{this.state.lastnameError}</span>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-12 col-md-6 mb-12">
                                    <label htmlFor="validationServer02">Last Name</label>
                                    <input type="text" className="form-control" onChange={this.onChangeEmail.bind(this)} placeholder="Email" required/>
                                    <span className="error-span">{this.state.emailError}</span>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-6 col-md-6 mb-6">
                                    <label htmlFor="validationServer01">Username</label>
                                    <input type="text" className="form-control" onChange={this.onChangeUsername.bind(this)} placeholder="Username" required/>
                                    <span className="error-span">{this.state.usernameError}</span>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-6">
                                    <label htmlFor="validationServer02">Temporary Password</label>
                                    <input type="password" className="form-control" onChange={this.onChangePassword.bind(this)} placeholder="Password" required/>
                                    <span className="error-span">{this.state.passwordError}</span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => this.submitSignup()}>Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
           
            <div className="modal fade" id="exampleModal3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <span className="error-span">{this.state.formError}</span>
                        <form>
                            <div className="form-row">
                                <div className="col-lg-12 col-md-12 mb-12">
                                    <label htmlFor="validationServer01">Username</label>
                                    <input type="text" className="form-control" placeholder="Username" onChange={this.onChangeUsername.bind(this)} required/>
                                    <span className="error-span">{this.state.usernameError}</span>
                                </div>
                                <div className="col-lg-12 col-md-12 mb-12">
                                    <label htmlFor="validationServer02">Password</label>
                                    <input type="password" className="form-control" placeholder="Password" onChange={this.onChangePassword.bind(this)} required/>
                                    <span className="error-span">{this.state.passwordError}</span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => this.handleSignin()}>Login</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
            
            
           
    )}
}

function mapStateToProps(state) {
    return {
    	// isSigned: state.auth.isSigned,
        // isLogged: state.auth.isLogged,
        // username: state.auth.username,
        // isHidden: state.auth.isHidden,
    };
}

function mapDispatchToProps(dispatch) {
    return {
    	addAdmin : (firstname,lastname,username,password, user, email) => dispatch(actions.addAdmin(firstname,lastname,username,password, user, email)),
        login : (username,password) => dispatch(actions.login(username,password)),
        logout : () => dispatch(actions.logout()),
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (NaviBar));
