import React from "react";
import { Container } from '@mui/material';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container >
    <footer>
      <p>Copyright ⓒ {year}</p>
    </footer></Container>
  );
}

export default Footer;
