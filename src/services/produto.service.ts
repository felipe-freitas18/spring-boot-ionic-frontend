import { API_CONFIG } from '../config/api.config';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProdutoService {

    constructor(public http: HttpClient){
    }

    findAllByCategoria(categoria_id: string)  {
        return this.http.get(`${API_CONFIG.base_Url}/produtos?categorias=${categoria_id}`);
    }

    getSmallImageFromBucket(id: string) : Observable<any>{
        let url = `${API_CONFIG.bucketBase_Url}/prod${id}-small.jpg`;
        return this.http.get(url, {responseType: 'blob'});
    }

}