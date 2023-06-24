import EventList from '@/components/events/event-list'
import Button from '@/components/ui/button'
import { getFilteredEvents } from '@/data/dummy-data'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

function FilteredEventsPage() {
  const router = useRouter()
  const slug = router.query.slug
  if (!slug) {
    return <p className='center'>Loading...</p>
  }

  const filterYear = slug[0]
  const filteredMonth = slug[1]
  const numYear = +filterYear
  const numMonth = +filteredMonth

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <p>Invalid Filter, please Update your values!!!</p>
        <div className='center'>
          <Button link='/events'>Show all Events</Button>
        </div>
      </Fragment>
    )
  }

  const filterEvents = getFilteredEvents({ year: numYear, month: numMonth })

  if (!filterEvents || filterEvents.length === 0) {
    return (
      <Fragment>
        <p>No Events Found !!!</p>
        <div className='center'>
          <Button link='/events'>Show all Events</Button>
        </div>
      </Fragment>
    )
  }

  return (
    <div>
      <EventList items={filterEvents} />
    </div>
  )
}

export default FilteredEventsPage
