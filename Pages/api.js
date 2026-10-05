//import { url } from "inspector"



export class baseapi{




    constructor(request){
        this.request=request
        this.baseURL='https://reqres.in/api'
    }
    async get(url){

       return  await this.request.get(`${this.baseURL}${url}`)
    }
    async post(url,body){

        return await this.request.post(`${this.baseURL}${url}`,{
            data:body
        })

    }


     async put(url,body){

        return await this.request.put(`${this.baseURL}${url}`,{
            data:body
        })

    }

    async delete(url){

        return await this.request.delete(`${this.baseURL}${url}`)
    }

}