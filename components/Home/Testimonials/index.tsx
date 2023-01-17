import React, { useState, useEffect } from 'react';
//= Packages
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
//= Styles
import classes from './testimonials.module.scss';
import "swiper/css";
import "swiper/css/autoplay";

function Testimonials() {
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
              <SwiperSlide>
                <div className={classes.testimonial}>
                  <i className={`fa-solid fa-quote-right ${classes.quotes}`}></i>
                  <p className={classes.rating}>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star"></i>
                  </p>
                  <p className={classes.paragraph}>“I am completely satisfied with the work that is done by Hassan . I have found the one to help me move my business. Thank you very much for the great work.”</p>
                  <p className={classes.author}>
                    <b>Mohamed Ali</b> @ <span>Client</span>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.testimonial}>
                  <i className={`fa-solid fa-quote-right ${classes.quotes}`}></i>
                  <p className={classes.rating}>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star"></i>
                  </p>
                  <p className={classes.paragraph}>“I am completely satisfied with the work that is done by Hassan . I have found the one to help me move my business. Thank you very much for the great work.”</p>
                  <p className={classes.author}>
                    <b>Mohamed Ali</b> @ <span>Client</span>
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={classes.testimonial}>
                  <i className={`fa-solid fa-quote-right ${classes.quotes}`}></i>
                  <p className={classes.rating}>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star me-1"></i>
                    <i className="fa-solid fa-star"></i>
                  </p>
                  <p className={classes.paragraph}>“I am completely satisfied with the work that is done by Hassan . I have found the one to help me move my business. Thank you very much for the great work.”</p>
                  <p className={classes.author}>
                    <b>Mohamed Ali</b> @ <span>Client</span>
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          }
        </div>
      </div>
    </section>
  )
}

export default Testimonials