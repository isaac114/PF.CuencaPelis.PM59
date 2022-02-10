import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PeliculaService, SearchType } from 'src/app/services/movies/pelicula.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

	results: Observable<any>;
	searchTerm: "";
	type: SearchType = SearchType.all;
	usuarioID: string;

	constructor(private infoService: PeliculaService,
		private router: Router,
    	private route: ActivatedRoute,) {}

	ngOnInit() {
		this.route.queryParams.subscribe(params => {
			//console.log(params);
			//this.nombre = params.nombre;
	  
			if(this.router.getCurrentNavigation().extras.queryParams){
			  this.usuarioID = this.router.getCurrentNavigation().extras.queryParams.id;
			  console.log('Seccion PaginaPrincipal-->UsuarioID: '+this.usuarioID);
			}
		  })
	}

	enviar(idPelicula: any){
		/*console.log(idPelicula+'==='+this.usuarioID);
		this.router.navigate(['movie-details'], { queryParams: { id: idPelicula, idUser: this.usuarioID } });*/
		console.log(idPelicula+'==='+this.usuarioID);
		let params: NavigationExtras = {
			queryParams: {
			  id: idPelicula,
			  idUser: this.usuarioID,
			}
		  }
		 
	  
		  this.router.navigate(['movie-details'],params)
	}

	searchChanged($event: Event): void {
		this.results = this.infoService.searchData(this.searchTerm, this.type);
	}
}