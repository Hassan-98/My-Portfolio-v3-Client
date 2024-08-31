'use client';
import React from 'react';
//= Components
import { Icon } from '@iconify/react';
//= Styles
import cls from './modal.module.scss';

interface IProps {
  imageUrl: string;
  closeModal: () => void;
}

function CertificateModal({ imageUrl, closeModal }: IProps) {
  return (
    <div className={cls.modal}>
      <div className={cls.wrapper}>
        <Icon icon="ph:x-bold" className="iconifiy-icon" onClick={closeModal} />
        <img src={imageUrl} alt="modal image" />
      </div>
    </div>
  )
}

export default CertificateModal;