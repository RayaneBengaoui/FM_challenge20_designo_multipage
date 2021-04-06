import { Switch, Route } from "react-router-dom";

import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import WebDesign from "./pages/WebDesign";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <h1>hello designo</h1>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/webdesign" exact>
          <WebDesign />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
