import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstudioService } from 'src/app/Services/estudio.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CargarScriptsService } from 'src/app/Services/cargar-scripts.service';


@Component({
  selector: 'app-tema-dark',
  templateUrl: './tema-dark.component.html',
  styleUrls: ['./tema-dark.component.css']
})
export class TemaDarkComponent implements OnInit {
  html!: any;

  constructor(
        private activatedRoute: ActivatedRoute,
        private sanitizer: DomSanitizer,
        private cargaScript: CargarScriptsService,
        private estudioService: EstudioService, ) { 
    
    
    this.activatedRoute.params.subscribe(({materia, tema}) => {
      let aux = this.estudioService.getTema(materia, tema);
      this.html = this.sanitizer.bypassSecurityTrustHtml(aux);
      this.estudioService.getTema2().subscribe(data => {
        console.log(data);
      })
      
    });
    this.cargaScript.cargaCodeStyle();
    
  }

  ngOnInit(): void {
  }

}
