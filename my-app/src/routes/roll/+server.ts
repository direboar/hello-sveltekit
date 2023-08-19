import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types'


export const GET = (async () => {
    const number = Math.floor(Math.random() * 6) + 1;
    return json(number)

}) satisfies RequestHandler
