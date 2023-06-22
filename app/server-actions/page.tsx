import { fetchGithubStars } from '../../shared/fetch-github-stars';

export default async function Page() {
  async function getStars(formData: FormData) {
    'use server';

    const library = formData.get('library')
    const stars = await fetchGithubStars(library as string) ;
    console.log('stars for ', library, 'are', stars);
  }

  return (
    <>
      <form action={getStars}>
      <input type="text" name="library" defaultValue="vercel/next.js" />

      <button type="submit">Submit</button>
    </form>
    </>
  )
}
