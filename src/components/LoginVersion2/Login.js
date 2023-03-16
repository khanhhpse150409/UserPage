import { useState } from 'react';
import { Alert, Checkbox } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { Login } from 'ant-design-pro';

const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;

const LoginVersion2 = () => {
    const [notice, setNotice] = useState('');
    const [type, setType] = useState('tab2');
    const [autoLogin, setAutoLogin] = useState(true);

    const onSubmit = (err, values) => {
        console.log('value collected ->', {
            ...values,
            autoLogin,
        });

        if (type === 'tab1') {
            setNotice('');

            if (!err && (values.username !== 'admin' || values.password !== '888888')) {
                setTimeout(() => {
                    setNotice('The combination of username and password is incorrect!');
                }, 500);
            }
        }
    };

    const onTabChange = (key) => {
        setType(key);
    };

    const changeAutoLogin = (e) => {
        setAutoLogin(e.target.checked);
    };

    return (
        <div className="login-warp">
            <Login defaultActiveKey={type} onTabChange={onTabChange} onSubmit={onSubmit} className="login-form">
                <Tab key="tab1" tab="Account">
                    {notice && <Alert style={{ marginBottom: 24 }} message={notice} type="error" showIcon closable />}
                    <UserName name="username" rules={[{ required: true, message: 'Username is required' }]} />
                    <Password name="password" rules={[{ required: true, message: 'Password is required' }]} />
                </Tab>
                <Tab key="tab2" tab="Mobile">
                    <Mobile name="mobile" />
                    <Captcha onGetCaptcha={() => console.log('Get captcha!')} name="captcha" />
                </Tab>
                <div>
                    <Checkbox checked={autoLogin} onChange={changeAutoLogin}>
                        Keep me logged in
                    </Checkbox>
                    <a style={{ float: 'right' }} href="">
                        Forgot password
                    </a>
                </div>
                <Submit>
                    <LoginOutlined />
                    Login
                </Submit>
                <div>
                    Other login methods
                    <span className="icon icon-alipay" />
                    <span className="icon icon-taobao" />
                    <span className="icon icon-weibo" />
                    <a style={{ float: 'right' }} href="">
                        Register
                    </a>
                </div>
            </Login>
        </div>
    );
};

export default LoginVersion2;
