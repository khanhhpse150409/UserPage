import classNames from 'classnames/bind';
import styles from './Profile.module.scss';
import { Avatar, Tabs } from 'antd';
import React from 'react';
import EditStudent from './editStudent';
import {} from './fetcher';

const cx = classNames.bind(styles);

const onChange = (key) => {
    console.log(key);
};

const Profile = () => {
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
                    src="https://lh3.googleusercontent.com/ogw/AAEL6sg7rcYxEDnJJOcUuQNrjoiw6KCmBkfXr2MEIQnkgg=s64-c-mo"
                />
                <div className={cx('detailProfile')}>
                    <strong className={cx('userName')}>Nguyễn Thanh Viên</strong>
                    <p className={cx('userEmail')}>thanhviennguyen@gmail.com</p>
                    <EditStudent />
                </div>
            </div>
            <div>
                <Tabs
                    onChange={onChange}
                    type="card"
                    items={new Array(3).fill(null).map((_, i) => {
                        const id = String(i + 1);
                        return {
                            label: `Tab ${id}`,
                            key: id,
                            children: `Content of Tab Pane ${id}`,
                        };
                    })}
                />
            </div>
        </div>
    );
};

export default Profile;
