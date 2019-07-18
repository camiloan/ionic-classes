import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RespuestaTopHeadlines} from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';
 
const apiKey=environment.apikey;
const apiUrl=environment.apiUrl;
const headers= new HttpHeaders({
  'X-Api-key':apiKey
});
@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) {}
  private ejecutarQuery<T>(query:string){
    query = apiUrl + query;
    return this.http.get<T>(query,{headers});
  }
  getTopHeadlines(){
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us`);
    // return this.http.get<RespuestaTopHeadlines>('https://newsapi.org/v2/top-headlines?country=us&apiKey=9451f6629e9347ec9e90c0f566860db6');
  }
  getTopHeadlinesCategoria(categoria:string){
    return this.ejecutarQuery<RespuestaTopHeadlines>(`/top-headlines?country=us&category=${categoria}`);
    // return this.http.get<RespuestaTopHeadlines>('https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=9451f6629e9347ec9e90c0f566860db6');
  }
}
