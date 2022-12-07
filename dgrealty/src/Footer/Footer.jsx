import React from "react";
import {
  Container,
  Address,
  SocialMedia,
  ContactInfo,
} from "./styled-components";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <Container>
      <ContactInfo>{"714-728-5521 \n simondgrealty@gmail.com"}</ContactInfo>
      <SocialMedia>
        <SocialIcon url='https://www.instagram.com/dgr_simon/' />
      </SocialMedia>
      <Address>{"4467 Holt Blvd \n Montclair, CA 91763"}</Address>
    </Container>
  );
}

export default Footer;
