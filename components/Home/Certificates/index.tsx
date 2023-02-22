import React, { useState } from 'react';
import Link from 'next/link';
//= Components
import CertificateModal from 'components/Common/CertificateModal';
//= Types
import { ICertificate } from 'types';
//= Styles
import classes from './certificates.module.scss';

interface IProps {
  certsPage?: boolean;
  data: ICertificate[]
}

function Certificates({ certsPage, data }: IProps) {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<string>('');

  function viewCertificate(url: string) {
    setModalImage(url);
    setModalIsOpen(true);
  }

  return (
    <section>
      <div className="container">
        <div className={`${classes.certificates} ${certsPage ? classes.smallerPadding : ''}`}>
          {
            !certsPage &&
            <h2>
              <span />
              Certificates
              <span />
            </h2>
          }
          <div className={classes.container}>
            {
              data.map(certificate => (
                <div className={classes.certificate} key={certificate._id}>
                  <img src={certificate.image} alt="certificate" loading="lazy" />
                  <div className={classes.info}>
                    <p className={classes.title}>{certificate.title} - {certificate.issuanceSource}</p>
                    <p className={classes.details}>
                      {certificate.description}
                    </p>
                    <p className={classes.date}>
                      <i className="fa-solid fa-calendar-days"></i> {new Date(certificate.issuanceDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}
                      <button onClick={() => viewCertificate(certificate.image)}><i className="fa-regular fa-eye"></i> View</button>
                      {
                        certificate.sourceLink &&
                        <button><a href={certificate.sourceLink} target="_blank" rel="noreferrer"><i className="fa-regular fa-link-simple"></i> Verify</a></button>
                      }
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
          {
            !certsPage &&
            <Link href="/certificates">
              <button className={classes.viewMore}><i className="fa-regular fa-eye me-1"></i> View All Certificates</button>
            </Link>
          }
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