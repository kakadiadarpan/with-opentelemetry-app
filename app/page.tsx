import Link from 'next/link'
import { fetchGithubStars } from '../shared/fetch-github-stars'

export default async function IndexPage() {
    const stars = await fetchGithubStars()
  return (
    <>
      <p>Next.js has {stars} ⭐️</p>
      <p>This is an app router page as server component</p>
      <Link href="/legacy">Legacy page</Link>
      <br />
      <Link href="/server-actions">App router page with server actions</Link>
      <br />
      <Link href="/client-render">App router page with client render</Link>
    </>
  )
}
