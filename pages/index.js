import { Fragment } from "react";
import EventsSearch from "../components/events/evens_search";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const deaturedEvents = getFeaturedEvents();
  return (
    <Fragment>
      <EventsSearch />
      <EventList items={deaturedEvents} />
    </Fragment>
  );
}
export default HomePage;
