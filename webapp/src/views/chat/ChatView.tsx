import React, { useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Icon, { ICONS } from '../../components/Icon/Icon';
import TextArea from '../../components/TextArea/TextArea';
import { selectSocket } from '../../services/controllers/common/CommonSelector';
import { selectChatSession, selectCurrentChat } from '../../services/controllers/user/UserSelector';
import { setChatSession } from '../../services/controllers/user/UserSlice';
import { handleTime } from '../home/components/NewsFeed/Post/utils';
import OnlineBar from '../home/components/OnlineBar/OnlineBar';
import './ChatView.scss';
import Audios from '../../components/Audio/audio';

const ChatView: React.FC = () => {
  const socket = useSelector(selectSocket);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const currentChat = useSelector(selectCurrentChat);
  const chatSession = useSelector(selectChatSession);
  const [messaging, setMessaging] = useState<any>();
  const scrollEnd = useRef<any>(null);
  const audioPlayer = useRef<any>(null);

  const sendMessage = () => {
    if (socket) {
      socket.emit('sendMessage', { userId: currentChat.id, message });
      setMessage('');
      setMessaging({ message, isOwner: true });
    }
  };

  useEffect(() => {
    if (messaging && messaging.message) {
      dispatch(setChatSession([...chatSession, messaging]));
      if (!messaging.isOwner && audioPlayer.current) {
        audioPlayer.current.play();
      }
    }
  }, [messaging]);

  useEffect(() => {
    const end = scrollEnd.current;
    if (end) {
      end.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  }, [chatSession]);

  useEffect(() => {
    socket?.on('receiveMessage', (message) => {
      setMessaging({ message, isOwner: false });
    });
  }, [socket]);

  return (
    <div>
      {/* <LeftBar /> */}
      <OnlineBar />
      {currentChat && (
        <div className="chat">
          <Card className="chat__card">
            <div className="chat__card--wrapper">
              {chatSession.map((chat) => {
                const styles = classNames('chat__block', {
                  'chat__block--me': chat.isOwner,
                });
                return (
                  <div className={styles}>
                    <div className="chat__header">
                      <div className="chat__image">
                        <img
                          src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A"
                          alt=""
                        />
                      </div>
                      <div>
                        <div>Chu Duc Anh</div>
                        <span>{handleTime(new Date())}</span>
                      </div>
                    </div>
                    <div className="chat__message">{chat.message}</div>
                  </div>
                );
              })}
              <div ref={scrollEnd} />
            </div>
            <div className="chat__input">
              <div className="chat__option">
                <div className="chat__call">
                  <Icon name={ICONS.LIVE} />
                </div>
              </div>
              <TextArea
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                value={message}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
              />
              <Button onClick={sendMessage}>Send</Button>
            </div>
            {/* eslint-disable-next-line */}
            <audio ref={audioPlayer} src={Audios.CHAT_NOTIFY} />
          </Card>
        </div>
      )}
    </div>
  );
};

export default ChatView;
