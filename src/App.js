import { Switch, Route } from "react-router-dom";
import { useState } from "react";

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
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/webdesign" exact>
          <WebDesign />
        </Route>
      </Switch>
      <Footer callAction={callAction} />
    </div>
  );
}

export default App;
