import { useState, useEffect } from "react";

export const useFetch = ({ url, method, name }) => {
  // hook personalizado para obtener datos de cualquier JSON, dependiendo de donde lo llames y los datos que le envies
  const [data, setData] = useState(null);
  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem(name));

    // condicional donde seteará data con localStorage, en caso de haber datos, o por fetch
    localData
      ? setData(localData)
      : fetch(url, {
          method: method,
          headers: { "Content-Type": "application/json" },
        })
          .then((response) => response.json())
          .then((json) => {
            setData(json);
          })
          .catch((err) => console.log(err));
  }, [url]);

  useEffect(() => {
    data && localStorage.setItem(name, JSON.stringify(data));
  }, [data]);

  return [data];
};
