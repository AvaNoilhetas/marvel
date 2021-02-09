import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import "./app.scss";
import Header from "./components/Header";
import Bookmarks from "./pages/Bookmarks";
import Character from "./pages/Character";
import Comics from "./pages/Comics";
import Home from "./pages/Home";

const App = () => {
  const [bookmarkComic, setBookmarkComic] = useLocalStorage(
    "bookmarkComic",
    ""
  );
  const [bookmarkCharacter, setBookmarkCharacter] = useLocalStorage(
    "bookmarkCharacter",
    ""
  );

  return (
    <div className="container border-4 border-dark bg-gray px-0">
      <Router>
        <Header />
        <Switch>
          <Route path="/character/:id">
            <Character
              setBookmarkComic={setBookmarkComic}
              bookmarkComic={bookmarkComic}
            />
          </Route>
          <Route path="/comics">
            <Comics
              setBookmarkComic={setBookmarkComic}
              bookmarkComic={bookmarkComic}
            />
          </Route>
          <Route path="/bookmarks">
            <Bookmarks
              setBookmarkComic={setBookmarkComic}
              setBookmarkCharacter={setBookmarkCharacter}
              bookmarkComic={bookmarkComic}
              bookmarkCharacter={bookmarkCharacter}
            />
          </Route>
          <Route path="/">
            <Home
              setBookmarkCharacter={setBookmarkCharacter}
              bookmarkCharacter={bookmarkCharacter}
            />
          </Route>
          <Route path="*"></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
