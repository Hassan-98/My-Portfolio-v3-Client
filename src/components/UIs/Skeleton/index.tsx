'use client';
import React from 'react';
//= Components
import { Icon } from '@iconify/react';
//= Styles
import cls from './skeleton.module.scss';

type Props = {
  width?: string;
  height?: string;
  rounded?: boolean;
  circle?: boolean;
  bordered?: boolean;
  withIndicator?: boolean;
}

function LoadingSkeleton({ width, height, rounded, circle, bordered, withIndicator }: Props) {
  return (
    <span
      className={cls.skeleton_box}
      style={{
        height: height || '100px',
        width: width || '50%',
        borderRadius: circle ? '50%' : rounded ? '4px' : '0px',
        border: bordered ? '1px solid #ddd' : '1px solid rgba(var(--main-background-rgb), 0.05)'
      }}
    >
      {
        withIndicator &&
        <Icon icon="eos-icons:bubble-loading" />
      }
    </span>
  )
}

export default LoadingSkeleton;