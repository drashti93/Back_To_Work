
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
            isHidden: "",
            loginHidden: "",
        }
        this.logout = this.logout.bind(this)
    }

    componentWillReceiveProps(newProps) {
		
	}

    componentWillMount(){
        if(localStorage.getItem("recruiter")){
            this.setState({
                isHidden: "true"
            })
        }
    }

    logout(){
        localStorage.removeItem("recruiter")
        localStorage.removeItem("candidate")
    }

    componentDidMount(){
        console.log("Did mount")
        if(localStorage.getItem("recruiter")){
            this.setState({
                isHidden: "true",
                loginHidden: "true"
            })
        }
        if(localStorage.getItem("candidate")){
            console.log("Hiding login")
            this.setState({
                loginHidden: "true"
            })
        }
            this.props.getjobs("devops");
            this.props.getTutorials("devops")
        
    }

    submitJob(){
        this.props.submitJob(this.state.category, this.state.title, this.state.desc, this.state.url)
    }

    submittutorial(){
        this.props.submitTutorial(this.state.category, this.state.title, this.state.url)
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
            console.log("setting item")
            localStorage.setItem('recruiter', this.state.username);
            this.setState({isHidden: "true", loginHidden: "true"})
        }
    }

    handleSignin1(){
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
            console.log("setting item")
            localStorage.setItem('candidate', this.state.username);
            this.setState({loginHidden: "true"})
        }
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
                                <li className="nav-item">
                                    <a className="nav-link" hidden={this.state.loginHidden} href="/" data-toggle="modal" data-target="#exampleModal4" >Recruiter Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" hidden={this.state.loginHidden} href="/" data-toggle="modal" data-target="#exampleModal5" >Candidate Login</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a hidden={!this.state.isHidden} className="nav-link" href="/">Home</a>
                                </li>
                                <li class="nav-item dropdown pull-left" hidden={!this.state.loginHidden}>
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        {localStorage.getItem("recruiter") ? localStorage.getItem("recruiter") : ""}
                                        {localStorage.getItem("candidate") ? localStorage.getItem("candidate") : ""}
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="/" hidden={!this.state.isHidden} data-toggle="modal" data-target="#exampleModal2">Add Job Listing</a>
                                        <a class="dropdown-item" href="/" hidden={!this.state.isHidden} data-toggle="modal" data-target="#exampleModal3">Add New Tutorial</a>
                                        <a class="dropdown-item" href="/" hidden={!this.state.isHidden} data-toggle="modal" data-target="#exampleModal6">View Users</a>
                                        <a class="dropdown-item" href="/" onClick={() => this.logout()}>Logout</a>
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
        <div className="modal fade" id="exampleModal3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Add New Tutorial</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <span className="error-span">{this.state.formError}</span>
                        <form>
                            <div className="form-row">
                                <div className="col-lg-6 col-md-6 mb-6">
                                    <label htmlFor="validationServer02">Tutorial Category</label>
                                    <input className="form-control" placeholder="Job Category" onChange={this.onChangeCategory.bind(this)} required/>
                                    <span className="error-span">{this.state.passwordError}</span>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-6">
                                    <label htmlFor="validationServer01">Tutorial Title</label>
                                    <input lassName="form-control" placeholder="Job Title" onChange={this.onChangeTitle.bind(this)} required/>
                                    <span className="error-span">{this.state.newPasswordError}</span>
                                </div>
                                
                                <div className="col-lg-12 col-md-12 mb-12">
                                    <label htmlFor="validationServer01">URL</label>
                                    <input className="form-control" placeholder="URL" onChange={this.onChangeUrl.bind(this)} required/>
                                    <span className="error-span">{this.state.newPasswordError}</span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => this.submittutorial()}>Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="exampleModal4" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                <div className="modal fade" id="exampleModal5" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        <button type="button" className="btn btn-primary" onClick={() => this.handleSignin1()}>Login</button>
                    </div>
                    </div>
                </div>
                
            </div>
            <div className="modal fade" id="exampleModal6" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Users</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <span className="error-span">{this.state.formError}</span>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Progress</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>VMware Candidate</td>
                                    <td>C123</td>
                                    <td>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style={{"width": "33.33%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">33.33%</div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={() => this.handleSignin1()}>Login</button>
                    </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )}
}

function mapStateToProps(state) {
    return {
        job_list: state.devops.job_list,
        tutorial_list: state.devops.tutorial_list,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        submitJob: (category, title, desc, url) => dispatch(actions.submitJob(category, title, desc, url)),
        submitTutorial: (category, title, url) => dispatch(actions.submitTutorial(category, title, url)),
        getjobs: (type) => dispatch(actions.getjobs(type)),
        getTutorials: (type) => dispatch(actions.getTutorials(type)),
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (NaviBar));
