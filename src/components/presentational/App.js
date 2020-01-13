import React from 'react';
import Header from '../presentational/Header'
import Main from '../presentational/Main'
import Footer from '../presentational/Footer'
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