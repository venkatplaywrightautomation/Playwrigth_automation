
import { request } from 'http';
import { baseapi } from '../Pages/api.js'

export class userapi extends baseapi{

constructor(request){

    super(request)
}

async createUser(userData){
    return await this.post(`/users`,userData)
}

    async getUser(id) {
        return await this.get(`/users/${id}`);
    }

    async updateUser(id, userData) {
        return await this.put(`/users/${id}`, userData);
    }

    async deleteUser(id) {
        return await this.delete(`/users/${id}`);
    }

}


