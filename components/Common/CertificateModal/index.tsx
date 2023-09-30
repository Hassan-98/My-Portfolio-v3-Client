import React from 'react';
import { Icon } from '@iconify/react';
//= Styles
import classes from './modal.module.scss';

interface IProps {
  imageUrl: string;
  closeModal: () => void;
}

function CertificateModal({ imageUrl, closeModal }: IProps) {
  return (
    <div className={classes.modal}>
      <div className={classes.wrapper}>
        <Icon icon="ph:x-bold" className="iconifiy-icon" onClick={closeModal} />
        <img src={imageUrl} alt="modal image" />
      </div>
    </div>
  )
}

export default CertificateModal;