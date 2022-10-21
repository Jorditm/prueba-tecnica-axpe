import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

export default function MeetupItem(props) {
  const { id, title, image, address, description } = props.data;
  const { buttonText, onClick } = props;

  return (
    <Card>
      <div className={classes.image}>
        <img src={image} alt={title} />
      </div>
      <div className={classes.content}>
        <h3>{title}</h3>
        <address>{address}</address>
        <p>{description}</p>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={() => onClick(props.data)}>
          {buttonText}
        </button>
      </div>
    </Card>
  );
}
