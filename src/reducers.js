import { CHANGE_SEARCH_FIELD,
    REQUEST_JOBS_PENDING,
    REQUEST_JOBS_SUCCESS,
    REQUEST_JOBS_FAILED }from './constant'

const initalState = {
    searchInput: '',
}

export const searchJobs = (state= initalState, action= {}) => {
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state , {searchInput: action.payload});
        default:
            return state;
    }

}

export const windowWidth = () => {
    return window.innerWidth;
}


const initialStateJobs = {
    jobs: [],
    isPending: true
  }
  
export const requestJobs = (state=initialStateJobs, action={}) => {
    switch (action.type) {
      case REQUEST_JOBS_PENDING:
        return Object.assign({}, state, {isPending: true})
      case REQUEST_JOBS_SUCCESS:
        return Object.assign({}, state, {jobs: action.payload, isPending: false})
      case REQUEST_JOBS_FAILED:
        return Object.assign({}, state, {error: action.payload})
      default:
        return state
    }
  }
  