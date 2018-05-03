webpackJsonp([2],{

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidePageModule", function() { return SlidePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slide__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SlidePageModule = (function () {
    function SlidePageModule() {
    }
    SlidePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__slide__["a" /* SlidePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__slide__["a" /* SlidePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__slide__["a" /* SlidePage */]
            ]
        })
    ], SlidePageModule);
    return SlidePageModule;
}());

//# sourceMappingURL=slide.module.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlidePage; });
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


var SlidePage = (function () {
    function SlidePage(navCtrl, menu) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.skipMsg = "Skip";
        this.state = 'x';
    }
    SlidePage.prototype.skip = function () {
        this.navCtrl.push('LoginPage');
    };
    SlidePage.prototype.slideChanged = function () {
        if (this.slides.isEnd()) {
            this.skipMsg = "Alright, I got it";
        }
        else {
            this.skipMsg = "Skip";
        }
    };
    SlidePage.prototype.slideMoved = function () {
        if (this.slides.getActiveIndex() >= this.slides.getPreviousIndex())
            this.state = 'rightSwipe';
        else
            this.state = 'leftSwipe';
    };
    SlidePage.prototype.animationDone = function () {
        this.state = 'x';
    };
    SlidePage.prototype.ionViewDidEnter = function () {
        this.menu.enable(false);
    };
    SlidePage.prototype.ionViewWillLeave = function () {
        this.menu.enable(true);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], SlidePage.prototype, "slides", void 0);
    SlidePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-slide',template:/*ion-inline-start:"C:\dev\clumapp\src\pages\slide\slide.html"*/'<ion-content>\n  <ion-slides pager (ionSlideDidChange)="slideChanged()" (ionSlideDrag)="slideMoved()">\n    <ion-slide>\n      <div class="diag" style="background: url(\'assets/img/whitebg.svg\') no-repeat">\n        <ion-icon ios="ios-analytics" md="md-analytics" color="primary" [@bounce]=\'state\' (@bounce.done)="animationDone()"></ion-icon>\n        <!--  -->\n      </div>\n      <div [@bounce]=\'state\'>\n        <!-- -->\n        <h2>Track your activity</h2>\n        <p>Whether it\'s checkins, news, upcoming events, you can see it all with our intuitive interface.</p>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class="diag" style="background: url(\'assets/img/whitebg.svg\') no-repeat" >\n        <!---->\n        <ion-icon ios="ios-boat" md="md-boat" color="primary" [@bounce]=\'state\'></ion-icon>\n      </div>\n      <div [@bounce]=\'state\'>\n        <!---->\n        <h2>Personal Fun</h2>\n        <p>Life is better on the boat</p>\n      </div>\n    </ion-slide>\n    <ion-slide>\n      <div class="diag" style="background: url(\'assets/img/whitebg.svg\') no-repeat">\n        <ion-icon ios="ios-chatboxes" md="md-chatboxes" color="primary" [@bounce]=\'state\'></ion-icon>\n        <!---->\n      </div>\n      <div [@bounce]=\'state\'>\n        <!-- -->\n        <h2>Inspire Others</h2>\n        <p>Life provides the wind, you control the driection of it\'s sail</p>\n      </div>\n    </ion-slide>\n  </ion-slides>\n  <button outline (click)="skip()" id="skip">{{ skipMsg }}</button>\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\clumapp\src\pages\slide\slide.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('bounce', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        transform: 'translateX(0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => rightSwipe', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('700ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(-65px)', offset: .3 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0)', offset: 1 })
                    ]))),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => leftSwipe', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('700ms ease-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0)', offset: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(65px)', offset: .3 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(0)', offset: 1 })
                    ])))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */]])
    ], SlidePage);
    return SlidePage;
}());

//# sourceMappingURL=slide.js.map

/***/ })

});
//# sourceMappingURL=2.js.map