import React from 'react';
import { Link } from 'react-router-dom';
import Validate from '../validateInput';
import useForm from '../useForm/useForm';
import styles from '../ForgotPassword/ForgotPassword.module.css';
import images from '~/assets/images';

function ResetPassword() {
    const { values, errors, handleChange, handleSubmit } = useForm(handleSubmits);
    function handleSubmits() {}

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
                            <h1>Change password</h1>
                            <form className={styles.loginEmail} onSubmit={handleSubmit} noValidate>
                                <div className={styles.input}>
                                    <div className={styles.inputEmail}>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Fill your new password"
                                            onChange={handleChange}
                                            value={values.password || ''}
                                            required
                                        />
                                        <Validate errors={errors.password} />
                                    </div>
                                </div>
                                <div className={styles.input}>
                                    <div className={styles.inputEmail}>
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            placeholder="Fill your new password"
                                            onChange={handleChange}
                                            value={values.confirmPassword || ''}
                                            required
                                        />
                                        <Validate errors={errors.confirmPassword} />
                                    </div>
                                </div>
                                {/* {loading ? (
                                    <button disabled style={{ opacity: '.4' }}>
                                        <span>Save password </span>
                                        <Load isSmall={true} />
                                    </button>
                                ) : (
                              )} */}
                                <button>
                                    <span>Save password</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
