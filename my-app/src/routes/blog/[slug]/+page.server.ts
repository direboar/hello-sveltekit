import { posts } from "../data.js"
import type { Post } from "../post"
import type { PageServerLoad } from './$types.js';

export const load = (async ({ params }) => {
    const post = posts.find((post: Post) => post.slug === params.slug)
    if (!post) throw new Error()
    return post
}) satisfies PageServerLoad

