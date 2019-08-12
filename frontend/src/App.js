import React, {Component} from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Devops from "./components/devops/devops"
import LandingPage from "./components/landingPage/landingPage"
import Tutorials from "./components/Tutorials/tutorials"
// import * as actions from "../src/actions/auth"
import {connect} from 'react-redux';

class App extends Component {

  constructor(props){
		super(props) ;

		this.state = {
            isLogged: '',
            isHidden: '',
            username: '',
		}
	}

  componentDidMount(){
      // this.props.checkSession();
  }
  
render(){
  var access = false;
  if(localStorage.getItem("candidate") || localStorage.getItem("recruiter")) {
    access = true;
  }
  console.log("access", access)
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/tutorials" component={Tutorials}></Route>
        <Route exact path="/devops" component={Devops}></Route>
      </Switch>
    </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
      // isLogged:state.auth.isLogged,
      // isHidden: state.auth.isHidden,
      // username:state.auth.username
  };
}

function mapDispatchToProps(dispatch) {
  return {
      // checkSession: () => dispatch(actions.checkSession())
  };
}

export default connect(mapStateToProps , mapDispatchToProps )(props => <App {...props}/>);