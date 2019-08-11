import React, {Component} from "react";
import Navibar from "../NavigationBar/Navibar"
import { Helmet } from 'react-helmet'
import "./landingPage.css"
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import front_image from '../../resources/images/women_group.png';
import Popover from 'react-tiny-popover'
require('dotenv').config()

class LandingPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            isPopoverOpen: false,
            isPopoverOpen1: false
        }
    }

    componentDidMount(){
        
    }
    

    render(){
        return(
            <div>
                <Navibar></Navibar>
                <div>
                    <Helmet>
                    <title>SJ Labs</title>
                    </Helmet>
                </div>
                <div className="container-fluid" id="landing-image-container">
                    
                    <img src={front_image} id="image-landing"></img>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        
        // isHidden: state.auth.isHidden,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (LandingPage));