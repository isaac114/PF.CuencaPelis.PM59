"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_User_Resenas_ver-comentar-resena_ver-comentar-resena_module_ts"],{

/***/ 6376:
/*!**************************************!*\
  !*** ./src/app/domain/comentario.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Comentario": () => (/* binding */ Comentario)
/* harmony export */ });
class Comentario {
}


/***/ }),

/***/ 505:
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/User/Resenas/ver-comentar-resena/ver-comentar-resena-routing.module.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerComentarResenaPageRoutingModule": () => (/* binding */ VerComentarResenaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ver_comentar_resena_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ver-comentar-resena.page */ 3398);




const routes = [
    {
        path: '',
        component: _ver_comentar_resena_page__WEBPACK_IMPORTED_MODULE_0__.VerComentarResenaPage
    }
];
let VerComentarResenaPageRoutingModule = class VerComentarResenaPageRoutingModule {
};
VerComentarResenaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], VerComentarResenaPageRoutingModule);



/***/ }),

/***/ 2106:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/User/Resenas/ver-comentar-resena/ver-comentar-resena.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerComentarResenaPageModule": () => (/* binding */ VerComentarResenaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _ver_comentar_resena_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ver-comentar-resena-routing.module */ 505);
/* harmony import */ var _ver_comentar_resena_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ver-comentar-resena.page */ 3398);







let VerComentarResenaPageModule = class VerComentarResenaPageModule {
};
VerComentarResenaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _ver_comentar_resena_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerComentarResenaPageRoutingModule
        ],
        declarations: [_ver_comentar_resena_page__WEBPACK_IMPORTED_MODULE_1__.VerComentarResenaPage]
    })
], VerComentarResenaPageModule);



/***/ }),

/***/ 3398:
/*!************************************************************************************!*\
  !*** ./src/app/pages/User/Resenas/ver-comentar-resena/ver-comentar-resena.page.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerComentarResenaPage": () => (/* binding */ VerComentarResenaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_59395_Desktop_Ionic_PF_CuencaPelis_PM59_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ver_comentar_resena_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./ver-comentar-resena.page.html */ 389);
/* harmony import */ var _ver_comentar_resena_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ver-comentar-resena.page.scss */ 8570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_domain_comentario__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/domain/comentario */ 6376);
/* harmony import */ var src_app_domain_usuario__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/domain/usuario */ 3322);
/* harmony import */ var src_app_services_comentarios_comentario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/comentarios/comentario.service */ 6427);
/* harmony import */ var src_app_services_movies_pelicula_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/movies/pelicula.service */ 237);
/* harmony import */ var src_app_services_resenas_resenas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/resenas/resenas.service */ 3515);
/* harmony import */ var src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user/user.service */ 9610);











let VerComentarResenaPage = class VerComentarResenaPage {
    constructor(route, router, infoService, userServe, resenaServe, comentarioServe) {
        this.route = route;
        this.router = router;
        this.infoService = infoService;
        this.userServe = userServe;
        this.resenaServe = resenaServe;
        this.comentarioServe = comentarioServe;
        this.usuario = new src_app_domain_usuario__WEBPACK_IMPORTED_MODULE_3__.Usuario();
        this.coment = new src_app_domain_comentario__WEBPACK_IMPORTED_MODULE_2__.Comentario();
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            //console.log(params);
            //this.nombre = params.nombre;
            if (this.router.getCurrentNavigation().extras.queryParams) {
                this.idPelicula = this.router.getCurrentNavigation().extras.queryParams.id;
                this.idUsuario = this.router.getCurrentNavigation().extras.queryParams.idUser;
                this.usuario = this.router.getCurrentNavigation().extras.queryParams.usuario;
                this.information = this.router.getCurrentNavigation().extras.queryParams.resena;
                this.user = this.usuario;
                console.log('Ver Resenas Comentar ======> ID MOVIE: ' + this.information.idPelicula + 'ID User: ' + this.information.idUsuario);
            }
        });
        this.comentarios = this.comentarioServe.getComentariosResena(this.information.uid);
        console.log(this.comentarios);
    }
    comentar() {
        this.coment.comentario = this.comentario;
        this.coment.idPelicula = this.idPelicula;
        this.coment.idUsuario = this.idUsuario;
        this.coment.nombre = this.usuario.nombre;
        this.coment.poster = this.information.poster;
        this.coment.title = this.information.title;
        this.coment.idResena = this.information.uid;
        //console.log(this.coment.comentario+'-'+this.coment.idPelicula+'-'+this.coment.idUsuario+'-'+this.coment.nombre);
        let params = {
            queryParams: {
                id: this.idPelicula,
                idUser: this.idUsuario,
                usuario: this.usuario,
                resena: this.information,
                comentario: this.coment
            }
        };
        this.comentarioServe.save(this.coment);
        this.router.navigate(['ver-comentar-resena'], params);
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
VerComentarResenaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_movies_pelicula_service__WEBPACK_IMPORTED_MODULE_5__.PeliculaService },
    { type: src_app_services_user_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService },
    { type: src_app_services_resenas_resenas_service__WEBPACK_IMPORTED_MODULE_6__.ResenasService },
    { type: src_app_services_comentarios_comentario_service__WEBPACK_IMPORTED_MODULE_4__.ComentarioService }
];
VerComentarResenaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-ver-comentar-resena',
        template: _C_Users_59395_Desktop_Ionic_PF_CuencaPelis_PM59_node_modules_ngtools_webpack_src_loaders_direct_resource_js_ver_comentar_resena_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_ver_comentar_resena_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], VerComentarResenaPage);



/***/ }),

/***/ 6427:
/*!************************************************************!*\
  !*** ./src/app/services/comentarios/comentario.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComentarioService": () => (/* binding */ ComentarioService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 3059);



let ComentarioService = class ComentarioService {
    constructor(afs) {
        this.afs = afs;
    }
    save(comentario) {
        const reResena = this.afs.collection('comentarios');
        if (comentario.uid == null) {
            comentario.uid = this.afs.createId();
        }
        reResena.doc(comentario.uid).set(Object.assign({}, comentario));
    }
    getComentariosResena(idResena) {
        const refContactos = this.afs.collection('comentarios', ref => ref.where("idResena", "==", idResena));
        return refContactos.valueChanges();
    }
};
ComentarioService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_0__.AngularFirestore }
];
ComentarioService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ComentarioService);



/***/ }),

/***/ 389:
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/User/Resenas/ver-comentar-resena/ver-comentar-resena.page.html ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>verComentarResena</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card *ngIf=\"information\">\r\n    <ion-card-header>\r\n      <ion-card-title> {{ information.title }} </ion-card-title>\r\n      <ion-card-subtitle> {{ information.idPelicula }} </ion-card-subtitle>\r\n    </ion-card-header>\r\n\r\n    <ion-card-content text-center>\r\n      <img [src]=\"information.poster\" class=\"info-img\" />\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-icon name=\"star-half\" slot=\"start\"></ion-icon>\r\n        <ion-label>{{ information.idUsuario }}</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-icon name=\"clipboard\" slot=\"start\"></ion-icon>\r\n        <ion-label text-wrap>{{ information.valoracion }}</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-item lines=\"none\">\r\n        <ion-icon name=\"people-circle-outline\" slot=\"start\"></ion-icon>\r\n        <ion-label text-wrap>{{ information.comentario }}</ion-label>\r\n      </ion-item>\r\n\r\n\r\n      <div>\r\n        <ion-item>\r\n          <ion-label position=\"floating\" >Contrasena</ion-label>\r\n          <ion-input [(ngModel)]=\"comentario\"></ion-input>\r\n        </ion-item>\r\n        <ion-button  expand=\"block\" color=\"danger\" (click)=\"comentar()\">Comentar</ion-button>\r\n      </div>\r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n  <ion-list>\r\n    <ion-list-header> Comentarios </ion-list-header>\r\n\r\n    <ion-item *ngFor=\"let c of comentarios | async\">\r\n      <ion-avatar slot=\"start\">\r\n        <img [src]=\"c.poster\" *ngIf=\"c.poster != 'N/A'\" />\r\n      </ion-avatar>\r\n      <ion-label >\r\n        <h2>{{ c.nombre }}</h2>\r\n        <h3>{{ c.title }}</h3>\r\n        <p>{{ c.comentario }}</p>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    \r\n  </ion-list>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\r\n    <ion-fab-button (click)=\"home()\">\r\n      <ion-icon name=\"home-sharp\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n\t<ion-toolbar>\r\n\t\t<ion-grid>\r\n\t\t\t<ion-row>\r\n\t\t\t  <ion-col>\r\n\t\t\t\t<div><ion-button color=\"light\" (click)=\"menu('perfil')\"><ion-icon name=\"person-outline\"></ion-icon></ion-button></div>\r\n\t\t\t  </ion-col>\r\n\t\t\t  <ion-col>\r\n\t\t\t\t<div><ion-button color=\"light\" (click)=\"menu('resenas')\"><ion-icon name=\"reader-outline\"></ion-icon></ion-button></div>\r\n\t\t\t  </ion-col>\r\n\t\t\t  <ion-col>\r\n\t\t\t\t<div><ion-button color=\"light\" (click)=\"menu('lugares')\"><ion-icon name=\"pin-outline\"></ion-icon></ion-button></div>\r\n\t\t\t  </ion-col>\r\n\t\t\t</ion-row>\r\n\t\t\t\r\n\t\t  </ion-grid>\r\n\t</ion-toolbar>\r\n</ion-footer>\r\n\r\n");

/***/ }),

/***/ 8570:
/*!**************************************************************************************!*\
  !*** ./src/app/pages/User/Resenas/ver-comentar-resena/ver-comentar-resena.page.scss ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXItY29tZW50YXItcmVzZW5hLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_User_Resenas_ver-comentar-resena_ver-comentar-resena_module_ts.js.map