import { RouterModule,Router,NavigationEnd } from '@angular/router';
import { Component,OnInit } from '@angular/core';
import{NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router:Router,private spinnerService:NgxSpinnerService){
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        if(event.url==='/'){
          this.hideElement=true;
        }
        else{
          this.hideElement=false;
        }
      }
    });
  }
  ngOnInit(){
    this.spinner();
  }
  spinner():void{
    this.spinnerService.show();
    setTimeout(()=>{
      this.spinnerService.hide();
    },2000);
  }
  public hideElement:boolean=false;
  title = 'Restaurant Finder';
}
