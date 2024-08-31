'use client';
import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import Cookies from 'universal-cookie';
import { usePathname, useRouter } from 'next/navigation';
//= Components
import { Icon } from '@iconify/react';
import { ThemeContext } from '@/contexts/theme';
//= Color Mode
import { getPreferredTheme, setTheme } from '@/utils/color-mode';
//= Style
import cls from './navbar.module.scss';

enum Page {
  Home = '/',
  Works = '/works',
  About = '/about',
  Experience = '/experience',
  Contact = '/contact',
}

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const { theme: defaultTheme, setTheme: setContextTheme } = useContext(ThemeContext);
  const [theme, setThemeState] = useState<string>(defaultTheme || getPreferredTheme());

  useEffect(() => {
    const cookies = new Cookies();
    setTimeout(() => {
      const cookie = cookies.get('portfolio-theme-mode')
      if (cookie) setThemeState(cookie);
    }, 0);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScrolling);

    return () => {
      window.removeEventListener('scroll', handleScrolling);
    }
  }, []);

  function handleScrolling() {
    if (window.scrollY > 0) {
      document.querySelector(`.${cls.navbar}`)?.classList.add(cls.scrolling);
    } else {
      document.querySelector(`.${cls.navbar}`)?.classList.remove(cls.scrolling);
    }
  }

  function toggleThemeMode() {
    if (theme === "light") {
      setTheme('dark');
      setThemeState('dark');
      setContextTheme('dark');
    } else {
      setTheme('light');
      setThemeState('light');
      setContextTheme('light');
    }
  }

  function toggleNavbar() {
    document.querySelector(`.${cls.links}`)?.classList.toggle(cls.active);
  }

  async function handleDownloadResume(event: React.MouseEvent<HTMLButtonElement>) {
    // const icon = event.currentTarget.children[0];
    // const oldIconClass = icon.className;
    // icon.className = `fa-solid fa-spinner-third ${cls['loading-spinner']}`;
    // await downloadResume();
    // icon.className = oldIconClass;
  }


  return (
    <nav className={cls.navbar}>
      <div className="container">
        <div className={cls.content}>
          <div className={cls.logo} onClick={() => router.push('/')}>
            {
              theme === 'light' ?
                <img src="/logo-black.svg" alt="website logo" />
                :
                <img src="/logo-white.svg" alt="website logo" />
            }
            {/* H */}
          </div>
          <ul className={cls.links}>
            <li className={pathname === Page.Home ? cls.active : ''}>
              <Link href={Page.Home}>Home</Link>
            </li>
            <li className={pathname === Page.About ? cls.active : ''}>
              <Link href={Page.About}>About</Link>
            </li>
            <li className={pathname === Page.Experience ? cls.active : ''}>
              <Link href={Page.Experience}>Experience</Link>
            </li>
            <li className={pathname === Page.Works ? cls.active : ''}>
              <Link href={Page.Works}>Projects</Link>
            </li>
            <li className={pathname === Page.Contact ? cls.active : ''}>
              <Link href={Page.Contact}>Contact</Link>
            </li>
            <li>
              <i className={`fa-solid fa-xmark ${cls.closeBtn}`} onClick={toggleNavbar}></i>
            </li>
            <li onClick={toggleThemeMode} data-tooltip="Toggle theme mode" data-direction='bottom'>
              <Icon icon={theme === 'dark' ? 'ph:sun-bold' : 'bi:moon'} className="iconifiy-icon nomargin" />
            </li>
            <li>
              <button className="btn" onClick={() => router.push('/resume')}>
                <Icon icon="pepicons-pop:cv" className="iconifiy-icon" />
                Resume
              </button>
            </li>
          </ul>
          <div className={cls.navbar__toggler} onClick={toggleNavbar}>
            <Icon icon="uil:bars" className="iconifiy-icon" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar