import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Avatar, List, Space, Spin } from 'antd';
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import { getListProject } from './fetcher';

const cx = classNames.bind(styles);

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const Home = () => {
    const [listDataProject, setListDataProject] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getListProject()
            .then((payload) => {
                setListDataProject(payload?.projects.rows);
                setLoading(false);
            })
            .catch((err) => {
                console.log('err', err);
            });
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
                pageSize: 5,
            }}
            dataSource={listDataProject}
            renderItem={(item) => (
                <List.Item
                    key={item.project_id}
                    actions={[
                        <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                    ]}
                    extra={
                        <img
                            width={272}
                            alt="logo"
                            src={item.image || 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'}
                        />
                    }
                >
                    <List.Item.Meta
                        avatar={<Avatar src={item.project_poster.avatar} />}
                        title={<a href={`/@${item.project_poster.student_id}`}>{item.project_poster.student_name}</a>}
                        description={item.project_name}
                    />
                    {item.description}
                </List.Item>
            )}
        />
    );
};

export default Home;
