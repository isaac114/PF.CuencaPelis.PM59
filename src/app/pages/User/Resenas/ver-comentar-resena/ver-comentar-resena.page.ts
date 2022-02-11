import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Comentario } from 'src/app/domain/comentario';
import { Resena } from 'src/app/domain/resena';
import { Usuario } from 'src/app/domain/usuario';
import { ComentarioService } from 'src/app/services/comentarios/comentario.service';
import { PeliculaService } from 'src/app/services/movies/pelicula.service';
import { ResenasService } from 'src/app/services/resenas/resenas.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-ver-comentar-resena',
  templateUrl: './ver-comentar-resena.page.html',
  styleUrls: ['./ver-comentar-resena.page.scss'],
})
export class VerComentarResenaPage implements OnInit {

  idPelicula: any;
  idUsuario: any;
  usuario: Usuario = new Usuario();
  information: Resena;
  comentario: string;
  coment: Comentario = new Comentario();
  c: Comentario;
  comentarios: any;
  user: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private infoService: PeliculaService,
    private userServe: UserService,
    private resenaServe: ResenasService,
    private comentarioServe: ComentarioService
  ) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
			//console.log(params);
			//this.nombre = params.nombre;
	  
			if(this.router.getCurrentNavigation().extras.queryParams){
			  this.idPelicula = this.router.getCurrentNavigation().extras.queryParams.id;
			  this.idUsuario = this.router.getCurrentNavigation().extras.queryParams.idUser;
        this.usuario = this.router.getCurrentNavigation().extras.queryParams.usuario;
        this.information = this.router.getCurrentNavigation().extras.queryParams.resena;
        this.user = this.usuario;
        
        console.log('Ver Resenas Comentar ======> ID MOVIE: '+this.information.idPelicula+'ID User: '+this.information.idUsuario);
			}
		  });

      this.comentarios = this.comentarioServe.getComentariosResena(this.information.uid);
      console.log(this.comentarios);
  }

  comentar(){
    this.coment.comentario = this.comentario
    this.coment.idPelicula = this.idPelicula;
    this.coment.idUsuario = this.idUsuario;
    this.coment.nombre = this.usuario.nombre;
    this.coment.poster = this.information.poster;
    this.coment.title = this.information.title;
    this.coment.idResena = this.information.uid;
    //console.log(this.coment.comentario+'-'+this.coment.idPelicula+'-'+this.coment.idUsuario+'-'+this.coment.nombre);
    let params: NavigationExtras = {
			queryParams: {
			  id: this.idPelicula,
			  idUser: this.idUsuario,
        usuario: this.usuario,
        resena: this.information,
        comentario: this.coment
			}
		}
		this.comentarioServe.save(this.coment);
		this.router.navigate(['ver-comentar-resena'],params);
  }
  menu(item: string){
		if(item == "perfil"){
			console.log("perfil");
		}
		if(item == "resenas"){
			console.log("resenas");
			let params: NavigationExtras = {
				queryParams: {
					idPelicula: "Redirecto",
					idUsuario: this.user.uid,
					usuario: this.user
				}
			}
			this.router.navigate(['listar-resenas'],params);
		}
		if(item == "lugares"){
			console.log("lugares");
		}
	}

}
