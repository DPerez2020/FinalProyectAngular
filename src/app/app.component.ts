import { RouterModule,Router,NavigationEnd } from '@angular/router';
import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  constructor(private router:Router){
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
  public hideElement:boolean=false;
  ngOnInit(){

  }
  title = 'FinalProyectAngular';
}
