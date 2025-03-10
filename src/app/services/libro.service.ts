import { inject, Injectable } from '@angular/core';
import { Libro } from '../models/libro.model';
import { first } from 'rxjs';
import { addDoc, collection, collectionData, deleteDoc, Firestore, updateDoc } from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private db: Firestore = inject(Firestore);

  constructor() { }

  //Metodo para obtener todos los documentos de la coleccion
  getLibros(){
    const librosCollection = collection(this.db, 'libros');
    return collectionData((librosCollection), {idField: 'id'})
      .pipe(first(),);
  }

  //metodo para agregar un nuevo documento a la coleccion
  agregarLibro(libro:Libro){
    const librosCollection = collection(this.db, 'libros');
    const libroData = {
      titulo: libro.titulo,
      autor: libro.autor,
      editorial: libro.editorial,
      anioPublicacion: libro.anioPublicacion
    };
    addDoc(librosCollection, libroData);
  }

  //Metodo para modificar un documento
  modificarLibro(libro:Libro){
    const documentoRef = doc(this.db, 'libros', libro.id);
    updateDoc(documentoRef, {
      titulo: libro.titulo,
      autor: libro.autor,
      editorial: libro.editorial,
      anioPublicacion: libro.anioPublicacion
    });
  }

  //metodo para eliminar un libro
  eliminarLibro(libro:Libro){
    const documentoRef = doc(this.db, 'libros', libro.id);
    deleteDoc(documentoRef);
  }
}
