import { useState } from "react";
import { useFetch } from "../../util-hooks/useFetch";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm(props) {
  // listado de todos los meetups llegado por props desde App.js
  const { meetupData } = props;
  // state inicial con un objeto vacío donde alamacenaremos los campos del formulario
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    address: "",
    description: "",
  });
  // función onChange para leer los datos de los inputs y guardarlos en el state
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // función submit para crear el meetup en el momento de pulsar el boton
  const submitHandler = (event) => {
    event.preventDefault();
    // añado el meetup nuevo a la array de meetupData
    meetupData.push({ id: `m${meetupData.length + 1}`, ...formData });
    // lo guardo en localStorage, cada vez que se cree un meetup nuevo se sustituirá la array para añadir el nuevo
    localStorage.setItem("meetupList", JSON.stringify(meetupData));
    // vacío el formulario una vez todo creado
    setFormData({ title: "", image: "", address: "", description: "" });
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input
            name="title"
            value={formData.title}
            type="text"
            required
            id="title"
            onChange={handleChange}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input
            name="image"
            value={formData.image}
            type="url"
            required
            id="image"
            onChange={handleChange}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input
            name="address"
            value={formData.address}
            type="text"
            required
            id="address"
            onChange={handleChange}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            value={formData.description}
            id="description"
            required
            rows="5"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
