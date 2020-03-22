import { ProviderService } from './../../service/provider/provider.service';
import { FirebaseCRUDService } from './../../service/firebaseCRUD/firebase-crud.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private id:any;
  restaurantData:any;

  constructor(private _route:ActivatedRoute,private FirebaseCRUDService:FirebaseCRUDService,private provider:ProviderService) { 
    this.id=this._route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.provider.getSingleRestaurant(this.id).subscribe(data=>{
      this.restaurantData=data;
    });
    
  }

}
