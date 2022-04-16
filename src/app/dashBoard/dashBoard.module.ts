import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { DashBoardRoutingModule } from './dashBoard-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';
import {MatCardModule} from '@angular/material/card'
import { DashBoardComponent } from './dashBoard.component';
import { MateriaDashComponent } from './components/materia-dash/materia-dash.component';
import { RepasosDashComponent } from './components/repasos-dash/repasos-dash.component';
import { ExamenesDashComponent } from './components/examenes-dash/examenes-dash.component';
import { MateriaComponent } from './components/materia/materia.component';
import { TemaComponent } from './components/tema/tema.component';
import { TemaDarkComponent } from './components/tema-dark/tema-dark.component';
import { RouterOutletComponent } from './components/router-outlet/router-outlet.component';
import { CargarScriptsService } from '../Services/cargar-scripts.service';
import { EstudioService } from '../Services/estudio.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    DashBoardComponent,
    MateriaDashComponent,
   RepasosDashComponent,
     ExamenesDashComponent,
     MateriaComponent,
     TemaComponent,
     TemaDarkComponent,
     RouterOutletComponent
  ],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    MatSidenavModule, 
    MatToolbarModule,  
    MatIconModule, 
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatExpansionModule,
    MatTreeModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule

  ],
  providers: [
    CargarScriptsService,
    EstudioService
    
  ]
})
export class DashBoardModule { }
