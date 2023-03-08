import classNames from 'classnames/bind';
import styles from './Project.module.scss';
import { Avatar, List, Space, Spin } from 'antd';
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProjectDetail } from './fetcher';

const data = Array.from({
    length: 23,
}).map((_, i) => ({
    href: 'https://ant.design',
    title: `Tên người đăng ${i}`,
    avatar: `https://joesch.moe/api/v1/random?key=${i}`,
    description: 'Tên bài Post(Project).',
    content:
        '(NỘI DUNG)  We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    url:'Đẩy link Github tại đây.'
}));

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const cx = classNames.bind(styles);

const ProjectDetail = () => {
    // const { projectId } = useParams();
    const [project, setDataProject] = useState(null);

    const [loading, setLoading] = useState(true);
    // console.log(projectId);

    // useEffect(() => {
    //   getProjectDetail(projectId)
    //     .then((payload) => {
    //       setDataProject(payload.project);
    //       setLoading(false);
    //     })
    //     .catch((err) => {
    //       console.log('err', err);
    //       setLoading(false);
    //     });
    // }, [projectId]);
    // if (loading) {
    //     return (
    //         <Space direction="vertical" style={{ width: '100%', marginTop: '100px' }}>
    //             <Spin tip="Loading" size="large">
    //                 <div className="content" />
    //             </Spin>
    //         </Space>
    //     );
    // }
    return (
        // <List
        //     className={cx('wrapper')}
        //     itemLayout="vertical"
        //     size="large"
        //     pagination={{
        //         onChange: (page) => {
        //             console.log(page);
        //         },
        //         pageSize: 1,
        //     }}
        //     dataSource={data}
        //     footer={
        //         <div>
        //             <b>ant design</b> footer part
        //         </div>
        //     }
        //     renderItem={(item) => (
        //         <>
        //             <List.Item
        //                 key={item.title}
        //                 actions={[
        //                     <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
        //                     <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
        //                     <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        //                 ]}
        //             >
        //                 <List.Item.Meta
        //                     avatar={<Avatar src={item.avatar} />}
        //                     title={<a href={item.href}>{item.title}</a>}
        //                     description={item.description}
        //                 />
        //                 {item.content}
        //                 <div className="item_img" style={{ paddingRight: '150px' }}>
        //                     <List.Item
        //                         extra={
        //                             <img
        //                                 alt="logo"
        //                                 src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        //                             />
        //                         }
        //                     />
        //                 </div>
        //             </List.Item>
        //         </>
        //     )}
        // />
        <h1>AAAA</h1>
    );
};

export default ProjectDetail;
