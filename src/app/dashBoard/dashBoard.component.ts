
import { Component, OnInit} from '@angular/core';
import { Materia, Tema } from 'src/app/models/materia';

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
  constructor(){
    this.jconfig = {
      "materias": [
        {
          "id": "CVDS",
          "name": "CVDS",
          "temas": [
          {
            "name": "Como hacer esto",
            "html": "<h1>A</h1>",
            "css": "dark"
          },
          {
            "name": "Como hacer lo otro",
            "html": "<h1>A</h1>",
            "css": "dark"
          }
          ]
          
        },
        {
          "id": "RECO1",
          "name": "RECO :)"
        },
        {
          "id": "RECO2",
          "name": "RECO :)"
        },
        {
          "id": "RECO3",
          "name": "RECO :)"
        },
        {
          "id": "AUPN",
          "name": "AUPN",
          "html": "<h1>B</h1>",
          "temas": [
          {
            "name": "Como hacer esto",
            "html": "<h1>A</h1>",
            "css": "oscuro"
          },
          {
            "name": "Como hacer lo otro",
            "html": "<h1>A</h1>",
            "css": "oscuro"
          }
          ]
        }
      ]
    }
  }


  ngOnInit() {
  }

  initTable($event: Materia) {
    this.materia = $event;
    this.display = true;
  }
  openTopic(mat: Materia, tema: Tema){
    //dinamizar el uno por id del tema (cuando haya id xd)
    window.open(`/estudio/${mat.id}/1/dark`, '_blank');
  }


}