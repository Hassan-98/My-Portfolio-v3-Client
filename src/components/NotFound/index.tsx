'use client';
import React from 'react';
import Link from 'next/link';
//= Styles
import cls from "./404.module.scss";

type Props = {}

function PageNotFound({ }: Props) {

  return (
    <div className={`${cls.notFound}`}>
      <div className={cls.container}>
        <div className={cls.wrapper}>
          <div className={cls.item}>
            <img loading="lazy" src="/images/404.svg" alt="not found image" />
          </div>
          <div className={cls.item}>
            {/* <h1>404</h1> */}
            <p>Oops, the requested page cannot be found</p>
            <Link className={cls.btnPrimar} href="/">Back home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound