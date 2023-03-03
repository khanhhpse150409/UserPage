import { get, put, postUploadFile, GATEWAY } from '~/services/Service';
import { API_PROJECTS, API_STUDENTS, API_FIREBASE } from '~/services/endpoint';

export const getListProject = () => {
    return get({ gw: GATEWAY.REACT_APP_API_URL })(`${API_PROJECTS.LIST_PROJECTS}`);
};

export const getStudent = (id) => {
    return get({ gw: GATEWAY.REACT_APP_API_URL })(`${API_STUDENTS.GET_STUDENTS}/${id}`);
};

export const editStudent = (data) => {
    return put({ data: data, gw: GATEWAY.REACT_APP_API_URL })(`${API_STUDENTS.EDIT_STUDENTS}`);
};

export const uploadFile = (formData) => {
    const url = `${API_FIREBASE.UPLOAD_FILE}`;
    const gw = GATEWAY.REACT_APP_API_URL;
    return postUploadFile({ data: formData, gw, url });
};
