import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import {ServiciosConsumoService } from '../servicios/servicios-consumo.service';


@Component({
  selector: './app-detalle-aerolinea',
  templateUrl: './detalle-aerolinea.component.html',
  styleUrls: ['./detalle-aerolinea.component.css']
})

  export class DetalleAerolineaComponent 
  {
    private sub: any;
    private id: number = 0;
    
    constructor(private route: ActivatedRoute, private servicio: ServiciosConsumoService) {
      this. sub = this.route.params.subscribe(params => {
        this.id = +params['id']; //(+) converts string 'id' to a number 
        console.log(this.id);
        //In a real app: dispach action to load the details here,
        //Invocamos el metodo del servicio:
        this.servicio.obtenerAerolineasById(this.id);

      });
      
    }
  

  get datosAerolinea(){
    return this.servicio.Aerolinea;
  }

}






