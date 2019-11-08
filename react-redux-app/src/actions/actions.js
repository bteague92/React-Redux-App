import axios from "axios";
export const LAUNCH_LOADING = "LAUNCH_LOADING";
export const LAUNCH_SUCCESS = "LAUNCH_SUCCESS";
export const LAUNCH_FAILED = "LAUNCH_FAILED";


export const launchLoading = () => ({ type: LAUNCH_LOADING });

export const launchSuccess = data => ({
    type: LAUNCH_SUCCESS,
    payload: data
});

export const launchFailure = error => ({
    type: LAUNCH_FAILED,
    payload: error
});

export function getLaunches() {

    return function (dispatch) {

        dispatch(launchLoading());

        return axios.get(`https://api.spacexdata.com/v3/launches`)
            .then(response => {
                console.log(response);
                dispatch(launchSuccess(response.data))
            })
            .catch(error => {
                console.log("the data was not return", error);
            });
    }
}