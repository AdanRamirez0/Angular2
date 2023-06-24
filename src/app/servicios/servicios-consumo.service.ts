import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ServiciosConsumoService 
{

  public listaDeAerolineas: any[];

  public Aerolinea: any;

  public listaDeAvionesByAerolinea: any[];

  constructor(private http: HttpClient, private router: Router) 
  {

    this.listaDeAerolineas = [];
    this.Aerolinea = {};
    this.listaDeAvionesByAerolinea = [];
   }

   //METOD HACE UNA PETICIÓN GET A LA API PARA RECUPERAR LA LISTA DE aerolineasListaDeAerolineas

  obtenerListaAerolineas(): void{
    this.http.get("https://localhost:44348/api/aerolineas").subscribe((respuesta: any) => {
      console.log(respuesta);
      this.listaDeAerolineas = respuesta;

    })
  }
  //Metodo que hace una peticion post a la api para guardadr la nueva aerolinea
  altaAerolinea(nombre: string, pais: string, iata: string, estatus: string): void{ 
    this.http.post("https://localhost:44348/api/aerolineas",{
      "name":nombre,
      "country": pais,
      "iata": iata,
      "status": estatus
    }).subscribe((respuesta: any) => {
      console.log(respuesta);
    });
  }
  //Obtener get a la api de net core para obtener aerolinea por ID

  obtenerAerolineasById(id: number): void{
    this.http.get("https://localhost:44348/api/aerolineas/" +id).subscribe((respuesta: any) => {
      console.log(respuesta);
      this.Aerolinea = respuesta;
    })
  }

  actualizaAerolinea(id: number, nombre:string,iata: string, estatus: number, pais: string){
    this.http.put("https://localhost:44348/api/aerolineas/" + id, {"id": id, "nombre": nombre, "iata": iata, "estatus": estatus, "pais": pais, }).subscribe((respuesta: any) => {
      console.log(respuesta);

      //Despues de insertar la Aerolinea mostramos un mensaje de confitmacion y redireccionamos al listado

      Swal.fire({
        title: 'Aerolinea actualizada correctamente',
        confirmButtonText: 'OK',      
      }).then((result) =>{
        /*Read more about isConfirmaded, is isDenied below*/
        if (result.isConfirmed){
          //Redireccionamos a la lista Aerolineas:
          this.router.navigate(["/listaAerolineas"]);
        }
      })
    })
  }

//Metodo en el servicio que realice una peticion delete a la api de net core y que permite eliminar una aerolinea//
eliminarAerolinea(id:number): void {
  this.http.delete("https://localhost:44348/api/aerolineas/" + id).subscribe((respuesta: any) => {
    console.log(respuesta);
    Swal.fire({
      title: 'Aerolinea eliminada correctamente',
      confirmButtonText: 'OK',
    }).then((result) => {
      /*Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        //Incocamos el metodo que obtiene la lista de aerolineas
        this.obtenerListaAerolineas();
      }
    })
  })
}
 //Metodo en el servicio que realizamos una perticion get a la api de net core y que permite obtener los aviones ´por aerolinea, parecido
 //al de lalista de aerolineas
 obtenerListaAvionesByAerolinea(idAerolinea: number): void{
   ((respuesta: any)=> {
     console.log(respuesta);
     this.listaDeAvionesByAerolinea = respuesta
   })
 }

}
