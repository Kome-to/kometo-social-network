import * as React from 'react';
import CustomScrollbars, { ScrollbarProps } from 'react-custom-scrollbars';

import './Scrollbars.scss';

export interface ScrollbarsProps extends ScrollbarProps {
  verticalLeft?: boolean;
}

const renderVerticalThumb = () => {
  return <div className="custom-vertical-scroll-thumb" />;
};

const renderVerticalTrack = () => {
  return <div className="custom-vertical-scroll-track" />;
};
const renderVerticalLeftTrack = () => {
  return <div className="custom-vertical-scroll-track is-left" />;
};

const renderHorizontalThumb = () => {
  return <div className="custom-horizontal-scroll-thumb" />;
};

const renderHorizontalTrack = () => {
  return <div className="custom-horizontal-scroll-track" />;
};

const Scrollbars: React.FC<ScrollbarsProps> = ({ verticalLeft, ...props }) => {
  return (
    <CustomScrollbars
      renderTrackVertical={verticalLeft ? renderVerticalLeftTrack : renderVerticalTrack}
      renderTrackHorizontal={renderHorizontalTrack}
      renderThumbVertical={renderVerticalThumb}
      renderThumbHorizontal={renderHorizontalThumb}
      autoHeight
      autoHeightMax={340}
      {...props}
    />
  );
};

export default Scrollbars;
