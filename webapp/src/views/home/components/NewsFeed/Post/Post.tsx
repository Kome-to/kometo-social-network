import React from 'react';

import dayjs from 'dayjs';
import Card from '../../../../../components/Card/Card';
import './Post.scss';
import Icon, { ICONS } from '../../../../../components/Icon/Icon';

const Post: React.FC<{ data: any }> = ({ data }) => {
  return (
    <Card className="post">
      <div className="post__header">
        <div className="post__header-sub">
          <div className="post__header-avatar">
            <img src={data.avatar} alt="" />
          </div>
          <div className="post__header-user">
            <div className="post__header-user-name">{data.userName}</div>
            <div className="post__header-user-time">{dayjs(data.time).format('DD MMMM YYYY')}</div>
          </div>
        </div>
        <div className="post__header-option">
          <Icon className="navbar__icon" name={ICONS.HOME} />
        </div>
      </div>
      <div className="post__container">
        <div className="post__content">{data.content}</div>
        <div className="post__content-media">
          <img src={data.image} alt="" />
        </div>
      </div>
      <div className="post__footer">
        <div className="post__footer-react">
          <div className="post__footer-like">
            <Icon className="navbar__icon" name={ICONS.HOME} />
            <div>{`${data.likes} likes`}</div>
          </div>
          <div className="post__footer-comment">
            <Icon className="navbar__icon" name={ICONS.HOME} />
            <div>{`${data.comments} comments`}</div>
          </div>
        </div>
        <div className="post__footer-share">
          <Icon className="navbar__icon" name={ICONS.HOME} />
          <div>Share</div>
        </div>
      </div>
    </Card>
  );
};

export default Post;
