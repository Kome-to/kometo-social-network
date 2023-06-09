import React, { useEffect, useState } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import classNames from 'classnames';
import { get } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { notify } from '../../../../common/utils/notify';
import { routes } from '../../../../common/utils/routes';
import Button from '../../../../components/Button/Button';
import Card from '../../../../components/Card/Card';
import Icon, { ICONS, IconSize } from '../../../../components/Icon/Icon';
import TextArea from '../../../../components/TextArea/TextArea';
import api from '../../../../services/apiServices';
import { userActions } from '../../../../services/controllers/user/UserActions';
import { selectCurrentUser, selectPosts, selectSuggestFriendsList } from '../../../../services/controllers/user/UserSelector';
import './NewsFeed.scss';
import Post from './Post/Post';

export const CreatePost: React.FC<any> = ({ action, className }) => {
  const history = useHistory();
  const [file, setFile] = useState<File | null>(null);
  const currentUser = useSelector(selectCurrentUser) as any;
  const [createPostContent, setCreatePostContent] = useState('');
  const [postList, setPostList] = useState<any[]>([]);
  const [photoList, setPhotoList] = useState<any[]>([]);
  const listSuggests = useSelector(selectSuggestFriendsList);
  const dispatch = useDispatch();

  const addMedia = (e: any) => {
    if (e.target.files.length && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const onPost = async () => {
    try {
      await api.user.createPost({ createPostContent, file });
      setFile(null);
      setCreatePostContent('');
      notify.success('Post successfully');
      await action();
    } catch (error) {
      const message = get(error, 'response.data.message');
      notify.error(message);
    }
  };

  const classes = classNames('news-feed__create', className);

  return (
    <Card className={classes}>
      <div className="news-feed__create-header">
        <div className="news-feed__create-header-icon">
          <Icon className="navbar__icon" name={ICONS.CREATE_POST} size={IconSize.SM} />
        </div>
        <div className="news-feed__create-header-text">Create post</div>
      </div>
      <div className="news-feed__create-text">
        {currentUser && (
          <img
            className="news-feed__create-avatar"
            src={
              currentUser.avatar ||
              'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A'
            }
            alt=""
          />
        )}
        <TextArea
          value={createPostContent}
          wrapperClass="news-feed__create-text-input"
          name="createPostContent"
          id=""
          placeholder="What's on your mind ?"
          onChange={(e) => {
            setCreatePostContent(e.target.value);
          }}
        />
      </div>
      <div className="news-feed__create-image-wrapper">
        {file && file.type.includes('image') && <img className="news-feed__create-image" src={URL.createObjectURL(file)} alt="" />}
        {file && file.type.includes('video') && (
          // eslint-disable-next-line
          <video controls className="news-feed__create-image">
            <source src={URL.createObjectURL(file)} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="news-feed__create-footer">
        <div className="news-feed__create-option">
          <div className="news-feed__create-option-item">
            <Icon className="navbar__icon" name={ICONS.LIVE} size={IconSize.SM} />
            <div>Live Video</div>
          </div>
          <div className="news-feed__create-option-item">
            <Icon className="navbar__icon" name={ICONS.PHOTO} size={IconSize.SM} />
            <div>Photo/Video</div>
            <input type="file" accept="image/*, video/*" className="news-feed__create-option-media" onChange={addMedia} />
          </div>
        </div>
        <div className="news-feed__create-actions">
          {file && (
            <Button
              onClick={() => {
                setFile(null);
              }}
              type="submit"
              className="news-feed__create-remove news-feed__create-more"
              dataId="button"
            >
              Remove Photo/Video
            </Button>
          )}
          <Button onClick={onPost} type="submit" className="news-feed__create-more" dataId="button">
            Post
          </Button>
        </div>
      </div>
    </Card>
  );
};

const NewsFeed: React.FC = () => {
  const history = useHistory();
  const [file, setFile] = useState<File | null>(null);
  const currentUser = useSelector(selectCurrentUser) as any;
  const [createPostContent, setCreatePostContent] = useState('');
  const [photoList, setPhotoList] = useState<any[]>([]);
  const listSuggests = useSelector(selectSuggestFriendsList);
  const postList = useSelector(selectPosts);
  const dispatch = useDispatch();

  const getMediaList = async () => {
    try {
      const data: any = await api.user.getMedia();
      setPhotoList([...data]);
    } catch (e) {
      const message = get(e, 'response.data.message');
      notify.error(message);
    }
  };

  useEffect(() => {
    dispatch(userActions.getPost());
    getMediaList();
  }, []);

  const suggestPages = [
    {
      image:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
    },
    {
      image:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
    },
  ];

  const stories = [
    {
      name: 'Chu Duc Anh',
      image:
        'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/345845172_1318193729041282_5090861027458963701_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=TbT3o-NgMhEAX_TLDjI&_nc_ht=scontent.fhan3-3.fna&oh=00_AfBLtfZOTIepHc6goGr5h3U-VTyRIN8w1pXqJGj5U0ARXw&oe=645F0C8E',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
    },
    {
      name: 'Chu Duc Anh',
      image:
        'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/345845172_1318193729041282_5090861027458963701_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=TbT3o-NgMhEAX_TLDjI&_nc_ht=scontent.fhan3-3.fna&oh=00_AfBLtfZOTIepHc6goGr5h3U-VTyRIN8w1pXqJGj5U0ARXw&oe=645F0C8E',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
    },
    {
      name: 'Chu Duc Anh',
      image:
        'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/345845172_1318193729041282_5090861027458963701_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=TbT3o-NgMhEAX_TLDjI&_nc_ht=scontent.fhan3-3.fna&oh=00_AfBLtfZOTIepHc6goGr5h3U-VTyRIN8w1pXqJGj5U0ARXw&oe=645F0C8E',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
    },
    {
      name: 'Chu Duc Anh',
      image:
        'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/345845172_1318193729041282_5090861027458963701_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=TbT3o-NgMhEAX_TLDjI&_nc_ht=scontent.fhan3-3.fna&oh=00_AfBLtfZOTIepHc6goGr5h3U-VTyRIN8w1pXqJGj5U0ARXw&oe=645F0C8E',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
    },
    {
      name: 'Chu Duc Anh',
      image:
        'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/345845172_1318193729041282_5090861027458963701_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=TbT3o-NgMhEAX_TLDjI&_nc_ht=scontent.fhan3-3.fna&oh=00_AfBLtfZOTIepHc6goGr5h3U-VTyRIN8w1pXqJGj5U0ARXw&oe=645F0C8E',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
    },
    {
      name: 'Chu Duc Anh',
      image:
        'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/345845172_1318193729041282_5090861027458963701_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=TbT3o-NgMhEAX_TLDjI&_nc_ht=scontent.fhan3-3.fna&oh=00_AfBLtfZOTIepHc6goGr5h3U-VTyRIN8w1pXqJGj5U0ARXw&oe=645F0C8E',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
    },
    {
      name: 'Chu Duc Anh',
      image:
        'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/345845172_1318193729041282_5090861027458963701_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=TbT3o-NgMhEAX_TLDjI&_nc_ht=scontent.fhan3-3.fna&oh=00_AfBLtfZOTIepHc6goGr5h3U-VTyRIN8w1pXqJGj5U0ARXw&oe=645F0C8E',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
    },
    {
      name: 'Chu Duc Anh',
      image:
        'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/345845172_1318193729041282_5090861027458963701_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=TbT3o-NgMhEAX_TLDjI&_nc_ht=scontent.fhan3-3.fna&oh=00_AfBLtfZOTIepHc6goGr5h3U-VTyRIN8w1pXqJGj5U0ARXw&oe=645F0C8E',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
    },
    {
      name: 'Chu Duc Anh',
      image:
        'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/345845172_1318193729041282_5090861027458963701_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5cd70e&_nc_ohc=TbT3o-NgMhEAX_TLDjI&_nc_ht=scontent.fhan3-3.fna&oh=00_AfBLtfZOTIepHc6goGr5h3U-VTyRIN8w1pXqJGj5U0ARXw&oe=645F0C8E',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
    },
  ];

  useEffect(() => {
    dispatch(userActions.getSuggestFriend());
  }, []);

  return (
    <div className="news-feed">
      <div className="news-feed__wrapper">
        <div className="news-feed__main">
          <div className="news-feed__story">
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="news-feed__story-swiper"
            >
              <SwiperSlide className="news-feed__story-slide">
                <Card>
                  <div className="news-feed__story-content news-feed__story-content-add">
                    <div className="news-feed__story-user">
                      <div className="news-feed__story-user-plus">+</div>
                      <div className="news-feed__story-user-name news-feed__story-user-name--add">Add story</div>
                    </div>
                  </div>
                </Card>
              </SwiperSlide>
              {stories.map((story, index) => {
                const key = story.name + index;
                return (
                  <SwiperSlide key={key} className="news-feed__story-slide">
                    <Card>
                      <div className="news-feed__story-content">
                        <img className="news-feed__story-slide-image" src={story.image} alt="" />
                        <div className="news-feed__story-user">
                          <div className="news-feed__story-user-image">
                            <img src={story.avatar} alt="" />
                          </div>
                          <div className="news-feed__story-user-name">{story.name}</div>
                        </div>
                      </div>
                    </Card>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <CreatePost action={async () => {}} />
          <div>
            {postList.map((postItem, i) => {
              const key = postItem.userName + i;
              return <Post key={key} data={postItem} />;
            })}
          </div>
        </div>
        <div className="news-feed__sub">
          {/* <OnlineBar /> */}
          <Card className="news-feed__card">
            <div>
              <div className="news-feed__card-header">
                <div className="news-feed__card-title">Friend Request</div>
                <div
                  onClick={() => {
                    history.push(routes.SUGGEST_FRIEND);
                  }}
                  className="news-feed__card-see-all"
                >
                  See all
                </div>
              </div>
              {listSuggests
                .filter((item) => item.status === 0)
                .map((requestFriend, i) => {
                  const key = requestFriend.firstName + i;
                  return (
                    <div key={key} className="news-feed__card-item">
                      <div className="news-feed__card-item-content">
                        <div className="news-feed__card-item-image">
                          <img src={requestFriend.avatar} alt="" />
                        </div>
                        <div className="news-feed__card-text">
                          <div>{`${requestFriend.firstName} ${requestFriend.lastName}`}</div>
                          <div className="news-feed__mutual-friends">{`${requestFriend.mutualFriends || 0} mutual friends`}</div>
                        </div>
                      </div>
                      <div className="news-feed__actions">
                        <Button className="news-feed__button news-feed__confirm" dataId="button">
                          Confirm
                        </Button>
                        <Button className="news-feed__button news-feed__delete" dataId="button">
                          Delete
                        </Button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </Card>
          <Card className="news-feed__card">
            <div>
              <div className="news-feed__card-header">
                <div className="news-feed__card-title">Suggest Friends</div>
                <div
                  onClick={() => {
                    history.push(routes.SUGGEST_FRIEND);
                  }}
                  className="news-feed__card-see-all"
                >
                  See all
                </div>
              </div>
              {listSuggests
                .filter((item) => item.status === 0)
                .map((requestFriend, i) => {
                  const key = requestFriend.firstName + i;
                  return (
                    <div
                      onClick={() => {
                        history.push(routes.SUGGEST_FRIEND);
                      }}
                      key={key}
                      className="news-feed__card-item news-feed__card-item--background"
                    >
                      <div className="news-feed__card-item-content news-feed__card-item-content--between">
                        <div className="news-feed__card-item-image">
                          <img src={requestFriend.avatar} alt="" />
                        </div>
                        <div className="news-feed__card-text">
                          <div>{`${requestFriend.firstName} ${requestFriend.lastName}`}</div>
                          <div className="news-feed__mutual-friends">{`${requestFriend.mutualFriends || 0 || 0} mutual friends`}</div>
                        </div>
                        <div className="news-feed__card-icon">
                          <Icon className="navbar__icon" name={ICONS.ANGLE_RIGHT} size={IconSize.LG} />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </Card>
          <Card className="news-feed__card">
            <div>
              <div className="news-feed__card-header">
                <div className="news-feed__card-title">Photos</div>
                <div className="news-feed__card-see-all">See all</div>
              </div>
              <div className="news-feed__photo-list">
                {photoList.map((photo, i) => {
                  const key = photo + i;
                  return (
                    <div key={key} className="news-feed__photo">
                      <img src={photo} alt="" />
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
          <Card className="news-feed__card">
            <div>
              <div className="news-feed__card-header">
                <div className="news-feed__card-title">Suggest Pages</div>
                <div className="news-feed__card-see-all">See all</div>
              </div>
              <div>
                {suggestPages.map((page, i) => {
                  const key = page.image + i;
                  return (
                    <div key={key} className="news-feed__suggest-page">
                      <div className="news-feed__suggest-page-image">
                        <img src={page.image} alt="" />
                      </div>
                      <Button className="news-feed__button news-feed__like-page" dataId="button">
                        Like page
                      </Button>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NewsFeed;
