import Link from 'next/link'

function NotFoundPage() {
  return (
    <div>
      <h1>404 - NOT FOUND!!!</h1>
      <ul>
        <li>
          <Link href='/'>Homepage</Link>
        </li>
      </ul>
    </div>
  )
}

export default NotFoundPage
