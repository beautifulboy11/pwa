webpackJsonp([20],{

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FirstRunPage */
/* unused harmony export MainPage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SearchPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SettingsPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_event_add_event__ = __webpack_require__(396);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__add_event_add_event__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signature_signature__ = __webpack_require__(459);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__signature_signature__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(398);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__home_home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popover_popover__ = __webpack_require__(528);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__popover_popover__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__member_detail_member_detail__ = __webpack_require__(401);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_4__member_detail_member_detail__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__site_locations_site_locations__ = __webpack_require__(402);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_5__site_locations_site_locations__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reset_password_reset_password__ = __webpack_require__(403);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__reset_password_reset_password__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__checkin_checkin__ = __webpack_require__(404);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__checkin_summary_checkin_summary__ = __webpack_require__(397);
/* unused harmony namespace reexport */
var FirstRunPage = 'SlidePage';
var MainPage = 'TabsPage';
var SearchPage = 'SearchPage';
var SettingsPage = 'SettingsPage';
var MemberPage = 'MemberPage';









//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 216;

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-event/add-event.module": [
		672,
		19
	],
	"../pages/cards/cards.module": [
		673,
		12
	],
	"../pages/checkin-summary/checkin-summary.module": [
		674,
		18
	],
	"../pages/checkin/checkin.module": [
		679,
		17
	],
	"../pages/content/content.module": [
		680,
		11
	],
	"../pages/event-details/event-details.module": [
		675,
		10
	],
	"../pages/home/home.module": [
		676,
		16
	],
	"../pages/login/login.module": [
		677,
		9
	],
	"../pages/member-create/member-create.module": [
		678,
		8
	],
	"../pages/member-detail/member-detail.module": [
		687,
		15
	],
	"../pages/member/member.module": [
		681,
		7
	],
	"../pages/menu/menu.module": [
		682,
		6
	],
	"../pages/reset-password/reset-password.module": [
		689,
		14
	],
	"../pages/search/search.module": [
		683,
		5
	],
	"../pages/settings/settings.module": [
		684,
		4
	],
	"../pages/signup/signup.module": [
		685,
		3
	],
	"../pages/site-locations/site-locations.module": [
		691,
		13
	],
	"../pages/slide/slide.module": [
		686,
		2
	],
	"../pages/tabs/tabs.module": [
		688,
		1
	],
	"../pages/welcome/welcome.module": [
		690,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 277;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCsEb1BkN4hn-eFKLt9sqozBsx7RUMC1EQ",
        authDomain: "boating-manager.firebaseapp.com",
        databaseURL: "https://boating-manager.firebaseio.com",
        projectId: "boating-manager",
        storageBucket: "boating-manager.appspot.com",
        messagingSenderId: "532583091999"
    },
    googleMapsKey: 'AIzaSyBI0ATkgDrLwtjBnsofpd8owzGn_7CxFW8',
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddEventPage = (function () {
    function AddEventPage(alertCtrl, navCtrl, navParams, viewCtrl, calendar) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.calendar = calendar;
        this.event = { title: "", location: "", message: "", startDate: "", endDate: "" };
    }
    AddEventPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddEventPage');
    };
    AddEventPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    AddEventPage.prototype.save = function () {
        var _this = this;
        //use promise to show appropriate messages
        this.calendar
            .createEvent(this.event.title, this.event.location, this.event.message, new Date(this.event.startDate), new Date(this.event.endDate))
            .then(function (msg) {
            var alert = _this.alertCtrl.create({
                title: 'Success!',
                subTitle: 'Event saved successfully',
                buttons: ['OK']
            });
            alert.present();
            //this.navCtrl.pop();
        }, function (err) {
            var alert = _this.alertCtrl.create({
                title: 'Failed!',
                subTitle: err,
                buttons: ['OK']
            });
            alert.present();
        });
    };
    AddEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-add-event',template:/*ion-inline-start:"C:\dev\clumapp\src\pages\add-event\add-event.html"*/'<ion-header>\n  <ion-navbar>\n      <button ion-button clear (click)="closeModal()">\n          <ion-icon name="close" color="light"></ion-icon>\n        </button>\n    <ion-title>New Event</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only>\n            <ion-icon name="checkmark"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <form (ngSubmit)="save()">\n      <ion-list>\n        <ion-item>\n          <ion-label floating>Title</ion-label>\n          <ion-input type="text" [(ngModel)]="event.title" name="event.title"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Location</ion-label>\n          <ion-input type="text" [(ngModel)]="event.location" name="event.location"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Notes</ion-label>\n          <ion-input type="text" [(ngModel)]="event.message" name="event.message"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>Start Date</ion-label>\n          <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="MMM/DD/YYYY HH:mm" [(ngModel)]="event.startDate" name="event.startDate"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>End Date</ion-label>\n          <ion-datetime displayFormat="DD MMM YYYY" pickerFormat="MMM/DD/YYYY HH:mm" [(ngModel)]="event.endDate" name="event.endDate"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <button ion-button type="submit" full round>Save</button>\n        </ion-item>\n      </ion-list>\n    </form>\n  </ion-content>'/*ion-inline-end:"C:\dev\clumapp\src\pages\add-event\add-event.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__["a" /* Calendar */]])
    ], AddEventPage);
    return AddEventPage;
}());

//# sourceMappingURL=add-event.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinSummaryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CheckinSummaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckinSummaryPage = (function () {
    function CheckinSummaryPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CheckinSummaryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckinSummaryPage');
    };
    CheckinSummaryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-checkin-summary',template:/*ion-inline-start:"C:\dev\clumapp\src\pages\checkin-summary\checkin-summary.html"*/'<!--\n  Generated template for the CheckinSummaryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>CheckinSummary</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\dev\clumapp\src\pages\checkin-summary\checkin-summary.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], CheckinSummaryPage);
    return CheckinSummaryPage;
}());

//# sourceMappingURL=checkin-summary.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(100);
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





var HomePage = (function () {
    function HomePage(navCtrl, navParams, afAuth, toastCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        try {
            this.afAuth.authState.subscribe(function (data) {
                if (data && data.email && data.uid) {
                    _this.toastCtrl
                        .create({
                        message: "Welcome, " + data.email,
                        duration: 3000
                    })
                        .present();
                }
                else {
                    _this.toastCtrl
                        .create({
                        message: "You have logged out",
                        duration: 3000
                    })
                        .present();
                }
            });
        }
        catch (e) {
            console.log(e);
        }
    };
    HomePage.prototype.goto = function (page) {
        this.navCtrl.push(page);
    };
    HomePage.prototype.gotoMap = function (event) {
        console.log(event);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages__["j" /* SiteLocationsPage */]);
    };
    HomePage.prototype.search = function () {
        this.navCtrl.push("SearchPage");
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-home",template:/*ion-inline-start:"C:\dev\clumapp\src\pages\home\home.html"*/'<ion-header no-shadow no-border>\n\n  <ion-navbar color=\'primary\'>\n    <button menuToggle ion-button clear>\n      <ion-icon name="menu" color="light"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only color="light" (click)="search()">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="card-background-page" no-padding>\n\n  <div ion-grid no-padding>\n    <div ion-row>\n      <ion-col col-12 col-sm-12 col-md-6 md-offest-3 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3>\n        <ion-card (click)="goto(\'MemberPage\')"  *ngIf="authService.isAdmin()" tappable>\n          <img src="assets/imgs/card-saopaolo.png" />\n          <div class="card-title">Member</div>\n          <div class="card-subtitle">\n            Listings\n            <br/>\n            <button ion-button icon-only clear style="color:azure;">\n                <ion-icon name="arrow-forward"></ion-icon>\n              </button>\n          </div>\n        </ion-card>\n        <ion-card (click)="goto(\'CheckinPage\')"  *ngIf="authService.isSecurity()" tappable>\n          <img src="assets/imgs/card-saopaolo.png" />\n          <div class="card-title">Member</div>          \n          <div class="card-subtitle">\n            Check-in   \n            <br/>         \n            <button ion-button icon-only clear style="color:azure;">\n              <ion-icon name="arrow-forward"></ion-icon>\n            </button>\n          </div>\n        </ion-card>\n        <ion-card (click)="goto(\'CheckinSummaryPage\')"  *ngIf="authService.isUser()" tappable>\n            <img src="assets/imgs/card-saopaolo.png" />\n            <div class="card-title">Check-in</div>          \n            <div class="card-subtitle">\n             History   \n              <br/>         \n              <button ion-button icon-only clear style="color:azure;">\n                <ion-icon name="arrow-forward"></ion-icon>\n              </button>\n            </div>\n          </ion-card>\n      </ion-col>\n\n      <ion-col col-12 col-sm-12 col-md-6 md-offest-3 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3>\n        <ion-card (click)="gotoMap($event)" tappable>\n          <img src="assets/imgs/card-madison.png" />\n          <div class="card-title">Boating</div>\n          <div class="card-subtitle">Locations\n            <br/>\n            <button ion-button icon-only clear style="color:azure;">\n                <ion-icon name="arrow-forward"></ion-icon>\n              </button>\n          </div>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6 md-offest-3 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3>\n        <ion-card (click)="goto(\'ContentPage\')" tappable>\n\n          <img src="assets/imgs/card-amsterdam.png" />\n          <div class="card-title">Up Coming</div>\n          <div class="card-subtitle">\n            Events\n            <br/>\n            <button ion-button icon-only clear style="color:azure;">\n                <ion-icon name="arrow-forward"></ion-icon>\n              </button>\n          </div>\n        </ion-card>\n      </ion-col>\n      <ion-col col-12 col-sm-12 col-md-6 md-offest-3 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3>\n        <ion-card (click)="goto(\'CardsPage\')" tappable>\n          <img src="assets/imgs/card-sf.png" />\n          <div class="card-title">News</div>\n          <div class="card-subtitle">Latest stories\n              <br/>\n              <button ion-button icon-only clear style="color:azure;">\n                  <ion-icon name="arrow-forward"></ion-icon>\n                </button>\n          </div>\n        </ion-card>\n      </ion-col>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\dev\clumapp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["b" /* AuthService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user__ = __webpack_require__(623);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AuthService = (function () {
    function AuthService(http, af, db) {
        var _this = this;
        this.http = http;
        this.af = af;
        this.db = db;
        this.user$ = new __WEBPACK_IMPORTED_MODULE_6_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.fireAuth = this.af.auth;
        this.af.authState
            .switchMap(function (auth) {
            if (auth) {
                return _this.db.object('/users/' + auth.uid).valueChanges();
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of(null);
            }
        })
            .subscribe(function (user) {
            _this.user$.next(user);
        });
        this.user$.map(function (user) {
            return _this.userRoles = __WEBPACK_IMPORTED_MODULE_9_lodash__["keys"](__WEBPACK_IMPORTED_MODULE_9_lodash__["get"](user, 'roles'));
        }).subscribe();
    }
    AuthService.prototype.getUser = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].create(function (observer) {
            var user = _this.af.auth.currentUser ? _this.af.auth.currentUser : null;
            observer.next(user);
        });
    };
    AuthService.prototype.doLogin = function (credentials) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].create(function (observer) {
            _this.fireAuth
                .signInWithEmailAndPassword(credentials.email, credentials.password).then(function (authData) {
                _this.updateUser(authData);
                observer.next(authData);
            }).catch(function (error) {
                observer.error(error);
            });
        });
    };
    AuthService.prototype.updateUser = function (authData) {
        var data = new __WEBPACK_IMPORTED_MODULE_5__user__["a" /* User */](authData);
        var ref = this.db.object('users/' + authData.uid);
        ref.valueChanges()
            .take(1)
            .subscribe(function (user) {
            if (!user) {
                ref.update(data);
            }
        });
    };
    AuthService.prototype.registerUser = function (email, password) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].create(function (observer) {
            _this.af.auth.createUserWithEmailAndPassword(email, password).then(function (authData) {
                __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]()
                    .createUserWithEmailAndPassword(email, password)
                    .then(function (newUser) {
                    _this.db.list('users/' + newUser.uid)
                        .push({
                        uid: newUser.uid,
                        email: email,
                        roles: {
                            member: true
                        }
                    });
                });
                observer.next(authData);
            }).catch(function (error) {
                observer.error(error);
            });
        });
    };
    AuthService.prototype.logoutUser = function () {
        return this.fireAuth.signOut();
    };
    AuthService.prototype.resetPassword = function (email) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].create(function (observer) {
            _this.af.auth.sendPasswordResetEmail(email).then(function (data) {
                observer.next(data);
            }, function (error) {
                observer.error(error);
            });
        });
    };
    AuthService.prototype.checkAuthorization = function (allowedRoles) {
        return !__WEBPACK_IMPORTED_MODULE_9_lodash__["isEmpty"](__WEBPACK_IMPORTED_MODULE_9_lodash__["intersection"](allowedRoles, this.userRoles));
    };
    AuthService.prototype.isUser = function () {
        var allowed = ['member'];
        return this.checkAuthorization(allowed);
    };
    AuthService.prototype.isAdmin = function () {
        var allowed = ['admin'];
        return this.checkAuthorization(allowed);
    };
    AuthService.prototype.isSecurity = function () {
        var allowed = ['security'];
        return this.checkAuthorization(allowed);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=authentication-service.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemberDetailPage = (function () {
    function MemberDetailPage(navCtrl, db, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.db = db;
        this.checkins = [];
        this.member = navParams.get('member');
        this.checkinRef = this.db.list('/checkins', function (ref) { return ref.orderByChild('memberId').equalTo(_this.member.membershipNumber); });
    }
    MemberDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.checkinRef.valueChanges().subscribe(function (resp) {
            // console.log('**checkins', resp); 
            resp.map(function (res) {
                var ob = {
                    date: Date.parse(res.date),
                    memberId: res.memberId,
                    signature: res.signature,
                };
                _this.checkins.push(ob);
            });
        });
    };
    MemberDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-member-detail',template:/*ion-inline-start:"C:\dev\clumapp\src\pages\member-detail\member-detail.html"*/'<ion-header no-border no-shadow>\n  <ion-navbar color="primary" align-title="center">\n    <button menuToggle ion-button>\n      <ion-icon name="menu" clear></ion-icon>\n    </button>\n    <ion-title>Member Details</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding parallax-profile>\n  <ion-toolbar color="primary">\n    <div style="padding-bottom:10px; margin-bottom:15px; color:#fff;" class="item-profile" text-center #profilePic [style.background-image]="\'url(\' + member?.profilePic + \')\'">\n      <ion-avatar style="padding-top:0px; margin-bottom:0px">\n        <img [src]="member?.profilePic" />\n        <ion-icon name="ios-contact" style="font-size: 50px;"></ion-icon>\n      </ion-avatar>\n      <h2 style="padding-top:0px; margin-bottom:0px">{{member.firstName}} {{member.lastName}}</h2>\n      <ion-note>{{member.club}}</ion-note>\n    </div>\n  </ion-toolbar>\n  <div class="main-content">\n    <ion-card>\n      <ion-list>\n        <ion-card ion-item>ID: {{member.membershipNumber}}</ion-card>\n        <ion-card ion-item style="text-transform:capitalize">Status: {{member.status}}</ion-card>\n        <ion-card ion-item>About: {{member.about}}</ion-card>\n        <ion-card ion-item>Contact Number: {{member.contact}}</ion-card>\n      </ion-list>\n    </ion-card>\n    <ion-card>\n      <ion-card-header>Recent Checkins</ion-card-header>\n      <ion-card-content>\n        <ion-list *ngFor="let checkin of checkins">\n          <ion-item>{{checkin.date | date:\'fullDate\'}}</ion-item>\n          <ion-grid no-padding>\n            <ion-row>\n              <ion-col col-12 col-sm-6 col-md-2 col-lg-1 col-xl-1>\n                <ion-item>\n                  <img [src]="checkin.signature" width="150" height="50" />\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"C:\dev\clumapp\src\pages\member-detail\member-detail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], MemberDetailPage);
    return MemberDetailPage;
}());

//# sourceMappingURL=member-detail.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteLocationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(335);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SiteLocationsPage = (function () {
    function SiteLocationsPage(navCtrl, navParams, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.lat = -12.785101573708145;
        this.lng = 28.177270889282227;
        this.locationSelected = false;
        this.club = 'Nkana';
    }
    SiteLocationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SiteLocationsPage');
    };
    SiteLocationsPage.prototype.ngOnInit = function () {
        this.getUserLocation();
    };
    SiteLocationsPage.prototype.getUserLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log("Current Location", position);
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            });
        }
        else {
            this.geolocation.getCurrentPosition().then(function (resp) {
                _this.lat = resp.coords.latitude;
                _this.lng = resp.coords.longitude;
            }).catch(function (error) {
                alert("Error getting location " + error);
            });
        }
        this.locationSelected = true;
        var watch = this.geolocation.watchPosition();
        watch.subscribe(function (data) {
            _this.lat = data.coords.latitude;
            _this.lng = data.coords.longitude;
        });
    };
    SiteLocationsPage.prototype.onLocationChosen = function (event) {
        console.log(event);
        this.lat = event.coords.lat;
        this.lng = event.coords.lng;
        this.locationSelected = true;
    };
    SiteLocationsPage.prototype.getDirections = function (event) {
        alert('You will be able to get driving directions');
    };
    SiteLocationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-site-locations',template:/*ion-inline-start:"C:\dev\clumapp\src\pages\site-locations\site-locations.html"*/'<ion-header no-shadow no-border>\n  <ion-navbar color=\'primary\'>\n    <ion-title>SiteLocations</ion-title>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-segment [(ngModel)]="club">\n      <ion-segment-button value="Nkana">\n        Nkana\n      </ion-segment-button>\n      <ion-segment-button value="Mufulira">\n        Mufulira\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content no-padding>\n  <div [ngSwitch]="club">\n    <div *ngSwitchCase="\'Nkana\'">\n      <div *ngIf="lat && lng">\n        <agm-map [latitude]="lat" [longitude]="lng" (mapClick)="onLocationChosen($event)">\n          <agm-marker [latitude]="lat" [longitude]="lng" *ngIf="locationSelected">\n            <agm-info-window>\n              <h3>\n                <strong>Howdy!</strong>\n              </h3>\n              <p></p>\n            </agm-info-window>\n          </agm-marker>\n        </agm-map>\n        <ion-fab left bottom>\n          <button ion-fab color="primary" (click)="getDirections($event)">\n            <ion-icon name="navigate"></ion-icon>\n          </button>\n        </ion-fab>\n      </div>\n    </div>\n    <div *ngSwitchCase="\'Mufulira\'">\n      <div *ngIf="lat && lng">\n        <agm-map [latitude]="lat" [longitude]="lng" (mapClick)="onLocationChosen($event)">\n          <agm-marker [latitude]="lat" [longitude]="lng" *ngIf="locationSelected">\n            <agm-info-window>\n              <h3>\n                <strong>Howdy!</strong>\n              </h3>\n              <p></p>\n            </agm-info-window>\n          </agm-marker>\n        </agm-map>\n        <ion-fab left bottom>\n          <button ion-fab color="primary" (click)="getDirections($event)">\n            <ion-icon name="navigate"></ion-icon>\n          </button>\n        </ion-fab>\n      </div>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\dev\clumapp\src\pages\site-locations\site-locations.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], SiteLocationsPage);
    return SiteLocationsPage;
}());

//# sourceMappingURL=site-locations.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
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




var ResetPasswordPage = (function () {
    function ResetPasswordPage(navCtrl, authService, navParams, formBuilder, alertCtrl, loadingCtrl, menu) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menu = menu;
        this.emailChanged = false;
        this.submitAttempt = false;
        var EMAIL_REGEXP = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        this.resetpwdForm = formBuilder.group({
            email: [
                "",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(EMAIL_REGEXP)
                ])
            ]
        });
    }
    ResetPasswordPage.prototype.ionViewDidEnter = function () {
        this.menu.enable(false);
    };
    ResetPasswordPage.prototype.ionViewWillLeave = function () {
        this.menu.enable(true);
    };
    ResetPasswordPage.prototype.elementChanged = function (input) {
        console.log("**Input Recieved", input);
        var field = input.ngControl.name;
        this[field + "Changed"] = true;
    };
    ResetPasswordPage.prototype.resetPassword = function () {
        var _this = this;
        if (!this.resetpwdForm.valid) {
            console.log(this.resetpwdForm.value);
        }
        else {
            this.authService.resetPassword(this.resetpwdForm.value.email).subscribe(function (auth) {
                _this.alertCtrl
                    .create({
                    message: "Password reset link sent to " + _this.resetpwdForm.value.email,
                    buttons: [
                        {
                            text: "Ok",
                            role: "cancel",
                            handler: function () {
                                _this.navCtrl.setRoot("LoginPage");
                            }
                        }
                    ]
                })
                    .present();
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    _this.alertCtrl.create({
                        message: error.message,
                        buttons: [{ text: "Ok", role: "cancel" }]
                    }).present();
                });
            });
            this.loading = this.loadingCtrl.create({
                dismissOnPageChange: true
            });
            this.loading.present();
        }
    };
    ResetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-reset-password",template:/*ion-inline-start:"C:\dev\clumapp\src\pages\reset-password\reset-password.html"*/'<ion-header primary>\n  <ion-navbar>\n    <ion-title>Reset Password</ion-title>   </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <h2>Reset Password</h2>\n  <form [formGroup]="resetpwdForm" (submit)="resetPassword()" novalidate>\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input #email formControlName="email" type="email" (change)="elementChanged(email)" placeholder="Your email address"\n        [class.invalid]="!resetpwdForm.controls.email.valid && (emailChanged || submitAttempt)"></ion-input>     </ion-item>\n    <ion-item class="error-message" *ngIf="!resetpwdForm.controls.email.valid  && (emailChanged || submitAttempt)">\n      <p>Please enter a valid email.</p>\n    </ion-item>\n    <button ion-button block type="submit">Reset Password</button>\n  </form>\n</ion-content>'/*ion-inline-end:"C:\dev\clumapp\src\pages\reset-password\reset-password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_providers__["b" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());

//# sourceMappingURL=reset-password.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckinPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CheckinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckinPage = (function () {
    function CheckinPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CheckinPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckinPage');
    };
    CheckinPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-checkin',template:/*ion-inline-start:"C:\dev\clumapp\src\pages\checkin\checkin.html"*/'<!--\n  Generated template for the CheckinPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Checkin</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\dev\clumapp\src\pages\checkin\checkin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], CheckinPage);
    return CheckinPage;
}());

//# sourceMappingURL=checkin.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(394);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* unused harmony export createTranslateLoader */
/* unused harmony export provideSettings */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(437);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_calendar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2___ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_storage__ = __webpack_require__(406);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_signaturepad__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_signaturepad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_signaturepad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(661);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__directives_parallax_header_parallax_header__ = __webpack_require__(662);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__directives_parallax_profile_parallax_profile__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_network__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_providers__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_pages__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__agm_core__ = __webpack_require__(664);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_sqlite__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_platform_browser_animations__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_screen_orientation__ = __webpack_require__(405);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_geolocation__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__environments_environment__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_sqlstorage_sqlstorage__ = __webpack_require__(671);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var firebaseConfig = __WEBPACK_IMPORTED_MODULE_27__environments_environment__["a" /* environment */].firebaseConfig;
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
function provideSettings(storage) {
    return new __WEBPACK_IMPORTED_MODULE_20__providers_providers__["c" /* Settings */](storage, {
        option1: true,
        option2: 'Ionitron J. Framework',
        option3: '3',
        option4: 'Hello'
    });
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_21__pages_pages__["b" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_pages__["a" /* AddEventPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_pages__["i" /* SignaturePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_pages__["e" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_pages__["c" /* MemberDetailPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_pages__["j" /* SiteLocationsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_pages__["f" /* ResetPasswordPage */],
                __WEBPACK_IMPORTED_MODULE_17__directives_parallax_header_parallax_header__["a" /* ParallaxHeaderDirective */],
                __WEBPACK_IMPORTED_MODULE_18__directives_parallax_profile_parallax_profile__["a" /* ParallaxProfileDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_15_angular2_signaturepad__["SignaturePadModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_24__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */], {
                    backButtonText: '',
                    tabsHideOnSubPages: true,
                    spinner: 'ios',
                    alertEnter: 'alert-pop-in',
                    alertLeave: 'alert-pop-out',
                    modalEnter: 'modal-slide-in',
                    modalLeave: 'modal-slide-out',
                    tabsPlacement: 'bottom',
                    pageTransition: 'ios-transition',
                    pageTransitionDelay: 16
                }, {
                    links: [
                        { loadChildren: '../pages/add-event/add-event.module#AddEventPageModule', name: 'AddEventPage', segment: 'add-event', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkin-summary/checkin-summary.module#CheckinSummaryPageModule', name: 'CheckinSummaryPage', segment: 'checkin-summary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/event-details/event-details.module#EventDetailsPageModule', name: 'EventDetailsPage', segment: 'event-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/member-create/member-create.module#MemberCreatePageModule', name: 'MemberCreatePage', segment: 'member-create', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkin/checkin.module#CheckinPageModule', name: 'CheckinPage', segment: 'checkin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/content/content.module#ContentPageModule', name: 'ContentPage', segment: 'content', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/member/member.module#ListMasterPageModule', name: 'MemberPage', segment: 'member', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/menu/menu.module#MenuPageModule', name: 'MenuPage', segment: 'menu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slide/slide.module#SlidePageModule', name: 'SlidePage', segment: 'slide', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/member-detail/member-detail.module#MemberDetailPageModule', name: 'MemberDetailPage', segment: 'member-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/site-locations/site-locations.module#SiteLocationsPageModule', name: 'SiteLocationsPage', segment: 'site-locations', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2___["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_storage__["b" /* AngularFireStorageModule */],
                __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_22__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: __WEBPACK_IMPORTED_MODULE_27__environments_environment__["a" /* environment */].googleMapsKey
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_21__pages_pages__["b" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_pages__["a" /* AddEventPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_pages__["i" /* SignaturePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_pages__["e" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_pages__["c" /* MemberDetailPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_pages__["j" /* SiteLocationsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_pages__["f" /* ResetPasswordPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_20__providers_providers__["a" /* Api */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_geolocation__["a" /* Geolocation */],
                { provide: __WEBPACK_IMPORTED_MODULE_20__providers_providers__["c" /* Settings */], useFactory: provideSettings, deps: [__WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]] },
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_calendar__["a" /* Calendar */],
                __WEBPACK_IMPORTED_MODULE_20__providers_providers__["b" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_sqlite__["a" /* SQLite */],
                __WEBPACK_IMPORTED_MODULE_28__providers_sqlstorage_sqlstorage__["a" /* Sqlstorage */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignaturePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignaturePage = (function () {
    function SignaturePage(navCtrl, viewCtrl, navParams, db, alertCtrl, loadingCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.signaturePadOptions = { 'minWidth': 2, 'canvasWidth': 340, 'canvasHeight': 200 };
        this.prevCheckin = [];
        this.member = navParams.get('member');
        console.info('**Signature ', this.member);
        this.checkinRef = db.list('checkins');
        this.MaxcheckinRef = db.list('maxCheckin');
        this.previousCheckin = this.db.list('/checkins', function (ref) { return ref.orderByChild('memberId').equalTo(_this.member.membershipNumber); });
    }
    SignaturePage.prototype.canvasResize = function () {
        var canvas = document.querySelector('canvas');
        this.signaturePad.set('minWidth', 1);
        this.signaturePad.set('canvasWidth', canvas.offsetWidth);
        this.signaturePad.set('canvasHeight', canvas.offsetHeight);
    };
    SignaturePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            spinner: 'circles',
            showBackdrop: false,
        });
        this.loading.present().then(function () {
            _this.MaxcheckinRef.valueChanges().subscribe(function (data) {
                data.map(function (result) {
                    _this.maxAllowed = result;
                    console.log('**Max Allowed', _this.maxAllowed);
                });
            });
            _this.previousCheckin.valueChanges().subscribe(function (resp) {
                resp.map(function (res) {
                    var ob = {
                        mon: _this.getMonthFromDate(res.date),
                        year: _this.getYearFromDate(res.date),
                        memberId: res.memberId,
                    };
                    _this.prevCheckin.push(ob);
                });
                _this.checkCheckins();
            });
        });
    };
    SignaturePage.prototype.checkCheckins = function () {
        var matcheddates = [];
        this.prevCheckin.forEach(function (element) {
            if (element.mon === (new Date()).getMonth() + 1 && element.year === (new Date()).getFullYear()) {
                matcheddates.push(element);
            }
        });
        var isMax = matcheddates.length < this.maxAllowed ? true : false;
        if (isMax) {
            this.loading.dismiss();
        }
        else {
            this.loading.dismiss();
            this.presentToast();
        }
    };
    SignaturePage.prototype.presentToast = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: "You have used up " + this.maxAllowed + " checkin this month",
            duration: 4000,
            position: 'top',
            showCloseButton: true,
            dismissOnPageChange: true,
            closeButtonText: 'OK'
        });
        toast.onDidDismiss(function () {
            _this.navCtrl.pop();
        });
        toast.present();
    };
    SignaturePage.prototype.getYearFromDate = function (date) {
        var d = new Date(date);
        var m = d.getFullYear();
        return m;
    };
    SignaturePage.prototype.getMonthFromDate = function (date) {
        var d = new Date(date);
        var m = d.getMonth() + 1;
        return m;
    };
    SignaturePage.prototype.ngAfterViewInit = function () {
        this.signaturePad.clear();
        this.canvasResize();
    };
    SignaturePage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    SignaturePage.prototype.save = function () {
        this.signatureImage = this.signaturePad.toDataURL();
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        this.checkinRef.push({
            date: date,
            memberId: this.member.membershipNumber,
            signature: this.signatureImage
        });
        this.showSuccess();
    };
    SignaturePage.prototype.drawClear = function () {
        this.signaturePad.clear();
    };
    SignaturePage.prototype.showSuccess = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Success',
            message: 'You have successfully checked in this user',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        confirm.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_angular2_signaturepad_signature_pad__["SignaturePad"])
    ], SignaturePage.prototype, "signaturePad", void 0);
    SignaturePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signature',template:/*ion-inline-start:"C:\dev\clumapp\src\pages\signature\signature.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons left>\n      <button ion-button icon-only (click)="cancel()">\n        <ion-icon name="close" color="light" style="font-size: 1.8em; font-weight:bold;"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Checkin</ion-title>\n    <ion-buttons end>\n      <button ion-button ion-only (click)="save()">\n        <ion-icon name="checkmark" color="light" style="font-size: 1.8em; font-weight:bold;"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar color="primary" text-center>\n    <div style="padding-bottom:10px; margin-bottom:15px; color:#fff;" class="item-profile" text-center #profilePic [style.background-image]="\'url(\' + member?.profilePic + \')\'">\n      <!-- -->\n      <ion-avatar style="padding-top:0px; margin-bottom:0px">\n        <!-- <img [src]="item.profilePic" /> -->\n        <ion-icon name="ios-contact" style="font-size: 50px;"></ion-icon>\n      </ion-avatar>\n      <h2 style="padding-top:0px; margin-bottom:0px">{{member.firstName}} {{member.lastName}}</h2>\n      <ion-note>{{member.club}}</ion-note>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content no-padding>\n  <ion-card>\n    <ion-list>\n      <ion-item>\n        Membership Number: {{member.membershipNumber}}\n      </ion-item>\n      <ion-item>\n        Contact: {{member.contact}}\n      </ion-item>\n      <ion-item>\n        Boating Site: {{member.club}}\n      </ion-item>\n      <ion-item style="text-transform: capitalize;">\n        Member Status: {{member.status}}\n      </ion-item>\n    </ion-list>\n  </ion-card>\n  <ion-card>\n    <ion-list>\n      <ion-item>\n        Signature:\n      </ion-item>\n      <ion-item>\n        <signature-pad [options]="signaturePadOptions" id="signatureCanvas"></signature-pad>\n      </ion-item>\n      <ion-item style="margin-top:-10px;">\n        <button ion-button (click)="drawClear()">\n          Clear Signature\n        </button>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"C:\dev\clumapp\src\pages\signature\signature.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], SignaturePage);
    return SignaturePage;
}());

//# sourceMappingURL=signature.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(109);
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





var PopoverPage = (function () {
    function PopoverPage(viewCtrl, alertCtrl, authService, db, modalCtrl, navParams, navCtrl) {
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.authService = authService;
        this.db = db;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.membersRef = db.list('members');
        this.member = navParams.get('member');
    }
    PopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopoverPage');
    };
    PopoverPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.openMemberDetails = function (member) {
        console.log('***navParams', member);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages__["c" /* MemberDetailPage */], {
            member: member
        });
    };
    PopoverPage.prototype.showCheckin = function (member) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages__["i" /* SignaturePage */], { member: member });
        modal.onDidDismiss(function (item) {
            _this.signatureImage = item;
            console.log(_this.signatureImage);
        });
        modal.present();
    };
    PopoverPage.prototype.showConfirm = function (item) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Delete',
            message: 'Are you sure you want to Delete this record?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        console.log('Agree clicked');
                        _this.removeMember(item);
                    }
                }
            ]
        });
        confirm.present();
    };
    PopoverPage.prototype.removeMember = function (item) {
        var _this = this;
        this.membersRef.remove(item.name).then(function (res) {
            var alert = _this.alertCtrl.create({
                title: 'Delete Member',
                message: 'Member Removed Successfully!' + res,
                buttons: ['Ok'],
            });
            alert.present();
        }).catch(function (error) {
            var alert = _this.alertCtrl.create({
                title: 'Delete Member',
                message: 'Member Removed Successfully!' + error,
                buttons: ['Ok'],
            });
            alert.present();
        });
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-popover',
            template: "\n  <ion-list>\n    <ion-list-header>What would you like to do?</ion-list-header>  \n    <button ion-item (click)=\"openMemberDetails(member)\">Details</button>\n    <button ion-item (click)=\"showCheckin(member)\" *ngIf=\"authService.isSecurity()\">Checkin</button>\n    <button ion-item (click)=\"close()\">Cancel</button>\n    <button ion-item (click)=\"showConfirm(member)\" *ngIf=\"authService.isAdmin()\">Delete</button>\n  </ion-list>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_providers__["b" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Api; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_ErrorObservable__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_ErrorObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_ErrorObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
var Api = (function () {
    function Api(http) {
        this.http = http;
        this.url = "https://boating-manager.firebaseio.com";
    }
    Api.prototype.get = function (endpoint, params, reqOpts) {
        if (!reqOpts) {
            reqOpts = {
                params: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            };
        }
        if (params) {
            reqOpts.params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]();
            for (var k in params) {
                reqOpts.params = reqOpts.params.set(k, params[k]);
            }
        }
        return this.http.get(this.url + "/" + endpoint, reqOpts).pipe(Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["retry"])(3), Object(__WEBPACK_IMPORTED_MODULE_4_rxjs_operators__["catchError"])(this.handleError));
    };
    Api.prototype.post = function (endpoint, body, reqOpts) {
        return this.http.post(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.put = function (endpoint, body, reqOpts) {
        return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.delete = function (endpoint, reqOpts) {
        return this.http.delete(this.url + '/' + endpoint, reqOpts);
    };
    Api.prototype.patch = function (endpoint, body, reqOpts) {
        return this.http.patch(this.url + '/' + endpoint, body, reqOpts);
    };
    Api.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        return new __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_ErrorObservable__["ErrorObservable"]('Connection Error; Check connection & try again later.');
    };
    ;
    Api = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], Api);
    return Api;
}());

//# sourceMappingURL=api.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Settings; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Settings = (function () {
    function Settings(storage, defaults) {
        this.storage = storage;
        this.SETTINGS_KEY = "_settings";
        this.theme = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"]("light-theme");
        this._defaults = defaults;
    }
    Settings.prototype.setActiveTheme = function (val) {
        this.theme.next(val);
    };
    Settings.prototype.getActiveTheme = function () {
        return this.theme.asObservable();
    };
    Settings.prototype.load = function () {
        var _this = this;
        return this.storage.get(this.SETTINGS_KEY).then(function (value) {
            if (value) {
                _this.settings = value;
                return _this._mergeDefaults(_this._defaults);
            }
            else {
                return _this.setAll(_this._defaults).then(function (val) {
                    _this.settings = val;
                });
            }
        });
    };
    Settings.prototype._mergeDefaults = function (defaults) {
        for (var k in defaults) {
            if (!(k in this.settings)) {
                this.settings[k] = defaults[k];
            }
        }
        return this.setAll(this.settings);
    };
    Settings.prototype.merge = function (settings) {
        for (var k in settings) {
            this.settings[k] = settings[k];
        }
        return this.save();
    };
    Settings.prototype.setValue = function (key, value) {
        this.settings[key] = value;
        return this.storage.set(this.SETTINGS_KEY, this.settings);
    };
    Settings.prototype.setAll = function (value) {
        return this.storage.set(this.SETTINGS_KEY, value);
    };
    Settings.prototype.getValue = function (key) {
        return this.storage.get(this.SETTINGS_KEY).then(function (settings) {
            return settings[key];
        });
    };
    Settings.prototype.save = function () {
        return this.setAll(this.settings);
    };
    Object.defineProperty(Settings.prototype, "allSettings", {
        get: function () {
            return this.settings;
        },
        enumerable: true,
        configurable: true
    });
    Settings = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], Object])
    ], Settings);
    return Settings;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(authData) {
        this.uid = authData.uid;
        this.email = authData.email;
        this.roles = { member: true };
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_api__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__authentication_service_authentication_service__ = __webpack_require__(399);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__api_api__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__settings_settings__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__authentication_service_authentication_service__["a"]; });




//# sourceMappingURL=providers.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_providers__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_timer__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_timer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, config, translate, settings, authService, af, loadingCtrl, storage) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.config = config;
        this.translate = translate;
        this.settings = settings;
        this.authService = authService;
        this.af = af;
        this.loadingCtrl = loadingCtrl;
        this.storage = storage;
        this.showSplash = true;
        this.initializeApp();
        this.settings.getActiveTheme().subscribe(function (val) {
            _this.selectedTheme = val;
        });
        this.pages = [
            {
                title: "News Feeds",
                icon: "paper",
                component: "CardsPage"
            },
            {
                title: "Upcoming Events",
                icon: "checkbox",
                component: "ContentPage"
            },
            {
                title: "My notifications",
                icon: "notifications",
                component: "MemberPage"
            },
            {
                title: "Settings",
                icon: "settings",
                component: "SettingsPage"
            }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            Object(__WEBPACK_IMPORTED_MODULE_8_rxjs_observable_timer__["timer"])(3000).subscribe(function () { return (_this.showSplash = false); });
            _this.storage.get("introShown").then(function (result) {
                if (result) {
                    _this.AuthenticationState();
                }
                else {
                    _this.rootPage = "SlidePage";
                    _this.storage.set("introShown", true);
                }
            });
        });
        this.initTranslate();
    };
    MyApp.prototype.AuthenticationState = function () {
        var _this = this;
        this.af.authState.subscribe(function (user) {
            if (user) {
                _this.userProfile = user;
                _this.rootPage = "TabsPage";
            }
            else {
                _this.rootPage = "LoginPage";
            }
        });
    };
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        this.translate.setDefaultLang("en");
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === "zh") {
                var browserCultureLang = this.translate.getBrowserCultureLang();
                if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                    this.translate.use("zh-cmn-Hans");
                }
                else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
                    this.translate.use("zh-cmn-Hant");
                }
            }
            else {
                this.translate.use(this.translate.getBrowserLang());
            }
        }
        else {
            this.translate.use("en");
        }
        this.translate.get(["BACK_BUTTON_TEXT"]).subscribe(function (values) {
            _this.config.set("ios", "backButtonText", values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.push(page.component);
    };
    MyApp.prototype.signOut = function () {
        var _this = this;
        return this.af.auth.signOut().then(function (res) {
            _this.nav.setRoot("LoginPage");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\dev\clumapp\src\app\app.html"*/'<div *ngIf="showSplash" class="splash">\n  <div class="sk-folding-cube">\n    <div class="sk-cube1 sk-cube"></div>\n    <div class="sk-cube2 sk-cube"></div>\n    <div class="sk-cube4 sk-cube"></div>\n    <div class="sk-cube3 sk-cube"></div>\n  </div>\n</div>\n\n<ion-menu [content]="content">\n  <ion-header no-shadow>\n    <ion-toolbar color="primary" class="side-toolbar">\n\n      <div class="profile" [style.background-image]="\'url(\' + userProfile?.photoURL + \')\'">\n\n        <div class="profile-image">\n          <img *ngIf="userProfile?.photoURL" [src]="userProfile?.photoURL" alt="User Profile Picture" />\n          <ion-icon *ngIf="!userProfile?.photoURL" name="ios-contact" style="font-size: 100px;text-align: center; margin-left: 5px; margin-bottom: 15px;"></ion-icon>\n        </div>\n\n        <div class="userdata">\n          <h2 style="margin-bottom:3px;">{{ userProfile?.displayName }}</h2>\n          <p>{{ userProfile?.email }}</p>\n        </div>\n\n      </div>\n\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content padding-top>\n\n    <ion-list no-lines class="list-on-ios">\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon [name]=\'p.icon\' item-start></ion-icon>\n        {{p.title}}\n      </button>\n    </ion-list>\n    <ion-list no-lines>\n      <div style="height: 0px; margin-bottom: 5px; padding: 0px; border-top: 1px solid #dedede;"></div>\n      <button menuClose ion-item >\n        <ion-icon name=\'person\' item-start></ion-icon>\n        Account\n      </button>\n      <button menuClose ion-item (click)="signOut()">\n        <ion-icon name=\'log-out\' item-start></ion-icon>\n        Logout\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n<ion-nav #content [root]="rootPage" [class]="selectedTheme"></ion-nav>'/*ion-inline-end:"C:\dev\clumapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Config */],
            __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__providers_providers__["c" /* Settings */],
            __WEBPACK_IMPORTED_MODULE_6__providers_providers__["b" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxHeaderDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParallaxHeaderDirective = (function () {
    function ParallaxHeaderDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        console.log('Hello ParallaxHeaderDirective Directive');
    }
    ParallaxHeaderDirective.prototype.ngOnInit = function () {
        this.headerHeight = this.header.clientHeight;
        this.renderer.setElementStyle(this.header, 'webkitTransition', 'top 700ms');
        this.scrollContent = this.element.nativeElement.getElementsByClassName("scroll-content")[0];
        this.renderer.setElementStyle(this.scrollContent, 'webkitTransition', 'margin-top 700ms');
    };
    ParallaxHeaderDirective.prototype.onContentScroll = function (event) {
        if (event.scrollTop > 58) {
            this.renderer.setElementStyle(this.header, 'top', '-56px');
            this.renderer.setElementStyle(this.scrollContent, 'margin', '0px');
        }
        else {
            this.renderer.setElementStyle(this.header, 'top', '0px');
            this.renderer.setElementStyle(this.scrollContent, 'margin-top', '0px');
        }
        console.log(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("header"),
        __metadata("design:type", HTMLElement)
    ], ParallaxHeaderDirective.prototype, "header", void 0);
    ParallaxHeaderDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[parallax-header]',
            host: {
                '(ionScroll)': 'onContentScroll($event)'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ParallaxHeaderDirective);
    return ParallaxHeaderDirective;
}());

//# sourceMappingURL=parallax-header.js.map

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxProfileDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ParallaxProfileDirective = (function () {
    function ParallaxProfileDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        console.log('Hello ParallaxProfileDirective Directive');
    }
    ParallaxProfileDirective.prototype.ngOnInit = function () {
        this.scrollContent = this.element.nativeElement.getElementsByClassName("scroll-content")[0];
        this.header = this.scrollContent.getElementsByClassName("toolbar-content")[0];
        this.header = this.scrollContent.getElementsByClassName("main-content")[0];
        this.renderer.setElementStyle(this.header, 'webTransformOrigin', 'center bottom');
    };
    ParallaxProfileDirective.prototype.onContentScroll = function (event) {
        console.log('***Parallax', event);
    };
    ParallaxProfileDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[parallax-profile]',
            host: {
                '(ionScroll)': 'onContentScroll($event)'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], ParallaxProfileDirective);
    return ParallaxProfileDirective;
}());

//# sourceMappingURL=parallax-profile.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sqlstorage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__ = __webpack_require__(392);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Sqlstorage = (function () {
    function Sqlstorage(sqlite) {
        this.sqlite = sqlite;
    }
    Sqlstorage.prototype.getAll = function () {
        return this.db.executeSql('SELECT key, value FROM kv', []).then(function (data) {
            var results = [];
            for (var i = 0; i < data.length; i++) {
                results.push(JSON.parse(data.rows.item(i).value));
            }
            return results;
        });
    };
    Sqlstorage.prototype.get = function (key) {
        return this.db.executeSql('SELECT key, value FROM kv WHERE key = ? limit 1', [key]).then(function (data) {
            if (data.rows.length > 0) {
                return JSON.parse(data.rows.item(0).value);
            }
        });
    };
    Sqlstorage.prototype.remove = function (key) {
        return this.db.executeSql('delete from kv where kv = ?', key);
    };
    Sqlstorage.prototype.set = function (key, value) {
        return this.db.executeSql('insert or replace into kv(key, value) values (?,?)', [key, value]).then(function (data) {
            if (data.rows.length > 0) {
                return JSON.parse(data.rows.item(0).value);
            }
        });
    };
    Sqlstorage.prototype.initializeDatabase = function () {
        var _this = this;
        return this.sqlite.create({ name: "data.db", location: 'default' }).then(function (db) {
            _this.db = db;
            return _this.db.executeSql('CREATE TABLE IF NOT EXISTS kv (key text primary key, value text)', [])
                .then(function (data) {
                console.log('**after CREATE TABLE check', data);
            });
        });
    };
    Sqlstorage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_sqlite__["a" /* SQLite */]])
    ], Sqlstorage);
    return Sqlstorage;
}());

//# sourceMappingURL=sqlstorage.js.map

/***/ })

},[408]);
//# sourceMappingURL=main.js.map