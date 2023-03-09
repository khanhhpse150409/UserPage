import { get, GATEWAY } from '~/services/Service';
import { API_APPLICATION } from '~/services/endpoint';

export const getApplicationProject = (student_id) => {
    return get({ gw: GATEWAY.REACT_APP_API_URL })(`${API_APPLICATION.GET_APPLICATION}?student_id=${student_id}`);
};

// export const postApplyToProject = (id) => {
//     const body = { project_id: id };
//     return post({ data: body, gw: GATEWAY.REACT_APP_API_URL })(`${API_APPLICATION.POST_APPLICATION}`);
// };