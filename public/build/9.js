webpackJsonp([9],{

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(694);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 694:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_authentication_service_authentication_service__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(405);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = (function () {
    function LoginPage(navCtrl, authservice, toastCtrl, alertCtrl, formBuilder, loadingCtrl, translateService, screenOrientation, menu) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.authservice = authservice;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.translateService = translateService;
        this.screenOrientation = screenOrientation;
        this.menu = menu;
        this.submitAttempt = false;
        this.passicon = 'eye';
        this.type = 'password';
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
        this.translateService.get('LOGIN_ERROR')
            .subscribe(function (value) {
            _this.loginErrorString = value;
        });
        this.screenOrientation.onChange().subscribe(function () {
            if (_this.screenOrientation.type == _this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY) {
                _this.showImage = 'block';
                _this.margin_top = 0;
            }
            else {
                _this.showImage = 'none';
                _this.margin_top = -20;
            }
        });
    }
    LoginPage.prototype.ionViewDidEnter = function () {
        this.menu.enable(false);
    };
    LoginPage.prototype.ionViewWillLeave = function () {
        this.menu.enable(true);
    };
    LoginPage.prototype.togglePasswordVisible = function (event) {
        event.preventDefault();
        if (this.passicon == 'eye') {
            this.passicon = 'eye-off';
            this.type = 'text';
        }
        else {
            this.passicon = 'eye';
            this.type = 'password';
        }
    };
    LoginPage.prototype.elementChanged = function (input) {
        var field = input.ngControl.name;
        this[field + "Changed"] = true;
    };
    LoginPage.prototype.Signup = function () {
        this.navCtrl.push('SignupPage');
    };
    LoginPage.prototype.Login = function (event) {
        var _this = this;
        event.preventDefault();
        this.submitAttempt = true;
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
        }
        else {
            var credentials = ({ email: this.loginForm.value.email, password: this.loginForm.value.password });
            this.authservice.doLogin(credentials)
                .subscribe(function (auth) { _this.navCtrl.setRoot('TabsPage'); }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
                        title: error.code,
                        message: error.message,
                        buttons: [
                            {
                                text: "Ok",
                                role: 'cancel'
                            }
                        ]
                    });
                    alert.present();
                });
            });
            this.loading = this.loadingCtrl.create({
                dismissOnPageChange: true,
            });
            this.loading.present();
        }
    };
    LoginPage.prototype.resetPassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__pages__["f" /* ResetPasswordPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"C:\dev\clumapp\src\pages\login\login.html"*/'<ion-content no-padding class="no-scroll bg-image">\n  <div>\n    <ion-grid no-padding>\n      <ion-row align-items-center justify-content-center>\n        <ion-col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 align-self-center>\n          <div class="splash-bg" [style.display]="showImage">\n            <div class="image-box">\n                <img src=\'assets/img/yamaha-boat.png\' width="250px" />\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row align-items-center justify-content-center style="margin-top:25px">\n        <ion-col col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 align-self-center></ion-col>\n        <ion-col col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8 align-self-center no-margin no-padding>\n          <form [formGroup]="loginForm" (submit)="Login($event)" novalidate>\n            <ion-list no-lines>\n              <ion-item>\n                <ion-label stacked>Email</ion-label>\n                <ion-input #email formControlName="email" type="email" (change)="elementChanged(email)" [class.invalid]="!loginForm.controls.email.valid && (emailChanged || submitAttempt)"></ion-input>\n              </ion-item>\n              <ion-item class="error-message" *ngIf="!loginForm.controls.email.valid && (emailChanged || submitAttempt)">\n                <p>Please enter a valid email.</p>\n              </ion-item>\n\n              <ion-item>\n                <ion-label stacked>Password</ion-label>\n                <ion-input #password formControlName="password" [type]="type" (change)="elementChanged(password)" [class.invalid]="!loginForm.controls.password.valid && (passwordChanged || submitAttempt)"></ion-input>\n              </ion-item>\n\n              <div no-padding (click)="togglePasswordVisible($event)" tappable>\n                <ion-icon class="eye" item-end [(name)]="passicon" color="dark"></ion-icon>\n              </div>\n\n              <ion-item class="error-message" *ngIf="!loginForm.controls.password.valid && (submitAttempt)">\n                <p>You must enter a password.</p>\n              </ion-item>\n\n              <div style="margin-top:15px;">\n                <div padding-horizontal>\n                  <button ion-button color="primary" type="submit" block round>Log in</button>\n                </div>\n              </div>\n\n              <ion-col col-12 no-padding>\n                <div style="text-align:center; margin-top:0px;">\n                  <button type="button" ion-button clear color="clear" (click)="resetPassword()">\n                    FORGOTTEN PASSWORD?\n                  </button>\n                </div>\n              </ion-col>\n\n              <ion-col col-12>\n                <div style="text-align:center; margin-top:0px; color:#0067b8;">\n                  OR\n                </div>\n              </ion-col>\n\n              <div ion-row no-padding no-margin [style.margin-top.px]="margin_top">\n                <ion-col col-12 col-sm-12 col-md-4 offset-md-4 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4>\n                  <div padding-horizontal>\n                    <button color="clear" type="button" ion-button (click)="Signup()" round block>\n                      Sign Up\n                    </button>\n                  </div>\n                </ion-col>\n              </div>\n            </ion-list>\n          </form>\n        </ion-col>\n        <ion-col col-12 col-sm-12 col-md-2 col-lg-2 col-xl-2 align-self-stretch></ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\dev\clumapp\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_authentication_service_authentication_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* MenuController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=9.js.map