
import React, {Component} from "react";
import '../NavigationBar/Navibar.css'
import * as actions from "../../actions/devops"
import f5logo from "../../resources/images/logo.svg"
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import swal from "sweetalert";
var loginStatus = "";

require('dotenv').config()

class NaviBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            category: "",
            title: "",
            desc: "",
            url: "",
        }
        
    }

    componentWillReceiveProps(newProps) {
		
	}

    componentDidMount(){
        
    }

    submitJob(){
        this.props.submitJob(this.state.category, this.state.title, this.state.desc, this.state.url)
    }

    onChangeCategory(e){
        this.setState({
            category: e.target.value
        })
    }

    onChangeTitle(e){
        this.setState({
            title: e.target.value
        })
    }

    onChangeDesc(e){
        this.setState({
            desc: e.target.value
        })
    }

    onChangeUrl(e){
        this.setState({
            url: e.target.value
        })
    }
render(){
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <nav className="navbar navbar-expand-lg navbar-light navbar-container">
                        
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="navbar-toggler-icon"></span>
                        </button> <a className="navbar-brand" href="/"><img id="f5logo" src={f5logo} alt="f5logo"></img></a>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <div className="container message-container">
                                <div className="row" id="welcome-message">
                                    <span id="message-h4">{}</span>
                                </div>
                            </div>
                            <ul className="navbar-nav ml-md-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/" data-toggle="modal" data-target="#exampleModal3" hidden={!this.props.isHidden}>Admin Login</a>
                                </li>
                                <li class="nav-item dropdown dropdown-li" hidden={this.props.isHidden}>
                                    <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                        {this.props.username}
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink" >
                                        <a class="dropdown-item" href="/" data-toggle="modal" data-target="#exampleModal2">Add Job Listing</a>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </nav>
                </div>
            </div>
            
            
            <div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add New Job</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <span className="error-span">{this.state.formError}</span>
                        <form>
                            <div className="form-row">
                                <div className="col-lg-6 col-md-6 mb-6">
                                    <label htmlFor="validationServer02">Job Category</label>
                                    <input className="form-control" placeholder="Job Category" onChange={this.onChangeCategory.bind(this)} required/>
                                    <span className="error-span">{this.state.passwordError}</span>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-6">
                                    <label htmlFor="validationServer01">Job Title</label>
                                    <input lassName="form-control" placeholder="Job Title" onChange={this.onChangeTitle.bind(this)} required/>
                                    <span className="error-span">{this.state.newPasswordError}</span>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-6">
                                    <label htmlFor="validationServer02">Job Description</label>
                                    <input className="form-control" placeholder="Job Description" onChange={this.onChangeDesc.bind(this)} required/>
                                    <span className="error-span">{this.state.confirmPasswordError}</span>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-6">
                                    <label htmlFor="validationServer01">URL</label>
                                    <input className="form-control" placeholder="URL" onChange={this.onChangeUrl.bind(this)} required/>
                                    <span className="error-span">{this.state.newPasswordError}</span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => this.submitJob()}>Save changes</button>
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
        // message: state.auth.message,
        // isLogged: state.auth.isLogged,
        // username: state.auth.username,
        // isHidden: state.auth.isHidden,
        // changed: state.auth.changed,
        // diagram_updated: state.auth.diagram_updated,
        // users: state.auth.users,
        // password_reset: state.auth.password_reset,
        // info: state.auth.info,
    };
}

function mapDispatchToProps(dispatch) {
    return {
    	// addAdmin : (firstname,lastname,username,password, user, email) => dispatch(actions.addAdmin(firstname,lastname,username,password, user, email)),
        // login : (username,password) => dispatch(actions.login(username,password)),
        // logout : () => dispatch(actions.logout()),
        submitJob: (category, title, desc, url) => dispatch(actions.submitJob(category, title, desc, url))
       
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (NaviBar));
