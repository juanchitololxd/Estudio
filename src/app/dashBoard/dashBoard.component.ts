
import { Component, OnInit} from '@angular/core';
import { Materia, Tema } from 'src/app/models/materia';
import { EstudioService } from '../Services/estudio.service';

@Component({
  selector: 'app-estudio',
  templateUrl: 'dashBoard.component.html',
  styleUrls: ['dashBoard.component.css'],
})
export class DashBoardComponent implements OnInit {

  jconfig: any;
  materia!: Materia;
  display = false;
  displayedColumns: string[] = ['Tema'];
  constructor(estudioService: EstudioService){
    estudioService.getMaterias().subscribe(
      data => {
        this.jconfig = data;
      }
    );
  }


  ngOnInit() {
  }

  initTable($event: Materia) {
    this.materia = $event;
    this.display = true;
  }
  openTopic(mat: Materia, tema: string){
    let temaName = tema.split('.')[0];
    window.open(`/estudio/${mat.id}/${temaName}/dark`);
  }

}