import { ElementRef, ViewChild, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiciosConsumoService } from 'src/app/servicios/servicios-consumo.service';

@Component({
  selector: 'app-edicion-aerolinea',
  templateUrl: './edicion-aerolinea.component.html',
  styleUrls: ['./edicion-aerolinea.component.css']
})
export class EdicionAerolineaComponent {
  @ViewChild("caja1")
  private refCaja1!: ElementRef

  @ViewChild("caja2")
  private refCaja2!: ElementRef

  @ViewChild("caja3")
  private refCaja3!: ElementRef

  @ViewChild("caja4")
  private refCaja4!: ElementRef

  @ViewChild("caja5")
  private refCaja5!: ElementRef

  private sub: any;
  private Id: number =0;

  /** 
   * 
  */

  constructor(private route: ActivatedRoute, private servicio: ServiciosConsumoService) {
   this.sub= this.route.params.subscribe(params=> {
    this.Id = +params['Id'];//(+) converts string 'id' to a number
    console.log(this.Id);
    //in a real app:dispatch action to load the details here
    //invocamos el meetodo de servicio
    this.servicio.obtenerAerolineasById(this.Id);
   });
    
  }
  get datosAerolinea(){
    return this.servicio.Aerolinea;
  }

  GuardarDatos():void{
    const nombre= this.refCaja1.nativeElement.value;
    const iata= this.refCaja2.nativeElement.value;
    const estatus=this.refCaja4.nativeElement.value;
    const pais= this.refCaja5.nativeElement.value;
    console.log(nombre)
    console.log(iata)
    console.log(estatus)
    console.log(pais);

    this.servicio.actualizaAerolinea(this.Id, nombre, iata, estatus, pais);
    // this.servicio.actualizaAerolinea(this.Id, nombre,iata,estatus,pais);
  }

}
