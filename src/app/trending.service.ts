import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrendingService {
  private myKey: string=  "442ce21d7fa462c38e1e1a172d690642";
  constructor(private _HttpClient: HttpClient) { }
  getTrending(mediaType:string): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=${this.myKey}`);
  }
}
