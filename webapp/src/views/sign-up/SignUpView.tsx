import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { FastField, Form, Formik, FormikProps } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import Card from '../../components/Card/Card';
import Logo, { LogoType } from '../../components/Logo/Logo';
import { authActions } from '../../services/controllers/auth/AuthActions';
import './SignUpView.scss';
import { selectIsSignUpSuccess } from '../../services/controllers/auth/AuthSelector';
import TextInput, { FormikTextInput } from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';

export interface SignUpForm {
  username: string;
  email: string;
  password: string;
  confirmationPassword: string;
}
const SignUpView: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const isSignUpSuccess = useSelector(selectIsSignUpSuccess);

  const signUpSchema = Yup.object().shape({
    username: Yup.string().required('Field is required'),
    email: Yup.string().required('Field is required').email('Invalid email address'),
    password: Yup.string().required('Field is required').min(6, 'Length of password should be at least 6 symbols'),
    confirmationPassword: Yup.string()
      .required('Field is required')
      .ensure()
      .oneOf([Yup.ref('password')], 'Password does not match')
      .min(6, 'Length of password should be at least 6 symbols'),
  });

  const submitForm = (values: SignUpForm) => {
    dispatch(authActions.signUp(values));
  };

  return (
    <div className="sign-up">
      <Card className="sign-up__card">
        <div className="sign-up__container">
          <div className="sign-up__logo">
            <Logo type={LogoType.LogoMark} />
          </div>
          <p className="sign-up__title">Sign Up Your Account</p>
          {!isSignUpSuccess && (
            <Formik
              initialValues={{ username: '', email: '', password: '', confirmationPassword: '' }}
              onSubmit={submitForm}
              validationSchema={signUpSchema}
              validateOnBlur
              validateOnChange
            >
              {() => (
                <Form>
                  <FastField
                    component={FormikTextInput}
                    name="username"
                    dataId="sign-up.field.username"
                    label={`${t('common.text.username')} *`}
                    placeholder={t('common.text.username')}
                  />
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
                  <FastField
                    component={FormikTextInput}
                    name="confirmationPassword"
                    dataId="sign-up.field.confirmationPassword"
                    label={`${t('common.text.confirmationPassword')} *`}
                    placeholder={t('common.text.confirmationPassword')}
                  />
                  <Button type="submit" className="sign-up__button" dataId="button">
                    signUp
                  </Button>
                </Form>
              )}
            </Formik>
          )}
          {isSignUpSuccess && (
            <div className="sign-up__status">
              <FontAwesomeIcon icon={faCheck} size="2x" color="#65a339" />
              <p className="sign-up__status-message">Sign up success, please check your email</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default SignUpView;
