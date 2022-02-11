import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Locacion } from 'src/app/domain/locacion';
import { LocacionService } from 'src/app/services/geolocalizacion/locacion.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  lat = -2.879792;
  lng = -78.980795;
  zoom = 12;
  puntos: any;
  p: Locacion;
  currentLocation: any;
  centerLocation: any = {latitude: -2.879792, longitude: -78.980795,};
  user: any;


  icons = {
    client : "https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/48/Map-Marker-Ball-Azure.png"
  }

  constructor(private locationService: LocacionService,
    private router: Router,
    private route: ActivatedRoute) { 
    

  }

  ngOnInit() {
    this.currentLocation =  this.locationService.getCurrentLocation();
    //this.currentLocation = await this.locationService.getCurrentLocation(false);
    console.log(this.currentLocation);
    this.route.queryParams.subscribe(params => {
			//console.log(params);
			//this.nombre = params.nombre;
	  
			if(this.router.getCurrentNavigation().extras.queryParams){
			  
			  this.user = this.router.getCurrentNavigation().extras.queryParams.usuario;
			  console.log('Seccion Geolocalizacion-->UsuarioID: '+this.user.uid);
			}
		  })
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

  newAddress(event: any){
    if(event){
      this.centerLocation.latitude = event.lat;
      this.centerLocation.longitude = event.lng;
      console.log(this.centerLocation);
    }
  }

  guardarPunto(latitude: any, longitude:any){
    console.log("Guardando Punto===>"+latitude+"####"+longitude);
    this.locationService.save(latitude,longitude);
  }

  listarPuntos(){
    this.puntos = this.locationService.getPuntos();
    console.log(this.puntos);
  }

}
