import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  public getData (){
    return this.httpClient.get('https://localhost:44323/api/Member');
  }
}
