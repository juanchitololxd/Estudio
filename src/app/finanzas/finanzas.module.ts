import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanzasComponent } from './components/finanzas.component';
import { EstadisticasFinanzasComponent } from './components/estadisticas-finanzas/estadisticas-finanzas.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { MovimientosComponent } from './components/movimientos/movimientos.component';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { TableMovimientoComponent } from './components/movimientos/table-movimiento/table-movimiento.component';
import {MatChipsModule} from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    FinanzasComponent,
    EstadisticasFinanzasComponent,
    CategoriasComponent,
    MovimientosComponent,
    TableMovimientoComponent

  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatTabsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class FinanzasModule { }
