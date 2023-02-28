import {
    AlipayCircleOutlined,
    LockOutlined,
    TaobaoCircleOutlined,
    UserOutlined,
    WeiboCircleOutlined,
  } from "@ant-design/icons";
  import {
    LoginForm,
    ProFormCheckbox,
    ProFormText,
    ProConfigProvider,
  } from "@ant-design/pro-components";
  import { Button } from 'antd';
  
    import React, {useState, useEffect} from "react";
    import firebase from 'firebase/compat/app';
    import 'firebase/compat/auth';
    import 'firebase/compat/firestore';
    import {signInWithPopup} from "firebase/auth";
    import firebaseConfig from "./config.js";
    import { useNavigate } from "react-router-dom";


    const iconStyles = {
      marginInlineStart: '16px',
      color: 'rgba(0, 0, 0, 0.2)',
      fontSize: '24px',
      verticalAlign: 'middle',
      cursor: 'pointer',
    };


    const Login = () => {
    
      const [value, setValue] = useState('')
        const navigator = useNavigate();

    firebase.initializeApp(firebaseConfig);
      const signWithGoogle =  async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await firebase.auth().signInWithPopup(provider);
        navigator('/');
          }
      

      useEffect(() => {
        localStorage.clear();
      })
      
      return (
        <>
        <ProConfigProvider hashed={false}>
          <div style={{ backgroundColor: 'white' }}>
            <LoginForm
              submitText="Đăng nhập"
              logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
              title="Drashboard"
              subTitle="Chào mừng bạn đến với trang CWE"
            >
              <ProFormText
                name="username"
                fieldProps={{
                  size: "large",
                  prefix: <UserOutlined className={"prefixIcon"} />,
                }}
                placeholder={"Email"}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập email của bạn!",
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: "large",
                  prefix: <LockOutlined className={"prefixIcon"} />,
                }}
                placeholder={"Password"}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mật khẩu của bạn!",
                  },
                ]}
              />
              <div
                style={{
                  marginBlockEnd: 24,
                }}
              >
                <ProFormCheckbox noStyle name="autoLogin">
                  Nhớ mật khẩu
                </ProFormCheckbox>
  
                <Button onClick={signWithGoogle} style={{ float: "right" }}>
                  Signin With Google
                </Button>
                {/* <SubmitButton>Đăng nhập</SubmitButton> */}
              </div>
            </LoginForm>
          </div>
        </ProConfigProvider>
      </>
    );
  };
  
  export default Login;