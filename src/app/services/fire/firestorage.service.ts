import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestorageService {

  constructor(public fire: AngularFirestore) { }

  guardarIma(){
    return new Promise( resolve =>{
      setTimeout(() => {
        resolve(true);
        console.log('responde a la promesa');
        return;
      }, 2000);
    });
  }
}
