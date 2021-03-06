import { ProviderService } from './../../service/provider/provider.service';
import { FirebaseCRUDService } from './../../service/firebaseCRUD/firebase-crud.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  private id:any;
  restaurantData:any;


  //Global variables
  reserveform: FormGroup;
  itemRef: any;
  today:string;
  constructor(private _route:ActivatedRoute,private provider:ProviderService,private router:Router,
    private firebaseCrud:FirebaseCRUDService,private formBuilder: FormBuilder) { 
    this.id=this._route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.provider.getSingleRestaurant(this.id).subscribe(data=>{
      this.restaurantData=data;
    });
    this.reserveform = this.formBuilder.group({
      TableSize: [''],
      Date: [''],
      Time:['']
    });
  }
  reservar(){
    let tablesize=this.reserveform.value.TableSize;
    let date=this.reserveform.value.Date;
    let time=this.reserveform.value.Time;
    console.log({tablesize,date,time});
    this.firebaseCrud.insertReservation(date,time,this.restaurantData.id,tablesize).then(result=>{
      alert(result);    
    });
    this.router.navigate(['reserve']);
  }

}
