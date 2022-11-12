import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export function GET({ url }:any) {
    const home = {
        title: 'Home',
        content: 'Lorem Ipsum. Lorem Ipsum. Lorem Ipsum. Lorem Ipsum.',
        url
    }

    return new Response(JSON.stringify(home));
}