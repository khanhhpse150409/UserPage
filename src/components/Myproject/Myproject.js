import classNames from 'classnames/bind';
import styles from './Project.module.scss';
import { Avatar, List, Space, Spin, Button } from 'antd';
import { StarOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProjectDetail, postApplication } from './fetcher';

const data = Array.from({
    length: 23,
}).map((_, i) => ({
    href: 'https://ant.design',
    title: `Tên người đăng ${i}`,
    avatar: `https://joesch.moe/api/v1/random?key=${i}`,
    projectName:"Tên project",
    description: 'Tên bài Post(Project).',
    content:
        '(NỘI DUNG)  We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    url: 'Đẩy link Github tại đây.',
}));

const IconText = ({ icon, text }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);

const cx = classNames.bind(styles);

const Myproject = () => {
    // const { projectId } = useParams();
    // const [project, setDataProject] = useState(null);

    // const [loading, setLoading] = useState(true);
    // console.log(projectId);
    // const [applied, setApplied] = useState(false);
    // useEffect(() => {
    //     getProjectDetail(projectId)
    //         .then((payload) => {
    //             setDataProject(payload.project);
    //             setLoading(false);
    //         })
    //         .catch((err) => {
    //             console.log('err', err);
    //             setLoading(false);
    //         });
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
    // const handleApply = () => {
    //     postApplication(projectId)
    //         .then((payload) => {
    //             console.log(payload);
    //             setApplied(true);
    //         })
    //         .catch((err) =>{
    //             console.log('err', err);
    //         }) 
    //     // Gửi yêu cầu đến API để apply project
    //     // Nếu thành công, setApplied(true)
    //     // Nếu không thành công, hiển thị thông báo lỗi
    //   }
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
        //     dataSource={[data]} // wrap the project data inside an array
        //     renderItem={(item) => (
        //             <List.Item
        //                 key={item.project_id}
        //                 actions={[
        //                     <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
        //                     <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
        //                     <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        //                     // <Button type="primary" onClick={handleApply} disabled={applied}>
        //                     //         {applied ? 'Applied' : 'Apply'}
        //                     // </Button>
        //                 ]}
        //             >
        //                 <List.Item.Meta
        //                     avatar={<Avatar src={item.project_poster.avatar} />}
        //                     title={<a href={item.url}>{item.project_poster.student_name}</a>}
        //                     projectName={<a>{item.project_name}</a>}
        //                     description={item.description}
        //                 />            
        //             <div>
        //                 <p>{`Price: ${item.price}`}</p>
        //                 <p>{`Category: ${item.project_category.cate_name}`}</p>
        //                 <p>{`Major: ${item.project_major.major_name}`}</p>
        //                 <p>{`Url: ${item.url}`}</p>
        //             </div>
        //             <div className="item_img" style={{ paddingRight: '150px' }}>
        //                 <img src={item.image} alt="project" style={{ maxWidth: '100%', maxHeight: '300px' }} />
        //             </div>
                    
        //             </List.Item>
        //     )}
        // />
        <h1>Helll0ô</h1>
    );
};

export default Myproject;
