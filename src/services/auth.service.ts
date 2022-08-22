import { StorageService } from './storage.service';
import { LocalUser } from './../models/local_user';
import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthService {

    jwthelper : JwtHelper = new JwtHelper();

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
        let tok = authorizationValue.substring(7);
        let user: LocalUser = {
            token: tok,
            email: this.jwthelper.decodeToken(tok).sub,
        };
        this.storage.setLocalUser(user);

    }

    logou(){
        this.storage.setLocalUser(null);
    }
}