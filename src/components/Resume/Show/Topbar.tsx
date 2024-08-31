'use client';
import React from 'react';
import Link from 'next/link';
//= Components
import { Icon } from '@iconify/react';
//= Api
import { downloadResume } from '@/services/api';
//= Styles
import cls from './show.module.scss';

function Topbar() {
  async function fetchResume() {
    await downloadResume();
  }

  return (
    <div className={cls.topbar}>
      <Link href="/"><button><Icon icon="pixelarticons:arrow-left" className="iconifiy-icon" /> Go back</button></Link>
      <button onClick={() => window.print()}><Icon icon="fluent:print-32-regular" className="iconifiy-icon" /> Print</button>
      {/* <button onClick={downloadResume} disabled={true}><Icon icon="entypo:download" className="iconifiy-icon" /> Download</button> */}
    </div>
  )
}

export default Topbar