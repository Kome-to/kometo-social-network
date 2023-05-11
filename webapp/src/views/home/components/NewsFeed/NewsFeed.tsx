import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import Button from '../../../../components/Button/Button';
import Card from '../../../../components/Card/Card';
import './NewsFeed.scss';
import Post from './Post/Post';
import Icon, { ICONS, IconSize } from '../../../../components/Icon/Icon';
import OnlineBar from '../OnlineBar/OnlineBar';

const NewsFeed: React.FC = () => {
  const postList = [
    {
      userName: 'Surfiya Zakir',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      image: 'http://sociala.uitheme.net/assets/images/t-10.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus. ',
      likes: 999,
      comments: 999,
      time: new Date(),
    },
    {
      userName: 'Surfiya Zakir',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      image: 'http://sociala.uitheme.net/assets/images/t-10.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus. ',
      likes: 999,
      comments: 999,
      time: new Date(),
    },
    {
      userName: 'Surfiya Zakir',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      image: 'http://sociala.uitheme.net/assets/images/t-10.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus. ',
      likes: 999,
      comments: 999,
      time: new Date(),
    },
    {
      userName: 'Surfiya Zakir',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      image: 'http://sociala.uitheme.net/assets/images/t-10.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus. ',
      likes: 999,
      comments: 999,
      time: new Date(),
    },
    {
      userName: 'Surfiya Zakir',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      image: 'http://sociala.uitheme.net/assets/images/t-10.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus. ',
      likes: 999,
      comments: 999,
      time: new Date(),
    },
    {
      userName: 'Surfiya Zakir',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      image: 'http://sociala.uitheme.net/assets/images/t-10.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus. ',
      likes: 999,
      comments: 999,
      time: new Date(),
    },
    {
      userName: 'Surfiya Zakir',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      image: 'http://sociala.uitheme.net/assets/images/t-10.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus. ',
      likes: 999,
      comments: 999,
      time: new Date(),
    },
    {
      userName: 'Surfiya Zakir',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      image: 'http://sociala.uitheme.net/assets/images/t-10.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus. ',
      likes: 999,
      comments: 999,
      time: new Date(),
    },
    {
      userName: 'Surfiya Zakir',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      image: 'http://sociala.uitheme.net/assets/images/t-10.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus. ',
      likes: 999,
      comments: 999,
      time: new Date(),
    },
  ];
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
  const photoList = [
    'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
    'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
    'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
    'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
    'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
    'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
  ];
  const requestFriends = [
    {
      name: 'Chu Duc Anh',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      mutualFriends: 12,
    },
    {
      name: 'Chu Duc Anh',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      mutualFriends: 12,
    },
    {
      name: 'Chu Duc Anh',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      mutualFriends: 12,
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

  const addMedia = () => {
    alert('12');
  };
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
                return (
                  <SwiperSlide className="news-feed__story-slide">
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
          <Card className="news-feed__create">
            <div className="news-feed__create-header">
              <div className="news-feed__create-header-icon">
                <Icon className="navbar__icon" name={ICONS.CREATE_POST} size={IconSize.SM} />
              </div>
              <div className="news-feed__create-header-text">Create post</div>
            </div>
            <div className="news-feed__create-text">
              <img
                className="news-feed__create-avatar"
                src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A"
                alt=""
              />
              <textarea name="content" id="" placeholder="What's on your mind ?" />
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
                  <input type="file" className="news-feed__create-option-media" onChange={addMedia} />
                </div>
              </div>
              <Button type="submit" className="news-feed__create-more" dataId="button">
                Post
              </Button>
            </div>
          </Card>
          <div>
            {postList.map((postItem) => {
              return <Post data={postItem} />;
            })}
          </div>
        </div>
        <div className="news-feed__sub">
          <OnlineBar />
          <Card className="news-feed__card">
            <div>
              <div className="news-feed__card-header">
                <div className="news-feed__card-title">Friend Request</div>
                <div className="news-feed__card-see-all">See all</div>
              </div>
              {requestFriends.map((requestFriend) => {
                return (
                  <div className="news-feed__card-item">
                    <div className="news-feed__card-item-content">
                      <div className="news-feed__card-item-image">
                        <img src={requestFriend.avatar} alt="" />
                      </div>
                      <div className="news-feed__card-text">
                        <div>{requestFriend.name}</div>
                        <div className="news-feed__mutual-friends">{`${requestFriend.mutualFriends} mutual friends`}</div>
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
                <div className="news-feed__card-title">Photos</div>
                <div className="news-feed__card-see-all">See all</div>
              </div>
              <div className="news-feed__photo-list">
                {photoList.map((photo) => {
                  return (
                    <div className="news-feed__photo">
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
                {suggestPages.map((page) => {
                  return (
                    <div className="news-feed__suggest-page">
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
