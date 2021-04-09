import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WebDesign from "./pages/WebDesign";
import AppDesign from "./pages/AppDesign";
import GraphicDesign from "./pages/GraphicDesign";
import Locations from "./pages/Locations";

function App() {
  const [callAction, setCallAction] = useState(true);

  return (
    <div className="App">
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
        </Switch>
      </AnimatePresence>
      <Footer callAction={callAction} />
    </div>
  );
}

export default App;
