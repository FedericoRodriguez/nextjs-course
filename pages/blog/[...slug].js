import { useRouter } from 'next/router'
function BlogPostsPage() {
  const router = useRouter()
  const slug = router.query

  console.log('SLUG', slug)
  return (
    <div>
      <h1>Blog Posts Page</h1>
    </div>
  )
}

export default BlogPostsPage
