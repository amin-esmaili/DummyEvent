import { getAllEvents } from "../../dummy-data";

import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/evens_search";
import { useRouter } from "next/router";
import { Fragment } from "react";

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();
  function findEventsHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }
  return (
    <Fragment>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </Fragment>
  );
}
export default AllEventsPage;
