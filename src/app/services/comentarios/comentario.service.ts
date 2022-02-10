import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Comentario } from 'src/app/domain/comentario';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  constructor(private afs: AngularFirestore) { }

  save(comentario: Comentario){
    const reResena = this.afs.collection('comentarios')
  
    if(comentario.uid == null){
      comentario.uid = this.afs.createId()
    }
  
    reResena.doc(comentario.uid).set(Object.assign({}, comentario))
  
  }

  getComentariosResena(idResena: string): Observable<any[]>{
    const refContactos = this.afs.collection('comentarios',
            ref => ref.where("idResena","==",idResena));
            return refContactos.valueChanges();
  }

}
