import React, { useEffect } from 'react';

import { FastField, Form, Formik } from 'formik';
import { get } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { notify } from '../../common/utils/notify';
import Card from '../../components/Card/Card';
import { FormikTextInput } from '../../components/TextInput/TextInput';
import api from '../../services/apiServices';
import { selectSuggestFriendsList } from '../../services/controllers/user/UserSelector';
import LeftBar from '../home/components/LeftBar/LeftBar';
import SuggestCard from './SuggestCard/SuggestCard';
import './SuggestFriendView.scss';
import { setSuggestFriendList } from '../../services/controllers/user/UserSlice';

const SuggestFriendView: React.FC = () => {
  const listSuggests = useSelector(selectSuggestFriendsList);
  const dispatch = useDispatch();

  const getSuggestFriends = async () => {
    try {
      const list = await api.user.getSuggestFriend();

      dispatch(setSuggestFriendList([...list]));
    } catch (error) {
      const message = get(error, 'response.data.message');
      notify.error(message);
    }
  };

  useEffect(() => {
    getSuggestFriends();
  }, []);

  return (
    <div>
      <LeftBar />
      <div className="suggest-friend">
        <Card className="suggest-friend__header">
          <div className="suggest-friend__title">People</div>
          <div className="suggest-friend__search">
            <Formik initialValues={{ searchValue: '' }} onSubmit={() => {}}>
              {() => (
                <Form>
                  <FastField component={FormikTextInput} name="searchValue" placeholder="Search here" />
                </Form>
              )}
            </Formik>
          </div>
        </Card>
        <div className="suggest-friend__list">
          {listSuggests.map((suggest: any, i: number) => {
            const key = suggest.firstName + i;
            return <SuggestCard key={key} data={suggest} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default SuggestFriendView;
