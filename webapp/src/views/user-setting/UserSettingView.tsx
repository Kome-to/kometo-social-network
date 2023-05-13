import React from 'react';
import LeftBar from '../home/components/LeftBar/LeftBar';
import SettingCard from './components/SettingCard/SettingCard';

const UserSettingView: React.FC = () => {
  return (
    <div>
      <LeftBar />
      <SettingCard />
    </div>
  );
};

export default UserSettingView;
