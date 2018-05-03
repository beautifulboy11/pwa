webpackJsonp([8],{

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberCreatePageModule", function() { return MemberCreatePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__member_create__ = __webpack_require__(695);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MemberCreatePageModule = (function () {
    function MemberCreatePageModule() {
    }
    MemberCreatePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__member_create__["a" /* MemberCreatePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__member_create__["a" /* MemberCreatePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__member_create__["a" /* MemberCreatePage */]
            ]
        })
    ], MemberCreatePageModule);
    return MemberCreatePageModule;
}());

//# sourceMappingURL=member-create.module.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberCreatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MemberCreatePage = (function () {
    function MemberCreatePage(navCtrl, viewCtrl, formBuilder, camera) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.form = formBuilder.group({
            profilePic: [''],
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(4)])],
            membershipNumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].minLength(8)])],
            contact: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["f" /* Validators */].pattern(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)])],
            status: [''],
            about: [''],
            club: ['']
        });
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
    }
    MemberCreatePage.prototype.getPicture = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]['installed']()) {
            this.camera.getPicture({
                destinationType: this.camera.DestinationType.DATA_URL,
                targetWidth: 96,
                targetHeight: 96
            }).then(function (data) {
                _this.form.patchValue({ 'profilePic': 'data:image/jpg;base64,' + data });
            }, function (err) {
                alert('Unable to take photo');
            });
        }
        else {
            this.fileInput.nativeElement.click();
        }
    };
    MemberCreatePage.prototype.processWebImage = function (event) {
        var _this = this;
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var imageData = readerEvent.target.result;
            _this.form.patchValue({ 'profilePic': imageData });
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    MemberCreatePage.prototype.getProfileImageStyle = function () {
        return 'url(' + this.form.controls['profilePic'].value + ')';
    };
    MemberCreatePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    MemberCreatePage.prototype.done = function () {
        if (!this.form.valid) {
            return;
        }
        this.viewCtrl.dismiss(this.form.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], MemberCreatePage.prototype, "fileInput", void 0);
    MemberCreatePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-member-create',template:/*ion-inline-start:"C:\dev\clumapp\src\pages\member-create\member-create.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>New Member</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only color="light" (click)="cancel()" tappable>\n        <ion-icon name="close" style="font-size: 1.8em; font-weight:bold;"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="done()" color="light" [disabled]="!isReadyToSave" strong tappable>\n        <ion-icon name="checkmark" style="font-size: 1.8em; font-weight:bold;"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content no-padding>\n  <ion-grid>\n    <ion-row class="flexo">\n      <ion-col col-12>\n        <form *ngIf="form" [formGroup]="form" (ngSubmit)="createItem()">\n          <input type="file" #fileInput style="visibility: hidden; height: 0px" name="files[]" (change)="processWebImage($event)" />\n          <div class="profile-image-wrapper" (click)="getPicture()" tappable>\n            <div class="profile-image-placeholder" *ngIf="!this.form.controls.profilePic.value">\n              <ion-icon name="add"></ion-icon>\n              <div>\n                Add Image\n              </div>\n            </div>\n            <div class="profile-image" [style.backgroundImage]="getProfileImageStyle()" *ngIf="this.form.controls.profilePic.value"></div>\n          </div>\n          <ion-list>\n            <ion-item>\n              <ion-label stacked>First Name</ion-label>\n              <ion-input type="text" placeholder="" formControlName="firstName"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label stacked>Last Name</ion-label>\n              <ion-input type="text" placeholder="" formControlName="lastName"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label stacked>Club MemberShip #</ion-label>\n              <ion-input type="text" formControlName="membershipNumber"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label stacked>Contact Number</ion-label>\n              <ion-input type="text" placeholder="" formControlName="contact"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label stacked>Status</ion-label>\n              <ion-select formControlName="status">\n                <ion-option value="active" checked="true">Active</ion-option>\n                <ion-option value="nonactive">Non Active</ion-option>\n              </ion-select>\n            </ion-item>\n            <ion-item>\n              <ion-label stacked>About</ion-label>\n              <ion-input type="text" placeholder="" formControlName="about"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label stacked>Club Site</ion-label>\n              <ion-select formControlName="club">\n                <ion-option value="Nkana" checked="true">Nkana</ion-option>\n                <ion-option value="Mufulira">Mufulira</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-list>\n        </form>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\dev\clumapp\src\pages\member-create\member-create.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]])
    ], MemberCreatePage);
    return MemberCreatePage;
}());

//# sourceMappingURL=member-create.js.map

/***/ })

});
//# sourceMappingURL=8.js.map