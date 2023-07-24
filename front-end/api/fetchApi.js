const urlApi = 'http://localhost:3000/';

const fetchApi = async (endpoint, method, body) => {
    const request = await fetch(urlApi + endpoint, {
        method: method,
        body: body ? JSON.stringify(body) : undefined,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    const response = await request.json();
    return response;
}