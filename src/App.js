import { Switch, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";

import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WebDesign from "./pages/WebDesign";
import AppDesign from "./pages/AppDesign";
import GraphicDesign from "./pages/GraphicDesign";
import Locations from "./pages/Locations";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const location = useLocation();
  const [callAction, setCallAction] = useState(true);

  useEffect(() => {
    location.pathname === "/contact"
      ? setCallAction(false)
      : setCallAction(true);
  }, [location.pathname]);

  return (
    <AppStyle className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/webdesign" exact>
            <WebDesign />
          </Route>
          <Route path="/appdesign" exact>
            <AppDesign />
          </Route>
          <Route path="/graphicdesign" exact>
            <GraphicDesign />
          </Route>
          <Route path="/locations" exact>
            <Locations />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer callAction={callAction} />
    </AppStyle>
  );
}

const AppStyle = styled.div`
  @media screen and (min-width: 700px) {
    body {
      overflow: auto;
    }
  }
`;

export default App;
