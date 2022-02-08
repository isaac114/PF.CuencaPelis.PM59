import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { PeliculaService } from 'src/app/services/movies/pelicula.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  information = null;
  idPelicula: any;
  idUsuario: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private infoService: PeliculaService
  ) {}

  ngOnInit() {
    // Get the ID that was passed with the URL
    /*const id = this.route.snapshot.paramMap.get("id");
    this.idPelicula = id;
    this.idUsuario = this.route.snapshot.paramMap.get("idUser");
    console.log('Movie Details ======> ID MOVIE: '+this.idPelicula+'ID User: '+this.idUsuario);*/

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
  }

  enviarResena(){
    let params: NavigationExtras = {
			queryParams: {
			  id: this.idPelicula,
			  idUser: this.idUsuario,
			}
		  }
		 
	  
		  this.router.navigate(['agregar-resena'],params)
  }

  openWebsite() {
    console.log('Open Wesiteeee');
    window.open(this.information.Website, "_blank");
  }
}