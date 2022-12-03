/** @type {import('./$types').PageLoad} */
export async function load() {
  const data = await fetch('https://www.learnwithjason.dev/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
          query GetLearnWithJasonEpisodes($now: DateTime!) {
            allEpisode(limit: 10, sort: {date: ASC}, where: {date: {gte: $now}}) {
              date
              title
              guest {
                name
                twitter
              }
              description
            }
          }
        `,
      variables: {
        now: new Date().toISOString(),
      },
    }),
  })
  const json = await data.json();
  //console.log(json.data.allEpisode);

  return {
    title: 'About',
    content: 'Some content here, and some content. Some content here, and some content.',
    movies: json.data.allEpisode
  };
}