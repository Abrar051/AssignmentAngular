import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-datafetch',
  templateUrl: './datafetch.component.html',
  styleUrls: ['./datafetch.component.css']
})
export class DatafetchComponent implements OnInit {

  memberData:string | undefined;

  constructor(private apiService:ApiService) { }

  ngOnInit(): void {

    this.apiService.getData().subscribe((data)=>{
      console.log(data);
      this.memberData=JSON.stringify(data);
      console.log(this.memberData);
    });
  
  }

}
