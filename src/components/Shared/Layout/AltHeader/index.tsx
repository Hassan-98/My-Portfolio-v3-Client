'use client';
import React, { useRef, useLayoutEffect } from 'react';
import Link from 'next/link';
//= Styles
import cls from './header.module.scss';

interface IProps {
  title: string;
  path: string;
  illustrationText: string;
  customFontSize?: number;
}

function AltHeader({ title, path, illustrationText, customFontSize = 58 }: IProps) {
  const illustrationRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    illustrationRef.current?.style.setProperty('--font-size', `${customFontSize}px`);
  }, [illustrationRef, customFontSize])

  return (
    <header className={cls.header}>
      <div className="container">
        <div className={cls.content}>
          <div className={cls.info}>
            <h1>{title}</h1>
            <p><Link href="/">Home</Link> &nbsp;/&nbsp; <span>{path}</span></p>
          </div>
          <div className={cls.illustration}><span ref={illustrationRef}>{illustrationText}</span></div>
        </div>
      </div>
    </header>
  )
}

export default AltHeader