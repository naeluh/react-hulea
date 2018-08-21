import fetch from 'isomorphic-fetch'

export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchDataBegin = () => ({
    type: FETCH_DATA_BEGIN
});

export const fetchDataSuccess = data => ({
    type: FETCH_DATA_SUCCESS,
    payload: { data }
});

export const fetchDataError = error => ({
    type: FETCH_DATA_FAILURE,
    payload: { error }
});

export function fetchData() {
    return dispatch => {
        dispatch(fetchDataBegin());
        // console.log('here')
        return fetch("https://herriott.io/data.json")
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                // console.log(json)
                dispatch(fetchDataSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchDataError(error)));
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}