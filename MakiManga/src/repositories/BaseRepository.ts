export abstract class BaseRepository {
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
            // const contentType = response.headers.get('Content-Type');

            // if (contentType && contentType.includes('application/json')) {
            //     return await response.json();
            // } else {
            //     return null
            // }
            return await response.json();
        } catch (e) {
            console.log('Erreur dans la base repo',e);
        }
    }
}