import axios from "axios";
import swal from "sweetalert";

export function getjobs(type) {
    console.log("In get jobs", type)
    return function(dispatch){
        axios.get(`http://localhost:8000/api/getjobs?type=`+type, {type})
        .then(function (response) {
            console.log(response)
            if(response.status===200) {
                    dispatch({
                        type: "JOB_LIST_SUCCESS",
                        payload: response.data.joblist
                    })
            }
            else {
                dispatch({
                    type: "JOB_LIST_FAILURE",
                    payload: false
                })
            }
        })
        .catch(function (error) {
            console.log(error);
            dispatch({
                type: "JOB_LIST_FAILURE",
                payload: false
            })
        });
    }
}

export function submitJob(category, title, desc, url) {
    console.log("In submit job")
    return function(dispatch){
        axios.post(`http://localhost:8000/api/submitjob`, {category, title, desc, url})
        .then(function (response) {
            console.log(response)
            if(response.status===200) {
                    dispatch({
                        type: "JOB_POST_SUCCESS",
                        payload: "true"
                    })
            }
            else {
                dispatch({
                    type: "JOB_POST_FAILURE",
                    payload: false
                })
            }
        })
        .catch(function (error) {
            console.log(error);
            dispatch({
                type: "JOB_POST_FAILURE",
                payload: false
            })
        });
    }
}

export function getTutorials(type) {
    console.log("In get jobs", type)
    return function(dispatch){
        axios.get(`http://localhost:8000/api/getTutorials?type=`+type, {type})
        .then(function (response) {
            console.log(response)
            if(response.status===200) {
                    dispatch({
                        type: "TUTORIAL_LIST_SUCCESS",
                        payload: response.data.joblist
                    })
            }
            else {
                dispatch({
                    type: "TUTORIAL_LIST_FAILURE",
                    payload: false
                })
            }
        })
        .catch(function (error) {
            console.log(error);
            dispatch({
                type: "TUTORIAL_LIST_FAILURE",
                payload: false
            })
        });
    }
}

export function submitTutorial(category, title, url) {
    console.log("In submit job")
    return function(dispatch){
        axios.post(`http://localhost:8000/api/submittutorial`, {category, title, url})
        .then(function (response) {
            console.log(response)
            if(response.status===200) {
                    dispatch({
                        type: "TUTORIAL_POST_SUCCESS",
                        payload: "true"
                    })
            }
            else {
                dispatch({
                    type: "TUTORIAL_POST_FAILURE",
                    payload: false
                })
            }
        })
        .catch(function (error) {
            console.log(error);
            dispatch({
                type: "TUTORIAL_POST_FAILURE",
                payload: false
            })
        });
    }
}