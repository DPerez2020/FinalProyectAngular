import { rejects } from 'assert';
import { element } from 'protractor';
import { ProviderService } from './../../service/provider/provider.service';
import { AuthService } from './../../service/auth/auth.service';
import { FirebaseCRUDService } from './../../service/firebaseCRUD/firebase-crud.service';
import { Component, OnInit } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

  PageActual:number=1;
  constructor(private firebaseCrud:FirebaseCRUDService,private auth:AuthService,private provider:ProviderService) { }

  restaurantData:any;
  items=[];
  items2;

  async ngOnInit() {
    this.auth.isAuth().then(data=>{
      let userId=data.uid;      
      this.firebaseCrud.getReservations(userId).snapshotChanges().subscribe(action=>{
        action.forEach(element => {        
          this.items.push({key:element.key,list:element.payload.val()})
        });  
        console.log(this.items);
        this.loaddata();
      });
    });
  }
  loaddata(){
    this.items2=[];
    this.items.forEach((element,index)=>{
      this.getrestaurant(element.list.RestaurantId).then((data:any)=>{
        this.items2.push({key:element.key,index:index,restaurant:data.name,Date:element.list.Date,Time:element.list.Time,Size:element.list.TableSize});
      });
    });
    this.items=[];
    
  }
   async getrestaurant(resturantId){
    return await new Promise((resolve,rejects)=>{
      this.provider.getSingleRestaurant(resturantId).subscribe((data:any)=>{
        resolve(data);
      })
    });
  }
  eliminar(id){
    this.firebaseCrud.deleteReservation(id);
  }
}
