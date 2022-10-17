import {TodoItem} from "./todoSlice";

function jsonItemsToDoItems(items:Array<any>):Array<TodoItem>
{
    return items.map((item:any)=> ({
       id : item.id,
       text : item.title
    }));
}
export function apiGetAllTodos()
{
    let url = 'https://jsonplaceholder.typicode.com/todos';
    console.log('API ',url);
    return fetch(url)
        .then(response=>response.json())
        .then(items=>jsonItemsToDoItems(items));

}