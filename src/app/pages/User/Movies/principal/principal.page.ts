import { Component, OnInit } from '@angular/core';
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

	constructor(private infoService: PeliculaService) {}

	ngOnInit() {}

	searchChanged($event: Event): void {
		this.results = this.infoService.searchData(this.searchTerm, this.type);
	}
}