import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';
import { Resena } from 'src/app/domain/resena';
import { Usuario } from 'src/app/domain/usuario';
import { PeliculaService } from 'src/app/services/movies/pelicula.service';
import { ResenasService } from 'src/app/services/resenas/resenas.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  information = null;
  idPelicula: any;
  idUsuario: any;
  usuario: Usuario = new Usuario();
  resena: Resena;
  resenas: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private infoService: PeliculaService,
    private userServe: UserService,
    private resenaServe: ResenasService
  ) {}

  ngOnInit() {

    

    this.route.queryParams.subscribe(params => {
			//console.log(params);
			//this.nombre = params.nombre;
	  
			if(this.router.getCurrentNavigation().extras.queryParams){
			  this.idPelicula = this.router.getCurrentNavigation().extras.queryParams.id;
			  this.idUsuario = this.router.getCurrentNavigation().extras.queryParams.idUser;
        
        console.log('Movie Details ======> ID MOVIE: '+this.idPelicula+'ID User: '+this.idUsuario);
			}
		  })

    // Get the information from the API
    this.infoService.getDetails(this.idPelicula).subscribe((result) => {
      this.information = result;
    });

    this.userServe.getUserIdGoogle(this.idUsuario).subscribe((result) => {
      let userr =JSON.parse(JSON.stringify(result[0]));
      this.usuario.uid = userr.uid;
      this.usuario.email = userr.email;
      this.usuario.foto = userr.photoURL;
      this.usuario.nombre = userr.displayName;
      
    });

    this.resenas = this.resenaServe.resenasPeliculas(this.idPelicula);
    console.log(this.resenas);
    

  }

  enviarResena(){
    //this.usuario = this.userServe.getUserIdGoogle(this.idUsuario);
    
    let params: NavigationExtras = {
			queryParams: {
			  id: this.idPelicula,
			  idUser: this.idUsuario,
        usuario: this.usuario,
			}
		}
		 
		this.router.navigate(['agregar-resena'],params);
    
  }

  openWebsite() {
    console.log('Open Wesiteeee');
    window.open(this.information.Website, "_blank");
  }
}