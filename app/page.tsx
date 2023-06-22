import { fetchGithubStars } from '../shared/fetch-github-stars'

export default async function IndexPage() {
    const stars = await fetchGithubStars()
  return (
    <>
      <p>Next.js has {stars} ⭐️</p>
    </>
  )
}
