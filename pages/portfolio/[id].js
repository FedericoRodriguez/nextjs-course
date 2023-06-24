import { useRouter } from 'next/router'

function PortfolioProjectPage() {
  const router = useRouter()

  const path = router.pathname
  const query = router.query

  console.log('PATH :', path)

  console.log('QUERYS :', query)
  return (
    <div>
      <h1>Portfolio Project Page</h1>
    </div>
  )
}

export default PortfolioProjectPage
