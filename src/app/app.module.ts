import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAerolineasComponent } from './ListaAerolineas/lista-aerolineas/lista-aerolineas.component';
import { AltaAerolineasComponent } from './AltaAerolineas/alta-aerolineas/alta-aerolineas.component';
import { DetalleAerolineaComponent } from './detalle-aerolinea/detalle-aerolinea.component';
import { EdicionAerolineaComponent } from './EdicionAerolinea/edicion-aerolinea/edicion-aerolinea.component';
import { AvionByAerolineaComponent } from './AvionByAerolinea/avion-by-aerolinea/avion-by-aerolinea.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaAerolineasComponent,
    AltaAerolineasComponent,
    DetalleAerolineaComponent,
    EdicionAerolineaComponent,
    AvionByAerolineaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
