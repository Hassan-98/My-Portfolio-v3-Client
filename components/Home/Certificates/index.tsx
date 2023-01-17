import React, { useState } from 'react';
//= Components
import CertificateModal from 'components/Common/CertificateModal';
//= Styles
import classes from './certificates.module.scss';

function Certificates() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string>('');

  function viewCertificate(url: string) {
    setModalImage(url);
    setModalIsOpen(true);
  }

  return (
    <section>
      <div className="container">
        <div className={classes.certificates}>
          <h2>
            <span />
            Certificates
            <span />
          </h2>
          <div className={classes.container}>
            <div className={classes.certificate}>
              <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-storage-63979.appspot.com/o/Nanodegree%20Cert-1.png_1662600051014?alt=media" alt="certificate" loading="lazy" />
              <div className={classes.info}>
                <p className={classes.title}>Advanced Full-Stack Web Development Nanodegree</p>
                <p className={classes.details}>
                  A Full-Stack nanodegree from Udacity for 3 months of Node.js - Postgres - Jasmine
                </p>
                <p className={classes.date}>
                  <i className="fa-solid fa-calendar-days"></i> Sep 2022
                  <button onClick={() => viewCertificate("https://firebasestorage.googleapis.com/v0/b/portfolio-storage-63979.appspot.com/o/Nanodegree%20Cert-1.png_1662600051014?alt=media")}><i className="fa-regular fa-eye"></i> View</button>
                </p>
              </div>
            </div>
            <div className={classes.certificate}>
              <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-storage-63979.appspot.com/o/Capture2.webp_1640657558847?alt=media" alt="certificate" loading="lazy" />
              <div className={classes.info}>
                <p className={classes.title}>Full-Stack Web Development With React</p>
                <p className={classes.details}>
                  A Full-Stack specialization from Coursera of Bootstrap 4 - React - Node.js - Express - MongoDB
                </p>
                <p className={classes.date}>
                  <i className="fa-solid fa-calendar-days"></i> May 2021
                  <button onClick={() => viewCertificate("https://firebasestorage.googleapis.com/v0/b/portfolio-storage-63979.appspot.com/o/Capture2.webp_1640657558847?alt=media")}><i className="fa-regular fa-eye"></i> View</button>
                </p>
              </div>
            </div>
            <div className={classes.certificate}>
              <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-storage-63979.appspot.com/o/omac.png_1642051737714?alt=media" alt="certificate" loading="lazy" />
              <div className={classes.info}>
                <p className={classes.title}>One Million Arab Coders</p>
                <p className={classes.details}>
                  One Million Arab Coders Front-End Track from Udacity
                </p>
                <p className={classes.date}>
                  <i className="fa-solid fa-calendar-days"></i> Apr 2018
                  <button onClick={() => viewCertificate("https://firebasestorage.googleapis.com/v0/b/portfolio-storage-63979.appspot.com/o/omac.png_1642051737714?alt=media")}><i className="fa-regular fa-eye"></i> View</button>
                </p>
              </div>
            </div>
            <div className={classes.certificate}>
              <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-storage-63979.appspot.com/o/Screenshot%202021-05-02%20134329.webp_1640657632661?alt=media" alt="certificate" loading="lazy" />
              <div className={classes.info}>
                <p className={classes.title}>Advanced Full-Stack Web Development Nanodegree</p>
                <p className={classes.details}>
                  A Full-Stack nanodegree from Udacity for 3 months of Node.js - Postgres - Jasmine
                </p>
                <p className={classes.date}>
                  <i className="fa-solid fa-calendar-days"></i> Sep 2022
                  <button onClick={() => viewCertificate("https://firebasestorage.googleapis.com/v0/b/portfolio-storage-63979.appspot.com/o/Screenshot%202021-05-02%20134329.webp_1640657632661?alt=media")}><i className="fa-regular fa-eye"></i> View</button>
                </p>
              </div>
            </div>
            <div className={classes.certificate}>
              <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-storage-63979.appspot.com/o/bs4.webp_1640657597652?alt=media" alt="certificate" loading="lazy" />
              <div className={classes.info}>
                <p className={classes.title}>Advanced Full-Stack Web Development Nanodegree</p>
                <p className={classes.details}>
                  A Full-Stack nanodegree from Udacity for 3 months of Node.js - Postgres - Jasmine
                </p>
                <p className={classes.date}>
                  <i className="fa-solid fa-calendar-days"></i> Sep 2022
                  <button onClick={() => viewCertificate("https://firebasestorage.googleapis.com/v0/b/portfolio-storage-63979.appspot.com/o/bs4.webp_1640657597652?alt=media")}><i className="fa-regular fa-eye"></i> View</button>
                </p>
              </div>
            </div>
            <div className={classes.certificate}>
              <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-storage-63979.appspot.com/o/css3.webp_1640657698273?alt=media" alt="certificate" loading="lazy" />
              <div className={classes.info}>
                <p className={classes.title}>Advanced Full-Stack Web Development Nanodegree</p>
                <p className={classes.details}>
                  A Full-Stack nanodegree from Udacity for 3 months of Node.js - Postgres - Jasmine
                </p>
                <p className={classes.date}>
                  <i className="fa-solid fa-calendar-days"></i> Sep 2022
                  <button onClick={() => viewCertificate("https://firebasestorage.googleapis.com/v0/b/portfolio-storage-63979.appspot.com/o/css3.webp_1640657698273?alt=media")}><i className="fa-regular fa-eye"></i> View</button>
                </p>
              </div>
            </div>
          </div>
          <button className={classes.viewMore}><i className="fa-regular fa-eye me-1"></i> View All Certificates</button>
        </div>
        {
          modalIsOpen &&
          <CertificateModal imageUrl={modalImage} closeModal={() => setModalIsOpen(false)} />
        }
      </div>
    </section>
  )
}

export default Certificates