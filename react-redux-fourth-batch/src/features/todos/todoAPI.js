export function saveToDoApi(id) {
    return new Promise((resolve) =>
        setTimeout(() => resolve({ id,text:"Dummy" }), 500)
    );
}
