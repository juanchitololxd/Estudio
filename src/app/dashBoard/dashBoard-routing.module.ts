import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouterOutletComponent } from './components/router-outlet/router-outlet.component';
import { TemaDarkComponent } from './components/tema-dark/tema-dark.component';
import { TemaComponent } from './components/tema/tema.component';

import { DashBoardComponent } from './dashBoard.component';


const routes: Routes = [
    {
      path: '',
      component: RouterOutletComponent,
      children: [
        {path: '', component: DashBoardComponent},
        {path: ':materia/:tema/dark', component: TemaDarkComponent},
        {path: ':materia/:tema/oscuro', component: TemaComponent},
        // {path: 'estudio/:materia/:tema/dark', component: TemaDarkComponent},
        // {path: 'estudio/:materia/:tema/oscuro', component: TemaComponent},
        // corregir
        // {path: 'finanzas', component: FinanzasComponent},
        {
          path: '**', 
          loadChildren: () => import('./../page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
        }
      ]
    }
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(routes),
    ],
    exports: [
      RouterModule
    ]
  })
export class DashBoardRoutingModule {}