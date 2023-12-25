import { useRouter } from "next/router";
import { Fragment } from "react";
import { getFilteredEvents } from "../../dummy-data";
import ErrorAlert from "../../components/ui/error-alert";
import ResultsTitle from "../../components/events/results-title";
import EventList from "../../components/events/event-list";
import Button from "../../components/ui/button";

function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;
  if (!filterData) {
    return <p className="center">Loading....</p>;
  }
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numMonth > 12 ||
    numYear < 2021 ||
    numMonth < 1
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter! </p>;
        </ErrorAlert>
        <div className="center">
          <Button Link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }
  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (filteredEvents.length === 0 || !filteredEvents) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter! </p>;
        </ErrorAlert>
        <div className="center">
          <Button Link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }
  const date = new Date(numYear, numMonth - 1);
  return (
    <Fragment>
      <ErrorAlert>
        <p>No events found for the chosen filter! </p>;
      </ErrorAlert>
      <div className="center">
        <Button Link="/events">Show All Events</Button>
      </div>
    </Fragment>
  );
}
export default FilteredEventsPage;
