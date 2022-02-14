"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_User_Movies_movie-details_movie-details_module_ts"],{

/***/ 2612:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/User/Movies/movie-details/movie-details-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieDetailsPageRoutingModule": () => (/* binding */ MovieDetailsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _movie_details_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie-details.page */ 460);




const routes = [
    {
        path: '',
        component: _movie_details_page__WEBPACK_IMPORTED_MODULE_0__.MovieDetailsPage
    }
];
let MovieDetailsPageRoutingModule = class MovieDetailsPageRoutingModule {
};
MovieDetailsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MovieDetailsPageRoutingModule);



/***/ }),

/***/ 6873:
/*!*************************************************************************!*\
  !*** ./src/app/pages/User/Movies/movie-details/movie-details.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieDetailsPageModule": () => (/* binding */ MovieDetailsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _movie_details_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movie-details-routing.module */ 2612);
/* harmony import */ var _movie_details_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie-details.page */ 460);







let MovieDetailsPageModule = class MovieDetailsPageModule {
};
MovieDetailsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _movie_details_routing_module__WEBPACK_IMPORTED_MODULE_0__.MovieDetailsPageRoutingModule
        ],
        declarations: [_movie_details_page__WEBPACK_IMPORTED_MODULE_1__.MovieDetailsPage]
    })
], MovieDetailsPageModule);



/***/ }),

/***/ 460:
/*!***********************************************************************!*\
  !*** ./src/app/pages/User/Movies/movie-details/movie-details.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieDetailsPage": () => (/* binding */ MovieDetailsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_59395_Desktop_Ionic_PF_CuencaPelis_PM59_node_modules_ngtools_webpack_src_loaders_direct_resource_js_movie_details_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./movie-details.page.html */ 8995);
/* harmony import */ var _movie_details_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie-details.page.scss */ 9115);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_domain_resena__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/domain/resena */ 7718);
/* harmony import */ var src_app_domain_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/domain/usuario */ 3322);
/* harmony import */ var src_app_services_movies_pelicula_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/movies/pelicula.service */ 237);
/* harmony import */ var src_app_services_resenas_resenas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/resenas/resenas.service */ 3515);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user/user.service */ 9610);










let MovieDetailsPage = class MovieDetailsPage {
    constructor(route, router, infoService, userServe, resenaServe) {
        this.route = route;
        this.router = router;
        this.infoService = infoService;
        this.userServe = userServe;
        this.resenaServe = resenaServe;
        this.information = null;
        this.usuario = new src_app_domain_usuario__WEBPACK_IMPORTED_MODULE_3__.Usuario();
        this.r = new src_app_domain_resena__WEBPACK_IMPORTED_MODULE_2__.Resena();
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            //console.log(params);
            //this.nombre = params.nombre;
            if (this.router.getCurrentNavigation().extras.queryParams) {
                this.idPelicula = this.router.getCurrentNavigation().extras.queryParams.id;
                this.idUsuario = this.router.getCurrentNavigation().extras.queryParams.idUser;
                this.user = this.router.getCurrentNavigation().extras.queryParams.user;
                console.log('Movie Details ======> ID MOVIE: ' + this.idPelicula + 'ID User: ' + this.user.uid);
            }
        });
        // Get the information from the API
        this.infoService.getDetails(this.idPelicula).subscribe((result) => {
            this.information = result;
        });
        this.userServe.getUserIdGoogle(this.idUsuario).subscribe((result) => {
            let userr = JSON.parse(JSON.stringify(result[0]));
            this.usuario.uid = userr.uid;
            this.usuario.email = userr.email;
            this.usuario.foto = userr.photoURL;
            this.usuario.nombre = userr.displayName;
        });
        this.resenas = this.resenaServe.resenasPeliculas(this.idPelicula);
        //console.log(this.resenas);
    }
    verResena(uid, com, ip, iu, post, tit, val) {
        this.r.uid = uid;
        this.r.comentario = com;
        this.r.idPelicula = ip;
        this.r.idUsuario = iu;
        this.r.poster = post;
        this.r.title = tit;
        this.r.valoracion = val;
        let params = {
            queryParams: {
                id: this.idPelicula,
                idUser: this.idUsuario,
                usuario: this.usuario,
                resena: this.r,
            }
        };
        this.router.navigate(['ver-comentar-resena'], params);
        //console.log('Datos Listos'+this.r.uid);
        //console.log('Datos Listos'+this.r.comentario);
        //console.log('Datos Listos'+this.r.idPelicula);
        //console.log('Datos Listos'+this.r.idUsuario);
        //console.log('Datos Listos'+this.r.poster);
        //console.log('Datos Listos'+this.r.title);
        //console.log('Datos Listos'+this.r.valoracion);
        //console.log('Datos Listos'+this.usuario.uid);
    }
    enviarResena() {
        //this.usuario = this.userServe.getUserIdGoogle(this.idUsuario);
        let params = {
            queryParams: {
                id: this.idPelicula,
                idUser: this.idUsuario,
                usuario: this.usuario,
            }
        };
        this.router.navigate(['agregar-resena'], params);
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
    home() {
        let params = {
            queryParams: {
                idPelicula: "Redirecto",
                idUsuario: this.user.uid,
                usuario: this.user
            }
        };
        this.router.navigate(['principal'], params);
    }
};
MovieDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_movies_pelicula_service__WEBPACK_IMPORTED_MODULE_4__.PeliculaService },
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService },
    { type: src_app_services_resenas_resenas_service__WEBPACK_IMPORTED_MODULE_5__.ResenasService }
];
MovieDetailsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-movie-details',
        template: _C_Users_59395_Desktop_Ionic_PF_CuencaPelis_PM59_node_modules_ngtools_webpack_src_loaders_direct_resource_js_movie_details_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_movie_details_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], MovieDetailsPage);



/***/ }),

/***/ 8995:
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/User/Movies/movie-details/movie-details.page.html ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title> Cuenca Pelis+</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-card *ngIf=\"information\">\r\n    <ion-card-header>\r\n      <ion-card-title> {{ information.Title }} </ion-card-title>\r\n      <ion-card-subtitle> {{ information.Year }} </ion-card-subtitle>\r\n    </ion-card-header>\r\n\r\n    <ion-card-content text-center>\r\n      <img [src]=\"information.Poster\" class=\"info-img\" />\r\n      {{ information.Plot }}\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-icon name=\"star-half\" slot=\"start\"></ion-icon>\r\n        <ion-label>{{ information.imdbRating }}</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-icon name=\"clipboard\" slot=\"start\"></ion-icon>\r\n        <ion-label text-wrap>{{ information.Director }}</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-icon name=\"people-circle-outline\" slot=\"start\"></ion-icon>\r\n        <ion-label text-wrap>{{ information.Actors }}</ion-label>\r\n      </ion-item>\r\n\r\n\r\n      <ion-button\r\n        expand=\"full\"\r\n        (click)=\"openWebsite()\"\r\n        *ngIf=\"information.Website && information.Website !='N/A'\"\r\n      >\r\n        <ion-icon name=\"open\" slot=\"start\"></ion-icon>\r\n        Open Website\r\n      </ion-button>\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"enviarResena()\">\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n\r\n    <ion-fab-button (click)=\"home()\">\r\n      <ion-icon name=\"home-outline\"></ion-icon>\r\n    </ion-fab-button>\r\n    \r\n  </ion-fab>\r\n\r\n  \r\n\r\n  <ion-list>\r\n    <ion-list-header> Resenas </ion-list-header>\r\n\r\n    <ion-item *ngFor=\"let resena of resenas | async\">\r\n      <ion-avatar slot=\"start\">\r\n        <img [src]=\"resena.poster\" *ngIf=\"resena.poster != 'N/A'\" />\r\n      </ion-avatar>\r\n      <ion-label (click)=\"verResena(resena.uid,resena.comentario,resena.idPelicula,resena.idUsuario,resena.poster,resena.title,resena.valoracion)\">\r\n        <h2>{{ resena.title }}</h2>\r\n        <h3>{{ resena.valoracion }}</h3>\r\n        <p>{{ resena.comentario }}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    \r\n  </ion-list>\r\n\r\n  \r\n  \r\n</ion-content>\r\n\r\n<ion-footer>\r\n\t<ion-toolbar>\r\n\t\t<ion-grid>\r\n\t\t\t<ion-row>\r\n        <ion-col>\r\n\t\t\t\t<div><ion-button color=\"light\" (click)=\"menu('/pages/User/usuario/perfil')\"><ion-icon name=\"person-outline\"></ion-icon></ion-button></div>\r\n\t\t\t  </ion-col>\r\n\t\t\t  <ion-col>\r\n\t\t\t\t<div><ion-button color=\"light\" (click)=\"menu('/pages/User/Resenas/listar-resenas')\"><ion-icon name=\"reader-outline\"></ion-icon></ion-button></div>\r\n\t\t\t  </ion-col>\r\n\t\t\t  <ion-col>\r\n\t\t\t\t<div><ion-button color=\"light\" (click)=\"menu('lugares')\"><ion-icon name=\"pin-outline\"></ion-icon></ion-button></div>\r\n\t\t\t  </ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t\r\n\t\t  </ion-grid>\r\n\t</ion-toolbar>\r\n</ion-footer>");

/***/ }),

/***/ 9115:
/*!*************************************************************************!*\
  !*** ./src/app/pages/User/Movies/movie-details/movie-details.page.scss ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3ZpZS1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_User_Movies_movie-details_movie-details_module_ts.js.map