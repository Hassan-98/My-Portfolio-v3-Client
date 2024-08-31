'use client';
import React, { useState, useEffect } from 'react';
//= Components
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
//= Types
import type { ITestimonial } from '@/types';
//= Styles
import cls from './testimonials.module.scss';

function Testimonials({ data }: { data: ITestimonial[] }) {
  return (
    <section>
      <div className="container">
        <div className={cls.testimonials}>
          <Swiper
            modules={[Autoplay]}
            centeredSlides={true}
            slidesPerView={1.5}
            spaceBetween={30}
            autoplay={true}
            loop={true}
            speed={1000}
            breakpoints={{
              0: {
                slidesPerView: 1
              },
              768: {
                slidesPerView: 1.5
              }
            }}
          >
            {
              data.map(testimonial => (
                <SwiperSlide key={testimonial._id}>
                  <div className={cls.testimonial}>
                    <Icon icon="mingcute:quote-right-fill" className={`iconifiy-icon ${cls.quotes}`} />
                    {/* <i className={`fa-solid fa-quote-right ${cls.quotes}`}></i> */}
                    <p className={cls.rating}>
                      {
                        new Array(testimonial.rating).fill(0).map((_, i) => (
                          <Icon icon="mingcute:star-fill" className={`iconifiy-icon ${i !== testimonial.rating - 1 ? 'me-1' : ''}`} key={i} />
                          // <i className={`fa-solid fa-star ${i !== testimonial.rating - 1 ? 'me-1' : ''}`}></i>
                        ))
                      }
                    </p>
                    <p className={cls.paragraph}>“{testimonial.content}”</p>
                    <p className={cls.author}>
                      <b>{testimonial.authorName}</b> @ <span>{testimonial.authorPosition}</span>
                    </p>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Testimonials