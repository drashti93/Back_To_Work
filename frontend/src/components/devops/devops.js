import React, {Component} from "react";
import Navibar from "../NavigationBar/Navibar"
import { Helmet } from 'react-helmet'
import "./devops.css"
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from "../../actions/devops"
import front_image from '../../resources/images/women_group.png';


require('dotenv').config()

console.log(`${process.env.REACT_APP_FRONTEND_URL}`)
class DevOps extends Component {
    constructor(props){
        super(props)
        this.state = {
            isPopoverOpen: false,
            isPopoverOpen1: false,
            joblist: [],
            tutorial_list: [],
            message: {
                to: '',
                body: '',
            },
            submitting: false,
            error: false
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
    };

    componentDidMount(){
        this.props.getjobs("devops");
        this.props.getTutorials("devops")
    }
    
    onSubmit(event) {
        event.preventDefault();
        this.setState({ submitting: true });
        fetch('http://localhost:8000/api/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.state.message)
        })
          .then(res => res.json())
          .then(data => {
            if (data.success) {
              this.setState({
                error: false,
                submitting: false,
                message: {
                  to: '',
                  body: ''
                }
              });
            } else {
              this.setState({
                error: true,
                submitting: false
              });
            }
          });
      }

      onHandleChange(event) {
        const name = event.target.getAttribute('name');
        this.setState({
          message: { ...this.state.message, [name]: event.target.value }
        });
      }

    render(){
        if(localStorage.getItem("candidate") || localStorage.getItem("recruiter")){
        return(
            <div>
                <Navibar></Navibar>
                <div>
                    <Helmet>
                    <title>Devops</title>
                    </Helmet>
                </div>
                <div className="container-fluid" id="landing-image-container">
                    <h1 className="text-block">DevOps Engineer<br></br><h5 style={{color: "white"}}>DevOps Engineers are a combination of developer (Dev) and system admin professionals (“Op”-erations) who bridge the gap between developers and the IT team.</h5></h1>
                    
                    <img src={front_image} id="image-landing"></img>
                </div>
                <div className="container-fluid widget-container">
                    <div className="row widget-row">
                        <div className="col-sm widget-col">
                            <div className="container widget-inner-container">
                                <div class="card mb-3" style={{"max-width": "440px"}}>
                                    <div class="row no-gutters">
                                        <div class="col-md-4" style={{"marginTop": "auto", marginBottom: "auto"}}>
                                            <i class="fas fa-briefcase"></i>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title" style={{"fontSize": "25px"}}>Job Listings</h5>
                                                <p class="card-text">Check out all our current job listings here</p>
                                                <a  data-container="body" data-toggle="modal" data-target=".bd-example-modal-lg" href="">Click Here ></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-lg" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Jobs</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Job Title</th>
                                                            <th scope="col">Description</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            this.props.job_list ? this.props.job_list.map((job, index) => {
                                                                return(
                                                                    <tr>
                                                                        <th scope="row">{index+1}</th>
                                                                        <td><a href={job.url}>{job.title}</a></td>
                                                                        <td>{job.description}</td>
                                                                    </tr>
                                                                )
                                                                
                                                            }) : ""
                                                        }
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td><a href="https://vmware.wd1.myworkdayjobs.com/en-US/VMware/job/BGR-Sofia/Senior-Infrastructure-Engineer---DevOps_R183380">Site Reliability Engineer</a></td>
                                                            <td>Engineer who is comfortable with coding and interested in building out tools and infrastructure</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td><a href="https://vmware.wd1.myworkdayjobs.com/en-US/VMware/job/IND-Karnataka-Bangalore/Senior-MTS--Developer-DevOps--Engineer_R1903808">Senior DevOps Engineer</a></td>
                                                            <td>Relentlessly look to improve the scalability and efficiency of our Continuous Delivery pipeline via automation</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td><a href="https://vmware.wd1.myworkdayjobs.com/en-US/VMware/job/JPN-Tokyo/Sr-DevOps-Engineer_R1812629">DevOps Lead</a></td>
                                                            <td>Senior-level DevOps Engineer to help in the design and build and deployment and production support of a complex Cloud-based infrastructure</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container widget-inner-container">
                                <div class="card mb-3" style={{"max-width": "440px"}}>
                                    <div class="row no-gutters">
                                        <div class="col-md-4" style={{"marginTop": "auto", marginBottom: "auto"}}>
                                            <i class="fas fa-chalkboard"></i>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body" style={{"marginTop": "auto", marginBottom: "auto"}}>
                                                <h5 class="card-title" style={{"fontSize": "25px"}}>Tutorials</h5>
                                                <p class="card-text">Videos to help you in your interview</p>
                                                <p class="card-text"><a   href="/tutorials" target="_blank" rel="noopener noreferrer">Click Here ></a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm widget-col">
                            <div className="container widget-inner-container">
                                <div class="card mb-3" style={{"max-width": "440px"}}>
                                    <div class="row no-gutters">
                                        <div class="col-md-4" style={{"marginTop": "auto", marginBottom: "auto"}}>
                                            <i class="far fa-star"></i>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title" style={{"fontSize": "25px"}}>Useful Links</h5>
                                                <p class="card-text">Links to Tutorial from multiple websites to help you</p>
                                                <a  data-container="body" data-toggle="modal" data-target=".bd-example-modal-lg1" href="">Click Here ></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade bd-example-modal-lg1" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-lg" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Jobs</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Page</th>
                                                            <th scope="col">Description</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td><a href="https://kubernetes.io/docs/tutorials/">Kubernetes</a></td>
                                                            <td>Kubernetes is an open source container orchestration engine for automating deployment, scaling, and management of containerized applications. The open source project is hosted by the Cloud Native Computing Foundation</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td><a href="https://docs.docker.com/get-started/">Docker</a></td>
                                                            <td>Only independent container platform that enables organizations to seamlessly build, share and run any application, anywhere—from hybrid cloud to the edge.</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td><a href="https://github.com/kubernetes-sigs/kind">Kind</a></td>
                                                            <td>kind is a tool for running local Kubernetes clusters using Docker container "nodes".</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div className="container widget-inner-container">
                                <div class="card mb-3" style={{"max-width": "440px"}}>
                                    <div class="row no-gutters">
                                        <div class="col-md-4" style={{"marginTop": "auto", marginBottom: "auto"}}>
                                            <i class="far fa-envelope"></i>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title" style={{"fontSize": "23px"}}>Message</h5>
                                                <p class="card-text">Send a message to your recruiter</p>
                                                <a  data-container="body" data-toggle="modal" data-target=".bd-example-modal-lg2" href="" >Click Here ></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade bd-example-modal-lg2" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                    <div className="modal-dialog modal-lg" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Jobs</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                            <form
                                                onSubmit={this.onSubmit}
                                                className={this.state.error ? 'error sms-form' : 'sms-form'}
                                            >
                                                <div>
                                                <label htmlFor="to">To:</label>
                                                <input
                                                    type="tel"
                                                    name="to"
                                                    id="to"
                                                    value={this.state.message.to}
                                                    onChange={this.onHandleChange}
                                                />
                                                </div>
                                                <div>
                                                <label htmlFor="body">Body:</label>
                                                <textarea
                                                    name="body"
                                                    id="body"
                                                    value={this.state.message.body}
                                                    onChange={this.onHandleChange}
                                                />
                                                </div>
                                                <button type="submit" disabled={this.state.submitting}>
                                                Send message
                                                </button>
                                            </form>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div className="col-sm widget-col">
                            <div className="container widget-inner-container">
                                <div class="card mb-3" style={{"max-width": "440px"}}>
                                    <div class="row no-gutters">
                                        <div class="col-md-4" style={{"marginTop": "auto", marginBottom: "auto"}}>
                                            <i class="fas fa-medkit"></i>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title" style={{"fontSize": "25px"}}>Employee Benefits</h5>
                                                <p class="card-text">The perks you enjoy being a part of our organisation</p>
                                                <a href="https://benefits.vmware.com/" target="_blank" rel="noopener noreferrer">Click Here ></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container widget-inner-container">
                                <div class="card mb-3" style={{"max-width": "440px"}}>
                                    <div class="row no-gutters">
                                        <div class="col-md-4" style={{"marginTop": "auto", marginBottom: "auto"}}>
                                            <i class="far fa-address-book"></i>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title" style={{"fontSize": "25px"}}>Org Information</h5>
                                                <p class="card-text">This gives you a breif description about our company</p>
                                                <a  href="https://www.vmware.com/company.html" target="_blank" rel="noopener noreferrer">Click Here ></a>
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
        else {
            return(
                <div>You do not have sufficient access</div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        job_list: state.devops.job_list,
        tutorial_list: state.devops.tutorial_list
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getjobs: (type) => dispatch(actions.getjobs(type)),
        getTutorials: (type) => dispatch(actions.getTutorials(type))
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (DevOps));