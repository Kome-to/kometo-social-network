import React from 'react';
import LeftBar from './components/LeftBar/LeftBar';

import './HomeView.scss';
import NewsFeed from './components/NewsFeed/NewsFeed';

const HomeView: React.FC = () => {
  return (
    <div className="home">
      <LeftBar />
      <NewsFeed />
    </div>
  );
};

export default HomeView;
