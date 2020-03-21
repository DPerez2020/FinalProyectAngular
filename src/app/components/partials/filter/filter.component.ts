import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { startWith, map } from 'rxjs/operators'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }
  searchText = new Subject();
  results: Observable<string[]>;
  data: any = [
    'red',
    'green',
    'blue',
    'cyan',
    'magenta',
    'yellow',
    'black',
  ];

  ngOnInit(): void {
    this.results = this.searchText.pipe(
      startWith(''),
      map((value: string) => this.filter(value))
    );
  }
  filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.data.filter((item: string) => item.toLowerCase().includes(filterValue));
  }
}
