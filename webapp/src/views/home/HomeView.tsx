import React from 'react';
import LeftBar from './components/LeftBar/LeftBar';

import './HomeView.scss';
import NewsFeed from './components/NewsFeed/NewsFeed';
import OnlineBar from './components/OnlineBar/OnlineBar';

const HomeView: React.FC = () => {
  return (
    <div className="home">
      {/* <OnlineBar /> */}
      <LeftBar />
      <NewsFeed />
    </div>
  );
};

export default HomeView;
