'use client'
/**
 * Client component with fetching data in useEffect
 */
import { useEffect, useState } from 'react';

export default async function Page() {

  const [stars, setStars] = useState(null);

  useEffect(() => {
    console.log('calling useEffect');
    async function fetchStars() {
        const res = await fetch('/api/github-stars');
        const data = await res.json();
        setStars(data);
    }

    fetchStars();
  }, []);

  return (
    <>
      <p>This is a page as client component</p>
      {
        stars ? (
          <>
            <p>Next.js has {stars} ⭐️</p>
          </>
        ) : null
      }
    </>
  )
}
