import React from 'react';
import Link from 'next/link';
//= Api
import { downloadResume } from '../../../api';
//= Styles
import classes from './show.module.scss';

function Topbar() {
  async function fetchResume() {
    await downloadResume();
  }

  return (
    <div className={classes.topbar}>
      <Link href="/"><button><i className="fi fi-br-arrow-left"></i> Go back</button></Link>
      <button onClick={() => window.print()}><i className="fi fi-br-print"></i> Print</button>
      <button onClick={fetchResume}><i className="fi fi-br-download"></i> Download</button>
    </div>
  )
}

export default Topbar