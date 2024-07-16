export const inServer = () => {
    fetch('https://playground.4geeks.com/todo/users/enrjon',{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(resp => {
        console.log(resp.ok); // Will be true if the response is successful
        console.log(resp.status); // The status code=200 or code=400 etc.
        return resp.json(); // (returns promise) Will try to parse the result as JSON and return a promise that you can .then for results
    })
    .then(json => {
        console.log('In server:'+json); // This will print on the console the exact object received from the server
        return json
    })
    .catch(error => {
        // Error handling
        console.error(error);
    })
}