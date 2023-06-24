import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { ServiciosConsumoService } from 'src/app/servicios/servicios-consumo.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-lista-aerolineas',
  templateUrl: './lista-aerolineas.component.html',
  styleUrls: ['./lista-aerolineas.component.css']
})
export class ListaAerolineasComponent {
  /**
   *
   */
  constructor(private servicio: ServiciosConsumoService) {
    this.servicio.obtenerListaAerolineas();
   
  }

  get resultados (){
    return this.servicio.listaDeAerolineas
  }

  eliminar(id: number): void{
    Swal.fire({
      title: '¿Esta seguro que dessea eliminar?',
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: 'Cancelar',
    }).then((result) => {
      /*Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.servicio.eliminarAerolinea(id);

      } else if (result.isDenied) {

      } 
    })
  }


}
