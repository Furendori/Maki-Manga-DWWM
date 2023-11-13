export const request = async (path: string, method: string = "GET", body: object = {}) => {
    try {
        let options: RequestInit = {method}; // {method: method}
        // Build body
        if(body != null) {
            options.body = JSON.stringify(body); //{method: method, body: body}
        }
        // Build headers
        if (method != "GET" && method != "DELETE") {
            options.headers = {
                'Content-Type': 'application/json',
            }; //{method: method, body: body, headers: {'Content-Type': 'application/json'}}

        }
        let response: Response = await fetch("http://localhost:5500" + path, options);
        return await response.json();
    } catch (e) {
        console.log(e);
    }
}