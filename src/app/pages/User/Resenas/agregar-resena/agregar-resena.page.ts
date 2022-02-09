import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Resena } from 'src/app/domain/resena';
import { PeliculaService } from 'src/app/services/movies/pelicula.service';

@Component({
  selector: 'app-agregar-resena',
  templateUrl: './agregar-resena.page.html',
  styleUrls: ['./agregar-resena.page.scss'],
})
export class AgregarResenaPage implements OnInit {
  idPelicula: any;
  idUsuario: any;
  resena: string;
  titulo: string;
  imagen: string;
  information = null;
  resenaPelicula: Resena = new Resena();

  constructor(private infoService: PeliculaService,
		private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
			//console.log(params);
			//this.nombre = params.nombre;
	  
      if(this.router.getCurrentNavigation().extras.queryParams){
			  this.idPelicula = this.router.getCurrentNavigation().extras.queryParams.id;
			  this.idUsuario = this.router.getCurrentNavigation().extras.queryParams.idUser;
        console.log('AgregarResena ======> ID MOVIE: '+this.idPelicula+'ID User: '+this.idUsuario);
			}
		  })

    this.infoService.getDetails(this.idPelicula).subscribe((result) => {
      this.information = result;
     });
    
  }

  saveResena(){
    console.log('ID USUARIO:=>'+this.idUsuario);
    console.log('ID MOVIE:=>'+this.idPelicula);
    console.log('RESENA:=>'+this.resena);
    console.log('TITULO PELICULA:=>'+this.information.Title);
    console.log('IMAGEN:=>'+this.information.Poster);
    this.resenaPelicula.uid = null;
    this.resenaPelicula.idUsuario = this.idUsuario
    this.resenaPelicula.idPelicula = this.idPelicula;
    this.resenaPelicula.title =this.information.Title;
    this.resenaPelicula.poster = this.information.Poster;
    this.resenaPelicula.comentario = this.resena;
    this.resenaPelicula.valoracion = 0;
    this.infoService.save(this.resenaPelicula);
  }

}
