import React from 'react';

import './OnlineBar.scss';
import Card from '../../../../components/Card/Card';

const OnlineBar: React.FC = () => {
  const contacts = [
    {
      name: 'Chu Duc Anh',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      status: 'online',
    },
    {
      name: 'Chu Duc Anh',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      status: 'online',
    },
    {
      name: 'Chu Duc Anh',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      status: 'online',
    },
    {
      name: 'Chu Duc Anh',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      status: 'online',
    },
    {
      name: 'Chu Duc Anh',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      status: 'online',
    },
    {
      name: 'Chu Duc Anh',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      status: 'online',
    },
    {
      name: 'Chu Duc Anh',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      status: 'online',
    },
    {
      name: 'Chu Duc Anh',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      status: 'online',
    },
  ];

  const groups = [
    {
      name: 'Chu Duc Anh',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      status: 'online',
    },
    {
      name: 'Chu Duc Anh',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      status: 'online',
    },
    {
      name: 'Chu Duc Anh',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      status: 'online',
    },
  ];

  const pages = [
    {
      name: 'Chu Duc Anh',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      status: 'online',
    },
    {
      name: 'Chu Duc Anh',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      status: 'online',
    },
    {
      name: 'Chu Duc Anh',
      avatar:
        'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/281288893_3106909372904033_8827658247018456218_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=R7U5NiyiBTwAX9olBCA&_nc_ht=scontent.fhan5-2.fna&oh=00_AfD4irjN-l6geQzKI-fhLAyEIzgkw4jqLxexXXbESC18xQ&oe=645EC41A',
      status: 'online',
    },
  ];

  return (
    <div className="online-bar">
      <Card className="online-bar__card">
        <div className="online-bar__item">
          <div className="online-bar__title">FRIENDS</div>
          {contacts.map((contact, i) => {
            const key = contact.name + i;
            return (
              <div key={key} className="online-bar__child">
                <div className="online-bar__child-image">
                  <img src={contact.avatar} alt="" />
                </div>
                <div className="online-bar__child-name">{contact.name}</div>
                <div className="online-bar__child-status" />
              </div>
            );
          })}
        </div>
        <div className="online-bar__item">
          <div className="online-bar__title">GROUPS</div>
          {groups.map((contact, i) => {
            const key = contact.name + i;
            return (
              <div key={key} className="online-bar__child">
                <div className="online-bar__child-image">
                  <img src={contact.avatar} alt="" />
                </div>
                <div className="online-bar__child-name">{contact.name}</div>
                <div className="online-bar__child-status" />
              </div>
            );
          })}
        </div>
        <div className="online-bar__item">
          <div className="online-bar__title">PAGES</div>
          {pages.map((contact, i) => {
            const key = contact.name + i;
            return (
              <div key={key} className="online-bar__child">
                <div className="online-bar__child-image">
                  <img src={contact.avatar} alt="" />
                </div>
                <div className="online-bar__child-name">{contact.name}</div>
                <div className="online-bar__child-status" />
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default OnlineBar;
