import { LOAD_JOBS, LOAD_JOBS_FAIL, LOAD_JOBS_RESET, LOAD_JOBS_SUCCESS } from "../constants/jobConstant"




export const loadJobReducer = (state = { jobs: [] }, action) => {
    switch (action.type) {
        case LOAD_JOBS:
            return { loading: true }
        case LOAD_JOBS_SUCCESS:
            return {
                loading: true,
                success: action.payload.success,
                page: action.payload.page,
                pages: action.payload.pages,
                count: action.payload.count,
                setUniqueLocations: action.payload.setUniqueLocations,
                jobs: action.payload.jobs
            }
        case LOAD_JOBS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
        case LOAD_JOBS_RESET:
            return {}

        default:
            return state;
    }
}

