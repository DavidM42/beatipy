(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/beatsaver-items/beatsaver-items.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/beatsaver-items/beatsaver-items.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n<p-dataView [value]=\"beatsaverMaps\">\n    <ng-template let-map pTemplate=\"listItem\">\n        <div class=\"p-col-12 p-md-3\">\n            <a href=\"beatsaver://{{map.key}}\">Beastsaber Oneclick Install</a>\n        </div>\n    </ng-template>\n    <ng-template let-map pTemplate=\"listItem\">\n        <div class=\"p-col-12 p-md-3\">\n            {{map.metadata.songName}}\n        </div>\n    </ng-template>\n    <ng-template let-map pTemplate=\"listItem\">\n        <div class=\"p-col-12 p-md-3\">\n            {{map.metadata.songAuthorName}}\n        </div>\n    </ng-template>\n</p-dataView> -->\n\n<p-dataView [value]=\"beatsaverMaps\">\n    <ng-template let-map pTemplate=\"listItem\">\n        <div>\n            <a [href]=\"safeBeatsaverInstallUrl(map.key)\">Beastsaber Oneclick Install</a>\n        </div>\n    </ng-template>\n    <ng-template let-map pTemplate=\"gridItem\">\n        <div class=\"p-col-12 p-md-3\">\n            {{map.metadata.songName}}\n        </div>\n    </ng-template>\n</p-dataView>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-page/main-page.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-page/main-page.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"parent\">\n    <div id=\"container\">\n        <h1>Beatsaver Spotify Matcher</h1>\n        <!-- TODO show wait spinner when spotify playlist tracks were received and waiting for beatsaver responses -->\n        <app-playlist-select (playlistTrackNames)=\"onPlaylistTracksReceived($event)\"></app-playlist-select>\n        <app-beatsaver-items [spotifySongs]=\"beatsaverTableSongReceiver\"></app-beatsaver-items>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/playlist-select/playlist-select.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/playlist-select/playlist-select.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-autoComplete [(ngModel)]=\"selectedPlaylist\" (onSelect)=\"playlistSelected()\" [suggestions]=\"results\" field=\"name\" (completeMethod)=\"search($event)\" id=\"inputField\" minLength=\"2\" size='60'>\n    <ng-template let-playlist pTemplate=\"item\">\n        <div class=\"ui-helper-clearfix\">\n            <img [src]=\"playlist.iconUrl\" style=\"width:32px;display:inline-block;margin:5px 0 2px 5px\"/>\n            <div style=\"font-size:18px;float:right;margin:10px 10px 0 0\">{{playlist.name}}</div>\n        </div>\n    </ng-template>\n</p-autoComplete>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/spotify-auth-endpoint/spotify-auth-endpoint.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/spotify-auth-endpoint/spotify-auth-endpoint.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>spotify-auth-endpoint works!</p>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_spotify_auth_endpoint_spotify_auth_endpoint_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/spotify-auth-endpoint/spotify-auth-endpoint.component */ "./src/app/components/spotify-auth-endpoint/spotify-auth-endpoint.component.ts");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "./src/app/components/main-page/main-page.component.ts");





const routes = [
    { path: '', component: _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"] },
    { path: 'spotifyAuth', component: _components_spotify_auth_endpoint_spotify_auth_endpoint_component__WEBPACK_IMPORTED_MODULE_3__["SpotifyAuthEndpointComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'beatiPy';
    }
    ngOnInit() {
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_autocomplete___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/autocomplete/ */ "./node_modules/primeng/fesm2015/primeng-autocomplete.js");
/* harmony import */ var primeng_dataview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dataview */ "./node_modules/primeng/fesm2015/primeng-dataview.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_spotify_auth_endpoint_spotify_auth_endpoint_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/spotify-auth-endpoint/spotify-auth-endpoint.component */ "./src/app/components/spotify-auth-endpoint/spotify-auth-endpoint.component.ts");
/* harmony import */ var _components_playlist_select_playlist_select_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/playlist-select/playlist-select.component */ "./src/app/components/playlist-select/playlist-select.component.ts");
/* harmony import */ var _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/main-page/main-page.component */ "./src/app/components/main-page/main-page.component.ts");
/* harmony import */ var _components_beatsaver_items_beatsaver_items_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/beatsaver-items/beatsaver-items.component */ "./src/app/components/beatsaver-items/beatsaver-items.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _components_spotify_auth_endpoint_spotify_auth_endpoint_component__WEBPACK_IMPORTED_MODULE_10__["SpotifyAuthEndpointComponent"],
            _components_playlist_select_playlist_select_component__WEBPACK_IMPORTED_MODULE_11__["PlaylistSelectComponent"],
            _components_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_12__["MainPageComponent"],
            _components_beatsaver_items_beatsaver_items_component__WEBPACK_IMPORTED_MODULE_13__["BeatsaverItemsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            // TODO create sub module for ui and import primegn only there
            primeng_autocomplete___WEBPACK_IMPORTED_MODULE_6__["AutoCompleteModule"],
            primeng_dataview__WEBPACK_IMPORTED_MODULE_7__["DataViewModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/beatsaver-items/beatsaver-items.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/beatsaver-items/beatsaver-items.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmVhdHNhdmVyLWl0ZW1zL2JlYXRzYXZlci1pdGVtcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/beatsaver-items/beatsaver-items.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/beatsaver-items/beatsaver-items.component.ts ***!
  \*************************************************************************/
/*! exports provided: BeatsaverItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeatsaverItemsComponent", function() { return BeatsaverItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_beatsaverApi_beatsaver_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/beatsaverApi/beatsaver-api.service */ "./src/app/services/beatsaverApi/beatsaver-api.service.ts");
/* harmony import */ var src_app_services_levenshtein_levenshtein_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/levenshtein/levenshtein.service */ "./src/app/services/levenshtein/levenshtein.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");





let BeatsaverItemsComponent = class BeatsaverItemsComponent {
    constructor(sanitizer, beatsaverApi, levenshteinServuce) {
        this.sanitizer = sanitizer;
        this.beatsaverApi = beatsaverApi;
        this.levenshteinServuce = levenshteinServuce;
        this.beatsaverMaps = [];
    }
    set spotifySongs(value) {
        this.spotifySongsInternal = value;
        // things to do on new data
        if (value && value.length > 0) {
            this.getBeatsaverMaps(value);
        }
    }
    get spotifySongs() {
        return this.spotifySongsInternal;
    }
    ngOnInit() {
    }
    safeBeatsaverInstallUrl(key) {
        return this.sanitizer.bypassSecurityTrustUrl('beatsaver://' + key);
    }
    getBeatsaverMaps(songs) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            for (const song of songs) {
                // debugger;
                const search = song.artist + ' - ' + song.name;
                // TODO don't only append nearest songs but also consider rating and present multiple optons per song if possible
                const result = yield this.beatsaverApi.querySearchAllSongInfos(search, 20);
                const nearestSong = this.levenshteinServuce.getNearestSong(song.artist, song.name, result);
                // debugger;
                this.beatsaverMaps.push(nearestSong);
            }
        });
    }
};
BeatsaverItemsComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: src_app_services_beatsaverApi_beatsaver_api_service__WEBPACK_IMPORTED_MODULE_2__["BeatsaverApiService"] },
    { type: src_app_services_levenshtein_levenshtein_service__WEBPACK_IMPORTED_MODULE_3__["LevenshteinService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BeatsaverItemsComponent.prototype, "spotifySongs", null);
BeatsaverItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-beatsaver-items',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./beatsaver-items.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/beatsaver-items/beatsaver-items.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./beatsaver-items.component.css */ "./src/app/components/beatsaver-items/beatsaver-items.component.css")).default]
    })
], BeatsaverItemsComponent);



/***/ }),

/***/ "./src/app/components/main-page/main-page.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div#parent {\n    display: flex;\n    justify-content: center;\n}\n\ndiv#container {\n    margin-top: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYWluLXBhZ2UvbWFpbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYjcGFyZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5kaXYjY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/main-page/main-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/main-page/main-page.component.ts ***!
  \*************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MainPageComponent = class MainPageComponent {
    constructor() { }
    ngOnInit() {
    }
    onPlaylistTracksReceived(names) {
        this.beatsaverTableSongReceiver = names;
    }
};
MainPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./main-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main-page/main-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./main-page.component.css */ "./src/app/components/main-page/main-page.component.css")).default]
    })
], MainPageComponent);



/***/ }),

/***/ "./src/app/components/playlist-select/playlist-select.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/playlist-select/playlist-select.component.css ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p-autocomplete {\n    size: 60;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5bGlzdC1zZWxlY3QvcGxheWxpc3Qtc2VsZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxRQUFRO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BsYXlsaXN0LXNlbGVjdC9wbGF5bGlzdC1zZWxlY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAtYXV0b2NvbXBsZXRlIHtcbiAgICBzaXplOiA2MDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/playlist-select/playlist-select.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/playlist-select/playlist-select.component.ts ***!
  \*************************************************************************/
/*! exports provided: PlaylistSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistSelectComponent", function() { return PlaylistSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_spotifyApi_spotify_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/spotifyApi/spotify-api.service */ "./src/app/services/spotifyApi/spotify-api.service.ts");



let PlaylistSelectComponent = class PlaylistSelectComponent {
    constructor(spotifyApi) {
        this.spotifyApi = spotifyApi;
        this.playlistTrackNames = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    playlistSelected() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // console.log('Song tracks:');
            const trackNames = yield this.spotifyApi.getPlaylistTracks(this.selectedPlaylist.id);
            // console.log(trackNames);
            this.playlistTrackNames.next(trackNames);
        });
    }
    search(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                const results = yield this.spotifyApi.searchItem(event.query, ['playlist']);
                this.results = results.playlists.items.map((playlist) => {
                    const resultItem = {
                        name: playlist.name,
                        id: playlist.id,
                        iconUrl: null
                    };
                    if (playlist.images && playlist.images[0]) {
                        resultItem.iconUrl = playlist.images[0].url;
                    }
                    return resultItem;
                });
            }
            catch (e) {
                console.error(e);
            }
            // this.mylookupservice.getResults(event.query).then(data => {
            //     this.results = data;
            // });
        });
    }
};
PlaylistSelectComponent.ctorParameters = () => [
    { type: src_app_services_spotifyApi_spotify_api_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PlaylistSelectComponent.prototype, "playlistTrackNames", void 0);
PlaylistSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-playlist-select',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./playlist-select.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/playlist-select/playlist-select.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./playlist-select.component.css */ "./src/app/components/playlist-select/playlist-select.component.css")).default]
    })
], PlaylistSelectComponent);



/***/ }),

/***/ "./src/app/components/spotify-auth-endpoint/spotify-auth-endpoint.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/components/spotify-auth-endpoint/spotify-auth-endpoint.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3BvdGlmeS1hdXRoLWVuZHBvaW50L3Nwb3RpZnktYXV0aC1lbmRwb2ludC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/spotify-auth-endpoint/spotify-auth-endpoint.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/components/spotify-auth-endpoint/spotify-auth-endpoint.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SpotifyAuthEndpointComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyAuthEndpointComponent", function() { return SpotifyAuthEndpointComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_spotifyApi_spotify_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/spotifyApi/spotify-api.service */ "./src/app/services/spotifyApi/spotify-api.service.ts");




let SpotifyAuthEndpointComponent = class SpotifyAuthEndpointComponent {
    constructor(route, router, spotifyApiService) {
        this.route = route;
        this.router = router;
        this.spotifyApiService = spotifyApiService;
    }
    ngOnInit() {
        this.route.fragment.subscribe(fragment => {
            // console.log(fragment);
            const urlParams = new URLSearchParams(fragment);
            const accessToken = urlParams.get('access_token');
            const tokenType = urlParams.get('token_type');
            const expiresIn = urlParams.get('expires_in');
            const state = urlParams.get('state');
            // TODO then
            if (urlParams.has('error')) {
                const error = urlParams.get('error');
                // TODO display error with error value
            }
            else {
                this.spotifyApiService.retrievedToken(state, accessToken);
                this.router.navigate(['/']); // TODO correct?
            }
        });
    }
};
SpotifyAuthEndpointComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_spotifyApi_spotify_api_service__WEBPACK_IMPORTED_MODULE_3__["SpotifyApiService"] }
];
SpotifyAuthEndpointComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-spotify-auth-endpoint',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./spotify-auth-endpoint.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/spotify-auth-endpoint/spotify-auth-endpoint.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spotify-auth-endpoint.component.css */ "./src/app/components/spotify-auth-endpoint/spotify-auth-endpoint.component.css")).default]
    })
], SpotifyAuthEndpointComponent);



/***/ }),

/***/ "./src/app/services/beatsaverApi/beatsaver-api.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/services/beatsaverApi/beatsaver-api.service.ts ***!
  \****************************************************************/
/*! exports provided: BeatsaverApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeatsaverApiService", function() { return BeatsaverApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let BeatsaverApiService = class BeatsaverApiService {
    constructor(http) {
        this.http = http;
        this.beatsaverApiBaseUrl = 'https://beatsaver.com/api/';
    }
    // maybe improve search to search for author and title for better results and less filtering?
    // strange advanced search lacene syntax
    querySearchByPage(searchText, page = 0) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const url = `${this.beatsaverApiBaseUrl}search/text/${page}?q=${searchText}`;
                this.http.get(url).subscribe((rawResult) => {
                    const resultTyped = rawResult;
                    resolve(resultTyped);
                });
            });
        });
    }
    querySearchAllSongInfos(searchText, maximumResults = null) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let allSongsInfo = [];
            let currentpage = 0;
            let lastPage = Number.MAX_VALUE;
            let totalDocs = Number.MAX_VALUE;
            while (currentpage < lastPage && allSongsInfo.length < totalDocs) {
                const pageResults = yield this.querySearchByPage(searchText, currentpage);
                currentpage += 1;
                lastPage = pageResults.lastPage;
                totalDocs = pageResults.totalDocs;
                allSongsInfo = allSongsInfo.concat(pageResults.docs);
                if (maximumResults && allSongsInfo.length >= maximumResults) {
                    console.log('Limit of ' + maximumResults + ' results reached');
                    break;
                }
            }
            console.log('In total search could return: ' + totalDocs + ' results');
            console.log('Returning ' + allSongsInfo.length + ' results');
            return allSongsInfo;
        });
    }
};
BeatsaverApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
BeatsaverApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BeatsaverApiService);



/***/ }),

/***/ "./src/app/services/levenshtein/levenshtein.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/levenshtein/levenshtein.service.ts ***!
  \*************************************************************/
/*! exports provided: LevenshteinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LevenshteinService", function() { return LevenshteinService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const levenshtein = __webpack_require__(/*! fast-levenshtein */ "./node_modules/fast-levenshtein/levenshtein.js");
let LevenshteinService = class LevenshteinService {
    constructor() { }
    getStringsDistance(stringOne, stringTwo) {
        return levenshtein.get(stringOne, stringTwo);
    }
    getSongArtistTitleDistance(artist, title, song) {
        const artistDistance = this.getStringsDistance(song.metadata.songAuthorName, artist);
        const titleDistance = this.getStringsDistance(song.metadata.songName, title);
        // TODO maybe * or something? How to check good
        return artistDistance + titleDistance;
    }
    getNearestSong(artist, title, songs) {
        const minimumDistaneSong = {
            song: null,
            distance: Number.MAX_VALUE
        };
        for (const song of songs) {
            const songDistance = this.getSongArtistTitleDistance(artist, title, song);
            if (songDistance < minimumDistaneSong.distance) {
                minimumDistaneSong.distance = songDistance;
                minimumDistaneSong.song = song;
            }
        }
        return minimumDistaneSong.song;
    }
};
LevenshteinService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LevenshteinService);



/***/ }),

/***/ "./src/app/services/spotifyApi/spotify-api.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/spotifyApi/spotify-api.service.ts ***!
  \************************************************************/
/*! exports provided: SpotifyApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyApiService", function() { return SpotifyApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var spotify_web_api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! spotify-web-api-js */ "./node_modules/spotify-web-api-js/src/spotify-web-api.js");
/* harmony import */ var spotify_web_api_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(spotify_web_api_js__WEBPACK_IMPORTED_MODULE_3__);



// const Spotify = require('spotify-web-api-js');
// TODO use import more like https://www.npmjs.com/package/spotify-web-api-js#integrated-typescript-typings

let SpotifyApiService = class SpotifyApiService {
    constructor() {
        this.localStorageTokenKey = 'spotifyToken';
        this.clientId = '01eac0af946c4ad98a72c22467350058';
        this.redirectHost = 'http://localhost:4200';
        this.spotify = new spotify_web_api_js__WEBPACK_IMPORTED_MODULE_3___default.a();
    }
    /**
     * Restores token from localstorage and tests it
     * If no token saved
     * or token failed then redirect to auth
     * else save token as current one in service
     */
    restoreAndTestToken() {
        const savedToken = localStorage.getItem(this.localStorageTokenKey);
        if (!savedToken) {
            this.redirectToAuth();
        }
        else {
            this.setToken = savedToken;
            // Test token and redirect if fails
            this.spotifyApi.getMe().then((response) => { }, (error) => {
                this.redirectToAuth();
            });
        }
    }
    get spotifyApi() {
        if (!this.accessToken) {
            this.redirectToAuth();
        }
        return this.spotify;
    }
    // TODO maybe auth code flow with PKCE could also be good for app instead of implicit grant flow
    redirectToAuth() {
        const scopes = encodeURIComponent('playlist-read-collaborative playlist-read-private');
        const redirectUri = encodeURIComponent(this.redirectHost + '/spotifyAuth');
        // TODO could also use https://www.npmjs.com/package/angular-web-storage for convencience
        const state = Object(uuid__WEBPACK_IMPORTED_MODULE_2__["v4"])();
        localStorage.setItem('state', state);
        // tslint:disable-next-line: max-line-length
        const url = `https://accounts.spotify.com/authorize?response_type=token&client_id=${this.clientId}&scope=${scopes}&redirect_uri=${redirectUri}&state=${state}`;
        window.location.href = url;
    }
    /**
     * Sets access token in controller and spotify object
     * @param token Access token from auth flow
     */
    set setToken(token) {
        localStorage.setItem(this.localStorageTokenKey, token);
        this.accessToken = token;
        this.spotify.setAccessToken(token);
    }
    retrievedToken(state, token) {
        const wasState = localStorage.getItem('state');
        if (wasState === state) {
            this.setToken = token;
        }
        else {
            // TODO present error
        }
    }
    // TODO description and typing
    // TODO only gets first 50 playlists -> make loop to get all playlists of user with offset and multiple requests
    getUserPlaylists() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // only do it once not in every request but not in constructor cause endless loop
            this.restoreAndTestToken();
            try {
                // should be this.spotifyApi.getUserPlaylists(undefined, {offset: 0, limit: 10})
                // but see https://github.com/JMPerez/spotify-web-api-js/issues/135#issuecomment-558817613
                // @ts-ignore
                const data = yield this.spotifyApi.getUserPlaylists({ offset: 0, limit: 50 });
                return data;
            }
            catch (err) {
                // TODO error handling
                console.error(err);
            }
        });
    }
    searchItem(searchString, type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.restoreAndTestToken();
            try {
                const data = yield this.spotifyApi.search(searchString, type, { limit: 50 });
                return data;
            }
            catch (err) {
                // TODO error handling
                console.error(err);
            }
        });
    }
    getPlaylistTracks(playlistId) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.restoreAndTestToken();
            try {
                const data = yield this.spotifyApi.getPlaylistTracks(playlistId);
                return data.items.map((trackItem) => {
                    // set type as song because could also be show but don't want that
                    const retypedTrack = trackItem.track;
                    return {
                        name: retypedTrack.name,
                        // TODO maybe combine all artists name here for good search or stay at only first artist?
                        artist: retypedTrack.artists[0].name
                    };
                });
            }
            catch (err) {
                // TODO error handling
                console.error(err);
            }
        });
    }
};
SpotifyApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SpotifyApiService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/beatipy/beatipy/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map