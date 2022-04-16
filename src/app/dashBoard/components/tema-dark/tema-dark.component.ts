import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tema } from 'src/app/models/materia';
import { EstudioService } from 'src/app/Services/estudio.service';

@Component({
  selector: 'app-tema-dark',
  templateUrl: './tema-dark.component.html',
  styleUrls: ['./tema-dark.component.css']
})
export class TemaDarkComponent implements OnInit {
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
