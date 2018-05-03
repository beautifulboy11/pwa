webpackJsonp([7],{

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMasterPageModule", function() { return ListMasterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__member__ = __webpack_require__(697);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListMasterPageModule = (function () {
    function ListMasterPageModule() {
    }
    ListMasterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__member__["a" /* MemberPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__member__["a" /* MemberPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__member__["a" /* MemberPage */]
            ]
        })
    ], ListMasterPageModule);
    return ListMasterPageModule;
}());

//# sourceMappingURL=member.module.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_providers__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MemberPage = (function () {
    function MemberPage(navParams, navCtrl, loadingCtrl, modalCtrl, popoverCtrl, toastCtrl, authService, db, storage, network) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.db = db;
        this.storage = storage;
        this.network = network;
        this.members = [];
        this.mufMembers = [];
        this.club = 'Nkana';
        this.membersRef = db.list('members');
        //const ref = this.storage.ref('users/davideast.jpg');
        //this.profileUrl = ref.getDownloadURL();    
    }
    MemberPage.prototype.ionViewDidEnter = function () {
        //TODO check Network connection 
        //unknown, ethernet, wifi, 2g, 3g, 4g, cellular, none
        //this.network.onchange().subscribe(() => {});    
        //this.network.onConnect().subscribe(data => console.log('network connected!', data), error => console.log('network connected!', error));
        //this.network.onDisconnect().subscribe(data => console.log('network was disconnected', data), error => console.log(error));
    };
    MemberPage.prototype.ionViewDidLoad = function () {
        this.loadMembers();
    };
    MemberPage.prototype.loadMembers = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'Loading...',
            spinner: 'bubbles',
            showBackdrop: false,
        });
        this.loading.present().then(function () {
            _this.membersRef.valueChanges().subscribe(function (res) {
                _this.members = [];
                _this.mufMembers = [];
                res.forEach(function (resp) {
                    if (resp.club === 'Nkana') {
                        _this.members.push(resp);
                    }
                    else {
                        _this.mufMembers.push(resp);
                    }
                });
                _this.loading.dismiss();
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    _this.toastCtrl.create({
                        position: 'bottom',
                        message: error.message,
                        showCloseButton: true,
                        cssClass: 'toast-message',
                        closeButtonText: 'Dismiss',
                        dismissOnPageChange: true
                    }).present();
                });
            });
        });
    };
    MemberPage.prototype.showPopOver = function ($event, member) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__pages__["e" /* PopoverPage */], { member: member });
        popover.present({
            ev: $event,
        });
    };
    MemberPage.prototype.addMember = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('MemberCreatePage');
        addModal.onDidDismiss(function (member) {
            if (member) {
                _this.membersRef.push(member);
            }
        });
        addModal.present();
    };
    MemberPage.prototype.openMemberDetails = function (member) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages__["c" /* MemberDetailPage */], {
            member: member
        });
    };
    MemberPage.prototype.uploadFile = function (event) {
        var file = event.target.files[0];
        var filePath = 'name-your-file-path-here';
        var task = this.storage.upload(filePath, file);
        // observe percentage changes
        // get notified when the download URL is available
        this.uploadPercent = task.percentageChanges();
        this.downloadURL = task.downloadURL();
    };
    MemberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-member',template:/*ion-inline-start:"C:\dev\clumapp\src\pages\member\member.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle ion-button>\n      <ion-icon name="menu" clear></ion-icon>\n    </button>\n    <ion-title>Member List</ion-title>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="club">\n      <ion-segment-button value="Nkana">\n        Nkana\n      </ion-segment-button>\n      <ion-segment-button value="Mufulira">\n        Mufulira\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]="club">\n\n    <ion-list *ngSwitchCase="\'Nkana\'">\n      <ion-item *ngIf="!members">\n        No Member Loaded Yet!!!\n      </ion-item>\n      <div *ngIf="members">\n        <ion-item *ngFor="let member of members">\n          <ion-avatar item-start>\n            <!-- <img *ngIf="item.profilePic" [src]="item.profilePic" /> -->\n            <ion-icon name="ios-contact" style="font-size: 50px;"></ion-icon>\n          </ion-avatar>\n          <div class="" (click)="openMemberDetails(member)" tappable>\n            <h2>{{member.firstName}} {{member.lastName}}</h2>\n            <h6 style="color:grey;">{{member.about}}</h6>\n          </div>\n\n          <button item-end ion-button icon-only clear (click)="showPopOver($event, member)">\n            <ion-icon name=\'more\' style="font-size: 30px;"></ion-icon>\n          </button>\n        </ion-item>\n      </div>\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'Mufulira\'">\n      <ion-item *ngIf="!mufMembers">\n        No Member Loaded Yet!!!\n      </ion-item>\n      <div *ngIf="mufMembers">\n        <ion-item *ngFor="let member of mufMembers">\n          <ion-avatar item-start>\n            <!-- <img *ngIf="item.profilePic" [src]="item.profilePic" /> -->\n            <ion-icon name="ios-contact" style="font-size: 50px;"></ion-icon>\n          </ion-avatar>\n          <div class="" (click)="openMemberDetails(member)" tappable>\n            <h2>{{member.firstName}} {{member.lastName}}</h2>\n            <h6 style="color:grey;">{{member.about}}</h6>\n          </div>\n          <button item-end ion-button icon-only clear (click)="showPopOver($event, member)">\n            <ion-icon name=\'more\' style="font-size: 30px;"></ion-icon>\n          </button>\n        </ion-item>\n      </div>\n\n    </ion-list>\n\n    <div *ngIf="authService.isAdmin()">\n      <ion-fab right bottom>\n        <button ion-fab color="primary" (click)="addMember()">\n          <ion-icon name="add"></ion-icon>\n        </button>\n      </ion-fab>\n    </div>\n\n  </div>\n</ion-content>'/*ion-inline-end:"C:\dev\clumapp\src\pages\member\member.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_providers__["b" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_storage__["a" /* AngularFireStorage */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_network__["a" /* Network */]])
    ], MemberPage);
    return MemberPage;
}());

//# sourceMappingURL=member.js.map

/***/ })

});
//# sourceMappingURL=7.js.map