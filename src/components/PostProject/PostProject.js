import { Button, Form, Input, Select, notification, Modal, Image } from 'antd';
import React, { useEffect, useState } from 'react';
import { CreateProject, ListMajors, ListCategory, uploadFile } from './fetcher';
import { UploadIcon } from '~/components/Icons';
import classNames from 'classnames/bind';
import styles from './PostProject.module.scss';

const MyFormItemContext = React.createContext([]);
function toArr(str) {
    return Array.isArray(str) ? str : [str];
}
const cx = classNames.bind(styles);

const MyFormItem = ({ name, ...props }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
    return (
        <Form.Item
            rules={[
                {
                    required: true,
                },
            ]}
            name={concatName}
            {...props}
        />
    );
};
const PostProject = () => {
    const [listMajor, setListMajor] = useState([]);
    const [listCategory, setListCategory] = useState([]);
    const [file, setFile] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [api, contextHolder] = notification.useNotification();
    const openNotification = (placement) => {
        api.info({
            message: `Notification ${placement}`,
            placement,
        });
    };

    const handleChange = (event) => {
        const formData = new FormData();
        formData.append('file', event.target.files[0]);
        uploadFile(formData)
            .then((payload) => {
                setFile(payload.url);
            })
            .catch((err) => {
                console.log('error', err);
            });
    };

    const onFinish = (value) => {
        const data = {
            student_id: localStorage.getItem('student_id'),
            project_name: value.project_name || '',
            description: value.description || '',
            price: value.price || '',
            cate_id: value.category || '',
            major_id: value.major || '',
            url: value.url || '',
            image: file || '',
        };
        CreateProject(data)
            .then((payload) => {
                if (payload.msg === 'Create new project successfully') {
                    openNotification('Create new project successfully');
                    setIsModalOpen(false);
                } else {
                    openNotification('Create new project failed');
                }
            })
            .catch((err) => {
                openNotification('Create new project failed');
                console.log('err', err);
            });
    };
    useEffect(() => {
        ListMajors()
            .then((majors) => {
                setListMajor(majors.majors.rows);
            })
            .catch((err) => {
                console.log(err);
            });
        ListCategory()
            .then((majors) => {
                setListCategory(majors.categories.rows);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            {contextHolder}
            <button onClick={showModal} className={cx('action-btn')}>
                <UploadIcon />
            </button>

            <Modal
                open={isModalOpen}
                onCancel={handleCancel}
                title="Create a project"
                footer={[
                    <Button
                        key="cancel"
                        onClick={() => {
                            setIsModalOpen(false);
                        }}
                    >
                        Cancel
                    </Button>,
                ]}
            >
                <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
                    <MyFormItem name="project_name" label="Project Name">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="price" label="Price">
                        <Input />
                    </MyFormItem>

                    <MyFormItem name="major" label="Major">
                        <Select>
                            {listMajor.map((major) => (
                                <Select.Option value={major.major_id}>{major.major_name}</Select.Option>
                            ))}
                        </Select>
                    </MyFormItem>
                    <MyFormItem name="category" label="Category">
                        <Select>
                            {listCategory.map((category) => (
                                <Select.Option value={category.cate_id}>{category.cate_name}</Select.Option>
                            ))}
                        </Select>
                    </MyFormItem>

                    <MyFormItem name="description" label="Description">
                        <Input.TextArea />
                    </MyFormItem>

                    <MyFormItem name="url" label="Profile">
                        <Input />
                    </MyFormItem>

                    <MyFormItem label="Image">
                        <input type="file" onChange={handleChange} />
                        {file ? <Image width={200} src={file} style={{ marginTop: 30 }} /> : null}
                    </MyFormItem>

                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form>
            </Modal>
        </>
    );
};
export default PostProject;
