import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';


@Injectable({
  providedIn: 'root'
})
export class AuthGoogleService {
  credential: string;

  constructor(public auth: AngularFireAuth,
    private afs: AngularFirestore) { }

  async loginGoogle() {
    //this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    
    
    return this.credential;
    
  }

  login(){

    //return una promesa
    return new Promise((resolve, rejected) =>{
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(user => {
        //console.log(user.user);
        let userr =JSON.parse(JSON.stringify(user.user));
        this.credential = userr.uid;
        //console.log(userr.uid);
        this.loginGoogle();
        this.updateDtaUser(userr);
        resolve(this.credential);
        
      }).catch(err => rejected(err));
    });   
}

  logout() {
    this.auth.signOut();
  }

  updateDtaUser(user: any) {
    const refUsers = this.afs.collection('users');

    if(user.uid == null){
      user.uid = this.afs.createId();
    }

    const data = {
      uid: user.uid,
      email: user.email || null,
      displayName: user.displayName,
      photoURL: user.PhotoURL || "https://goo.gl/7kz9qG",
      provider: user.providerData[0].providerId,
      lastLogin: new Date(Number(user.lastLoginAt)) || null,
      createAt: new Date(Number(user.createdAt)) || null

    }
    refUsers.doc(user.uid).set(user);
  }

}
