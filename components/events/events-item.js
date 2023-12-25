import classes from "./event-item.module.css";
import Button from "../ui/button";
import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
function EventItem(props) {
  const { title, image, date, location, id } = props;
  const formattedAdress = location.replace(",", "\n");
  const exploreLink = `/events/${id}`;
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>TITLE: {title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>DATE: {date}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>ADDRESS: {formattedAdress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>
            <span>exploreLink</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
export default EventItem;
