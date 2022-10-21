import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

export default function FavoritesPage(props) {
  const { favoritesList, setFavoritesList, removeFavorites } = props;

  const favoritesMap = () => {
    if (favoritesList) {
      return favoritesList.map((favorite, i) => {
        return (
          <li key={i} className={classes.item} data-test="meet-up-item">
            <MeetupItem
              data={favorite}
              favoritesList={favoritesList}
              setFavoritesList={setFavoritesList}
              onClick={removeFavorites}
              buttonText="Remove from favorites"
            />
          </li>
        );
      });
    }
  };

  return (
    <section>
      {!favoritesList ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>My Favorites</h1>
          {favoritesList.length === 0 ? (
            <p> No favorites yet </p>
          ) : (
            <>
              <ul className={classes.list}>{favoritesMap()}</ul>
            </>
          )}
        </>
      )}
    </section>
  );
}
