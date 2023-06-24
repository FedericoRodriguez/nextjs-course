import EventList from '@/components/events/event-list'
import EventsSearch from '@/components/events/events-search'
import { getAllEvents } from '@/data/dummy-data'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

function AllEventsPage() {
  const router = useRouter()

  const events = getAllEvents()

  console.log('Querys:', router.query)

  function findEventsHanlder(year, month) {
    const fullPath = `/events/${year}/${month}`
    router.push(fullPath)
  }

  return (
    <Fragment>
      <h1>All Events Page</h1>
      <EventsSearch onSearch={findEventsHanlder}></EventsSearch>
      <EventList items={events} />
    </Fragment>
  )
}

export default AllEventsPage
