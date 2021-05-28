import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import HeaderFormAuth from '../../components/Auth/HeaderForm';
import Button from '../../components/Button';
import { ReactComponent as LogoFb } from '../../assets/images/facebook-logo.svg';

const LogInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginPage: React.FC = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <HeaderFormAuth title="Hello! let's get started" description="Sign in to continue" />

      <Formik
        initialValues={{ email: '', password: '' }}
        enableReinitialize
        validationSchema={LogInSchema}
        onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <Form className="">
            <div className="auth-form-group">
              <Field
                type="email"
                name="email"
                id="login-email"
                className={errors.email && touched.email ? 'error' : null}
                placeholder="Email"
              />
              <ErrorMessage className="auth-form-group__message-error" name="email" component="p" />
            </div>

            <div className="auth-form-group">
              <Field
                type="password"
                name="password"
                id="login-password"
                className={errors.password && touched.password ? 'error' : null}
                placeholder="Password"
              />
              <ErrorMessage className="auth-form-group__message-error" name="password" component="p" />
            </div>

            <div>
              <Button type="submit" className="auth-form__button auth-form__button--submit" isLoading={false}>
                <span>SIGN IN</span>
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
