import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
//= Packages
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
//= Types
import { ITestimonial } from '../../../types';
//= Styles
import classes from './testimonials.module.scss';

function Testimonials({ data }: { data: ITestimonial[] }) {
  const [loadSwiper, setLoadSwiper] = useState<boolean>(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, [])

  return (
    <section>
      <div className="container">
        <div className={classes.testimonials}>
          {
            loadSwiper &&
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
                    <div className={classes.testimonial}>
                      <Icon icon="mingcute:quote-right-fill" className={`iconifiy-icon ${classes.quotes}`} />
                      {/* <i className={`fa-solid fa-quote-right ${classes.quotes}`}></i> */}
                      <p className={classes.rating}>
                        {
                          new Array(testimonial.rating).fill(0).map((_, i) => (
                            <Icon icon="mingcute:star-fill" className={`iconifiy-icon ${i !== testimonial.rating - 1 ? 'me-1' : ''}`} key={i} />
                            // <i className={`fa-solid fa-star ${i !== testimonial.rating - 1 ? 'me-1' : ''}`}></i>
                          ))
                        }
                      </p>
                      <p className={classes.paragraph}>“{testimonial.content}”</p>
                      <p className={classes.author}>
                        <b>{testimonial.authorName}</b> @ <span>{testimonial.authorPosition}</span>
                      </p>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          }
        </div>
      </div>
    </section>
  )
}

export default Testimonials