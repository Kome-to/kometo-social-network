import React, { useEffect, useRef, useState } from 'react';

import classNames from 'classnames';
import { get } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { notify } from '../../common/utils/notify';
import Audios from '../../components/Audio/audio';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Icon, { ICONS } from '../../components/Icon/Icon';
import TextArea from '../../components/TextArea/TextArea';
import api from '../../services/apiServices';
import { selectSocket } from '../../services/controllers/common/CommonSelector';
import { selectChatSession, selectCurrentChat, selectCurrentUser } from '../../services/controllers/user/UserSelector';
import { setChatSession } from '../../services/controllers/user/UserSlice';
import { handleTime } from '../home/components/NewsFeed/Post/utils';
import OnlineBar from '../home/components/OnlineBar/OnlineBar';
import CallModal from './CallModal/CallModal';
import './ChatView.scss';

const ChatView: React.FC = () => {
  const socket = useSelector(selectSocket);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const currentChat = useSelector(selectCurrentChat);
  const chatSession = useSelector(selectChatSession);
  const [messaging, setMessaging] = useState<any>();
  const scrollEnd = useRef<any>(null);
  const audioPlayer = useRef<any>(null);
  const currentUser = useSelector(selectCurrentUser);
  const [isCall, setIsCall] = useState(false);
  const [from, setFrom] = useState(null);
  const sendMessage = async () => {
    if (socket) {
      try {
        socket.emit('sendMessage', { userId: currentChat.id, message });
        setMessage('');
        setMessaging({ message, isOwner: true });
        await api.user.createMessage({ userId: currentChat.id, message });
      } catch (e) {
        const message = get(e, 'response.data.message');
        notify.error(message);
      }
    }
  };

  const getMessages = async () => {
    try {
      const data = await api.user.getMessages(currentChat.id);
      dispatch(setChatSession([...data.map((item: any) => ({ message: item.content, isOwner: item.isOwner, ...item }))]));
    } catch (e) {
      const message = get(e, 'response.data.message');
      notify.error(message);
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
      end.scrollIntoView({ block: 'end', inline: 'nearest' });
    }
  }, [chatSession]);

  useEffect(() => {
    socket?.on('receiveMessage', (message) => {
      setMessaging({ message, isOwner: false });
    });

    socket?.on('receiveCall', (userId) => {
      setFrom(userId);
    });
  }, [socket]);

  useEffect(() => {
    if (currentChat) {
      getMessages();
    }
  }, [currentChat]);

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
                        <img src={currentChat.avatar} alt="" />
                      </div>
                      <div>
                        <div>
                          {chat.isOwner
                            ? `${currentUser.firstName} ${currentUser.lastName}`
                            : `${currentChat.firstName} ${currentChat.lastName}`}
                        </div>
                        <span>{handleTime(chat.updatedAt)}</span>
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
                <div
                  onClick={() => {
                    setIsCall(true);
                  }}
                  className="chat__call"
                >
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
      {currentChat && isCall && <CallModal action={setIsCall} from={null} socket={socket} />}
      {currentChat && from && <CallModal action={setFrom} from={from} socket={socket} />}
    </div>
  );
};

export default ChatView;
