import { get, GATEWAY } from '~/services/Service';
import { API_MY_PROJECTS, API_APPLICATION } from '~/services/endpoint';

export const getMyProject = (poster_id) => {
    return get({ gw: GATEWAY.REACT_APP_API_URL })(`${API_MY_PROJECTS.GET_MY_PROJECTS}?poster_id=${poster_id}`);
};
export const getStudentsApply = (project_id) => {
    return get({ gw: GATEWAY.REACT_APP_API_URL })(
        `${API_APPLICATION.STUDENT_APPLICATION_MY_PROJECT}?project_id=${project_id}`,
    );
};
