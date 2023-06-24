import { useRouter } from 'next/router'

function SelectedClientsProjectsPage() {
  const router = useRouter()
  const query = router.query

  console.log('QUERY', query)
  return (
    <div>
      <h1>Selected Clients Projects Page - {query.id}</h1>
    </div>
  )
}

export default SelectedClientsProjectsPage
