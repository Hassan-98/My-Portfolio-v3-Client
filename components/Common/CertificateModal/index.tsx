import React from 'react';
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
        <i className="fa-sharp fa-solid fa-xmark" onClick={closeModal}></i>
        <img src={imageUrl} alt="modal image" />
      </div>
    </div>
  )
}

export default CertificateModal;