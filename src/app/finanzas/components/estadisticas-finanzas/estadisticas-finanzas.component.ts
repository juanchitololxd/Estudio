import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estadisticas-finanzas',
  templateUrl: './estadisticas-finanzas.component.html',
  styleUrls: ['./estadisticas-finanzas.component.css']
})
export class EstadisticasFinanzasComponent implements OnInit {
  public fecha:Date = new Date();
  constructor() { }

  ngOnInit(): void {
    this.fecha.getFullYear();
  }

}
