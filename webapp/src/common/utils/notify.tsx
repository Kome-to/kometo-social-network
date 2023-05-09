import React from 'react';
import { toast, ToastOptions } from 'react-toastify';

import Notification from '../../components/Notification/Notification';

export enum NotificationStatus {
  SUCCESS = 'SUCCESS',
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
}

interface Notify {
  success: NotifyFunction;
  info: NotifyFunction;
  warning: NotifyFunction;
  error: NotifyFunction;
  dismiss: (toastId?: any) => void;
}

type NotifyFunction = (message: React.ReactNode | string, config?: ToastOptions) => void;

const toastOptions: ToastOptions = {
  hideProgressBar: true,
  autoClose: 2000,
  closeOnClick: false,
  closeButton: false,
};

const showToast = (message: any, options: ToastOptions = toastOptions, status: NotificationStatus) => {
  toast(({ closeToast }) => <Notification message={message} status={status} onClose={closeToast} />, options);
};

export const notify: Notify = {
  success: (message = 'Success', options) => {
    showToast(message, options, NotificationStatus.SUCCESS);
  },
  info: (message, options) => {
    showToast(message, options, NotificationStatus.INFO);
  },
  warning: (message, options) => {
    showToast(message, options, NotificationStatus.WARNING);
  },
  error: (message = 'An error occurred. Please try again!', options) => {
    showToast(message, options, NotificationStatus.ERROR);
  },
  dismiss: (toastId?: any) => {
    toast.dismiss(toastId);
  },
};
