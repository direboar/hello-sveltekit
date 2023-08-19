import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types.js';

export const load = (async ({ cookies }) => {
    throw redirect(307, '/about');
}) satisfies PageServerLoad

