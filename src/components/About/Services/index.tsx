import React from 'react';
import { CodingIcon, SeoIcon, CleanIcon, ResponsiveIcon, CreativeIcon, SupportIcon, DotsIcon } from '@/components/Shared/SVGs'
//= Styles
import cls from './services.module.scss';

function Services() {
  return (
    <section className={cls.services}>
      <div className="container">
        <h2>
          <span />
          Services
          <span />
        </h2>
        <div className={cls.container}>
          <div className={cls.service}>
            <div className={cls.icon}>
              <CodingIcon />
            </div>
            <h3>Development</h3>
            <p>I'm expert at developing and building any kind of websites or web applications</p>
            <div className={cls.dots}>
              <DotsIcon />
            </div>
          </div>
          <div className={cls.service}>
            <div className={cls.icon}>
              <SeoIcon />
            </div>
            <h3>SEO</h3>
            <p>I write SEO friendly code that helps search engines find and rank your website</p>
            <div className={cls.dots}>
              <DotsIcon />
            </div>
          </div>
          <div className={cls.service}>
            <div className={cls.icon}>
              <CleanIcon />
            </div>
            <h3>Clean Code</h3>
            <p>I write clean and organized code that makes website fast and easy to maintain</p>
            <div className={cls.dots}>
              <DotsIcon />
            </div>
          </div>
          <div className={cls.service}>
            <div className={cls.icon}>
              <ResponsiveIcon />
            </div>
            <h3>Responsive Design</h3>
            <p>I'm expert at developing and building responsive websites that suites all screens</p>
            <div className={cls.dots}>
              <DotsIcon />
            </div>
          </div>
          <div className={cls.service}>
            <div className={cls.icon}>
              <CreativeIcon />
            </div>
            <h3>Creative Work</h3>
            <p>I'm love creating bright websites ideas and develop & build it to be real websites</p>
            <div className={cls.dots}>
              <DotsIcon />
            </div>
          </div>
          <div className={cls.service}>
            <div className={cls.icon}>
              <SupportIcon />
            </div>
            <h3>Support</h3>
            <p>I always support and help my clients to make the best web development service</p>
            <div className={cls.dots}>
              <DotsIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services