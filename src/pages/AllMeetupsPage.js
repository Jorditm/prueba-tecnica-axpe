import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

export default function AllMeetupsPage(props) {
  // mediante props procedentes de App.js llegan lo siguientes elementos que posteriormente
  // desestructuramos para no repetir tanto la palabra "props"
  const { meetupData, setFavoritesList, favoritesList, addFavorites } = props;

  // funcion que crea un map para obtener cada objeto de la array que viene de data.json
  const meetupMap = () => {
    return (
      meetupData &&
      meetupData.map((meetup, i) => {
        // cada objeto de la Array crea un componente reutilizable MeetupItem para renderizar este objeto
        return (
          <li key={i} className={classes.item} data-test="meet-up-item">
            <MeetupItem
              data={meetup}
              favoritesList={favoritesList}
              setFavoritesList={setFavoritesList}
              onClick={addFavorites}
              buttonText="Add to favorites"
            />
          </li>
        );
      })
    );
  };
  // condicional donde mira si hay datos en meetupData que llega por props
  // en caso de no haber datos mostrará "Loading..."
  // si hay datos mostrará los objetos
  return (
    <section>
      {!meetupData ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>All Meetups</h1>
          <ul className={classes.list}>{meetupMap()}</ul>
        </>
      )}
    </section>
  );
}
