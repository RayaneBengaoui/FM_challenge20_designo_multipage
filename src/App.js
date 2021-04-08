import { Switch, Route } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import WebDesign from "./pages/WebDesign";

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
        </Switch>
      </AnimatePresence>
      <Footer callAction={callAction} />
    </div>
  );
}

export default App;
