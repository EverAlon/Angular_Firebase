import { inject, Injectable } from '@angular/core';
import { Viaje } from '../models/viaje.model';
import { first } from 'rxjs';
import { addDoc, collection, collectionData, deleteDoc, Firestore, updateDoc } from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {
  private db: Firestore = inject(Firestore);

  constructor() { }

  //Metodo para obtener todos los documentos de la coleccion
  getViajes(){
    const ViajesCollection = collection(this.db, 'viajes');
    return collectionData((ViajesCollection), {idField: 'id'})
      .pipe(first(),);
  }

  //metodo para agregar un nuevo documento a la coleccion
  agregarViaje(viaje:Viaje){
    const ViajesCollection = collection(this.db, 'viajes');
    const ViajeData = {
      nombre: viaje.nombre,
      destino: viaje.destino,
      numPersonas: viaje.numPersonas
    };
    addDoc(ViajesCollection, ViajeData);
  }

  //Metodo para modificar un documento
  modificarViaje(viaje:Viaje){
    const documentoRef = doc(this.db, 'viajes', viaje.id);
    updateDoc(documentoRef, {
      nombre: viaje.nombre,
      destino: viaje.destino,
      numPersonas: viaje.numPersonas
    });
  }

  //metodo para eliminar un libro
  eliminarViaje(viaje:Viaje){
    const documentoRef = doc(this.db, 'viajes', viaje.id);
    deleteDoc(documentoRef);
  }
}
