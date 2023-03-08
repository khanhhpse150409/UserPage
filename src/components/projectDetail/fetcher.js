import { get, GATEWAY } from '~/services/Service';
import { API_PROJECTS } from '~/services/endpoint';

export const getProjectDetail = (id) => {
    return get({ gw: GATEWAY.REACT_APP_API_URL })(`${API_PROJECTS.GET_PROJECTS}/${id}`);
};