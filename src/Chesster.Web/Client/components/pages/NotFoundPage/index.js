import React from 'react';

import PageTemplate from 'templates/PageTemplate';
import Header from 'organisms/Header';
import Footer from 'organisms/Footer';

const NotFoundPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <span>404 Page not Found</span>
    </PageTemplate>
  );
};

export default NotFoundPage;