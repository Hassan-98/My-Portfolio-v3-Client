import Link from 'next/link';
import React from 'react';
//= Styles
import classes from './header.module.scss';

interface IProps {
  title: string;
  path: string;
  illustrationText: string;
}

function AltHeader({ title, path, illustrationText }: IProps) {
  return (
    <header className={classes.header}>
      <div className="container">
        <div className={classes.content}>
          <div className={classes.info}>
            <h1>{title}</h1>
            <p><Link href="/">Home</Link> &nbsp;/&nbsp; <span>{path}</span></p>
          </div>
          <div className={classes.illustration}><span>{illustrationText}</span></div>
        </div>
      </div>
    </header>
  )
}

export default AltHeader