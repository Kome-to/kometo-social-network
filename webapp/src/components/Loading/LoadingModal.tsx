import React from 'react';
import { useSelector } from 'react-redux';
import { selectLoading } from '../../services/controllers/common/CommonSelector';
import Loading from './Loading';
import Modal from '../Modal/Modal';

const LoadingView = (): React.ReactElement => {
  const loading = useSelector(selectLoading);
  return (
    <Modal isShowing={loading}>
      <Loading size="md" />
    </Modal>
  );
};

export default LoadingView;
