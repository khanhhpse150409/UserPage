import { get, GATEWAY } from '~/services/Service';
import { API_PROJECTS } from '~/services/endpoint';

export const getListProject = () => {
    return get({ gw: GATEWAY.REACT_APP_API_URL })(`${API_PROJECTS.LIST_PROJECTS}`);
};
