"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const http_1 = require("@angular/http");
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const app_define_1 = require("./root/app.define");
let Bootstrap = class Bootstrap {
};
Bootstrap = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
        declarations: app_define_1.ROOT_DECLARATION,
        bootstrap: [app_define_1.AppComponent]
    })
], Bootstrap);
exports.Bootstrap = Bootstrap;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(Bootstrap);
//# sourceMappingURL=app.js.map