import * as React from 'react';

import Button from '../Button/Button';
import Modal from './DialogModal';

import './ModalConfirm.scss';

export interface ModalConfirmProps {
  open: boolean;
  children: React.ReactNode;
  confirmText: string;
  handleActions: () => void;
  onClose: () => void;
  title?: React.ReactNode;
  dataId: string;
}

const ModalConfirm: React.FunctionComponent<ModalConfirmProps> = ({
  open,
  onClose,
  title,
  confirmText,
  children,
  handleActions,
  dataId,
}: ModalConfirmProps) => {
  return (
    <Modal isOpen={open} onClose={onClose} dataId="modalConfirm">
      <div className="modal-confirm__container" data-id={`${dataId}.modalContainer`}>
        <h2 className="dialog__title">{title}</h2>
        <div className="modal-confirm__content">{children}</div>
      </div>
      <div className="modal-confirm__wrapper-btn" data-id={`${dataId}.confirmButton.modal`}>
        <Button className="modal-confirm__btn modal-confirm__btn--confirm" onClick={handleActions}>
          {confirmText}
        </Button>
      </div>
    </Modal>
  );
};

export default ModalConfirm;
