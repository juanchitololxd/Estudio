import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CargarScriptsService } from 'src/app/Services/cargar-scripts.service';
import {EstudioService} from './../../../Services/estudio.service'

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {
  html!: any;
  path!: string;
  

  constructor(
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private cargaScript: CargarScriptsService,
    private estudioService: EstudioService ) { 
    
          this.activatedRoute.params.subscribe(({materia, tema}) => {
            this.estudioService.getTema(materia, tema).subscribe(
            data => {
              this.html = this.sanitizer.bypassSecurityTrustHtml(data);
            }
          )
        });
        this.cargaScript.cargaCodeStyle();
    
  }

  

  ngOnInit(): void {
  }

}
