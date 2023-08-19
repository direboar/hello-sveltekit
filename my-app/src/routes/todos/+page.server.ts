import * as db from '$lib/server/database';
import { fail } from '@sveltejs/kit'
import type { PageServerLoad, Actions } from './$types.js';

export const load = (async ({ cookies }) => {
    const id = cookies.get('userid');

    if (!id) {
        cookies.set('userid', crypto.randomUUID(), { path: '/' });
        return {
            todos: []
        }
    } else {
        return {
            todos: db.getTodos(id)
        };
    }
}) satisfies PageServerLoad

export const actions = {
    create: async ({ request, cookies }) => {
        //意図的に1秒遅延させる
        await new Promise((fulfil) => setTimeout(fulfil, 1000));

        const data = await request.formData()
        let userid = cookies.get('userid')
        let description = data.get('description')?.toString()
        if (userid !== undefined && description !== undefined) {
            try {
                db.createTodo(userid, description);
            } catch (error) {
                if (error instanceof Error) {
                    return fail(
                        422,
                        {
                            description: description,
                            error: error.message
                        }
                    )
                } else {
                    //発生しない
                    throw error
                }
            }
        }
    },
    delete: async ({ request, cookies }) => {
        const data = await request.formData()
        let userid = cookies.get('userid')
        let id = data.get("id")?.toString()
        if (userid !== undefined && id !== undefined) {
            db.deleteTodo(userid, id);
        }
    }
} satisfies Actions

