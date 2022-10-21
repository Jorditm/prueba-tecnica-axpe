import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import { useFetch } from "./util-hooks/useFetch";

function App() {
  // variable donde alamaceno a través de fetch el listado de meetups que hay en data.json
  // como props le envio url, method, name
  let [meetupData] = useFetch({
    url: "/data.json",
    method: "GET",
    name: "meetupList",
  });

  // creo un state donde se alamacenará una array con los meetups favoritos
  // en el state inicial añadimos un concidional donde leerá los datos de localStorage en el elemento seleccionado,
  // en caso de que no haya nada, creara una array vacía

  const [favoritesList, setFavoritesList] = useState(
    JSON.parse(localStorage.getItem("favoriteList")) || []
  );

  // función que tiene como argumento el elemento meetup seleccionado para añadir meetups al state de favoritos previamente creado
  const addFavorites = (meetup) => {
    // copia profunda del state de tipo array de favoritos
    let localList = JSON.parse(JSON.stringify(favoritesList));
    // condicional para ver si hay elementos en el state
    // en caso de no haber elementos, añadirá el seleccionado
    if (favoritesList.length === 0) {
      setFavoritesList([meetup]);
      // en caso de cumplirse la condición, pusheo el elemento seleccionado a la array localList
      // en caso de guardarlo en una base de datos, creamos una ruta POST añadiendo la array a la BBDD
      localList.push(meetup);
      localStorage.setItem("favoriteList", JSON.stringify(localList));
    } else if (
      // en caso de haber elementos en el state y no coincidir el ID, añadira el elemento
      favoritesList.length > 0 &&
      !favoritesList.find((favorite) => favorite.id === meetup.id)
    ) {
      setFavoritesList([...favoritesList, meetup]);
      // en caso de cumplirse la condición, pusheo el elemento seleccionado a la array localList
      // en caso de guardarlo en una base de datos, creamos una ruta POST añadiendo la array a la BBDD
      localList.push(meetup);
      localStorage.setItem("favoriteList", JSON.stringify(localList));
    } else if (
      // en caso de haber elementos en el state y coincidir el ID, no hará nada
      favoritesList.length > 0 &&
      favoritesList.find((favorite) => favorite.id === meetup.id)
    ) {
      return;
    }
  };
  // función que tiene como argumento el elemento seleccionado para eleminar del state de tipo array el meetup existente en la array
  const removeFavorites = (favorite) => {
    if (favoritesList.length > 0) {
      const newArray = favoritesList.filter((item) => item.id !== favorite.id);
      setFavoritesList([...newArray]);
      // metodo setItem para borrar el elemento que llega como argumento de la función
      // en caso de tener que borrarlo de una base de datos se crearía una ruta POST donde pasamos el argumento de la 
      // funcion que es el objeto a borrar o se setearía toda la array complemnta ya filtrada del state
      localStorage.setItem("favoriteList", JSON.stringify([...newArray]));
      // condicional que lee el numero de argumentos existentes en favoriteList de localStorage, en caso de ser 0, borra el item
      if (JSON.parse(localStorage.getItem("favoriteList")).length === 0) {
        localStorage.removeItem("favoriteList");
      }
    }
  };
  // rutas creadas a partir de react-router-dom para poder mostrar en la URL en que ruta estamos
  // enviamos parametros tales como state y funciones para trabajar con ellos, se crean aquí para trabajar con ellos de forma global
  // e interatuar en las diferentes páginas
  return (
    <Router data-test="app">
      <MainNavigation favoritesList={favoritesList} />
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <AllMeetupsPage
                meetupData={meetupData}
                favoritesList={favoritesList}
                setFavoritesList={setFavoritesList}
                addFavorites={addFavorites}
              />
            }
          ></Route>
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                favoritesList={favoritesList}
                setFavoritesList={setFavoritesList}
                removeFavorites={removeFavorites}
              />
            }
          ></Route>
          <Route
            path="/new"
            element={<NewMeetupsPage meetupData={meetupData} />}
          ></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
