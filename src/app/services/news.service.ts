import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable  } from 'rxjs';
import { News } from '../News'
@Injectable({
    providedIn: 'root'
  })
  export class NewsService {
    api = 'https://jsonplaceholder.typicode.com/posts';
    constructor(
      private http : HttpClient,
    ) { }
  
    getNewFromApi(): Observable<News[]>{
      return this.http.get<News[]>(this.api);
    }
}