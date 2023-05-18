import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { generatePath, useHistory } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import Modal from '../../../components/Modal/DialogModal';
import { selectCurrentChat, selectCurrentUser } from '../../../services/controllers/user/UserSelector';

import { routes } from '../../../common/utils/routes';
import './CallModal.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const audioPlayer = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    if (audioPlayer.current) {
      audioPlayer.current.play();
      audioPlayer.current.loop = true;
    }
  }, [audioPlayer.current]);

  const waiting = (count: number) => {
    return count % 4 === 0 ? ' . ' : count % 4 === 1 ? '. .' : count % 4 === 2 ? ' . . .' : '. . . . ';
  };

  const counter = (count: number) => {
    let str = '';
    let tmp = count;
    const hours = Math.floor(tmp / 3600);
    tmp %= 3600;
    str += hours < 10 ? `0${hours} : ` : `${String(hours)} : `;
    const minutes = Math.floor(tmp / 60);
    tmp %= 60;
    str += minutes < 10 ? `0${minutes} : ${tmp < 10 ? `0${tmp}` : tmp}` : `${String(minutes)} : ${tmp < 10 ? `0${tmp}` : tmp}`;
    return str;
  };
  return (
    <div>
      <div className="call-modal__calling">{`Calling ${waiting(count)}`}</div>
      <div className="call-modal__time">{counter(count)}</div>
      {/* eslint-disable-next-line */}
      {/* <audio ref={audioPlayer} src={Audios.CALLING} /> */}
    </div>
  );
};

const CallModal: React.FC<{ socket: any; action: any; from: any }> = ({ socket, action, from }) => {
  const currentUser = useSelector(selectCurrentUser);
  const currentChat = useSelector(selectCurrentChat);
  const history = useHistory();

  useEffect(() => {
    if (!from) {
      socket.emit('calling', currentChat.id);
    }

    socket.on('handleCancelCall', (userId: string) => {
      if (from && userId === from) {
        action(null);
      }

      if (!from && userId === currentChat.id) {
        action(false);
      }
    });

    socket.on('handleAcceptCall', (userId: string) => {
      history.push(
        generatePath(routes.CALL, {
          id: currentUser.id,
        }),
      );
    });
  }, []);

  return (
    <Modal className="call-modal" dataId="123" isOpen onClose={() => {}}>
      <div className="call-modal__wrapper">
        <div className="call-modal__image">
          <img src={currentChat.avatar} alt="" />
        </div>
        <div className="call-modal__name">{`${currentChat.firstName} ${currentChat.lastName}`}</div>

        {/* eslint-disable-next-line */}
        {/* <video className={'call-modal__remote-video'} ref={otherVideo} /> */}
        <Counter />
        <div className="call-modal__actions">
          {from && (
            <Button
              onClick={() => {
                socket.emit('acceptCall', from);
                history.push(
                  generatePath(routes.CALL, {
                    id: from,
                  }),
                );
              }}
              className="call-modal__accept"
            >
              Accept
            </Button>
          )}

          <Button
            onClick={async () => {
              action(false);
              if (from) {
                socket.emit('cancelCall', from);
              } else {
                socket.emit('cancelCall', currentChat.id);
              }
            }}
            className="call-modal__cancel"
          >
            Cancel
          </Button>
        </div>
        <div className="call-modal__video">
          {/* eslint-disable-next-line */}
          {/* <video ref={myVideo} className="" /> */}
          <div />
        </div>
      </div>
    </Modal>
  );
};

export default CallModal;
