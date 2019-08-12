import React, {Component} from "react";
import {Helmet} from "react-helmet"
import NaviBar from "../NavigationBar/Navibar";
import "./tutorials.css"
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactPlayer from 'react-player'
import * as actions from "../../actions/devops"
require('dotenv').config()

class Homepage extends Component {
    
    constructor(props){
        super(props)
        this.state = {
        
        }

        
    }

    componentWillReceiveProps(newProps){
        
    }

    componentDidMount(){
        this.props.getjobs("devops");
        this.props.getTutorials("devops")
    }
    
    render(){
       
        return (
            <div>
                <NaviBar></NaviBar>
                <div className="container-fluid" style={{textAlign: "center"}}>
                    <h3>Tutorials</h3>
                </div>
                <div>
                    <Helmet>
                        <title>Tutorials</title>
                    </Helmet>
                </div>
                <div className="container tiles-container">
                    <div className="row video-row">
                    {
                        this.props.tutorial_list ? this.props.tutorial_list.map((tutorial, index) => {
                            return (
                                <div className="col-sm-4" >
                                    <div class="col-md-12">
                                        <ReactPlayer width={340} height={220} class="react_player" url={tutorial.url} playing />
                                        <div><h3>{tutorial.title}</h3></div>
                                    </div>
                                </div>
                            )
                        }) : ""
                    }
                        <div className="col-sm-4" >
                            <div class="col-md-12">
                                <ReactPlayer width={340} height={220} class="react_player" url='http://www.youtube.com/watch?v=Bv_5Zv5c-Ts' playing />
                                <div><h3>Kubernetes</h3></div>
                            </div>
                        </div>
                        <div className="col-sm-4" >
                            <div class="col-md-12">
                                <ReactPlayer width={340} height={220} class="react_player" url='http://www.youtube.com/watch?v=pGYAg7TMmp0'  />
                                <div><h3>Docker</h3></div>
                            </div>
                        </div>
                        <div className="col-sm-4" >
                            <div class="col-md-12">
                                <ReactPlayer width={340} height={220} class="react_player" url='http://www.youtube.com/watch?v=_I94-tJlovg&t=4s'  />
                                <div><h3>DevOps</h3></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4" >
                            <div class="col-md-12">
                                <ReactPlayer width={340} height={220} class="react_player" url='http://www.youtube.com/watch?v=7m3f-P-WWbg'  />
                                <div><h3>VMWare Workstation</h3></div>
                            </div>
                        </div>
                        <div className="col-sm-4" >
                            <div class="col-md-12">
                                <ReactPlayer width={340} height={220} class="react_player"  url='http://www.youtube.com/watch?v=GHvRuix3he8'  />
                                <div><h3>Kind</h3></div>
                            </div>
                        </div>
                        <div className="col-sm-4" >
                            <div class="col-md-12">
                                <ReactPlayer width={340} height={220} class="react_player" url='http://www.youtube.com/watch?v=YS4e4q9oBaU'  />
                                <div><h3>GoLang</h3></div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tutorial_list: state.devops.tutorial_list,
        job_list: state.devops.job_list,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTutorials: (type) => dispatch(actions.getTutorials(type)),
        getjobs: (type) => dispatch(actions.getjobs(type)),
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (Homepage));
