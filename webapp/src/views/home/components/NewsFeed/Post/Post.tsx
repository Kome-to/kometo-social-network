import React, { useEffect, useState } from 'react';

import { get } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { notify } from '../../../../../common/utils/notify';
import Button from '../../../../../components/Button/Button';
import Card from '../../../../../components/Card/Card';
import Icon, { ICONS } from '../../../../../components/Icon/Icon';
import TextArea from '../../../../../components/TextArea/TextArea';
import api from '../../../../../services/apiServices';
import { selectCurrentUser } from '../../../../../services/controllers/user/UserSelector';
import './Post.scss';
import { handleTime } from './utils';
import { selectSocket } from '../../../../../services/controllers/common/CommonSelector';
import { userActions } from '../../../../../services/controllers/user/UserActions';

const Post: React.FC<{ data: any }> = ({ data }) => {
  const [isExpand, setIsExpand] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const [comment, setComment] = useState('');
  const socket = useSelector(selectSocket);
  const dispatch = useDispatch();

  const onEvent = async (eventType: any, isAdd: boolean, content?: string) => {
    try {
      if (isAdd) {
        await api.user.addEventPost({ postId: data.id, eventType, content });
        if (socket) {
          socket.emit('event', { event: eventType, metadata: content });
        }
      } else {
        await api.user.deleteEventPost({ postId: data.id, eventType });
      }
      dispatch(userActions.getPost());
    } catch (e) {
      const message = get(e, 'response.data.message');
      notify.error(message);
    }
  };

  useEffect(() => {
    if (socket) {
      socket.on('receiveEvent', (event) => {
        console.log(event);
      });
    }
  }, []);

  return (
    <Card className="post">
      <div className="post__header">
        <div className="post__header-sub">
          <div className="post__header-avatar">
            <img
              src={
                data.avatar ||
                'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A'
              }
              alt=""
            />
          </div>
          <div className="post__header-user">
            <div className="post__header-user-name">{`${data.firstName} ${data.lastName}`}</div>
            <div className="post__header-user-time">{handleTime(data.createdAt)}</div>
          </div>
        </div>
        <div className="post__header-option">
          <Icon className="navbar__icon" name={ICONS.OPTION} />
        </div>
      </div>
      <div className="post__container">
        <div className="post__content">{data.content}</div>
        {!data.file.includes('/null') && (
          <div className="post__content-media">
            {/\w+\.(jpg|jpeg|png|gif|bmp|jfif)$/.test(data.file) ? (
              <img src={data.file} alt="" />
            ) : (
              // eslint-disable-next-line
              <video controls className="">
                <source src={data.file} type="video/mp4" />
              </video>
            )}
          </div>
        )}
      </div>
      <div className="post__footer">
        <div className="post__footer-react">
          {data.isLiked ? (
            <div
              className="post__footer-like"
              onClick={async () => {
                await onEvent('LIKE', false);
              }}
            >
              <Icon className="navbar__icon" name={ICONS.HEART_1} />
              <div>{`${data.likes.length} likes`}</div>
            </div>
          ) : (
            <div
              className="post__footer-like"
              onClick={async () => {
                await onEvent('LIKE', true);
              }}
            >
              <Icon className="navbar__icon" name={ICONS.HEART_2} />
              <div>{`${data.likes.length} likes`}</div>
            </div>
          )}
          <div
            onClick={() => {
              setIsExpand(!isExpand);
            }}
            className="post__footer-comment"
          >
            <Icon className="navbar__icon" name={ICONS.COMMENT} />
            <div>{`${data.comments.length} comments`}</div>
          </div>
        </div>
        <div className="post__footer-share">
          <Icon className="navbar__icon" name={ICONS.SHARE} />
          <div>Share</div>
        </div>
      </div>
      {isExpand && (
        <div className="post__comments">
          {currentUser && (
            <div className="post__comments-create">
              <div className="post__comments-create-img">
                <img
                  src={
                    currentUser.avatar ||
                    'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A'
                  }
                  alt=""
                />
              </div>
              <TextArea
                onChange={(e: any) => {
                  setComment(e.target.value);
                }}
              />
              <Button
                onClick={async () => {
                  await onEvent('COMMENT', true, comment);
                }}
              >
                Comment
              </Button>
            </div>
          )}
          {data.comments.map((comment: any) => {
            return (
              <div className="post__comments-item">
                <div className="post__comments-create-img">
                  <img
                    src={
                      comment.userAvatar ||
                      'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A'
                    }
                    alt=""
                  />
                </div>
                <div className="post__comments-item-content">
                  <div className="post__comments-item-header">
                    <div>{comment.userName || 'Duc Anh'}</div>
                    <span>{handleTime(comment.createdAt)}</span>
                  </div>
                  <div className="post__comments-item-text">{comment.content}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
};

export default Post;
