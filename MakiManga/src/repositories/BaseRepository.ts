export class BaseRepository {
    // Properties
    private host: string = "http://localhost:5500";

    // Methods
    protected request = async (path: string, method: string = "GET", body?: {}): Promise<any> => {
        try {
            let options: RequestInit = {method}; // {method: method}
            // Build body
            if(body != undefined) {
                options.body = JSON.stringify(body); //{method: method, body: body}
            }
            // Build headers
            if (method != "GET" && method != "DELETE") {
                options.headers = {
                    'Content-Type': 'application/json',
                }; //{method: method, body: body, headers: {'Content-Type': 'application/json'}}
            }
            let response: Response = await fetch(this.host + path, options);

                // Check if response is successful
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Check if response is JSON
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                return await response.json();
            } else {
                // If response is not JSON, you may want to handle it accordingly
                return await response.text(); // or handle in a way that suits your needs
            }
            // return await response.json();
        } catch (e) {
            console.log(e);
        }
    }
}