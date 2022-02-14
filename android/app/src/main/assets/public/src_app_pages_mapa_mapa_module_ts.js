"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_mapa_mapa_module_ts"],{

/***/ 4280:
/*!************************************!*\
  !*** ./src/app/domain/locacion.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Locacion": () => (/* binding */ Locacion)
/* harmony export */ });
class Locacion {
}


/***/ }),

/***/ 4396:
/*!***************************************************!*\
  !*** ./src/app/pages/mapa/mapa-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapaPageRoutingModule": () => (/* binding */ MapaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _mapa_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapa.page */ 2287);




const routes = [
    {
        path: '',
        component: _mapa_page__WEBPACK_IMPORTED_MODULE_0__.MapaPage
    }
];
let MapaPageRoutingModule = class MapaPageRoutingModule {
};
MapaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MapaPageRoutingModule);



/***/ }),

/***/ 7803:
/*!*******************************************!*\
  !*** ./src/app/pages/mapa/mapa.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapaPageModule": () => (/* binding */ MapaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _mapa_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapa-routing.module */ 4396);
/* harmony import */ var _mapa_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapa.page */ 2287);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ 325);








let MapaPageModule = class MapaPageModule {
};
MapaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mapa_routing_module__WEBPACK_IMPORTED_MODULE_0__.MapaPageRoutingModule,
            _agm_core__WEBPACK_IMPORTED_MODULE_7__.AgmCoreModule.forRoot({
                apiKey: ''
            })
        ],
        declarations: [_mapa_page__WEBPACK_IMPORTED_MODULE_1__.MapaPage]
    })
], MapaPageModule);



/***/ }),

/***/ 2287:
/*!*****************************************!*\
  !*** ./src/app/pages/mapa/mapa.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapaPage": () => (/* binding */ MapaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_59395_Desktop_Ionic_PF_CuencaPelis_PM59_node_modules_ngtools_webpack_src_loaders_direct_resource_js_mapa_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./mapa.page.html */ 97);
/* harmony import */ var _mapa_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapa.page.scss */ 2065);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_services_geolocalizacion_locacion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/geolocalizacion/locacion.service */ 8044);








let MapaPage = class MapaPage {
    constructor(locationService, router, route) {
        this.locationService = locationService;
        this.router = router;
        this.route = route;
        this.lat = -2.879792;
        this.lng = -78.980795;
        this.zoom = 12;
        this.centerLocation = { latitude: -2.879792, longitude: -78.980795, };
        this.icons = {
            client: "https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/48/Map-Marker-Ball-Azure.png"
        };
    }
    ngOnInit() {
        this.currentLocation = this.locationService.getCurrentLocation();
        //this.currentLocation = await this.locationService.getCurrentLocation(false);
        console.log(this.currentLocation);
        this.route.queryParams.subscribe(params => {
            //console.log(params);
            //this.nombre = params.nombre;
            if (this.router.getCurrentNavigation().extras.queryParams) {
                this.user = this.router.getCurrentNavigation().extras.queryParams.usuario;
                console.log('Seccion Geolocalizacion-->UsuarioID: ' + this.user.uid);
            }
        });
    }
    menu(item) {
        if (item == "perfil") {
            console.log("perfil");
            let params = {
                queryParams: {
                    idPelicula: "Redirecto",
                    idUsuario: this.user.uid,
                    usuario: this.user
                }
            };
            this.router.navigate(['perfil'], params);
        }
        if (item == "resenas") {
            console.log("resenas");
            let params = {
                queryParams: {
                    idPelicula: "Redirecto",
                    idUsuario: this.user.uid,
                    usuario: this.user
                }
            };
            this.router.navigate(['listar-resenas'], params);
        }
        if (item == "lugares") {
            console.log("lugares");
            let params = {
                queryParams: {
                    idPelicula: "Redirecto",
                    idUsuario: this.user.uid,
                    usuario: this.user
                }
            };
            this.router.navigate(['mapa'], params);
        }
    }
    newAddress(event) {
        if (event) {
            this.centerLocation.latitude = event.lat;
            this.centerLocation.longitude = event.lng;
            console.log(this.centerLocation);
        }
    }
    guardarPunto(latitude, longitude) {
        console.log("Guardando Punto===>" + latitude + "####" + longitude);
        this.locationService.save(latitude, longitude);
    }
    listarPuntos() {
        this.puntos = this.locationService.getPuntos();
        console.log(this.puntos);
    }
};
MapaPage.ctorParameters = () => [
    { type: src_app_services_geolocalizacion_locacion_service__WEBPACK_IMPORTED_MODULE_2__.LocacionService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
MapaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-mapa',
        template: _C_Users_59395_Desktop_Ionic_PF_CuencaPelis_PM59_node_modules_ngtools_webpack_src_loaders_direct_resource_js_mapa_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_mapa_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-mapa',
        template: _C_Users_59395_Desktop_Ionic_PF_CuencaPelis_PM59_node_modules_ngtools_webpack_src_loaders_direct_resource_js_mapa_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_mapa_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MapaPage);



/***/ }),

/***/ 8044:
/*!**************************************************************!*\
  !*** ./src/app/services/geolocalizacion/locacion.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocacionService": () => (/* binding */ LocacionService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 3059);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var src_app_domain_locacion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/domain/locacion */ 4280);





let LocacionService = class LocacionService {
    constructor(platform, afs) {
        this.platform = platform;
        this.afs = afs;
        this.locacion = new src_app_domain_locacion__WEBPACK_IMPORTED_MODULE_0__.Locacion();
    }
    save(latitud, longitud) {
        this.locacion.lat = latitud;
        this.locacion.long = longitud;
        const refLocacion = this.afs.collection('locaciones');
        ///*if(this.locacion.uid == null){
        this.locacion.uid = this.afs.createId();
        //}*/
        refLocacion.doc(this.locacion.uid).set(Object.assign({}, this.locacion));
    }
    getPuntos() {
        const refContactos = this.afs.collection('locaciones');
        return refContactos.valueChanges();
    }
    getCurrentLocation(withAdress = true) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let location = {};
            return new Promise((resolve, reject) => {
                if (navigator.geolocation) {
                    var options = {
                        frequency: 1000,
                        timeouts: 15000,
                        enableHighAccuracy: true
                    };
                    navigator.geolocation.getCurrentPosition(position => {
                        location.latitude = position.coords.latitude;
                        location.longitude = position.coords.longitude;
                        if (withAdress) {
                            let geocoder = new google.maps.Geocoder();
                            let latlng = { lat: location.latitude, lng: location.longitude };
                            geocoder.geocode({ location: latlng }, (results, status) => {
                                if (results != null && results != undefined) {
                                    location.address = results[0].formatted_address;
                                }
                                resolve(location);
                            });
                        }
                        else {
                            resolve(location);
                        }
                    }, error => {
                        resolve(null);
                    }, options);
                }
            });
        });
    }
    getAddressOfLocation(location) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let geocoder = new google.maps.Geocoder();
            let latlng = { lat: location.latitude, lng: location.longitude };
            geocoder.geocode({ location: latlng }, (results, status) => {
                if (results != null) {
                    console.log(results);
                    location.address = results[0].formatted_address;
                    return location.address;
                }
            });
        });
    }
};
LocacionService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.Platform },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore }
];
LocacionService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], LocacionService);



/***/ }),

/***/ 97:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/mapa/mapa.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>mapa</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" (centerChange)=\"newAddress($event)\">\r\n    <agm-marker [latitude]=\"centerLocation.latitude\" [longitude]=\"centerLocation.longitude\" [iconUrl]=\"icons.client\"></agm-marker>\r\n    <ion-item *ngFor=\"let p of puntos | async\">\r\n      <agm-marker [latitude]=\"p.lat\" [longitude]=\"p.long\" ></agm-marker>\r\n    </ion-item>\r\n  </agm-map>\r\n\r\n  <ion-button expand=\"block\" (click)=\"guardarPunto(centerLocation.latitude,centerLocation.longitude)\">Guardar</ion-button>\r\n  <ion-button expand=\"block\" (click)=\"listarPuntos()\">Listar Puntos</ion-button>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n\t<ion-toolbar>\r\n\t\t<ion-grid>\r\n\t\t\t<ion-row>\r\n\t\t\t  <ion-col>\r\n\t\t\t\t<div><ion-button color=\"light\" (click)=\"menu('perfil')\"><ion-icon name=\"person-outline\"></ion-icon></ion-button></div>\r\n\t\t\t  </ion-col>\r\n\t\t\t  <ion-col>\r\n\t\t\t\t<div><ion-button color=\"light\" (click)=\"menu('resenas')\"><ion-icon name=\"reader-outline\"></ion-icon></ion-button></div>\r\n\t\t\t  </ion-col>\r\n\t\t\t  <ion-col>\r\n\t\t\t\t<div><ion-button color=\"light\" (click)=\"menu('lugares')\"><ion-icon name=\"pin-outline\"></ion-icon></ion-button></div>\r\n\t\t\t  </ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t\r\n\t\t  </ion-grid>\r\n\t</ion-toolbar>\r\n</ion-footer>\r\n\r\n");

/***/ }),

/***/ 2065:
/*!*******************************************!*\
  !*** ./src/app/pages/mapa/mapa.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "agm-map {\n  height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hcGEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKIiwiZmlsZSI6Im1hcGEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gIH0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mapa_mapa_module_ts.js.map