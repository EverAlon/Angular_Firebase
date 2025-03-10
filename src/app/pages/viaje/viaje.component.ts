import { Component } from '@angular/core';
import { Viaje } from '../../models/viaje.model';
import { ViajeService } from '../../services/viaje.service';
import { FormsModule} from '@angular/forms'
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-viaje',
  imports: [FormsModule],
  templateUrl: './viaje.component.html',
  styleUrl: './viaje.component.css'
})
export class ViajeComponent {
  //Propiedades
  viajes:any;
  viaje = new Viaje();

  constructor(private viajeService:ViajeService){
      this.getViajes();
  }

  //Funcion que determina si hay productos en el arreglo
  async getViajes():Promise<void>{
    this.viajes = await firstValueFrom(this.viajeService.getViajes());
  }

  //metodo para insertar un libro desde el form
  insertarViaje(){
    this.viajeService.agregarViaje(this.viaje);
    this.viaje = new Viaje();
    this.getViajes();
  }

  //metodo para seleccionar un libro de la tabla
  selectViaje(viajeSeleccionado:Viaje){
    this.viaje = viajeSeleccionado;
  }

  //metodo para modificar un libro desde el form
  updateViaje(){
    this.viajeService.modificarViaje(this.viaje);
    this.viaje = new Viaje();
    this.getViajes();
  }

  //metodo para eliminar un libro
  deleteViaje(){
    this.viajeService.eliminarViaje(this.viaje);
    this.viaje = new Viaje(); 
    this.getViajes();
  }
}
