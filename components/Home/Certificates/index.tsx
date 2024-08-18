import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
//= Components
import CertificateModal from '../../Common/CertificateModal';
//= Types
import { ICertificate } from '../../../types';
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
                      <Icon icon="uil:calender" className={`iconifiy-icon ${classes.view}`} /> {new Date(certificate.issuanceDate).toLocaleDateString(undefined, { year: 'numeric', month: 'short' })}
                      <button onClick={() => viewCertificate(certificate.image)}><Icon icon="grommet-icons:view" className={`iconifiy-icon ${classes.view}`} /> View</button>
                      {
                        certificate.sourceLink &&
                        <a href={certificate.sourceLink} target="_blank" rel="noreferrer"><Icon icon="solar:link-round-bold" className={`iconifiy-icon ${classes.view}`} /> Verify</a>
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
              <button className={classes.viewMore}><Icon icon="grommet-icons:view" className={`iconifiy-icon ${classes.view}`} /> View All Certificates</button>
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