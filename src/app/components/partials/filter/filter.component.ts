import { ProviderService } from './../../../service/provider/provider.service';
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
//import {CreateNewAutocompleteGroup, SelectedAutocompleteItem, NgAutoCompleteComponent} from "ng-auto-complete";
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
  providers:[ProviderService]
})
export class FilterComponent implements OnInit {
  
  public keyword = "name";
  public data$=[];
  public keywords = ["name"];

  constructor(private dataSvc: ProviderService) {
    this.getData();
  }
  ngOnInit(): void {
  }
  
  @Output() ciudad= new EventEmitter<string>();

  Selected(e) {
    //this.ciudad=e.name;
    this.ciudad.emit(e.name);
    }

  getData(): void {
    this.dataSvc.getAllCitiest().subscribe((data:any)=>{
      let algo= Array.from(data.cities);
      algo.forEach((element,index) => {
        this.data$.push({id:index,name:element});
      });
    });
  }
}
