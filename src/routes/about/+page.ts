/** @type {import('./$types').PageLoad} */
import 'dotenv/config';
const hasuraAdminSecret = process.env.X_HASURA_ADMIN_SECRET;
export async function load() {
  const data = await fetch('https://apps.crewnew.com/v1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Hasura-Admin-Secret': hasuraAdminSecret,
    },
    body: JSON.stringify({
      query: `
          query CmsPagesByParent {
            cms_pages(where: {parent: {_eq: 57}, status: {_eq: "published"}}, order_by: {sort: asc}) {
              sort
              url_alias
              menu_title
              title
              title2
              image_main
              description
              title_tag
              title_og
              meta_description
              description_og
              image_og
              cms_pages_cms_page_contents {
                sort
                cms_page_content {
                  order
                  name
                  content
                  image
                }
              }
            }
          }
        `,
    }),
  })
  const json = await data.json();
  console.log(json.data.cms_pages);

  return {
    title: 'About',
    content: 'Some content here, and some content. Some content here, and some content.',
    cms: json.data.cms_pages
  };
}