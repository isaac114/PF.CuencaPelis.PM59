import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResenasService {

  constructor(private http: HttpClient,
    private afs: AngularFirestore) { }



  resenasPeliculas(idPelicula: string): Observable<any[]>{
    const refContactos = this.afs.collection('resenas',
            ref => ref.where("idPelicula","==",idPelicula));
            return refContactos.valueChanges();
  }
}
