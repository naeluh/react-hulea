import fetch from 'isomorphic-fetch'

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_DATA = 'SELECT_DATA'
export const INVALIDATE_DATA = 'INVALIDATE_DATA'

export function selectData(data) {
    return {
        type: SELECT_DATA,
        data
    }
}

export function invalidateData(data) {
    return {
        type: INVALIDATE_DATA,
        data
    }
}

function requestPosts(data) {
    return {
        type: REQUEST_POSTS,
        data
    }
}

function receivePosts(data, json) {
    return {
        type: RECEIVE_POSTS,
        data,
        posts: json.data.children.map(child => child.data),
        receivedAt: Date.now()
    }
}

function fetchPosts(data) {
    return dispatch => {
        dispatch(requestPosts(data))
        return fetch(`${data}`)
            .then(response => response.json())
            .then(json => dispatch(receivePosts(data, json)))
    }
}

function shouldFetchPosts(state, data) {
    const posts = state.postsBydata[data]
    if (!posts) {
        return true
    } else if (posts.isFetching) {
        return false
    } else {
        return posts.didInvalidate
    }
}

export function fetchPostsIfNeeded(data) {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), data)) {
            return dispatch(fetchPosts(data))
        }
    }
}