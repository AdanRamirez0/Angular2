import { Component, ViewChild, ElementRef} from '@angular/core';
import { Router } from '@angular/router';
import { ServiciosConsumoService } from 'src/app/servicios/servicios-consumo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-aerolineas',
  templateUrl: './alta-aerolineas.component.html',
  styleUrls: ['./alta-aerolineas.component.css']
})
export class AltaAerolineasComponent {
/**
 *
 */
constructor(private servicio: ServiciosConsumoService, private router: Router) {
  
  
}

  @ViewChild("caja1")
  private refCaja1!: ElementRef;

  @ViewChild("caja2")
  private refCaja2!: ElementRef;

  @ViewChild("caja3")
  private refCaja3!: ElementRef;

  @ViewChild("caja4")
  private refCaja4!: ElementRef;

  guardarDatos(): void{
    
    const nombre= this.refCaja1.nativeElement.value;

    const pais= this.refCaja2.nativeElement.value;

    const iata= this.refCaja3.nativeElement.value;

    const estatus= this.refCaja4.nativeElement.value;

    //invocamos al metodo del servicio
    this.servicio.altaAerolinea(nombre, pais, iata, estatus);

    Swal.fire({
      title: 'Cliente guardado correctamente',
      confirmButtonText: 'Ok',
      
      
      
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

       //Redireccionar a la lista de aerolineas
       this.router.navigate(['/listaAerolineas'])



      }
    })

  }

}
