import { get, GATEWAY } from '~/services/Service';
import { API_MYPROJECTS } from '~/services/endpoint';

export const getMyProject = (poster_id) => {
    return get({ gw: GATEWAY.REACT_APP_API_URL })(`${API_MYPROJECTS.GET_MYPROJECTS}?poster_id=${poster_id}`);
};