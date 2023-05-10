import { FastField, Form, Formik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as Yup from 'yup';
import Button from '../../components/Button/Button';
import Checkbox from '../../components/Checkbox/Checkbox';
import { FormikTextInput } from '../../components/TextInput/TextInput';
import { authActions } from '../../services/controllers/auth/AuthActions';
import './LoginView.scss';
import { routes } from '../../common/utils/routes';
import api from '../../services/apiServices';
import { notify } from '../../common/utils/notify';

export interface LoginProps {
  name?: string;
}

export interface StateProps {
  old?: number;
}

export interface SignUpForm {
  username: string;
  email: string;
  password: string;
  confirmationPassword: string;
}

export type LoginType = LoginProps & StateProps;

export interface LoginForm {
  email: string;
  password: string;
}

const LoginView: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const [isRemember, setIsRemember] = useState(false);
  const loginSchema = (() => {
    switch (pathname) {
      case routes.LOGIN:
        return Yup.object().shape({
          email: Yup.string().required('Field is required').email('Invalid email address'),
          password: Yup.string().required('Field is required'),
        });
      case routes.SIGN_UP:
        return Yup.object().shape({
          email: Yup.string().required('Field is required').email('Invalid email address'),
          password: Yup.string().required('Field is required'),
          confirmPassword: Yup.string().oneOf([Yup.ref('password'), 'Password must match']),
        });
      default:
        return null;
    }
  })();

  const submitForm = async (values: any) => {
    if (pathname === routes.LOGIN) {
      try {
        await api.auth.login(values);
      } catch (error) {
        notify.error('Something error');
      }
    }

    if (pathname === routes.SIGN_UP) {
      try {
        await api.auth.signUp(values);
        notify.success('Register Successfully');
        history.push(routes.LOGIN);
      } catch (error) {
        notify.error('Something error');
      }
    }
  };
  return (
    <div className="login__wrapper">
      <div className="login__image">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" alt="" />
      </div>
      {pathname === routes.LOGIN && (
        <div className="login">
          <div className="login__title">Login into your account</div>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={submitForm}
            validationSchema={loginSchema}
            validateOnBlur
            validateOnChange
          >
            {() => (
              <Form className="login__form">
                <FastField wrapperClass="login__input" component={FormikTextInput} name="email" placeholder="Your Email Address" />
                <FastField wrapperClass="login__input" component={FormikTextInput} name="password" placeholder="Password" />
                <div className="login__option">
                  <Checkbox
                    value={isRemember}
                    onChange={() => {
                      setIsRemember(!isRemember);
                    }}
                    className="login__check-box"
                    name="rememberMe"
                    label="Remember me"
                  />
                  <Link className="login__forgot" to="/">
                    Forgot your password
                  </Link>
                </div>
                <Button type="submit" className="login__button" dataId="button">
                  Login
                </Button>
              </Form>
            )}
          </Formik>
          <div className="login__register">
            Don&apos;t have account{' '}
            <Link to="/sign-up">
              <span>Register</span>
            </Link>
          </div>
        </div>
      )}

      {pathname === routes.SIGN_UP && (
        <div className="login">
          <div className="login__title">Create your account</div>
          <Formik
            initialValues={{ email: '', password: '', name: '', confirmPassword: '' }}
            onSubmit={submitForm}
            validationSchema={loginSchema}
            validateOnBlur
            validateOnChange
          >
            {() => (
              <Form className="login__form">
                <FastField wrapperClass="login__input" component={FormikTextInput} name="name" placeholder="Your Name" />
                <FastField wrapperClass="login__input" component={FormikTextInput} name="email" placeholder="Your Email Address" />
                <FastField wrapperClass="login__input" component={FormikTextInput} name="password" placeholder="Password" />
                <FastField wrapperClass="login__input" component={FormikTextInput} name="confirmPassword" placeholder="Confirm Password" />
                <div className="login__option">
                  <Checkbox
                    value={isRemember}
                    onChange={() => {
                      setIsRemember(!isRemember);
                    }}
                    className="login__check-box"
                    name="rememberMe"
                    label="Accept Term and Conditions"
                  />
                </div>
                <Button type="submit" className="login__button" dataId="button">
                  Register
                </Button>
              </Form>
            )}
          </Formik>
          <div className="login__register">
            Already have account
            <Link to="/login">
              <span>Login</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginView;
