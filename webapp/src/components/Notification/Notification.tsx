import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCircleExclamation, faCircleInfo, faTriangleExclamation, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NotificationStatus } from '../../common/utils/notify';

import './Notification.scss';

interface NotificationProps {
  message: string;
  status: NotificationStatus;
  onClose: (() => void) | undefined;
  className?: string;
}

const Notification: React.FC<NotificationProps> = ({ message, status, className, onClose }): React.ReactElement => {
  const notificationStatus = {
    [NotificationStatus.SUCCESS]: {
      className: 'notification--success',
      icon: <FontAwesomeIcon icon={faCheckCircle} size="1x" color="#065f46" />,
      closeIcon: <FontAwesomeIcon className="notification__close-icon" icon={faXmark} size="1x" color="#065f46" onClick={onClose} />,
    },
    [NotificationStatus.INFO]: {
      className: 'notification--info',
      icon: <FontAwesomeIcon icon={faCircleInfo} size="1x" color="#1e40af" />,
      closeIcon: <FontAwesomeIcon className="notification__close-icon" icon={faXmark} size="1x" color="#1e40af" onClick={onClose} />,
    },
    [NotificationStatus.WARNING]: {
      className: 'notification--warning',
      icon: <FontAwesomeIcon icon={faTriangleExclamation} size="1x" color="#92400e" />,
      closeIcon: <FontAwesomeIcon className="notification__close-icon" icon={faXmark} size="1x" color="#92400e" onClick={onClose} />,
    },
    [NotificationStatus.ERROR]: {
      className: 'notification--error',
      icon: <FontAwesomeIcon icon={faCircleExclamation} size="1x" color="#b91c1c" />,
      closeIcon: <FontAwesomeIcon className="notification__close-icon" icon={faXmark} size="1x" color="#b91c1c" onClick={onClose} />,
    },
  };

  return (
    <div className={`notification ${className} ${notificationStatus[status].className}`}>
      <div className="notification__icon">{notificationStatus[status].icon}</div>
      <div className="notification__body">
        <div className="notification__wrapper">
          <span className="notification__content">{message}</span>
        </div>
        {onClose && notificationStatus[status].closeIcon}
      </div>
    </div>
  );
};

export default Notification;
