import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tema } from 'src/app/models/materia';
import {EstudioService} from './../../../Services/estudio.service'

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css'],
  providers: [EstudioService]
})
export class TemaComponent implements OnInit {
  html!: string;

  constructor(estudioService: EstudioService, 
        private activatedRoute: ActivatedRoute) { 

    this.activatedRoute.params.subscribe(({materia, tema}) => {
      this.html = estudioService.getTema(materia, tema);
    })
    
  }

  

  ngOnInit(): void {
  }

}
