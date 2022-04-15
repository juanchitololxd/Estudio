import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.css']
})
export class MovimientosComponent implements OnInit {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filterCtrl = new FormControl();
  public filters: any[];
  constructor() { 
    this.filters = ["por hacer", "hechos", "all"];
  }

  ngOnInit(): void {
  }

  addFilter($event: MatChipInputEvent){
    this.filters.push($event.value);
  }

  removeFilter(filter: string){
    const index = this.filters.indexOf(filter);

    if (index !== -1) {
      this.filters.splice(index, 1);
    }
  }

}
