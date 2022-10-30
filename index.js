// Add your code here

function submitData(name, email) {
    const userObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`,
        }),
    };
    return fetch("http://localhost:3000/users", userObj)
    .then(resp => resp.json())
    .then(body => newUser(body.id))
    .catch(error => document.body.innerHTML = error.message)
}

function newUser(newID){
    document.getElementsByTagName("body")[0].innerHTML = newID;
    document.body.append(newID)
}