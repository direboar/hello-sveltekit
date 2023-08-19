import type { PageServerLoad } from './$types.js';

export const load = (async ({ setHeaders, cookies }) => {
    //Headerを書き換える。(No-Cache等するのが一般的）
    setHeaders({ 'Content-Type': "text/html" })
    // setHeaders({ 'Content-Type': "text/plain" })

    //Cookieを取得
    const visited = cookies.get('visited')

    //Cookieをセット
    if (!visited) {
        cookies.set("visited", "true", { path: '/', maxAge: 10 })
    }

    return {
        visited: visited
    }

}) satisfies PageServerLoad
