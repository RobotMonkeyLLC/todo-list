export default function syncServer (setList) {
    fetch('https://playground.4geeks.com/todo/todos/enrjon', {
        method: "POST",
        body: JSON.stringify({label: 'enrjon', is_done: false}),
        headers: {
            "Content-Type": "application/json"
        }
        })
        .then(resp => {
            console.log(resp.ok); // Will be true if the response is successful
            console.log(resp.status); // The status code=200 or code=400 etc.
            return resp.json(); // (returns promise) Will try to parse the result as JSON and return a promise that you can .then for results
        })
        .then(data => {
            // Here is where your code should start after the fetch finishes
            setList(data.todos)
            console.log(data); // This will print on the console the exact object received from the server
        })
        .catch(error => {
            // Error handling
            console.error(error);
        });
}