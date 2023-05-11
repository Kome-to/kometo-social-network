import React from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { FastField, Form, Formik } from 'formik';
import Card from '../../components/Card/Card';
import Icon, { ICONS } from '../../components/Icon/Icon';
import { FormikTextInput } from '../../components/TextInput/TextInput';
import LeftBar from '../home/components/LeftBar/LeftBar';
import './ChangePasswordView.scss';
import Button from '../../components/Button/Button';
import { routes } from '../../common/utils/routes';

const ChangePasswordView: React.FC = () => {
  const history = useHistory();
  return (
    <div>
      <LeftBar />
      <div className="change-password">
        <Card className="change-password__card">
          <div className="change-password__header">
            <div
              onClick={() => {
                history.push(routes.USER_SETTING);
              }}
              className="change-password__header-icon"
            >
              <Icon name={ICONS.LEFT_ARROW} />
            </div>
            <div>Change Password</div>
          </div>
          <div>
            <Formik
              validationSchema={Yup.object().shape({
                currentPassword: Yup.string().required('Field is required'),
                newPassword: Yup.string().required('Field is required'),
                confirmPassword: Yup.string()
                  .required('Field is required')
                  .oneOf([Yup.ref('newPassword')], 'Password must match'),
              })}
              onSubmit={() => {}}
              initialValues={{ currentPassword: '', newPassword: '', confirmPassword: '' }}
            >
              {() => (
                <Form>
                  <FastField
                    wrapperClass="change-password__input"
                    name="currentPassword"
                    label="Current password"
                    component={FormikTextInput}
                  />
                  <FastField wrapperClass="change-password__input" name="newPassword" label="New password" component={FormikTextInput} />
                  <FastField
                    wrapperClass="change-password__input"
                    name="confirmPassword"
                    label="Confirm password"
                    component={FormikTextInput}
                  />
                  <div className="change-password__actions">
                    <Button type="submit" className="login__button" dataId="button">
                      Change
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ChangePasswordView;
