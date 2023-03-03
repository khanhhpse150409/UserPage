import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon } from '~/components/Icons';
import { SnippetsOutlined } from '@ant-design/icons';
import config from '~/config';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                {localStorage.getItem('access_token') ? (
                    <>
                        <MenuItem
                            title="Apply"
                            to={config.routes.following}
                            icon={<UserGroupIcon />}
                            activeIcon={<UserGroupActiveIcon />}
                        />
                        <MenuItem
                            title="My Projects"
                            to={config.routes.live}
                            icon={<SnippetsOutlined />}
                            activeIcon={<SnippetsOutlined style={{ color: 'red' }} />}
                        />
                    </>
                ) : (
                    <div></div>
                )}
            </Menu>
            {/* 
            <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" /> */}
        </aside>
    );
}

export default Sidebar;
