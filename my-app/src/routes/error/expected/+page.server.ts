import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types.js';

export const load = (async ({ }) => {
    throw error(420, 'Enhance your calm');
}) satisfies PageServerLoad