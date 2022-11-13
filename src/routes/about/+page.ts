/** @type {import('./$types').PageLoad} */
export async function load() {
  const data = await fetch('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20');
  const json = await data.json();

  return {
    title: 'About',
    content: 'Some content here, and some content. Some content here, and some content.',
    pokemon: json.results
  };
}