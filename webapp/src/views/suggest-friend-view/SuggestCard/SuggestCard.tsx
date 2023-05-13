import { get } from 'lodash';
import React from 'react';

import { useDispatch } from 'react-redux';
import { notify } from '../../../common/utils/notify';
import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';
import api from '../../../services/apiServices';
import { setSuggestFriendList } from '../../../services/controllers/user/UserSlice';
import './SuggestCard.scss';

const SuggestCard: React.FC<{ data: any }> = ({ data }) => {
  const dispatch = useDispatch();

  const requestFriend = async (id: string, action: string) => {
    try {
      await api.user.requestFriend({ id, action });
      const list = await api.user.getSuggestFriend();
      dispatch(setSuggestFriendList([...list]));
    } catch (e) {
      const message = get(e, 'response.data.message');
      notify.error(message);
    }
  };
  return (
    <Card className="suggest-card">
      <div className="suggest-card__avatar">
        <img src={data.avatar} alt="" />
      </div>
      <div className="suggest-card__name">{`${data.firstName} ${data.lastName}`}</div>
      <div className="suggest-card__actions">
        {data.status === 3 && (
          <Button
            onClick={async () => {
              requestFriend(data.id, 'accept');
            }}
            className="suggest-card__add suggest-card__add--accept"
          >
            Accept
          </Button>
        )}
        {data.status !== 0 && (
          <Button
            onClick={() => {
              requestFriend(data.id, 'cancel');
            }}
            className="suggest-card__add  suggest-card__add--pending"
          >
            Cancel
          </Button>
        )}
        {data.status === 0 && (
          <Button
            onClick={async () => {
              requestFriend(data.id, 'request');
            }}
            className="suggest-card__add"
          >
            ADD FRIEND
          </Button>
        )}
      </div>
    </Card>
  );
};

export default SuggestCard;
