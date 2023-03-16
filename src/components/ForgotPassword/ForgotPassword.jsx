import React from 'react';
import { Link } from 'react-router-dom';
import Validate from '../validateInput';
import useForm from '../useForm/useForm';
import styles from './ForgotPassword.module.css';
import images from '~/assets/images';

function ForgotPassword() {
    const { values, errors, handleChange, handleSubmit } = useForm();

    return (
        <div>
            <div>
                <div className={styles.container}>
                    <img
                        src={images.login1}
                        alt="custom/travelers-1"
                        className={styles.travelers}
                        style={{ right: 'calc(50% + 350px)' }}
                    />
                    <img
                        src={images.login2}
                        alt="custom/travelers-2"
                        className={styles.travelers}
                        style={{ left: 'calc(50% + 350px)' }}
                    />
                    <div className={styles.logo}>
                        <Link to="/">
                            <img alt="logo" src={images.loginCenter} />
                        </Link>
                    </div>
                    <div />
                    <div className={styles.login}>
                        <div className={styles.formLogin}>
                            <h1>Forgotten password</h1>
                            <span style={{ padding: ' 20px 0' }}>
                                Please enter your registration email and we will send you a link to reset your password
                                right away.
                            </span>
                            <form className={styles.loginEmail} onSubmit={handleSubmit} noValidate>
                                <div className={styles.input}>
                                    <div className={styles.inputEmail}>
                                        <input
                                            type="email"
                                            name="forgotPassword"
                                            placeholder="Fill your email address"
                                            onChange={handleChange}
                                            value={values.forgotPassword || ''}
                                            required
                                        />
                                        <Validate errors={errors.forgotPassword} />
                                    </div>
                                </div>

                                <button>
                                    <span>Reset password</span>
                                </button>
                            </form>
                        </div>
                        <div className={styles.register}>
                            <Link to="/login">
                                <span>Back to Login</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
