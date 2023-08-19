import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types.js';

export const load = (async ({ }) => {
    throw new Error('Kaboom!');
}) satisfies PageServerLoad