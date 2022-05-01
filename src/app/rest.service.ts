import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {HttpClient} from "@angular/common/http";
import { Member } from 'src/model/Member';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private httpClient:HttpClient) { }

  public getData (){
    return this.httpClient.get<Member[]>('https://localhost:44323/api/Member');
  }

}
