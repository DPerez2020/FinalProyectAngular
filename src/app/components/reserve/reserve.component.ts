import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {

  PageActual:number=1;
  constructor() { }

  items=['Hola','bicht','Hola','bicht','Hola','bicht','Hola','bicht','Hola','bicht','Hola','bicht',
  'Hola','bicht','Hola','bicht','Hola','bicht','Hola','bicht','Hola','bicht','Hola','bicht',];
  ngOnInit(): void {
  }
}
