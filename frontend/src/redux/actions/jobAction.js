import axios from 'axios';
import { LOAD_JOBS } from '../constants/jobConstant';


export const jobLoadAction = (pageNumber, keyword = '', cat = '', location = '') => async (dispatch) => {
    dispatch({ type: LOAD_JOBS });
    try {
        const { data } = await axios.get(`/api/job/show/?pageNumber=${pageNumber}&keyword=${keyword}&cat=${cat}&location=${location}`);

        
    }
    catch (error) {
    }
}