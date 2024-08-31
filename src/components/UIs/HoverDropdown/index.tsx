import React from 'react';
//= Styles
import cls from './hoverDropdown.module.scss';

type Props = {
  children: React.ReactNode;
  width: string;
  offset: string;
}

function HoverDropdown({ children, width, offset }: Props) {
  return (
    <div className={cls.dropdown} style={{ left: offset }}>
      <div className={cls.wrapper} style={{ width }}>
        {children}
      </div>
    </div>
  )
}

export default HoverDropdown;