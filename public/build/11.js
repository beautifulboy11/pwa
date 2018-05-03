webpackJsonp([11],{

/***/ 680:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentPageModule", function() { return ContentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__content__ = __webpack_require__(696);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ContentPageModule = (function () {
    function ContentPageModule() {
    }
    ContentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__content__["a" /* ContentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__content__["a" /* ContentPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__content__["a" /* ContentPage */]
            ]
        })
    ], ContentPageModule);
    return ContentPageModule;
}());

//# sourceMappingURL=content.module.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages__ = __webpack_require__(109);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContentPage = (function () {
    function ContentPage(alertCtrl, navCtrl, calendar, modalCtrl) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.calendar = calendar;
        this.modalCtrl = modalCtrl;
        this.test = [
            { dtstart: '2018-03-08', title: 'Test', eventLocation: 'Kafue' },
            { dtstart: '2018-03-08', title: 'Test', eventLocation: 'Kafue' },
            { dtstart: '2018-03-08', title: 'Test', eventLocation: 'Kafue' }
        ];
        this.date = new Date();
        this.monthNames = ["January", "February", "March", "April", "May", "June", "July",
            "August", "September", "October", "November", "December"];
        this.getDaysOfMonth();
        this.loadEventThisMonth();
        this.selectDate(this.date.getDay());
    }
    ContentPage.prototype.openEvent = function (event) {
        this.navCtrl.push('EventDetailsPage', event);
    };
    ContentPage.prototype.addEvent = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages__["a" /* AddEventPage */]);
        modal.present();
    };
    ContentPage.prototype.checkEvent = function (day) {
        var hasEvent = false;
        var thisDate1 = new Date(this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 00:00:00");
        var thisDate2 = new Date(this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 23:59:59");
        this.eventList.forEach(function (event) {
            if (((event.dtstart >= thisDate1) && (event.dtstart <= thisDate2)) || ((event.dtend >= thisDate1) && (event.dtend <= thisDate2))) {
                hasEvent = true;
            }
        });
        return hasEvent;
    };
    ContentPage.prototype.selectDate = function (day) {
        var _this = this;
        this.isSelected = false;
        this.selectedEvent = new Array();
        var thisDate1 = Date.parse(this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 00:00:00");
        var thisDate2 = Date.parse(this.date.getFullYear() + "-" + (this.date.getMonth() + 1) + "-" + day + " 23:59:59");
        this.eventList.forEach(function (event) {
            //var eventStart =  (event.dtstart);
            //var eventEnd =  (event.dtend);
            if ((event.dtstart >= thisDate1) && (event.dtstart <= thisDate2) || (event.dtstart < thisDate1) && (event.dtend > thisDate2)) {
                _this.isSelected = true;
                _this.selectedEvent.push(event);
            }
        });
    };
    ContentPage.prototype.deleteEvent = function (evt) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Are you sure want to delete this event?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    handler: function () {
                        _this.calendar.deleteEvent(evt.title, evt.location, evt.notes, new Date(evt.startDate.replace(/\s/, 'T')), new Date(evt.endDate.replace(/\s/, 'T'))).then(function (msg) {
                            console.log(msg);
                            _this.loadEventThisMonth();
                            _this.selectDate(new Date(evt.startDate.replace(/\s/, 'T')).getDate());
                        }, function (err) {
                            console.log(err);
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ContentPage.prototype.getDaysOfMonth = function () {
        this.daysInThisMonth = new Array();
        this.daysInLastMonth = new Array();
        this.daysInNextMonth = new Array();
        this.currentMonth = this.monthNames[this.date.getMonth()];
        this.currentYear = this.date.getFullYear();
        if (this.date.getMonth() === new Date().getMonth()) {
            this.currentDate = new Date().getDate();
        }
        else {
            this.currentDate = 999;
        }
        var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
        var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
            this.daysInLastMonth.push(i);
        }
        var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        for (var i_1 = 0; i_1 < thisNumOfDays; i_1++) {
            this.daysInThisMonth.push(i_1 + 1);
        }
        var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
        var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0).getDate();
        for (var i_2 = 0; i_2 < (6 - lastDayThisMonth); i_2++) {
            this.daysInNextMonth.push(i_2 + 1);
        }
        var totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
        if (totalDays < 36) {
            for (var i_3 = (7 - lastDayThisMonth); i_3 < ((7 - lastDayThisMonth) + 7); i_3++) {
                this.daysInNextMonth.push(i_3);
            }
        }
    };
    ContentPage.prototype.goToLastMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
        this.getDaysOfMonth();
        this.loadEventThisMonth();
    };
    ContentPage.prototype.goToNextMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
        this.getDaysOfMonth();
        this.loadEventThisMonth();
    };
    ContentPage.prototype.loadEventThisMonth = function () {
        var _this = this;
        this.eventList = new Array();
        var startDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
        var endDate = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0);
        this.calendar.listEventsInRange(startDate, endDate).then(function (msg) {
            msg.forEach(function (item) {
                _this.eventList.push(item);
            });
        }, function (err) {
            alert(err);
        });
    };
    ContentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-content',template:/*ion-inline-start:"C:\dev\clumapp\src\pages\content\content.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      {{currentMonth}} {{currentYear}}\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openModal()">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n  <ion-toolbar color="primary" class="toolbar">\n    <ion-row class="calendar-month">\n      <ion-col col-2 (click)="goToLastMonth()">\n        <ion-icon name="ios-arrow-dropleft" style="font-size:20px;" item-start></ion-icon> Prev\n      </ion-col>\n      <ion-col col-8></ion-col>\n      <ion-col col-2 (click)="goToNextMonth()">\n        Next\n        <ion-icon name="ios-arrow-dropright" style="font-size:20px;"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row class="calendar-weekday" style="margin-bottom:0px;">\n      <ion-col>Su</ion-col>\n      <ion-col>Mo</ion-col>\n      <ion-col>Tu</ion-col>\n      <ion-col>We</ion-col>\n      <ion-col>Th</ion-col>\n      <ion-col>Fr</ion-col>\n      <ion-col>Sa</ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content no-padding no-margin>\n\n  <ion-card>\n    <div class="calendar-body">\n      <ion-row>\n        <ion-col col-1 *ngFor="let lastDay of daysInLastMonth" class="last-month" (click)="goToLastMonth()">{{lastDay}}</ion-col>\n        <ion-col col-1 *ngFor="let day of daysInThisMonth" (click)="selectDate(day)" tappable="true">\n          <span class="currentDate" *ngIf="currentDate === day; else otherDate">{{day}}</span>\n          <ng-template #otherDate class="otherDate">{{day}}\n            <br>\n            <div class="event-bullet" *ngIf="checkEvent(day)"></div>\n          </ng-template>\n        </ion-col>\n        <ion-col col-1 *ngFor="let nextDay of daysInNextMonth" class="next-month" (click)="goToNextMonth()">{{nextDay}}</ion-col>\n      </ion-row>\n    </div>\n  </ion-card>\n  <div style="margin-top:10px;">\n    <div class="selected-event">\n      <ion-list>\n        <ion-item *ngFor="let se of selectedEvent">\n          <div class="eventDate" text-left>\n            <h2>{{se.title}}</h2>\n          </div>\n          <ion-row no-padding no-margin (click)="openEvent(se)">\n            <ion-col col-3 text-left>\n            <p *ngIf="se.allDay">\n              All day\n            </p>\n            <p *ngIf="!se.allDay">\n              1 day\n            </p>\n            </ion-col>\n            <ion-col col-9 text-left>              \n              <ion-icon ios="ios-pin" md="md-pin" style="color:#999999;" *ngIf="se.eventLocation"></ion-icon> {{se.eventLocation}}\n            </ion-col>\n          </ion-row>\n        </ion-item>\n      </ion-list>\n    </div>\n  </div>\n\n  <ion-fab right bottom>\n    <button ion-fab icon-only (click)="addEvent()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"C:\dev\clumapp\src\pages\content\content.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_calendar__["a" /* Calendar */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
    ], ContentPage);
    return ContentPage;
}());

//# sourceMappingURL=content.js.map

/***/ })

});
//# sourceMappingURL=11.js.map