import { ProviderService } from './../../service/provider/provider.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private serv:ProviderService) { }
  
  ramdom: any
  
  ngOnInit(): void {
    this.serv.getRestaurant("Chicago").subscribe((e:any)=>{
      this.ramdom = e.results;
      console.log(e);
    });
  }
}
