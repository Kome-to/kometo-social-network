import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';

import { FastField, Form, Formik } from 'formik';
import { get } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { notify } from '../../common/utils/notify';
import { routes } from '../../common/utils/routes';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Icon, { ICONS } from '../../components/Icon/Icon';
import TextArea from '../../components/TextArea/TextArea';
import { FormikTextInput } from '../../components/TextInput/TextInput';
import api from '../../services/apiServices';
import { userActions } from '../../services/controllers/user/UserActions';
import { selectCurrentUser } from '../../services/controllers/user/UserSelector';
import LeftBar from '../home/components/LeftBar/LeftBar';
import './AccountDetailView.scss';

const AccountDetailView: React.FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser) as any;
  const [description, setDescription] = useState<any>(undefined);

  const getUserDetail = () => {
    dispatch(userActions.getMe());
  };

  const onSubmit = async (values: any) => {
    try {
      await api.user.updateMe({ ...values, description });
      dispatch(userActions.getMe());
      notify.success('Update info successfully');
    } catch (e) {
      const message = get(e, 'response.data.response');
      notify.error(message);
    }
  };
  const uploadAvatar = async (e: any) => {
    try {
      if (e.target.files.length && e.target.files[0]) {
        await api.user.updateMe({ avatar: e.target.files[0] });
        notify.success('Update avatar successfully');
        dispatch(userActions.getMe());
      }
    } catch (e) {
      const message = get(e, 'response.data.response');
      notify.error(message);
    }
  };

  useEffect(() => {
    getUserDetail();
  }, []);

  return (
    <div>
      <LeftBar />
      <div className="account-detail">
        {currentUser && (
          <Card className="account-detail__card">
            <div className="account-detail__header">
              <div
                onClick={() => {
                  history.push(routes.USER_SETTING);
                }}
                className="account-detail__header-icon"
              >
                <Icon name={ICONS.LEFT_ARROW} />
              </div>
              <div>Account Detail</div>
            </div>
            <div className="account-detail__main">
              <div>
                <img
                  src={
                    currentUser.avatar ||
                    'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=CxHStRBF3icAX_AK18j&_nc_ht=scontent.fhan5-2.fna&oh=00_AfCSNOpp15ZgIbXNfz-Ffe-y1CBnA-lbRyCCzOCuxCU2fw&oe=6462B89A'
                  }
                  alt=""
                />
                <input onChange={uploadAvatar} type="file" accept="image/*" />
                <div />
              </div>
              <span>{`${currentUser.firstName} ${currentUser.lastName}`}</span>
            </div>
            <div className="account-detail__form">
              <Formik
                validationSchema={Yup.object().shape({
                  email: Yup.string().email('Invalid email'),
                  phone: Yup.string()
                    .min(10, 'Phone must be at least 10 numbers')
                    .max(13, 'Phone must be at most 13 numbers')
                    .matches(/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/i, 'Invalid phone number')
                    .nullable(),
                })}
                onSubmit={onSubmit}
                initialValues={{
                  firstName: currentUser.firstName || '',
                  lastName: currentUser.lastName || '',
                  email: currentUser.email || '',
                  phone: currentUser.phone || '',
                  country: currentUser.country || '',
                  address: currentUser.address || '',
                }}
              >
                {() => (
                  <Form>
                    <div>
                      <div className="account-detail__row-2">
                        <FastField wrapperClass="account-detail__input" name="firstName" label="First Name" component={FormikTextInput} />
                        <FastField wrapperClass="account-detail__input" name="lastName" label="Last Name" component={FormikTextInput} />
                      </div>
                      <div className="account-detail__row-2">
                        <FastField wrapperClass="account-detail__input" name="email" label="Email" component={FormikTextInput} />
                        <FastField wrapperClass="account-detail__input" name="phone" label="Phone" component={FormikTextInput} />
                      </div>
                      <FastField wrapperClass="account-detail__input" name="country" label="Country" component={FormikTextInput} />
                      <FastField wrapperClass="account-detail__input" name="address" label="Address" component={FormikTextInput} />
                      <TextArea
                        placeholder="Write your message"
                        wrapperClass="account-detail__input account-detail__input--text-area"
                        label="Description"
                        name="description"
                        value={currentUser.description || ''}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      />
                    </div>
                    <div className="account-detail__actions">
                      <Button type="submit" className="login__button" dataId="button">
                        Save
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default AccountDetailView;
