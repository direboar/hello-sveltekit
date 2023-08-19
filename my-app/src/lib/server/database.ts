// In a real app, this data would live in a database,
// rather than in memory. But for now, we cheat.
const db: Map<string, todo[]> = new Map();

export type todo = {
    id: string
    description: string,
    done: boolean
}

export function getTodos(userid: string): todo[] {
    if (!db.get(userid)) {
        db.set(userid, [{
            id: crypto.randomUUID(),
            description: 'Learn SvelteKit',
            done: false
        }]);
    }

    let retVal = db.get(userid);
    if (!retVal) {
        throw new Error()
    } else {
        return retVal
    }
}

export function createTodo(userid: string, description: string): void {

    if (description === '') {
        throw new Error('todo must have a description');
    }

    const todos = db.get(userid);

    if (todos) {
        if (todos.find((todo) => todo.description === description)) {
            throw new Error('todos must be unique');
        }
        todos.push({
            id: crypto.randomUUID(),
            description,
            done: false
        });
    } else {
        db.set(userid, [{
            id: crypto.randomUUID(),
            description,
            done: false
        }])
    }
}

export function deleteTodo(userid: string, todoid: string): void {
    const todos = db.get(userid);
    if (todos) {
        const index = todos.findIndex((todo) => todo.id === todoid);

        if (index !== -1) {
            todos.splice(index, 1);
        }
    }
}
