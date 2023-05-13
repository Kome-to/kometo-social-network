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
            <div className="post__header-user-time">{dayjs(data.updatedAt).format('DD MMMM YYYY')}</div>
          </div>
        </div>
        <div className="post__header-option">
          <Icon className="navbar__icon" name={ICONS.OPTION} />
        </div>
      </div>
      <div className="post__container">
        <div className="post__content">{data.content}</div>
        <div className="post__content-media">
          {/\w+\.(jpg|jpeg|png|gif|bmp)$/.test(data.file) ? (
            <img src={data.file} alt="" />
          ) : (
            // eslint-disable-next-line
            <video controls className="">
              <source src={data.file} type="video/mp4" />
            </video>
          )}
        </div>
      </div>
      <div className="post__footer">
        <div className="post__footer-react">
          <div className="post__footer-like">
            <Icon className="navbar__icon" name={ICONS.LIKE} />
            <div>{`${data.likes.length} likes`}</div>
          </div>
          <div className="post__footer-comment">
            <Icon className="navbar__icon" name={ICONS.COMMENT} />
            <div>{`${data.comments.length} comments`}</div>
          </div>
        </div>
        <div className="post__footer-share">
          <Icon className="navbar__icon" name={ICONS.SHARE} />
          <div>Share</div>
        </div>
      </div>
    </Card>
  );
};

export default Post;
