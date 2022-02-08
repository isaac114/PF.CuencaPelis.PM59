import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaService } from 'src/app/services/movies/pelicula.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  information = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private infoService: PeliculaService
  ) {}

  ngOnInit() {
    // Get the ID that was passed with the URL
    const id = this.activatedRoute.snapshot.paramMap.get("id");

    // Get the information from the API
    this.infoService.getDetails(id).subscribe((result) => {
      this.information = result;
    });
  }

  openWebsite() {
    console.log('Open Wesiteeee');
    window.open(this.information.Website, "_blank");
  }
}