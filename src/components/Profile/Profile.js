import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { Avatar, Tabs, Space, Spin, List } from 'antd';
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import EditStudent from './editStudent';
import { useLocation } from 'react-router-dom';
import { getStudent } from './fetcher';

const cx = classNames.bind(styles);

const data = Array.from({
    length: 23,
}).map((_, i) => ({
    href: 'https://ant.design',
    title: `Tên người đăng ${i}`,
    avatar: `https://joesch.moe/api/v1/random?key=${i}`,
    description: 'Tên bài Post(Project).',
    content:
        '(NỘI DUNG)  We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));
const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const Profile = () => {
    const [dataStudent, setDataStudent] = useState(null);
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const idStudent = location.pathname.substring(2);
    useEffect(() => {
        getStudent(idStudent)
            .then((payload) => {
                setDataStudent(payload.student);
                setLoading(false);
            })
            .catch((err) => {
                console.log('err', err);
                setLoading(false);
            });
    }, [idStudent]);
    if (loading) {
        return (
            <Space direction="vertical" style={{ width: '100%', marginTop: '100px' }}>
                <Spin tip="Loading" size="large">
                    <div className="content" />
                </Spin>
            </Space>
        );
    }

    const checkInformation = idStudent === localStorage.getItem('student_id') ? true : false;
    const myProject = () => {
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
                dataSource={data}
                footer={
                    <div>
                        <b>ant design</b> footer part
                    </div>
                }
                renderItem={(item) => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                        ]}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        );
    };

    const projectAplly = () => {
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
                dataSource={data}
                footer={
                    <div>
                        <b>ant design</b> footer part
                    </div>
                }
                renderItem={(item) => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                            <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                            <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                        ]}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        );
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('profile')}>
            <Avatar
                    size={{
                        xs: 48,
                        sm: 64,
                        md: 80,
                        lg: 116,
                        xl: 116,
                        xxl: 116,
                    }}
                    className={cx('avatar')}
                    src={dataStudent.avatar}
                />
                <div className={cx('detailProfile')}>
                    <strong className={cx('userName')}>{dataStudent.student_name}</strong>
                    <p className={cx('userEmail')}>{dataStudent.email}</p>
                    <p className={cx('major')}>Major: {dataStudent.student_major.major_name}</p>
                    <EditStudent checkInformation={checkInformation} />
                </div>
            </div>
            <div>
                <Tabs type="card" defaultActiveKey="1">
                    <Tabs.TabPane tab="My project" key="1">
                        {myProject()}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="My project apply" key="2">
                        {projectAplly()}
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </div>
    );
};

export default Profile;
