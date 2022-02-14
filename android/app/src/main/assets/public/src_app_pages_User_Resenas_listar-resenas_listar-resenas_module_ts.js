"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_User_Resenas_listar-resenas_listar-resenas_module_ts"],{

/***/ 6842:
/*!************************************************************************************!*\
  !*** ./src/app/pages/User/Resenas/listar-resenas/listar-resenas-routing.module.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarResenasPageRoutingModule": () => (/* binding */ ListarResenasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _listar_resenas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listar-resenas.page */ 4609);




const routes = [
    {
        path: '',
        component: _listar_resenas_page__WEBPACK_IMPORTED_MODULE_0__.ListarResenasPage
    }
];
let ListarResenasPageRoutingModule = class ListarResenasPageRoutingModule {
};
ListarResenasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ListarResenasPageRoutingModule);



/***/ }),

/***/ 3593:
/*!****************************************************************************!*\
  !*** ./src/app/pages/User/Resenas/listar-resenas/listar-resenas.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarResenasPageModule": () => (/* binding */ ListarResenasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _listar_resenas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listar-resenas-routing.module */ 6842);
/* harmony import */ var _listar_resenas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listar-resenas.page */ 4609);







let ListarResenasPageModule = class ListarResenasPageModule {
};
ListarResenasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _listar_resenas_routing_module__WEBPACK_IMPORTED_MODULE_0__.ListarResenasPageRoutingModule
        ],
        declarations: [_listar_resenas_page__WEBPACK_IMPORTED_MODULE_1__.ListarResenasPage]
    })
], ListarResenasPageModule);



/***/ }),

/***/ 4609:
/*!**************************************************************************!*\
  !*** ./src/app/pages/User/Resenas/listar-resenas/listar-resenas.page.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarResenasPage": () => (/* binding */ ListarResenasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_59395_Desktop_Ionic_PF_CuencaPelis_PM59_node_modules_ngtools_webpack_src_loaders_direct_resource_js_listar_resenas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./listar-resenas.page.html */ 1695);
/* harmony import */ var _listar_resenas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listar-resenas.page.scss */ 6260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_services_movies_pelicula_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/movies/pelicula.service */ 237);






let ListarResenasPage = class ListarResenasPage {
    constructor(route, router, infoService) {
        this.route = route;
        this.router = router;
        this.infoService = infoService;
        route.queryParams.subscribe(params => {
            //console.log(params);
            //this.nombre = params.nombre;
            if (this.router.getCurrentNavigation().extras.queryParams) {
                this.idPelicula = this.router.getCurrentNavigation().extras.queryParams.idPelicula;
                this.idUsuario = this.router.getCurrentNavigation().extras.queryParams.idUsuario;
                this.usuario = this.router.getCurrentNavigation().extras.queryParams.usuario;
                this.user = this.usuario;
                console.log('ListarMisResenas ======> ID MOVIE: ' + this.idPelicula + 'ID User: ' + this.usuario.uid);
            }
        });
    }
    ngOnInit() {
        this.resenas = this.infoService.getMisResenas(this.idUsuario);
        //console.log('RESENAS DEL USUARIO:=>'+this.idUsuario);
        //console.log('RESULTADOS:=>'+this.resenas);
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
ListarResenasPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_movies_pelicula_service__WEBPACK_IMPORTED_MODULE_2__.PeliculaService }
];
ListarResenasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-listar-resenas',
        template: _C_Users_59395_Desktop_Ionic_PF_CuencaPelis_PM59_node_modules_ngtools_webpack_src_loaders_direct_resource_js_listar_resenas_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_listar_resenas_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListarResenasPage);



/***/ }),

/***/ 1695:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/User/Resenas/listar-resenas/listar-resenas.page.html ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>listarResenas</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!--<h1>Bienvenido {{contacto | json}}</h1>-->\r\n  <h1>Mis resenas </h1>\r\n  <ion-list>\r\n    <ion-list-header> Mis Resenas </ion-list-header>\r\n\r\n    <ion-item *ngFor=\"let resena of resenas | async\">\r\n      <ion-avatar slot=\"start\">\r\n        <img [src]=\"resena.poster\" *ngIf=\"resena.poster != 'N/A'\" />\r\n      </ion-avatar>\r\n      <ion-label >\r\n        <h2>{{ resena.title }}</h2>\r\n        <h3>{{ resena.valoracion }}</h3>\r\n        <p>{{ resena.comentario }}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    \r\n  </ion-list>\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"home()\">\r\n      <ion-icon name=\"home-sharp\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n</ion-content>\r\n\r\n<ion-footer>\r\n\t<ion-toolbar>\r\n\t\t<ion-grid>\r\n\t\t\t<ion-row>\r\n\t\t\t  <ion-col>\r\n\t\t\t\t<div><ion-button color=\"light\" (click)=\"menu('perfil')\"><ion-icon name=\"person-outline\"></ion-icon></ion-button></div>\r\n\t\t\t  </ion-col>\r\n\t\t\t  <ion-col>\r\n\t\t\t\t<div><ion-button color=\"light\" (click)=\"menu('resenas')\"><ion-icon name=\"reader-outline\"></ion-icon></ion-button></div>\r\n\t\t\t  </ion-col>\r\n\t\t\t  <ion-col>\r\n\t\t\t\t<div><ion-button color=\"light\" (click)=\"menu('lugares')\"><ion-icon name=\"pin-outline\"></ion-icon></ion-button></div>\r\n\t\t\t  </ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t\r\n\t\t  </ion-grid>\r\n\t</ion-toolbar>\r\n</ion-footer>\r\n\r\n");

/***/ }),

/***/ 6260:
/*!****************************************************************************!*\
  !*** ./src/app/pages/User/Resenas/listar-resenas/listar-resenas.page.scss ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YXItcmVzZW5hcy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_User_Resenas_listar-resenas_listar-resenas_module_ts.js.map