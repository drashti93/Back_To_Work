import axios from "axios";
import swal from 'sweetalert';
require("dotenv").config()
const headers = {
    'Accept': 'application/json'
};

export function addAdmin(firstname,lastname,username,password, user, email) {
    return function(dispatch){
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/addAdmin`, {
              
            firstname,lastname,username,password, user, email
            
        })
        .then(function (response) {
            console.log(response)
            if(response.status===200 && response.data.message === "right") {
                swal("Great", "Successfully added user", "success")
                .then(() => {
                    dispatch({
                        type: "ADD_USER",
                        payload: response.data.message
                    })
                    window.location.reload()
                })
            }
            else {
                console.log(response.data.message)
                dispatch({
                    type: "ADD_USER",
                    payload: response.data.message
                })
            }
        })
        .catch(function (error) {
            console.log(error);
            dispatch({
                type: "ADD_USER",
                payload: "wronger"
            })
        });
    }
}

export function login(username,password) {
    return function(dispatch){
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/login`, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({username,password})
        })
        .then(function (response) {
            console.log("response : -----" )
            console.log(response)
            response.json().then(res => {
                console.log(res)
                if(response.status===200) {
                localStorage.setItem('myjwttoken', res.values.token);
                    dispatch({
                        type: "LOGIN_STATUS",
                        payload: res.username
                    })
                    window.location.reload()
                }
                else{
                    dispatch({
                        type: "LOGIN_FAILED",
                        payload: res.message
                    })
                }
            })
        })
        .catch(error => {
        console.log(error);
            dispatch({
                type: "LOGIN_FAILED",
                payload: false
            })
        })
    }
}

export function checkSession(){
    console.log("In check session actions")
    return function(dispatch){
        fetch(`${process.env.REACT_APP_BACKEND_URL}/api/checkSession`, {
            method: 'POST',
            headers: {
              ...headers,
              'Content-Type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify({})
        })
        .then(function (response) {
            console.log("Session : -----" )
            console.log(response)
            response.json().then(res => {
            console.log("Checking received response");
            console.log(res)
            if(response.status===200) {
                dispatch({
                    type: "SESSION_SUCCESS",
                    payload: res
                })
            } 
            else
            {
                dispatch({
                    type: "SESSION_FAILED",
                    payload: false
                })
            }
            })
        })
        .catch(error => {
        console.log(error);
            dispatch({
                type: "SESSION_FAILED",
                payload: false
            })
        })
    }
}

export function logout(){
    console.log("Action logout ")
    return function(dispatch){
    fetch(`${process.env.REACT_APP_BACKEND_URL}/api/logout`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        credentials:'include',
        body: JSON.stringify({})
    }).then(function (response) {
            console.log("Logout received" )
            console.log(response)
            response.json().then(res => {
            console.log(res)
            if(response.status===200) {
                dispatch({
                type: "LOGOUT_STATUS",
                payload: true
                })
            }else{
                dispatch({
                type: "LOGOUT_STATUS",
                payload: false
                })
            }
        })
    })
    .catch(error => {
    console.log(error);
        dispatch({
        type: "LOGOUT_STATUS",
        payload: false
        })
    })
}
}