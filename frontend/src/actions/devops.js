import axios from "axios";
import swal from "sweetalert";

export function getjobs(type) {
    console.log("In get jobs")
    return function(dispatch){
        axios.get(`http://localhost:8000/api/getjobs`, {type})
        .then(function (response) {
            console.log(response)
            if(response.status===200) {
                    dispatch({
                        type: "JOB_LIST_SUCCESS",
                        payload: response.data.urllist
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