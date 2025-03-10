import { inject, Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { first } from 'rxjs';
import { addDoc, collection, collectionData, deleteDoc, Firestore, updateDoc } from '@angular/fire/firestore';
import { doc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private db: Firestore = inject(Firestore);

  constructor() { }

  //Metodo para obtener todos los documentos de la coleccion
  getProductos(){
    const ProductosCollection = collection(this.db, 'productos');
    return collectionData((ProductosCollection), {idField: 'id'})
      .pipe(first(),);
  }

  //metodo para agregar un nuevo documento a la coleccion
  agregarProducto(producto:Producto){
    const ProductosCollection = collection(this.db, 'productos');
    const ProductoData = {
      descripcion: producto.descripcion,
      precio: producto.precio
    };
    addDoc(ProductosCollection, ProductoData);
  }

  //Metodo para modificar un documento
  modificarProducto(producto:Producto){
    const documentoRef = doc(this.db, 'productos', producto.id);
    updateDoc(documentoRef, {
      descripcion: producto.descripcion,
      precio: producto.precio    });
  }

  //metodo para eliminar un libro
  eliminarProducto(producto:Producto){
    const documentoRef = doc(this.db, 'productos', producto.id);
    deleteDoc(documentoRef);
  }
}
