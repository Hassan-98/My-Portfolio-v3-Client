import React, { useState, useEffect } from 'react';
//= Styles
import classes from './loader.module.scss';

function Loader() {
  // const [isLoaded, setIsLoaded] = useState<boolean>(false);
  function hideLoading() {
    document.querySelector(`.${classes.loader_container}`)?.classList.add(`${classes.hide}`);
  }
  function showLoading() {
    document.querySelector(`.${classes.loader_container}`)?.classList.remove(`${classes.hide}`);
  }

  useEffect(() => {
    if (document.readyState === 'complete') {
      showLoading();
      setTimeout(() => {
        hideLoading();
      }, 100);
    } else {
      window.addEventListener('load', hideLoading, false);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', hideLoading);
    }
  }, []);


  return (
    <div className={classes.loader_container}>
      <div className={classes.loader_braces}></div>
      <div className={classes.loader}></div>
    </div>
  )
}

export default Loader;