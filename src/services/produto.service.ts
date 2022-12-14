import { ProdutoDTO } from './../models/produto.dto';
import { API_CONFIG } from '../config/api.config';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ProdutoService {

    constructor(public http: HttpClient){
    }

    findById(produto_id: string)  {
        return this.http.get<ProdutoDTO>(`${API_CONFIG.base_Url}/produtos/${produto_id}`);
    }

    findAllByCategoria(categoria_id: string,  page: number = 0, linesPerPage: number = 24)  {
        return this.http.get(`${API_CONFIG.base_Url}/produtos?categorias=${categoria_id}&page=${page}&linesPerPage=${linesPerPage}`);
    }

    getSmallImageFromBucket(id: string) : Observable<any>{
        let url = `${API_CONFIG.bucketBase_Url}/prod${id}-small.jpg`;
        return this.http.get(url, {responseType: 'blob'});
    }

    getImageFromBucket(id: string) : Observable<any>{
        let url = `${API_CONFIG.bucketBase_Url}/prod${id}.jpg`;
        return this.http.get(url, {responseType: 'blob'});
    }
}