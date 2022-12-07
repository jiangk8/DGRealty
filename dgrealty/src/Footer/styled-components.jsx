import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  border-top: 2px solid gray;
  margin-top: 1rem;
  padding: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 15rem;
  box-sizing: border-box;
  font-family: Verdana, Sans-serif;
`;

export const Address = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre-line;
  font-size: 20px;
  line-height: 1.6;
`;

export const SocialMedia = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContactInfo = styled.div`
  width: 33.33%;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: pre-line;
  font-size: 20px;
  line-height: 1.6;
`;
