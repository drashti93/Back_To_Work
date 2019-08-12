import React, {Component} from "react";
import Navibar from "../NavigationBar/Navibar"
import { Helmet } from 'react-helmet'
import "./landingPage.css"
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from "../../actions/devops"
import front_image from '../../resources/images/women_group.png';

console.log(`${process.env.REACT_APP_FRONTEND_URL}`)
class LandingPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            isPopoverOpen: false,
            isPopoverOpen1: false,
            joblist: [],
        }
    }

    componentDidMount(){
        this.props.getjobs("devops");
    }
    

    render(){
        return(
            <div>
                <Navibar></Navibar>
                <div>
                    <Helmet>
                    <title>Winkedin</title>
                    </Helmet>
                </div>
                <div className="container-fluid" id="landing-image-container1">
                    <h1 className="text-block1">WinkedIn<br></br><h5 style={{color: "white"}}>Pick a profession of your choice</h5></h1>
                    
                    <img src={front_image} id="image-landing"></img>
                </div>
                <div className="container-fluid widget-container1">
                    <div className="row widget-row1">
                        <div className="col-sm widget-col1">
                            <div className="container widget-inner-container1">
                                <div class="card mb-3" style={{"max-width": "440px"}}>
                                    <div class="row no-gutters">
                                        <div class="col-md-4" style={{"marginTop": "auto", marginBottom: "auto"}}>
                                            <i class="fas fa-cloud"></i>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title" style={{"fontSize": "25px"}}>DevOps</h5>
                                                <p class="card-text">Checkout job listings for DevOps here</p>
                                                <a  href="/devops">Click Here ></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="container widget-inner-container1">
                                <div class="card mb-3" style={{"max-width": "440px"}}>
                                    <div class="row no-gutters">
                                        <div class="col-md-4" style={{"marginTop": "auto", marginBottom: "auto"}}>
                                            <i class="fab fa-stack-overflow"></i>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body" style={{"marginTop": "auto", marginBottom: "auto"}}>
                                                <h5 class="card-title" style={{"fontSize": "25px"}}>Full Stack</h5>
                                                <p class="card-text">Checkout job listings for FullStack here</p>
                                                <p class="card-text"><a   href="/fullstack" target="_blank" rel="noopener noreferrer">Click Here ></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm widget-col1">
                            <div className="container widget-inner-container1">
                                <div class="card mb-3" style={{"max-width": "440px"}}>
                                    <div class="row no-gutters">
                                        <div class="col-md-4" style={{"marginTop": "auto", marginBottom: "auto"}}>
                                            <i class="fas fa-chart-pie"></i>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title" style={{"fontSize": "25px"}}>Data Science</h5>
                                                <p class="card-text">Checkout job listings for Data Science here</p>
                                                <a  href="/datascience">Click Here ></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container widget-inner-container1">
                                <div class="card mb-3" style={{"max-width": "440px"}}>
                                    <div class="row no-gutters">
                                        <div class="col-md-4" style={{"marginTop": "auto", marginBottom: "auto"}}>
                                            <i class="far fa-handshake"></i>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title" style={{"fontSize": "23px"}}>Human Resources</h5>
                                                <p class="card-text">Checkout job listings for Human Resources here</p>
                                                <a  href="/hr" target="_blank" rel="noopener noreferrer">Click Here ></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm widget-col">
                            <div className="container widget-inner-container1">
                                <div class="card mb-3" style={{"max-width": "440px"}}>
                                    <div class="row no-gutters">
                                        <div class="col-md-4" style={{"marginTop": "auto", marginBottom: "auto"}}>
                                            <i class="fas fa-hand-holding-usd"></i>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title" style={{"fontSize": "25px"}}>Finance</h5>
                                                <p class="card-text">Checkout job listings for Finance here</p>
                                                <a href="/finance" target="_blank" rel="noopener noreferrer">Click Here ></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container widget-inner-container1">
                                <div class="card mb-3" style={{"max-width": "440px"}}>
                                    <div class="row no-gutters">
                                        <div class="col-md-4" style={{"marginTop": "auto", marginBottom: "auto"}}>
                                            <i class="fas fa-mail-bulk"></i>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title" style={{"fontSize": "25px"}}>Marketing</h5>
                                                <p class="card-text">Checkout job listings for Marketing here</p>
                                                <a  href="/marketing" target="_blank" rel="noopener noreferrer">Click Here ></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        job_list: state.devops.job_list,
        tutorial_list: state.devops.tutorial_list,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getjobs: (type) => dispatch(actions.getjobs(type)),
        getTutorials: (type) => dispatch(actions.getTutorials(type)),
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (LandingPage));