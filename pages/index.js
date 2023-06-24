import EventList from '@/components/events/event-list'
import { getFeaturedEvents } from '@/data/dummy-data'

function HomePage() {
  const featuredEvetns = getFeaturedEvents()

  return (
    <div>
      <h1>Home page</h1>
      <ul>
        <EventList items={featuredEvetns} />
      </ul>
    </div>
  )
}

export default HomePage
