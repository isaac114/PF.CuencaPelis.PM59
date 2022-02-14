"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 6215:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 9004);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 2371:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 6215);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 9004);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 9004:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _C_Users_59395_Desktop_Ionic_PF_CuencaPelis_PM59_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 7230);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 8918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_services_auth_auth_google_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth/auth-google.service */ 1191);






let LoginPage = class LoginPage {
    constructor(router, auth) {
        this.router = router;
        this.auth = auth;
    }
    ngOnInit() {
    }
    //Metodo para Validar Usuario
    validarUsuario() {
        console.log(this.nombre + this.contrasena);
        this.router.navigate(['principal'], { queryParams: { id: '' } });
    }
    onSubmitLogin() {
        var id;
        this.auth.login()
            .then((data) => {
            id = data;
            this.router.navigate(['principal'], { queryParams: { id: data } });
        })
            .catch((ex) => {
            console.log(ex);
        });
    }
    logout() {
        this.auth.logout();
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_auth_auth_google_service__WEBPACK_IMPORTED_MODULE_2__.AuthGoogleService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-login',
        template: _C_Users_59395_Desktop_Ionic_PF_CuencaPelis_PM59_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 1191:
/*!******************************************************!*\
  !*** ./src/app/services/auth/auth-google.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGoogleService": () => (/* binding */ AuthGoogleService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/compat/auth */ 9774);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 3059);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/compat/app */ 300);





let AuthGoogleService = class AuthGoogleService {
    constructor(auth, afs) {
        this.auth = auth;
        this.afs = afs;
    }
    loginGoogle() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            //this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
            return this.credential;
        });
    }
    login() {
        //return una promesa
        return new Promise((resolve, rejected) => {
            this.auth.signInWithPopup(new firebase_compat_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth.GoogleAuthProvider()).then(user => {
                //console.log(user.user);
                let userr = JSON.parse(JSON.stringify(user.user));
                this.credential = userr.uid;
                //console.log(userr.uid);
                this.loginGoogle();
                this.updateDtaUser(userr);
                resolve(userr);
            }).catch(err => rejected(err));
        });
    }
    logout() {
        this.auth.signOut();
    }
    updateDtaUser(user) {
        const refUsers = this.afs.collection('users');
        if (user.uid == null) {
            user.uid = this.afs.createId();
        }
        const data = {
            uid: user.uid,
            email: user.email || null,
            displayName: user.displayName,
            photoURL: user.PhotoURL || "https://goo.gl/7kz9qG",
            provider: user.providerData[0].providerId,
            lastLogin: new Date(Number(user.lastLoginAt)) || null,
            createAt: new Date(Number(user.createdAt)) || null
        };
        refUsers.doc(user.uid).set(user);
    }
};
AuthGoogleService.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_2__.AngularFireAuth },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore }
];
AuthGoogleService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AuthGoogleService);



/***/ }),

/***/ 7230:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/login/login.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>CuencaPelis+ Login</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"principal\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <!--Inputs Entrada de datos  Correo y Contrasena-->\r\n  <div>\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"2\">\r\n        </ion-col>\r\n        <ion-col size=\"7\">\r\n          <div >\r\n            <img id=\"imagenLogin\" src=\"https://img.icons8.com/external-flat-icons-inmotus-design/67/000000/external-avatar-messenger-flat-icons-inmotus-design.png\"/>\r\n          </div>\r\n        </ion-col>\r\n        <ion-col size=\"3\"> \r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <div id=\"centrarInput\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Correo</ion-label>\r\n        <ion-input [(ngModel)]=\"nombre\"></ion-input>\r\n      </ion-item>\r\n    </div>\r\n  \r\n    <div id=\"centrarInput\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\" >Contrasena</ion-label>\r\n        <ion-input type=\"password\" [(ngModel)]=\"contrasena\"></ion-input>\r\n      </ion-item>\r\n    </div>\r\n  </div>\r\n\r\n  <!--Boton para aceptar la entrada de datos-->\r\n  <div id=\"centrarBoton\">\r\n    <ion-button  expand=\"block\" color=\"danger\" (click)=\"validarUsuario()\">Log In</ion-button>\r\n  </div>\r\n  <div >\r\n    <ion-grid >\r\n      <ion-row>\r\n        <ion-col>\r\n        </ion-col>\r\n        <ion-col>\r\n         <div >\r\n          <img class=\"google\" (click)=\"onSubmitLogin()\" src=\"https://cdn-icons.flaticon.com/png/512/2875/premium/2875435.png?token=exp=1644792790~hmac=b9fbd7b10cf14e2926c97a02348242ab\">\r\n          \r\n         </div>\r\n        </ion-col>\r\n        <ion-col>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </div>\r\n  \r\n \r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ 8918:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "#centrarInput {\n  margin-top: 1%;\n  margin-bottom: 1%;\n  margin-right: 5%;\n  margin-left: 5%;\n}\n\n#centrarBoton {\n  margin-top: 3%;\n  margin-bottom: 1%;\n  margin-right: 8%;\n  margin-left: 8%;\n}\n\n#espacio {\n  margin-top: 25%;\n}\n\n#imagenLogin {\n  align-items: center;\n  margin-top: 6%;\n  margin-bottom: 4%;\n  margin-right: 10%;\n  margin-left: 10%;\n  width: 150%;\n}\n\n.google {\n  padding-right: 20%;\n  padding-left: 30%;\n  width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0FBQ0o7O0FBR0E7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQUo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtBQURKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjZW50cmFySW5wdXR7XHJcbiAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDElO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG5cclxuI2NlbnRyYXJCb3RvbntcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDglO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDglO1xyXG59XHJcblxyXG4jZXNwYWNpb3tcclxuICAgIG1hcmdpbi10b3A6IDI1JTtcclxuICAgIFxyXG59XHJcblxyXG4jaW1hZ2VuTG9naW57XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIHdpZHRoOiAxNTAlO1xyXG59XHJcblxyXG5cclxuLmdvb2dsZXtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwJTtcclxuICAgIHBhZGRpbmctbGVmdDogMzAlO1xyXG4gICAgd2lkdGg6IDkwJTtcclxufSJdfQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map