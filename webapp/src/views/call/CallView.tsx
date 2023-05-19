import Peer from 'peerjs';
import React, { useEffect, useRef, useState } from 'react';

import { useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import Icon, { ICONS } from '../../components/Icon/Icon';
import { selectSocket } from '../../services/controllers/common/CommonSelector';
import { selectCurrentUser } from '../../services/controllers/user/UserSelector';
import './CallView.scss';
import { routes } from '../../common/utils/routes';

const CallView: React.FC = () => {
  const socket = useSelector(selectSocket);
  const currentUser = useSelector(selectCurrentUser);
  const [peerId, setPeerId] = useState<any>('');
  const [remotePeerId, setRemotePeerId] = useState<any>('');
  const { id: userId } = useParams<any>();
  const remoteVideoRef = useRef<any>(null);
  const currentUserVideoRef = useRef<any>(null);
  const peerInstance = useRef<any>(null);
  const { state } = useLocation<any>();
  const history = useHistory();

  const call = (remotePeerId: any) => {
    const { getUserMedia } = navigator as any;

    getUserMedia({ video: true, audio: false }, (mediaStream: any) => {
      currentUserVideoRef.current.srcObject = mediaStream;
      currentUserVideoRef.current.play();

      const call = peerInstance.current?.call(remotePeerId, mediaStream);

      call.on('stream', (remoteStream: any) => {
        remoteVideoRef.current.srcObject = remoteStream;
        remoteVideoRef.current.play();
      });
    });
  };

  useEffect(() => {
    const peer = new Peer('', {
      host: '/',
      port: 3001,
    });
    // const peer = new Peer();

    peer.on('open', (id) => {
      setPeerId(id);
    });

    peer.on('call', (call) => {
      const { getUserMedia } = navigator as any;

      getUserMedia({ video: true, audio: false }, (mediaStream: any) => {
        if (currentUserVideoRef.current) {
          currentUserVideoRef.current.srcObject = mediaStream;
          currentUserVideoRef.current.play();
        }
        call.answer(mediaStream);
        call.on('stream', (remoteStream) => {
          remoteVideoRef.current.srcObject = remoteStream;
          remoteVideoRef.current.play();
        });
      });
    });

    peerInstance.current = peer as any;
  }, []);

  useEffect(() => {
    if (currentUser && currentUser.id === userId && socket && peerId && state) {
      socket.emit('join-call', { id: peerId, userId: state.currentChat.id });
    }

    if (socket) {
      socket.on('create-call', (id) => {
        call(id);
        setRemotePeerId(id);
      });

      socket.on('handle-end-call', () => {
        history.push(routes.CHAT);
        window.location.reload();
      });
    }
  }, [peerId, currentUser, socket]);

  return (
    <div className="call-view">
      {/* eslint-disable-next-line */}
      <video className="call-view__video-owner" ref={currentUserVideoRef} />
      {/* eslint-disable-next-line */}
      <video className="call-view__video-remote" ref={remoteVideoRef} />
      <div className="call-view__panel">
        <div
          onClick={() => {
            if (socket) {
              if (currentUser.id === userId) {
                socket.emit('end-call', state.currentChat.id);
              } else {
                socket.emit('end-call', userId);
              }
            }
            navigator.mediaDevices.getUserMedia().then((stream) => {
              stream.getTracks().forEach(function (track) {
                track.stop();
              });
            });
            history.push(routes.CHAT);
            window.location.reload();
          }}
          className="call-view__end-call"
        >
          <Icon name={ICONS.END_CALL} />
        </div>
      </div>
    </div>
  );
};
export default CallView;
