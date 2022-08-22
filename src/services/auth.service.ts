import { StorageService } from './storage.service';
import { LocalUser } from './../models/local_user';
import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../models/credenciais.dto";

@Injectable()
export class AuthService {

    constructor(public http: HttpClient, public storage : StorageService){

    }

    authenticate(creds: CredenciaisDTO) { 
        return this.http.post(`${API_CONFIG.base_Url}/login`, 
        creds,
         {
            observe:'response',
            responseType:'text' 
        })
    }

    successFulLogin(authorizationValue : string ){
        console.log(authorizationValue)
        let tok = authorizationValue.substring(7);
        let user: LocalUser = {
            token: tok
        };
        this.storage.setLocalUser(user);

    }

    logou(){
        this.storage.setLocalUser(null);
    }
}