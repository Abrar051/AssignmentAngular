import { Component,NgModule , OnInit } from '@angular/core';
import { HttpClientModule,HttpClient } from "@angular/common/http";
import { RestService } from './rest.service';
import { Member } from 'src/model/Member';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-assignment';
  private data:any = []
  columns = ["Id","FirstName","LastName"];
  index =["id","firstName","lastName"]
  members: Member[]=[];
  constructor(private rs:RestService , private httpClient:HttpClient) {}

  ngOnInit():void{
    this.rs.getData().subscribe
    (
      (response)=>
      {
        this.members = response;
      },

      (error)=>
      {
        console.log("Error Occured : "+error);
      }
    )
  }
  

  
}





 