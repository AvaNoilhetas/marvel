import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Bookmarks from "./pages/Bookmarks";
import Character from "./pages/Character";
import Comics from "./pages/Comics";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/character/:id">
          <Character />
        </Route>
        <Route path="/comics">
          <Comics />
        </Route>
        <Route path="/bookmarks">
          <Bookmarks />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*"></Route>
      </Switch>
    </Router>
  );
}

export default App;
