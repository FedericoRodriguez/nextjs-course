import { useRouter } from 'next/router'

function ClientsProjectsPage() {
  const router = useRouter()

  console.log(router.query)

  function loadProjectHandler() {
    // load data adn anvigate

    router.push({
      pathname: '/clients/[id]/[clientId]',
      query: { id: 'max', clientId: 'projectA' },
    })
  }

  return (
    <div>
      <h1>Clients Projects Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  )
}

export default ClientsProjectsPage
