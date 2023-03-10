import React, { useEffect, useState } from 'react';
import { Avatar, List, Space, Spin } from 'antd';
import styles from './Application.module.scss';
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import { getApplicationProject } from './fetcher';
import classNames from 'classnames/bind';

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const cx = classNames.bind(styles);

const Application = () => {
    const [applicationsProject, setDatApplicationsProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const student_id = localStorage.getItem('student_id');
        if (student_id) {
            getApplicationProject(student_id)
                .then((payload) => {
                    setDatApplicationsProject(payload.applications.rows);
                    console.log(payload);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log('err', err);
                    setLoading(false);
                });
        }
    }, []);
    if (loading) {
        return (
            <Space direction="vertical" style={{ width: '100%', marginTop: '100px' }}>
                <Spin tip="Loading" size="large">
                    <div className="content" />
                </Spin>
            </Space>
        );
    }

    return (
        <List
            className={cx('wrapper')}
            itemLayout="vertical"
            size="large"
            pagination={{
                onChange: (page) => {
                    console.log(page);
                },
                pageSize: 5,
            }}
            dataSource={applicationsProject} // wrap the project data inside an array
            renderItem={(item) => (
                <List.Item
                    key={item.application_id}
                    actions={[
                        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                >
                    <List.Item.Meta
                        avatar={
                            <a href={item.application_project.url}>
                                <Avatar src={item.application_student.avatar} />
                            </a>
                        }
                        title={<a>{item.application_project.project_name}</a>}
                        projectName={<a>{item.project_name}</a>}
                        description={item.application_project.description}
                    />
                    <div>
                        <p>{`Price: ${item.price}`}</p>
                        {/* <p>{`Category: ${item.project_category.cate_name}`}</p> */}
                        {/* <p>{`Major: ${item.project_major.major_name}`}</p> */}
                        <p>{`Url: ${item.application_project.url}`}</p>
                    </div>
                    <div className="item_img" style={{ paddingRight: '150px' }}>
                        <img src={item.image} alt="project" style={{ maxWidth: '100%', maxHeight: '300px' }} />
                    </div>
                </List.Item>
            )}
        />
    );
};

export default Application;
