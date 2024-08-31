'use client';
import React, { useRef } from "react";
//= Styles
import cls from "./modal.module.scss";

type Props = {
  children: React.ReactNode;
  setOpenModal: (open: boolean) => void;
  bigSize?: boolean;
  superSize?: boolean;
  adabtiveFluidSize?: boolean;
  className?: string;
  areaClassName?: string;
}

const Modal = ({ children, className, areaClassName, setOpenModal, bigSize, superSize, adabtiveFluidSize }: Props) => {
  const overlay = useRef<HTMLDivElement>(null);

  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (overlay.current === e.target) setOpenModal(false);
  };

  return (
    <div className={cls.overlay} ref={overlay} onClick={(e) => closeModal(e)}>
      <div className={`${cls.area} ${areaClassName || ''} ${bigSize ? cls.bigSize : ""} ${superSize ? cls.superSize : ''} ${adabtiveFluidSize ? cls.adabtiveFluidSize : ''}`}>
        <div className={`${cls.area__wrapper} ${className || ''}`}>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
