

//export class apiUsers {



   export class apiUsers {

    constructor(request) {
        this.request = request;
    }

    async get(endpoint, options = {}) {
        return await this.request.get(endpoint, options);
    }

    async post(endpoint, data, options = {}) {
        return await this.request.post(endpoint, {
            ...options,
            data
        });
    }

    async put(endpoint, data, options = {}) {
        return await this.request.put(endpoint, {
            ...options,
            data
        });
    }

    async delete(endpoint, options = {}) {
        return await this.request.delete(endpoint, options);
    }
}