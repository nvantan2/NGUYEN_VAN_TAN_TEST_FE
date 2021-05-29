import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import HeaderFormAuth from '../../components/Auth/HeaderForm';
import Button from '../../components/Button';

const LogInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
  userName: Yup.string().required('User name is required'),
  country: Yup.string().required('Country is required!'),
});

const RegisterPage: React.FC = () => {
  const handleSubmit = () => {};
  return (
    <div>
      <HeaderFormAuth title="New here?" description="Signing up is easy. It only takes a few steps" />

      <Formik
        initialValues={{ email: '', password: '', userName: '', country: '' }}
        enableReinitialize
        validationSchema={LogInSchema}
        onSubmit={handleSubmit}>
        {({ errors, touched }) => (
          <Form className="">
            <div className="auth-form-group">
              <Field
                name="userName"
                id="register-user-name"
                className={errors.userName && touched.userName ? 'error' : null}
                placeholder="Username"
              />
              <ErrorMessage className="auth-form-group__message-error" name="userName" component="p" />
            </div>

            <div className="auth-form-group">
              <Field
                type="email"
                name="email"
                id="register-email"
                className={errors.email && touched.email ? 'error' : null}
                placeholder="Email"
              />
              <ErrorMessage className="auth-form-group__message-error" name="email" component="p" />
            </div>

            <div className="auth-form-group">
              <Field as="select" name="country" id="country">
                <option value="">Country</option>
                <option value="green">VietNam</option>
                <option value="blue">Japan</option>
              </Field>
              <ErrorMessage className="auth-form-group__message-error" name="country" component="p" />
            </div>

            <div className="auth-form-group">
              <Field
                type="password"
                name="password"
                id="register-password"
                className={errors.password && touched.password ? 'error' : null}
                placeholder="Password"
              />
              <ErrorMessage className="auth-form-group__message-error" name="password" component="p" />
            </div>

            <div className="auth-form__check">
              <label htmlFor="register-checkbox">
                <input type="checkbox" name="checkbox" id="register-checkbox" />
                <span>I agree to all Terms & Conditions</span>
              </label>
            </div>

            <div>
              <Button type="submit" className="auth-form__button auth-form__button--submit" isLoading={false}>
                <span>SIGN UP</span>
              </Button>
            </div>

            <p className="auth-form__switch-page">
              <span> Already have an account?</span>
              <Link to="/login">Login</Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterPage;
