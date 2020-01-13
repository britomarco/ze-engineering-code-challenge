import React from 'react';
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import '../../styles/reset.css'
import '../../styles/index.css'
const Fragment = React.Fragment;

export default () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
}
