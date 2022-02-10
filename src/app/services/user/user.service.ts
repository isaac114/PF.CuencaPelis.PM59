import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore) { }

  getUserIdGoogle(uid: string){
    const refContactos = this.afs.collection('users',
            ref => ref.where("uid","==",uid));
            return refContactos.valueChanges();
  }
}
