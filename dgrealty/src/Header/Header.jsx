import React from "react";
import { Container, Logo, Menu, MenuItems, Span } from "./styled-components";
import LogoImg from "../Images/LogoImg.png";

function Header() {
  return (
    <Container>
      <Logo src={LogoImg} />
      <Menu>
        <MenuItems>
          <Span>Home</Span>
        </MenuItems>
        <MenuItems>
          <Span>Listings</Span>
        </MenuItems>
        <MenuItems>
          <Span>Taxes</Span>
        </MenuItems>
        <MenuItems>
          <Span>Meet The Team</Span>
        </MenuItems>
        <MenuItems>
          <Span>Contact Us</Span>
        </MenuItems>
      </Menu>
    </Container>
  );
}

export default Header;
