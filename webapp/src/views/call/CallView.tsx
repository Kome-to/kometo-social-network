import Peer from 'peerjs';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectSocket } from '../../services/controllers/common/CommonSelector';
import { selectCurrentChat, selectCurrentUser } from '../../services/controllers/user/UserSelector';

import './CallView.scss';
import Icon, { ICONS } from '../../components/Icon/Icon';

const CallView: React.FC = () => {
  const myVideo = useRef<any>(null);
  const remoteVideo = useRef<any>(null);
  const currentUser = useSelector(selectCurrentUser);
  const currentChat = useSelector(selectCurrentChat);
  const socket = useSelector(selectSocket);
  const peer = new Peer('', {
    host: '/',
    port: 3001,
  });

  const playStream = (ref: any, stream: any) => {
    ref.current.srcObject = stream;
    ref.current.play();
  };

  const openStream = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false,
    });
    return stream;
  };

  useEffect(() => {
    if (currentUser && socket) {
      const myStream = openStream().then((myStream) => {
        playStream(myVideo, myStream);
      });
      //   .then((stream) => {
      //     playStream(myVideo, stream);

      //     peer.on('call', (call: any) => {
      //       call.answer(stream);
      //       call.on('stream', (userVideoStream: any) => {
      //         playStream(remoteVideo, userVideoStream);
      //       });
      //     });

      //     socket.on('user-connected', (userId) => {
      //       // connectToNewUser(userId, stream);
      //     });
      //   });
    }
  });

  return (
    <div className="call-view">
      {/* eslint-disable-next-line */}
      <video className="call-view__video-owner" ref={myVideo} />
      {/* eslint-disable-next-line */}
      <video className="call-view__video-remote" ref={myVideo} />
      <div className="call-view__panel">
        <div className="call-view__end-call">
          <Icon name={ICONS.END_CALL} />
        </div>
      </div>
    </div>
  );
};

export default CallView;
