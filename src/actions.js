import {CHANGE_SEARCH_FIELD} from './constant'

export const setSearchField = (searchInput)=> ({
    type: CHANGE_SEARCH_FIELD,
    payload: searchInput
})
export const requestJobs = () => (dispatch) => {
    // dispatch({ type: REQUEST_ROBOTS_PENDING })
    // apiCall('https://jsonplaceholder.typicode.com/users')
    //   .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data }))
    //   .catch(error => dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error }))
  }