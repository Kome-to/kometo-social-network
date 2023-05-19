import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Icon, { ICONS } from '../../components/Icon/Icon';
import LeftBar from '../home/components/LeftBar/LeftBar';

import { userActions } from '../../services/controllers/user/UserActions';
import { selectCurrentUser, selectPosts } from '../../services/controllers/user/UserSelector';
import { CreatePost } from '../home/components/NewsFeed/NewsFeed';
import '../home/components/NewsFeed/NewsFeed.scss';
import Post from '../home/components/NewsFeed/Post/Post';
import './ProfileView.scss';

const ProfileView: React.FC = () => {
  const postList = useSelector(selectPosts);
  const currentUser = useSelector(selectCurrentUser);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getPost());
  }, []);

  return (
    <div>
      <LeftBar />
      <div className="profile">
        <Card className="profile__header">
          <div className="profile__bg" />
          <div className="profile__main-info">
            <div className="profile__left">
              <div className="profile__avatar">
                <img src="https://pbs.twimg.com/profile_images/1653320007353520129/mlYpk5Xi_400x400.jpg" alt="" />
              </div>
              <div className="profile__sub">
                <div className="profile__name">Chu Duc Anh</div>
                <div className="profile__email">ducanhnd2306@gmail.com</div>
              </div>
            </div>
            {/* <div className="profile__right">
              <Button className="profile__add-friend">ADD FRIEND</Button>
              <div className="profile__header-icon">
                <Icon name={ICONS.HEART_1} />
              </div>
              <div className="profile__header-icon">
                <Icon name={ICONS.HEART_1} />
              </div>
            </div> */}
          </div>
        </Card>
        <div className="profile__content">
          <div className="profile__content-left">
            <Card className="profile__content-left-card">
              <div className="profile__content-left-about">
                <div>About</div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam debitis voluptas perferendis. Libero aperiam perspiciatis
                  error minus, soluta dicta quam ipsa voluptates, praesentium commodi explicabo porro, provident possimus culpa laboriosam.
                </p>
              </div>
              <div>0918977451</div>
              <div>Nam Dinh, Viet Nam</div>
            </Card>
            <Card>Photo</Card>
          </div>
          <div className="profile__content-right">
            <Card>
              <CreatePost className="profile__create" action={async () => {}} />
              {postList
                .filter((post) => {
                  console.log(post);

                  return post.userId === id;
                })
                .map((post) => (
                  <Post data={post} />
                ))}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
