import { combineReducers } from 'redux'
import {
    SELECT_DATA,
    INVALIDATE_DATA,
    REQUEST_POSTS,
    RECEIVE_POSTS
} from '../actions/actions'

function selecteddata(state = 'reactjs', action) {
    switch (action.type) {
        case SELECT_DATA:
            return action.data
        default:
            return state
    }
}

function posts(
    state = {
        isFetching: false,
        didInvalidate: false,
        items: []
    },
    action
) {
    switch (action.type) {
        case INVALIDATE_DATA:
            return Object.assign({}, state, {
                didInvalidate: true
            })
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_POSTS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            })
        default:
            return state
    }
}

function postsBydata(state = {}, action) {
    switch (action.type) {
        case INVALIDATE_DATA:
        case RECEIVE_POSTS:
        case REQUEST_POSTS:
            return Object.assign({}, state, {
                [action.data]: posts(state[action.data], action)
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    postsBydata,
    selecteddata
})

export default rootReducer