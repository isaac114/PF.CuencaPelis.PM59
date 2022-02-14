"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_User_Resenas_agregar-resena_agregar-resena_module_ts"],{

/***/ 2148:
/*!************************************************************************************!*\
  !*** ./src/app/pages/User/Resenas/agregar-resena/agregar-resena-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarResenaPageRoutingModule": () => (/* binding */ AgregarResenaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _agregar_resena_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agregar-resena.page */ 7448);




const routes = [
    {
        path: '',
        component: _agregar_resena_page__WEBPACK_IMPORTED_MODULE_0__.AgregarResenaPage
    }
];
let AgregarResenaPageRoutingModule = class AgregarResenaPageRoutingModule {
};
AgregarResenaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AgregarResenaPageRoutingModule);



/***/ }),

/***/ 909:
/*!****************************************************************************!*\
  !*** ./src/app/pages/User/Resenas/agregar-resena/agregar-resena.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarResenaPageModule": () => (/* binding */ AgregarResenaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _agregar_resena_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./agregar-resena-routing.module */ 2148);
/* harmony import */ var _agregar_resena_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agregar-resena.page */ 7448);







let AgregarResenaPageModule = class AgregarResenaPageModule {
};
AgregarResenaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _agregar_resena_routing_module__WEBPACK_IMPORTED_MODULE_0__.AgregarResenaPageRoutingModule
        ],
        declarations: [_agregar_resena_page__WEBPACK_IMPORTED_MODULE_1__.AgregarResenaPage]
    })
], AgregarResenaPageModule);



/***/ }),

/***/ 7448:
/*!**************************************************************************!*\
  !*** ./src/app/pages/User/Resenas/agregar-resena/agregar-resena.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgregarResenaPage": () => (/* binding */ AgregarResenaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_59395_Desktop_Ionic_PF_CuencaPelis_PM59_node_modules_ngtools_webpack_src_loaders_direct_resource_js_agregar_resena_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./agregar-resena.page.html */ 5401);
/* harmony import */ var _agregar_resena_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agregar-resena.page.scss */ 3083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_domain_resena__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/domain/resena */ 7718);
/* harmony import */ var src_app_domain_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/domain/usuario */ 3322);
/* harmony import */ var src_app_services_movies_pelicula_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/movies/pelicula.service */ 237);








let AgregarResenaPage = class AgregarResenaPage {
    constructor(infoService, router, route) {
        this.infoService = infoService;
        this.router = router;
        this.route = route;
        this.information = null;
        this.usuario = new src_app_domain_usuario__WEBPACK_IMPORTED_MODULE_3__.Usuario();
        this.resenaPelicula = new src_app_domain_resena__WEBPACK_IMPORTED_MODULE_2__.Resena();
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            //console.log(params);
            //this.nombre = params.nombre;
            if (this.router.getCurrentNavigation().extras.queryParams) {
                this.idPelicula = this.router.getCurrentNavigation().extras.queryParams.id;
                this.idUsuario = this.router.getCurrentNavigation().extras.queryParams.idUser;
                this.usuario = this.router.getCurrentNavigation().extras.queryParams.usuario;
                this.user = this.usuario;
                console.log('AgregarResena ======> ID MOVIE: ' + this.idPelicula + 'ID User: ' + this.usuario.uid);
            }
        });
        this.infoService.getDetails(this.idPelicula).subscribe((result) => {
            this.information = result;
        });
    }
    saveResena() {
        //console.log('ID USUARIO:=>'+this.usuario.uid);
        //console.log('ID MOVIE:=>'+this.idPelicula);
        //console.log('RESENA:=>'+this.resena);
        //console.log('TITULO PELICULA:=>'+this.information.Title);
        //console.log('IMAGEN:=>'+this.information.Poster);
        this.resenaPelicula.uid = null;
        this.resenaPelicula.idUsuario = this.idUsuario;
        this.resenaPelicula.idPelicula = this.idPelicula;
        this.resenaPelicula.title = this.information.Title;
        this.resenaPelicula.poster = this.information.Poster;
        this.resenaPelicula.comentario = this.resena;
        this.resenaPelicula.valoracion = 0;
        this.infoService.save(this.resenaPelicula);
        let params = {
            queryParams: {
                idPelicula: this.idPelicula,
                idUsuario: this.idUsuario,
                usuario: this.usuario
            }
        };
        this.router.navigate(['listar-resenas'], params);
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
};
AgregarResenaPage.ctorParameters = () => [
    { type: src_app_services_movies_pelicula_service__WEBPACK_IMPORTED_MODULE_4__.PeliculaService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
AgregarResenaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-agregar-resena',
        template: _C_Users_59395_Desktop_Ionic_PF_CuencaPelis_PM59_node_modules_ngtools_webpack_src_loaders_direct_resource_js_agregar_resena_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_agregar_resena_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AgregarResenaPage);



/***/ }),

/***/ 5401:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/User/Resenas/agregar-resena/agregar-resena.page.html ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>agregarResena</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <ion-card *ngIf=\"information\">\r\n    <ion-card-header>\r\n      <ion-card-title> {{ information.Title }} </ion-card-title>\r\n      <ion-card-subtitle> {{ information.Year }} </ion-card-subtitle>\r\n    </ion-card-header>\r\n  \r\n    <ion-card-content text-center>\r\n      <img [src]=\"information.Poster\" class=\"info-img\" />\r\n    </ion-card-content>\r\n\r\n    <div></div>\r\n    <div>\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Resena</ion-label>\r\n        <ion-input [(ngModel)]=\"resena\"></ion-input>\r\n      </ion-item>\r\n      <ion-button  expand=\"block\" color=\"danger\" (click)=\"saveResena()\">Anadir Reseña</ion-button>\r\n    </div>\r\n</ion-card>\r\n\r\n<ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n  <ion-fab-button (click)=\"home()\">\r\n    <ion-icon name=\"home-sharp\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n\t<ion-toolbar>\r\n\t\t<ion-grid>\r\n\t\t\t<ion-row>\r\n        <ion-col>\r\n\t\t\t\t<div><ion-button color=\"light\" (click)=\"menu('perfil')\"><ion-icon name=\"person-outline\"></ion-icon></ion-button></div>\r\n\t\t\t  </ion-col>\r\n\t\t\t  <ion-col>\r\n\t\t\t\t<div><ion-button color=\"light\" (click)=\"menu('listar-resenas')\"><ion-icon name=\"reader-outline\"></ion-icon></ion-button></div>\r\n\t\t\t  </ion-col>\r\n\t\t\t  <ion-col>\r\n\t\t\t\t<div><ion-button color=\"light\" (click)=\"menu('lugares')\"><ion-icon name=\"pin-outline\"></ion-icon></ion-button></div>\r\n\t\t\t  </ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t\r\n\t\t  </ion-grid>\r\n\t</ion-toolbar>\r\n</ion-footer>\r\n\r\n");

/***/ }),

/***/ 3083:
/*!****************************************************************************!*\
  !*** ./src/app/pages/User/Resenas/agregar-resena/agregar-resena.page.scss ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZ3JlZ2FyLXJlc2VuYS5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_User_Resenas_agregar-resena_agregar-resena_module_ts.js.map