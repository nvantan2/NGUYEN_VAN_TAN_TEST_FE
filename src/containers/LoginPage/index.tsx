import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import HeaderFormAuth from '../../components/Auth/HeaderForm';
import Button from '../../components/Button';
import { ReactComponent as LogoFb } from '../../assets/images/facebook-logo.svg';
import authApi, { IDataLogin } from '../../api/authAPi';

const LogInSchema = Yup.object().shape({
  username: Yup.string().required('User name is required'),
  password: Yup.string().required('Password is required'),
});

const LoginPage: React.FC = () => {
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<string>('');

  const handleSubmit = async (values: IDataLogin, actions: FormikHelpers<IDataLogin>) => {
    try {
      setLoading(true);
      const response = await authApi.login({ username: values.username, password: values.password });
      if (response.data) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        localStorage.setItem('access_token', response.data.token);
        actions.resetForm();
        history.push('/');
      }
      setLoading(false);
      setMessageError('Invalid username or password.');
    } catch (error) {
      console.log(error);
      setMessageError('Sorry, something went wrong. Please try again.');
      setLoading(false);
    }
  };

  const initialValues: IDataLogin = { username: '', password: '' };

  return (
    <div>
      <HeaderFormAuth title="Hello! let's get started" description="Sign in to continue" />

      {messageError && <p className="auth-form-group__message-error">{messageError}</p>}
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={LogInSchema}
        onSubmit={(values, actions) => handleSubmit(values, actions)}>
        {({ errors, touched }) => (
          <Form className="">
            <div className="auth-form-group">
              <Field
                name="username"
                id="login-email"
                className={errors.username && touched.username ? 'error' : null}
                placeholder="Username"
                onMouseDown={() => {
                  setMessageError('');
                }}
              />
              <ErrorMessage className="auth-form-group__message-error" name="username" component="p" />
            </div>

            <div className="auth-form-group">
              <Field
                type="password"
                name="password"
                id="login-password"
                className={errors.password && touched.password ? 'error' : null}
                placeholder="Password"
                onMouseDown={() => {
                  setMessageError('');
                }}
              />
              <ErrorMessage className="auth-form-group__message-error" name="password" component="p" />
            </div>

            <div>
              <Button type="submit" className="auth-form__button auth-form__button--submit" isLoading={loading}>
                <span>&nbsp;SIGN IN</span>
              </Button>
            </div>

            <div className="auth-form__check">
              <label htmlFor="login-checkbox">
                <input type="checkbox" name="checkbox" id="login-checkbox" />
                <span>Keep me signed in</span>
              </label>
              <Link to={window.location} className="login-forgot-password">
                Forgot password?
              </Link>
            </div>

            <div>
              <Button type="button" className="auth-form__button auth-form__button--social" title="Connect ">
                <LogoFb />
                <span>Connect using facebook</span>
              </Button>
            </div>

            <p className="auth-form__switch-page">
              <span> Don&apos;t have an account?</span>
              <Link to="/register">Create</Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
