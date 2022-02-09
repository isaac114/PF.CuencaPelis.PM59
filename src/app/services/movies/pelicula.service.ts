import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";
import { Resena } from 'src/app/domain/resena';
import { OmdbDetailResponse, OmdbSearchResult } from 'src/app/interfaces/interfaces';
import { environment } from 'src/environments/environment';



// Typescript custom enum for search types (optional)
export enum SearchType {
  all = "",
  movie = "movie",
  series = "series",
  episode = "episode",
}

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  url = environment.API_URL;
  apiKey = environment.API_KEY;
  
  constructor(private http: HttpClient,
    private afs: AngularFirestore) {}



  save(res: Resena){
    const reResena = this.afs.collection('resenas')
  
    if(res.uid == null){
      res.uid = this.afs.createId()
    }
  
    reResena.doc(res.uid).set(Object.assign({}, res))
  
  }

  getMisResenas(idUsuario: string): Observable<any[]>{
    const reResena = this.afs.collection('resenas',
    ref => ref.where("idUsuario","==",idUsuario));
    return reResena.valueChanges();
  }

  searchData(title: string, type: SearchType): Observable<OmdbSearchResult> {
    return this.http
      .get<Observable<OmdbSearchResult>>(
        `${this.url}?&apikey=${this.apiKey}&s=${encodeURI(title)}&type=${type}`
      )
      .pipe(
        map((results) => {
          console.log("RAW: ", results);
          return results["Search"];
        })
      );
  }
  
  getDetails(id: string): Observable<any> {
    return this.http
      .get<Observable<OmdbDetailResponse>>(
        `${this.url}?i=${id}&plot=full&apikey=${this.apiKey}`
      ).pipe(tap(res => console.log("response: ", res)))
  }
}
