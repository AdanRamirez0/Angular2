import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosConsumoService } from 'src/app/servicios/servicios-consumo.service';



@Component({
  selector: 'app-avion-by-aerolinea',
  templateUrl: './avion-by-aerolinea.component.html',
  styleUrls: ['./avion-by-aerolinea.component.css']
})
export class AvionByAerolineaComponent {
  private sub: any;
  private id: number= 0;

  constructor(private route: ActivatedRoute, private servicio: ServiciosConsumoService){
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; //(+) converts string 'id' to a number
      console.log(this.id);
      //In a real app: dispatch action to load the details here.
      this.servicio.obtenerListaAvionesByAerolinea(this.id);
      

    });
   }
    get AvionesByAerolinea(){
    return this.servicio.listaDeAvionesByAerolinea;
   }

}
