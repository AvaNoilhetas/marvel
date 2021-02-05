import Character from "../components/Character";
import Comic from "../components/Comic";
const Bookmark = props => {
  console.log(props.bookmarkComic);
  console.log(props.bookmarkCharacter);
  return (
    <>
      <h1>CHARACTERS</h1>
      {props.bookmarkCharacter &&
        props.bookmarkCharacter.map((character, index) => {
          return (
            <Character
              key={character._id}
              setBookmarkCharacter={props.setBookmarkCharacter}
              bookmarkCharacter={props.bookmarkCharacter}
              {...character}
            />
          );
        })}
      <hr />
      <h1>COMICS</h1>
      {props.bookmarkComic &&
        props.bookmarkComic.map((comic, index) => {
          return (
            <Comic
              key={comic._id}
              setBookmarkComic={props.setBookmarkComic}
              bookmarkComic={props.bookmarkComic}
              {...comic}
            />
          );
        })}
    </>
  );
};

export default Bookmark;
