import { post, GATEWAY } from '~/services/Service';
import { API_STUDENTS } from '~/services/endpoint';

export const CreateProject = (data) => {
    return post({ data: data, gw: GATEWAY.REACT_APP_API_URL })(`${API_STUDENTS.EDIT_STUDENTS}`);
};
