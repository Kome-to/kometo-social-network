import React, { useEffect } from 'react';

import classNames from 'classnames';
import { get } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { notify } from '../../../../common/utils/notify';
import Card from '../../../../components/Card/Card';
import api from '../../../../services/apiServices';
import { selectCurrentChat, selectFriends } from '../../../../services/controllers/user/UserSelector';
import { setCurrentChat, setFriends } from '../../../../services/controllers/user/UserSlice';
import './OnlineBar.scss';

const OnlineBar: React.FC = () => {
  const friends = useSelector(selectFriends);
  const dispatch = useDispatch();
  const currentChat = useSelector(selectCurrentChat);

  const getFriend = async () => {
    try {
      const data = await api.user.getSuggestFriend('friend');
      dispatch(setFriends([...data]));
      if (!currentChat) {
        dispatch(setCurrentChat(data[0]));
      }
    } catch (e) {
      const message = get(e, 'response.data.message');
      notify.error(message);
    }
  };

  useEffect(() => {
    getFriend();
  }, []);

  return (
    <div className="online-bar">
      <Card className="online-bar__card">
        <div className="online-bar__item">
          <div className="online-bar__title">FRIENDS</div>
          {friends.map((contact, i) => {
            const key = contact.firstName + i;
            const classes = classNames('online-bar__child', { 'online-bar__child--chat': currentChat.id === contact.id });
            return (
              <div
                onClick={() => {
                  dispatch(setCurrentChat(contact));
                }}
                key={key}
                className={classes}
              >
                <div className="online-bar__child-image">
                  <img src={contact.avatar} alt="" />
                </div>
                <div className="online-bar__child-name">{`${contact.firstName} ${contact.lastName}`}</div>
                <div className="online-bar__child-status" />
              </div>
            );
          })}
        </div>
        {/* <div className="online-bar__item">
          <div className="online-bar__title">GROUPS</div>
          {groups.map((contact, i) => {
            const key = contact.name + i;
            return (
              <div key={key} className="online-bar__child">
                <div className="online-bar__child-image">
                  <img src={contact.avatar} alt="" />
                </div>
                <div className="online-bar__child-name">{contact.name}</div>
                <div className="online-bar__child-status" />
              </div>
            );
          })}
        </div>
        <div className="online-bar__item">
          <div className="online-bar__title">PAGES</div>
          {pages.map((contact, i) => {
            const key = contact.name + i;
            return (
              <div key={key} className="online-bar__child">
                <div className="online-bar__child-image">
                  <img src={contact.avatar} alt="" />
                </div>
                <div className="online-bar__child-name">{contact.name}</div>
                <div className="online-bar__child-status" />
              </div>
            );
          })}
        </div> */}
      </Card>
    </div>
  );
};

export default OnlineBar;
