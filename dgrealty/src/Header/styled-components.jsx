import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 90px;
  box-sizing: border-box;
`;

export const Logo = styled.img`
  margin-left: 150px;
`;

export const Menu = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-end;
  margin-right: 150px;
  margin-top: 30px;
  font-family: Verdana, Sans-serif;
  font-size: 13px;
`;

export const MenuItems = styled.div`
  padding: 13px 30px;
`;

export const Span = styled.span`
  cursor: pointer;
`;
