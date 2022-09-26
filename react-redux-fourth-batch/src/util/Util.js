export function nextId(initial)
{
    let id = initial;
    return function()
    {
        return id++;
    }
}