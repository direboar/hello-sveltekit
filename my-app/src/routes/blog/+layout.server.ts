import { posts } from "./data.js"
import type { LayoutServerLoad } from './$types.js';

export const load = (async () => {
    return {
        summaries: posts.map(post => ({
            slug: post.slug,
            title: post.title,
        }))
    }
}) satisfies LayoutServerLoad
