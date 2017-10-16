const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

const headers = {
    'Accept': 'application/json'
};

export const doAddition = (payload) =>
    fetch(`${api}/users/doAddition`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => {
        console.log("response"+res.body);
        return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const doSubtraction = (payload) =>
    fetch(`${api}/users/doSubtraction`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => {
        console.log("response"+res.body);
        return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const doMultiplication = (payload) =>
    fetch(`${api}/users/doMultiplication`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => {
        console.log("response"+res.body);
        return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });

export const doDivision = (payload) =>
    fetch(`${api}/users/doDivision`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    }).then(res => {
        console.log("response"+res.body);
        return res.json();
    })
        .catch(error => {
            console.log("This is error");
            return error;
        });
