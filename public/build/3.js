webpackJsonp([3],{

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup__ = __webpack_require__(701);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__signup__["a" /* SignupPage */]
            ]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_providers__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupPage = (function () {
    function SignupPage(navCtrl, authService, toastCtrl, formBuilder, alertCtrl, loadingCtrl, translateService, menu) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.translateService = translateService;
        this.menu = menu;
        this.emailChanged = false;
        this.passwordChanged = false;
        this.fullnameChanged = false;
        this.submitAttempt = false;
        this.translateService.get("SIGNUP_ERROR").subscribe(function (value) {
            _this.signupErrorString = value;
        });
        this.registerForm = formBuilder.group({
            email: [
                "",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
                ])
            ],
            password: [
                "",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(8), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])
            ],
            fullname: [
                "",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(2), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])
            ]
        });
    }
    SignupPage.prototype.ionViewDidEnter = function () {
        this.menu.enable(false);
    };
    SignupPage.prototype.ionViewWillLeave = function () {
        this.menu.enable(true);
    };
    SignupPage.prototype.elementChanged = function (input) {
        var field = input.ngControl.name;
        this[field + "Changed"] = true;
    };
    SignupPage.prototype.doSignup = function () {
        var _this = this;
        this.submitAttempt = true;
        if (!this.registerForm.valid) {
            console.log(this.registerForm.value);
        }
        else {
            this.authService
                .registerUser(this.registerForm.value.email, this.registerForm.value.password)
                .subscribe(function (response) {
                _this.loading.dismiss().then(function () {
                    _this.alertCtrl.create({
                        message: "Registered Successfully",
                        buttons: [
                            {
                                text: "Ok",
                                role: "cancel",
                                handler: function () {
                                    _this.navCtrl.setRoot("LoginPage");
                                }
                            }
                        ]
                    }).present();
                });
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    _this.alertCtrl.create({
                        message: error.message,
                        buttons: [
                            {
                                text: "Ok",
                                role: "cancel"
                            }
                        ]
                    }).present();
                });
            });
            this.loading = this.loadingCtrl.create({
                dismissOnPageChange: true
            });
            this.loading.present();
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-signup",template:/*ion-inline-start:"C:\dev\clumapp\src\pages\signup\signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'SIGNUP_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-12 col-md-6 col-md-offset-3>\n          <form [formGroup]="registerForm" (submit)="doSignup()" novalidate>\n              <ion-item>\n                <ion-label stacked>Email</ion-label>\n                <ion-input #email formControlName="email" name="email" type="email" (change)="elementChanged(email)"\n                          [class.invalid]="!registerForm.controls.email.valid && (emailChanged || submitAttempt)"></ion-input>\n                </ion-item>\n              <ion-item class="error-message" *ngIf="!registerForm.controls.email.valid  && (emailChanged || submitAttempt)">\n                <p>Please enter a valid email.</p>\n                </ion-item>\n              <ion-item>\n                <ion-label stacked>Password</ion-label>\n                <ion-input #password formControlName="password" name="password" type="password" (change)="elementChanged(password)"\n                          [class.invalid]="!registerForm.controls.password.valid && (passwordChanged || submitAttempt)"></ion-input>\n                </ion-item>\n              <ion-item class="error-message" *ngIf="!registerForm.controls.password.valid  && (passwordChanged || submitAttempt)">\n                <p>Your password needs atleast 8 characters.</p>\n              </ion-item>\n              <ion-item>\n                <ion-label stacked>Full Name</ion-label>\n                <ion-input #fullname formControlName="fullname" type="text" (change)="elementChanged(fullname)"\n                          [class.invalid]="!registerForm.controls.fullname.valid && (fullnameChanged || submitAttempt)"></ion-input>\n                </ion-item>\n              <ion-item class="error-message" *ngIf="!registerForm.controls.fullname.valid  && (fullnameChanged || submitAttempt)">\n                <p>Your name must be at 2 characters.</p>\n              </ion-item>\n              <div padding>\n                <button ion-button color="primary" block>SIGNUP</button>\n              </div>\n            </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>'/*ion-inline-end:"C:\dev\clumapp\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["b" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* MenuController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=3.js.map