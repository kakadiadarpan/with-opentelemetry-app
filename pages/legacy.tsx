import Link from 'next/link'
import { fetchGithubStars } from '../shared/fetch-github-stars'

export async function getServerSideProps() {
  const stars = await fetchGithubStars()
  return {
    props: {
      stars,
    },
  }
}

export default function IndexPage({ stars }) {
  return (
    <>
      <p>Next.js has {stars} ⭐️</p>
      <p>This page is rendered via legacy pages directory</p>
    </>
  )
}
