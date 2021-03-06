import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';

// const routes: Routes = [
//   { 
//     {
//       path: '',
//       redirectTo: '/dash',
//       pathMatch: 'full',
  
//     },
//     {
//       path: 'dash',
//       loadChildren: () => import('./dashBoard/dashBoard.module').then(m => m.DashBoardModule)
//     }
//   },
// /*,
//   ,
//   {
//     path: '**',
//     loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
//   }*/
// ];

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: '/dash',
        pathMatch: 'full',
      },
      {
        path: 'dash',
        loadChildren: () => import('./dashBoard/dashBoard.module').then(m => m.DashBoardModule)
      },
      {
        path: 'finanzas',
        loadChildren: () => import('./finanzas/finanzas.module').then(m => m.FinanzasModule)
      }
    ]
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
