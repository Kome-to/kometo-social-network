import React, { useState } from 'react';
import Modal from '../../../../components/Modal/DialogModal';
import { handleTime } from './Post/utils';

const StoryModal: React.FC<any> = ({ data, setDisplayStory }) => {
  return (
    <Modal
      onClose={() => {
        setDisplayStory(null);
      }}
      isOpen={!!data}
      dataId="story-modal"
      className="story-modal"
    >
      {data && (
        <>
          <div className="story-modal__wrapper">
            <div className="story-modal__wrapper-video">
              {/* eslint-disable-next-line */}
              <video autoPlay={true}>
                <source src={data.file} />
              </video>
            </div>
            <div className="story-modal__user">
              <div className="story-modal__image">
                <img src={data.avatar} alt="" />
              </div>
              <p>{`${data.firstName} ${data.lastName}`}</p>
              <span>{handleTime(data.updatedAt)}</span>
            </div>
          </div>
          {/* eslint-disable-next-line */}
          {/* <video className="story-modal__bg" autoPlay={true}>
            <source src={data.file} />
          </video> */}
        </>
      )}
    </Modal>
  );
};

export default StoryModal;
