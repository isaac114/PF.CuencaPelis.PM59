import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { PeliculaService } from 'src/app/services/movies/pelicula.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  user: any;

  constructor(private infoService: PeliculaService,
		private router: Router,
    	private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
			//console.log(params);
			//this.nombre = params.nombre;
	  
			if(this.router.getCurrentNavigation().extras.queryParams){
			  this.user = this.router.getCurrentNavigation().extras.queryParams.usuario;
			  console.log('Seccion PaginaPrincipal-->UsuarioID: '+this.user.uid);
			}
		  })
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
