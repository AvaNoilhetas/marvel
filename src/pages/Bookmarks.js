import Character from "../components/Character";
import Comic from "../components/Comic";
const Bookmark = props => {
  console.log(props.bookmarkComic);
  console.log(props.bookmarkCharacter);
  return (
    <>
      <section className="container my-10 px-4">
        <h1 className="text-shadow text-yellow font-secondary text-white text-4xl mb-4">
          Personnages favoris
        </h1>
        {props.bookmarkCharacter.length > 0 ? (
          <div className="container overflow-auto grid grid-flow-col-dense justify-start gap-x-4 px-0">
            {props.bookmarkCharacter.map((character, index) => {
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
        ) : (
          <div className="border border-dark bg-white p-10">
            <p className="text-center font-primary text-dark text-md">
              Vous n'avez pas encore ajoute de personnages favoris.
            </p>
          </div>
        )}
      </section>
      <section className="container mb-10 px-4">
        <h1 className="text-shadow text-yellow font-secondary text-white text-4xl mb-4">
          Comics favoris
        </h1>
        {props.bookmarkComic.length > 0 ? (
          <div className="container overflow-auto grid grid-flow-col-dense justify-start gap-x-4 px-0">
            {props.bookmarkComic.map((comic, index) => {
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
        ) : (
          <div className="border border-dark bg-white p-10">
            <p className="text-center font-primary text-dark text-md">
              Vous n'avez pas encore ajoute de comics favoris.
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default Bookmark;
