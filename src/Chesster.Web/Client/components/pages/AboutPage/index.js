import React from 'react';

import PageTemplate from 'templates/PageTemplate';
import Header from 'organisms/Header';
import Footer from 'organisms/Footer';

const AboutPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      about
    </PageTemplate>
  );
};

export default AboutPage;