'use client';
import React, { useState, useEffect } from 'react';
//= Styles
import cls from './loader.module.scss';

function Loader() {
  // const [isLoaded, setIsLoaded] = useState<boolean>(false);
  function hideLoading() {
    document.querySelector(`.${cls.loader_container}`)?.classList.add(`${cls.hide}`);
  }
  function showLoading() {
    document.querySelector(`.${cls.loader_container}`)?.classList.remove(`${cls.hide}`);
  }

  useEffect(() => {
    // if (document.readyState === 'complete') {
    showLoading();
    setTimeout(() => {
      hideLoading();
    }, 100);
    // } else {
    //   window.addEventListener('load', hideLoading, false);
    //   // Remove the event listener when component unmounts
    //   return () => window.removeEventListener('load', hideLoading);
    // }
  }, []);


  return (
    <div className={cls.loader_container}>
      <div className={cls.loader_braces}></div>
      <div className={cls.loader}></div>
    </div>
  )
}

export default Loader;