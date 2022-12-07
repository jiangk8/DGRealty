import React from "react";
import { Container } from "./styled-components.jsx";
import Router from "./Router";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function App() {
  return (
    <Container>
      <Header />
      <Router />
      <Footer />
    </Container>
  );
}

export default App;
