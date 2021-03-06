import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Resena } from 'src/app/domain/resena';
import { Usuario } from 'src/app/domain/usuario';
import { PeliculaService } from 'src/app/services/movies/pelicula.service';

@Component({
  selector: 'app-listar-resenas',
  templateUrl: './listar-resenas.page.html',
  styleUrls: ['./listar-resenas.page.scss'],
})
export class ListarResenasPage implements OnInit {
  idPelicula: any;
  idUsuario: any;
  usuario: Usuario;
  resena: Resena;
  resenas: any;
  user: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private infoService: PeliculaService ) { 
      route.queryParams.subscribe(params => {
        //console.log(params);
        //this.nombre = params.nombre;

        if(this.router.getCurrentNavigation().extras.queryParams){
          this.idPelicula = this.router.getCurrentNavigation().extras.queryParams.idPelicula;
          this.idUsuario = this.router.getCurrentNavigation().extras.queryParams.idUsuario;
          this.usuario = this.router.getCurrentNavigation().extras.queryParams.usuario;
          this.user = this.usuario;
          console.log('ListarMisResenas ======> ID MOVIE: '+this.idPelicula+'ID User: '+this.usuario.uid);
        }
      }) 
    }

  ngOnInit() {
    this.resenas = this.infoService.getMisResenas(this.idUsuario);
    //console.log('RESENAS DEL USUARIO:=>'+this.idUsuario);
    //console.log('RESULTADOS:=>'+this.resenas);
  }

  home(){
	let params: NavigationExtras = {
		queryParams: {
			idPelicula: "Redirecto",
			idUsuario: this.user.uid,
			usuario: this.user
		}
	}
	this.router.navigate(['principal'],params);
  }


  menu(item: string){
		if(item == "perfil"){
			console.log("perfil");
			let params: NavigationExtras = {
				queryParams: {
					idPelicula: "Redirecto",
					idUsuario: this.user.uid,
					usuario: this.user
				}
			}
			this.router.navigate(['perfil'],params);
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
			let params: NavigationExtras = {
				queryParams: {
					idPelicula: "Redirecto",
					idUsuario: this.user.uid,
					usuario: this.user
				}
			}
			this.router.navigate(['mapa'],params);
		}
	}
  

}
