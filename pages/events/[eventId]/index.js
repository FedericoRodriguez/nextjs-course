import { getEventById } from '@/data/dummy-data'
import { useRouter } from 'next/router'

function EventDetailPage() {
  const router = useRouter()
  const query = router.query
  const selectedEvent = getEventById(query.eventId)

  if (!selectedEvent) {
    return <p>Error Event Datil, please try again!</p>
  }

  return (
    <div>
      <h1>{selectedEvent.title}</h1>
    </div>
  )
}

export default EventDetailPage
