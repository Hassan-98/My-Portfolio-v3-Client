import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
//= Api
import { downloadResume } from '../../../API';
//= Color Mode
import { setTheme } from 'scripts/color-mode';
//= Style
import classes from './navbar.module.scss';

enum Page {
  Home = '/',
  Works = '/works',
  About = '/about',
  Experience = '/experience',
  Contact = '/contact',
}

function Navbar() {
  const router = useRouter();
  const [theme, setThemeState] = useState<string>('light');

  useEffect(() => {
    setThemeState(window.localStorage.getItem('theme-mode') || 'light');
    window.addEventListener('scroll', handleScrolling);

    return () => {
      window.removeEventListener('scroll', handleScrolling);
    }
  }, []);

  function handleScrolling() {
    if (window.scrollY > 0) {
      document.querySelector(`.${classes.navbar}`)?.classList.add(classes.scrolling);
    } else {
      document.querySelector(`.${classes.navbar}`)?.classList.remove(classes.scrolling);
    }
  }

  function toggleThemeMode() {
    if (theme === "light") {
      setTheme('dark');
      setThemeState('dark');
    } else {
      setTheme('light');
      setThemeState('light');
    }
  }

  function toggleNavbar() {
    document.querySelector(`.${classes.links}`)?.classList.toggle(classes.active);
  }

  async function handleDownloadResume(event: React.MouseEvent<HTMLButtonElement>) {
    const icon = event.currentTarget.children[0];
    const oldIconClass = icon.className;
    icon.className = `fa-regular fa-spinner-third ${classes['loading-spinner']}`;
    await downloadResume();
    icon.className = oldIconClass;
  }


  return (
    <nav className={classes.navbar}>
      <div className="container">
        <div className={classes.content}>
          <div className={classes.logo} onClick={() => router.push('/')}>
            {
              theme === 'light' ?
                <img src="/logo-black.svg" alt="website logo" />
                :
                <img src="/logo-secondary.svg" alt="website logo" />
            }
            {/* H */}
          </div>
          <ul className={classes.links}>
            <li className={router.pathname === Page.Home ? classes.active : ''}>
              <Link href={Page.Home}>Home</Link>
            </li>
            <li className={router.pathname === Page.About ? classes.active : ''}>
              <Link href={Page.About}>About</Link>
            </li>
            <li className={router.pathname === Page.Experience ? classes.active : ''}>
              <Link href={Page.Experience}>Experience</Link>
            </li>
            <li className={router.pathname === Page.Works ? classes.active : ''}>
              <Link href={Page.Works}>Works</Link>
            </li>
            <li className={router.pathname === Page.Contact ? classes.active : ''}>
              <Link href={Page.Contact}>Contact</Link>
            </li>
            <li>
              <i className={`fa-solid fa-xmark ${classes.closeBtn}`} onClick={toggleNavbar}></i>
            </li>
            <li onClick={toggleThemeMode}><i className={`fi fi-${theme === 'dark' ? 'rr-brightness' : 'rr-moon-stars'}`}></i></li>
            <li>
              <button className={`btn`} onClick={handleDownloadResume}>
                <i className="fi fi-rr-inbox-in"></i>
                Resume
              </button>
            </li>
          </ul>
          <div className={classes.navbar__toggler} onClick={toggleNavbar}>
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar