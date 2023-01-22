import React from 'react';
import Link from 'next/link';
//= Styles
import classes from './show.module.scss';

function Topbar() {
  return (
    <div className={classes.topbar}>
      <Link href="/"><button><i className="fi fi-br-arrow-left"></i> Go back</button></Link>
      <button onClick={() => window.print()}><i className="fi fi-br-print"></i> Print</button>
      <button><i className="fi fi-br-download"></i> Download</button>
    </div>
  )
}

export default Topbar