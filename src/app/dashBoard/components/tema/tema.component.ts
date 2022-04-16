import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
  html!: any;

  constructor(estudioService: EstudioService, 
        private activatedRoute: ActivatedRoute,
        private sanitizer: DomSanitizer) { 

    this.activatedRoute.params.subscribe(({materia, tema}) => {
      let aux = estudioService.getTema(materia, tema);
      this.html = this.sanitizer.bypassSecurityTrustHtml(aux);
    })
    
  }

  

  ngOnInit(): void {
  }

}
