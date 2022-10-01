export function saveToDoApi(id) {
    return new Promise((resolve) =>
        setTimeout(() => resolve({ id,text:"Dummy" }), 500)
    );
}
export async function apiFetchAllTodos()
{
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    return response.json();
}