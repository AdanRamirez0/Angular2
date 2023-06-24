import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListaAerolineasComponent } from './ListaAerolineas/lista-aerolineas/lista-aerolineas.component';
import { AltaAerolineasComponent } from './AltaAerolineas/alta-aerolineas/alta-aerolineas.component';  
import { DetalleAerolineaComponent } from './detalle-aerolinea/detalle-aerolinea.component';
import { EdicionAerolineaComponent } from './EdicionAerolinea/edicion-aerolinea/edicion-aerolinea.component';
import { AvionByAerolineaComponent } from './AvionByAerolinea/avion-by-aerolinea/avion-by-aerolinea.component';


// { path: '', redirectTo: "/ListaAerolineas", pathMatch: "full"}
const routes: Routes = [
{ path: 'ListaAerolineas' , component:ListaAerolineasComponent},
{ path: 'AltaAerolineas' ,component:AltaAerolineasComponent },
{ path: 'detalleAerolinea/:id', component: DetalleAerolineaComponent},
{ path: 'edicionAerolinea/:id', component: EdicionAerolineaComponent },
{ path: 'aerlinea/:id/aviones', component: AvionByAerolineaComponent},


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
