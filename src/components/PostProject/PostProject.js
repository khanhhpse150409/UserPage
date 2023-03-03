import { Button, Form, Input } from 'antd';
import React from 'react';
import { CreateProject } from './fetcher';

const MyFormItemContext = React.createContext([]);
function toArr(str) {
    return Array.isArray(str) ? str : [str];
}

const MyFormItem = ({ name, ...props }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
    return <Form.Item name={concatName} {...props} />;
};
const PostProject = () => {
    const onFinish = (value) => {
        console.log(value);
        const data = {
            student_id: localStorage.getItem('student_id'),
            project_name: value.project_name || '',
            description: value.description || '',
            url: value.url || '',
        };
        console.log(data);
        CreateProject(value)
            .then((payload) => {
                console.log('payload', payload);
            })
            .catch((err) => {
                console.log('err', err);
            });
    };
    return (
        <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
            <MyFormItem name="project_name" label="Project Name">
                <Input />
            </MyFormItem>
            <MyFormItem name="description" label="Description">
                <Input.TextArea />
            </MyFormItem>

            <MyFormItem name="url" label="Image">
                <Input />
            </MyFormItem>

            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form>
    );
};
export default PostProject;
