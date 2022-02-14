"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_User_Movies_principal_principal_module_ts"],{

/***/ 4722:
/*!*************************************************************************!*\
  !*** ./src/app/pages/User/Movies/principal/principal-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrincipalPageRoutingModule": () => (/* binding */ PrincipalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _principal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./principal.page */ 9290);




const routes = [
    {
        path: '',
        component: _principal_page__WEBPACK_IMPORTED_MODULE_0__.PrincipalPage
    }
];
let PrincipalPageRoutingModule = class PrincipalPageRoutingModule {
};
PrincipalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrincipalPageRoutingModule);



/***/ }),

/***/ 7656:
/*!*****************************************************************!*\
  !*** ./src/app/pages/User/Movies/principal/principal.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrincipalPageModule": () => (/* binding */ PrincipalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _principal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./principal-routing.module */ 4722);
/* harmony import */ var _principal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./principal.page */ 9290);







let PrincipalPageModule = class PrincipalPageModule {
};
PrincipalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _principal_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrincipalPageRoutingModule
        ],
        declarations: [_principal_page__WEBPACK_IMPORTED_MODULE_1__.PrincipalPage]
    })
], PrincipalPageModule);



/***/ }),

/***/ 9290:
/*!***************************************************************!*\
  !*** ./src/app/pages/User/Movies/principal/principal.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrincipalPage": () => (/* binding */ PrincipalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_59395_Desktop_Ionic_PF_CuencaPelis_PM59_node_modules_ngtools_webpack_src_loaders_direct_resource_js_principal_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./principal.page.html */ 9482);
/* harmony import */ var _principal_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./principal.page.scss */ 7784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_services_movies_pelicula_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movies/pelicula.service */ 237);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user/user.service */ 9610);







let PrincipalPage = class PrincipalPage {
    constructor(infoService, router, route, userServe) {
        this.infoService = infoService;
        this.router = router;
        this.route = route;
        this.userServe = userServe;
        this.type = src_app_services_movies_pelicula_service__WEBPACK_IMPORTED_MODULE_2__.SearchType.all;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            //console.log(params);
            //this.nombre = params.nombre;
            if (this.router.getCurrentNavigation().extras.queryParams) {
                //this.usuarioID = this.router.getCurrentNavigation().extras.queryParams.id.uid;
                this.user = this.router.getCurrentNavigation().extras.queryParams.id;
                console.log('Seccion PaginaPrincipal-->UsuarioID: ' + this.user.uid);
            }
        });
        if (this.user.uid == undefined) {
            this.userServe.getUserIdGoogle('BLR9hT2l8EdPUyIznKwyMyLsF8F2').subscribe((result) => {
                let userr = JSON.parse(JSON.stringify(result[0]));
                this.usuarioID = this.user.uid;
                this.user = userr;
                console.log(this.user.uid);
            });
        }
    }
    prueba() {
        console.log("PruebaClick");
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
    enviar(idPelicula) {
        /*console.log(idPelicula+'==='+this.usuarioID);mapa
        this.router.navigate(['movie-details'], { queryParams: { id: idPelicula, idUser: this.usuarioID } });*/
        //console.log(idPelicula+'==='+this.usuarioID);
        let params = {
            queryParams: {
                id: idPelicula,
                idUser: this.usuarioID,
                user: this.user,
            }
        };
        this.router.navigate(['movie-details'], params);
    }
    searchChanged($event) {
        this.results = this.infoService.searchData(this.searchTerm, this.type);
    }
};
PrincipalPage.ctorParameters = () => [
    { type: src_app_services_movies_pelicula_service__WEBPACK_IMPORTED_MODULE_2__.PeliculaService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService }
];
PrincipalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-principal',
        template: _C_Users_59395_Desktop_Ionic_PF_CuencaPelis_PM59_node_modules_ngtools_webpack_src_loaders_direct_resource_js_principal_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_principal_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], PrincipalPage);



/***/ }),

/***/ 9482:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/User/Movies/principal/principal.page.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\r\n\t<ion-toolbar>\r\n\t  <ion-buttons slot=\"start\">\r\n\t\t<ion-menu-button (click)=\"prueba()\"></ion-menu-button>\r\n\t\t\r\n\t  </ion-buttons>\r\n\t  <ion-title> Cuenca Pelis+</ion-title>\r\n\t  <ion-buttons slot=\"end\">\r\n\t\t<ion-button routerLink=\"/pages/login\">\r\n\t\t\t<ion-icon slot=\"icon-only\" name=\"person-outline\"></ion-icon>\r\n\t\t</ion-button>\r\n\t</ion-buttons>\r\n\t</ion-toolbar>\r\n  </ion-header>\r\n\r\n<ion-content>\r\n\t<ion-searchbar\r\n\t\t[(ngModel)]=\"searchTerm\"\r\n\t\t(ionChange)=\"searchChanged($event)\"\r\n\t></ion-searchbar>\r\n\r\n\t<ion-item>\r\n\t\t<ion-label>Select Searchtype</ion-label>\r\n\t\t<ion-select [(ngModel)]=\"type\" (ionChange)=\"searchChanged($event)\">\r\n\t\t\t<ion-select-option value=\"\">All</ion-select-option>\r\n\t\t\t<ion-select-option value=\"movie\">Movie</ion-select-option>\r\n\t\t\t<ion-select-option value=\"series\">Series</ion-select-option>\r\n\t\t\t<ion-select-option value=\"episode\">Episode</ion-select-option>\r\n\t\t</ion-select>\r\n\t</ion-item>\r\n\r\n\t<ion-list>\r\n\t\t<ion-item\r\n\t\t\tbutton\r\n\t\t\t*ngFor=\"let item of (results | async)\"\r\n\t\t\t(click)=\"enviar(item.imdbID)\"\r\n\t\t\t\r\n\t\t>\r\n\t\t\t<ion-avatar slot=\"start\">\r\n\t\t\t\t<img [src]=\"item.Poster\" *ngIf=\"item.Poster !== 'N/A'\" />\r\n\t\t\t</ion-avatar>\r\n\r\n\t\t\t<ion-label text-wrap>\r\n\t\t\t\t<h3>{{ item.Title }}</h3>\r\n\t\t\t\t{{ item.Year }}\r\n\t\t\t</ion-label>\r\n\r\n\t\t\t<ion-icon\r\n\t\t\t\tslot=\"end\"\r\n\t\t\t\t*ngIf=\"item.Type == 'movie'\"\r\n\t\t\t\tname=\"videocam-outline\"\r\n\t\t\t></ion-icon>\r\n\t\t\t<ion-icon slot=\"end\" *ngIf=\"item.Type == 'series'\" name=\"tv-outline\"></ion-icon>\r\n\t\t\t<ion-icon\r\n\t\t\t\tslot=\"end\"\r\n\t\t\t\t*ngIf=\"item.Type == 'game'\"\r\n\t\t\t\tname=\"logo-game-controller-outline\"\r\n\t\t\t></ion-icon>\r\n\t\t</ion-item>\r\n\t</ion-list>\r\n\t\r\n</ion-content>\r\n<ion-footer>\r\n\t<ion-toolbar >\r\n\t\t<ion-grid>\r\n\t\t\t<ion-row > \r\n\t\t\t  <ion-col  >\r\n\t\t\t\t<div><ion-button  color=\"light\" (click)=\"menu('perfil')\" id=\"boton\"><ion-icon (click)=\"menu('perfil')\" name=\"person-outline\"></ion-icon></ion-button></div>\r\n\t\t\t  </ion-col>\r\n\t\t\t  <ion-col>\r\n\t\t\t\t<div ><ion-button color=\"light\" (click)=\"menu('resenas')\" id=\"boton\"><ion-icon name=\"reader-outline\"></ion-icon></ion-button></div>\r\n\t\t\t  </ion-col>\r\n\t\t\t  <ion-col>\r\n\t\t\t\t<div \r\n\t\t\t\t><ion-button  color=\"light\" (click)=\"menu('lugares')\" id=\"boton\"><ion-icon name=\"pin-outline\"></ion-icon></ion-button></div>\r\n\t\t\t  </ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t\r\n\t\t  </ion-grid>\r\n\t</ion-toolbar>\r\n</ion-footer>\r\n");

/***/ }),

/***/ 7784:
/*!*****************************************************************!*\
  !*** ./src/app/pages/User/Movies/principal/principal.page.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "#boton {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW5jaXBhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoicHJpbmNpcGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNib3RvbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuI25ue1xyXG4gICAgXHJcbn0iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_User_Movies_principal_principal_module_ts.js.map