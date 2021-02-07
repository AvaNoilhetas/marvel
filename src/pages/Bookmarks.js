import Character from "../components/Character";
import Comic from "../components/Comic";
const Bookmark = props => {
  console.log(props.bookmarkComic);
  console.log(props.bookmarkCharacter);
  return (
    <>
      <section className="container">
        <h1>CHARACTERS</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4">
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
        </div>
      </section>
      <section className="container">
        <h1>COMICS</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4">
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
        </div>
      </section>
    </>
  );
};

export default Bookmark;
