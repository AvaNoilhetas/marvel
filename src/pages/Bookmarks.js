import Character from "../components/Character";
import Comic from "../components/Comic";
const Bookmark = props => {
  console.log(props.bookmarkComic);
  console.log(props.bookmarkCharacter);
  return (
    <>
      <section className="container mb-10">
        <h1 className="text-shadow text-yellow font-secondary text-white text-4xl mb-4">
          Personnages favoris
        </h1>
        <div className="container overflow-auto grid grid-flow-col-dense justify-start gap-x-4 px-0">
          {props.bookmarkCharacter &&
            props.bookmarkCharacter.map((character, index) => {
              return (
                <div key={character._id} className="w-64">
                  <Character
                    setBookmarkCharacter={props.setBookmarkCharacter}
                    bookmarkCharacter={props.bookmarkCharacter}
                    {...character}
                  />
                </div>
              );
            })}
        </div>
      </section>
      <section className="container mb-10">
        <h1 className="text-shadow text-yellow font-secondary text-white text-4xl mb-4">
          Comics favoris
        </h1>
        <div className="container overflow-auto grid grid-flow-col-dense justify-start gap-x-4 px-0">
          {props.bookmarkComic &&
            props.bookmarkComic.map((comic, index) => {
              return (
                <div key={comic._id} className="w-64">
                  <Comic
                    setBookmarkComic={props.setBookmarkComic}
                    bookmarkComic={props.bookmarkComic}
                    {...comic}
                  />
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Bookmark;
