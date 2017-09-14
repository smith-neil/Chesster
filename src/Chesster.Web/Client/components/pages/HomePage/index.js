import React from 'react';

import PageTemplate from 'templates/PageTemplate';
import Header from 'organisms/Header';
import Hero from 'organisms/Hero';
import Footer from 'organisms/Footer';

const HomePage = () => {
  return (
    <PageTemplate header={<Header />} hero={<Hero />} footer={<Footer />}>
      home
    </PageTemplate>
  );
};

export default HomePage;