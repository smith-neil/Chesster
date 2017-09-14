import React from 'react';
import styled from 'styled-components';
import { palette } from 'styled-theme';

const Wrapper = styled.div`
  background-color: ${palette('grayscale', 1, true)};
  padding: 2rem;
`;

const Footer = (props) => {
  return (
    <Wrapper {...props}>
      Footer
    </Wrapper >
  );
};

export default Footer;