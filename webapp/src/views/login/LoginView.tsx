import React from 'react';
import { useDispatch } from 'react-redux';
import { FastField, Form, Formik, FormikProps } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';
import Card from '../../components/Card/Card';
import Logo, { LogoType } from '../../components/Logo/Logo';
import { authActions } from '../../services/controllers/auth/AuthActions';
import './LoginView.scss';
import { FormikTextInput } from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';

export interface LoginProps {
  name?: string;
}

export interface StateProps {
  old?: number;
}

export type LoginType = LoginProps & StateProps;

export interface LoginForm {
  email: string;
  password: string;
}

const LoginView: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const loginSchema = Yup.object().shape({
    email: Yup.string().required('Field is required').email('Invalid email address'),
    password: Yup.string().required('Field is required'),
  });

  const submitForm = (values: LoginForm) => {
    const { email, password } = values;
    dispatch(authActions.login({ email, password }));
  };

  return (
    <div className="login">
      <Card className="login__card">
        <div className="login__container">
          <div className="login__logo">
            <Logo type={LogoType.LogoMark} />
          </div>
          <p className="login__title">
            Sign into <span>Baby</span>Book
          </p>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={submitForm}
            validationSchema={loginSchema}
            validateOnBlur
            validateOnChange
          >
            {() => (
              <Form>
                <FastField
                  component={FormikTextInput}
                  name="email"
                  dataId="sign-up.field.email"
                  label={`${t('common.text.email')} *`}
                  placeholder={t('common.text.email')}
                />
                <FastField
                  component={FormikTextInput}
                  name="password"
                  dataId="sign-up.field.password"
                  label={`${t('common.text.password')} *`}
                  placeholder={t('common.text.password')}
                />
                <Button type="submit" className="login__button" dataId="button">
                  Login
                </Button>
              </Form>
            )}
          </Formik>
          <Link className="login__link" to="/request-reset-password">
            Forgot your password?
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default LoginView;
