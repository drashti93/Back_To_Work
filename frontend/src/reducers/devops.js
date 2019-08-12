import initial from './initialState';

const reducer = (state = initial, action) => {
    switch (action.type) {

        case "JOB_LIST_SUCCESS" : {
			console.log("userID Payload " + action.payload)
            console.log("reducer fired")
			return {...state, job_list: action.payload};
        }

        case "URL_LIST_FAILURE" : {
            return {...state, job_list: []}
        }

        case "TUTORIAL_LIST_SUCCESS": {
            return {...state, job_list: action.payload};
        }

        case "TUTORIAL_LIST_FAILURE": {
            return {...state, tutorial_list: []}
        }

        default :
            return state;
    }
}

export default reducer;