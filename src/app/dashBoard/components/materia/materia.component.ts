import { Component, Input, OnInit } from '@angular/core';
import { Materia } from 'src/app/models/materia';

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {
  @Input() materia!: Materia;
  constructor() { }

  ngOnInit(): void {
  }

}
