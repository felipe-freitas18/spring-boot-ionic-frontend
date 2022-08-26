import { API_CONFIG } from './../config/api.config';
import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { ClienteDTO } from '../models/cliente.dto';
import { StorageService } from './storage.service';

@Injectable()
export class ClienteService {

    constructor(public http: HttpClient, public storage: StorageService){

    }

    findByEmail(email: string) {
        return this.http.get(`${API_CONFIG.base_Url}/clientes/email?email=${email}`);
    }

    findById(id: string) {
        return this.http.get(`${API_CONFIG.base_Url}/clientes/${id}`);
    }

    getImageFromBucket(id: string) : Observable<any>{
        let url = `${API_CONFIG.bucketBase_Url}/cp${id}.jpg`;
        return this.http.get(url, {responseType: 'blob'});
    }

    insert(obj: ClienteDTO){
        return this.http.post(
            `${API_CONFIG.base_Url}/clientes`,
            obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }
}