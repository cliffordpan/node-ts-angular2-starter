import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent, ROOT_DECLARATION } from './root/app.define';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: ROOT_DECLARATION,
    bootstrap: [AppComponent]
})
export class Bootstrap { }

platformBrowserDynamic().bootstrapModule(Bootstrap);