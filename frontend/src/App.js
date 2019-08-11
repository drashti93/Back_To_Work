import React, {Component} from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import LandingPage from "./components/landingPage/landingPage"
import * as actions from "../src/actions/auth"
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
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        
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