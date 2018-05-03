webpackJsonp([5],{

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search__ = __webpack_require__(699);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SearchPageModule = (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__search__["a" /* SearchPage */]
            ]
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_providers__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchPage = (function () {
    function SearchPage(navCtrl, navParams, toastCtrl, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.api = api;
        this.currentItems = [];
        this.members = [];
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.api.get('members.json').subscribe(function (resp) { _this.currentItems = resp; }, function (error) {
            var toast = _this.toastCtrl.create({
                position: 'bottom',
                message: error,
                showCloseButton: true,
                cssClass: 'toast-message',
                closeButtonText: 'OK',
                dismissOnPageChange: true
            });
            toast.present();
        });
    };
    SearchPage.prototype.getItems = function (ev) {
        var val = ev.target.value;
        if (!val || !val.trim()) {
            this.members = [];
            return;
        }
        this.members = this.query({ firstName: val, lastName: val, membershipNumber: val });
        console.info('**Search Results', this.members);
    };
    SearchPage.prototype.query = function (params) {
        var _this = this;
        if (!params) {
            return;
        }
        return __WEBPACK_IMPORTED_MODULE_2_lodash__["chain"](this.currentItems)
            .filter(function (member) {
            for (var key in params) {
                var field = member[key];
                if (__WEBPACK_IMPORTED_MODULE_2_lodash__["includes"](member, params[key])) {
                    return member;
                }
                else if (field == params[key]) {
                    return member;
                }
            }
            return null;
        })
            .map(function (member) {
            var isActive = member.status === 'active';
            var status = isActive ? true : false;
            var chk = status ? 'secondary' : 'dark';
            var name = _this.concatenateName(member.firstName, member.lastName);
            console.log('****');
            return {
                About: member.about,
                Club: member.club,
                Contact: member.contact,
                Name: name,
                MemberShipNumber: member.membershipNumber,
                ProfilePic: member.profilePic,
                Status: status,
                Note: member.status,
                Chk: chk
            };
        })
            .value();
    };
    SearchPage.prototype.concatenateName = function (firstname, lastname) {
        return firstname + " " + lastname;
    };
    SearchPage.prototype.openItem = function (item) {
        this.navCtrl.push('MemberDetailPage', {
            item: item
        });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-search',template:/*ion-inline-start:"C:\dev\clumapp\src\pages\search\search.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button menuToggle ion-button clear>\n      <ion-icon name="menu" color="light"></ion-icon>\n    </button>\n    <ion-title>Search</ion-title>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-searchbar (ionInput)="getItems($event)" placeholder="Search the members list"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item (click)="openItem(member)" *ngFor="let member of members">\n      <ion-avatar item-start>\n        <!-- <img [src]="item.profilePic" /> -->\n        <ion-icon name="ios-contact" style="font-size: 50px;"></ion-icon>\n      </ion-avatar>     \n      <h2 style="color:black;" [innerHTML]="member.Name"></h2>\n      <p style="color:black;">{{member.About}}</p>\n      <div item-end>\n        <ion-checkbox [color]="member.Chk" [checked]="member.Status"></ion-checkbox>\n        <ion-note style="text-transform:capitalize">{{member.Note}}</ion-note>\n      </div>\n    </button>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\dev\clumapp\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["a" /* Api */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=5.js.map