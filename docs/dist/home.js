webpackJsonp([3],{435:function(e,t,o){"use strict";var a=this&&this.__decorate||function(e,t,o,a){var r,n=arguments.length,c=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,a);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(n<3?r(c):n>3?r(t,o,c):r(t,o))||c);return n>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=o(94),n=o(1),c=o(32),i=o(131),l=o(175),s=o(437),d=function(){function e(){}return e=a([n.NgModule({imports:[c.BrowserModule,i.NoopAnimationsModule,l.MatToolbarModule,l.MatCardModule,l.MatButtonModule],declarations:[s.CosmicHomePage],bootstrap:[s.CosmicHomePage]})],e)}();n.enableProdMode(),r.platformBrowserDynamic().bootstrapModule(d)},437:function(e,t,o){"use strict";var a=this&&this.__decorate||function(e,t,o,a){var r,n=arguments.length,c=n<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,a);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(n<3?r(c):n>3?r(t,o,c):r(t,o))||c);return n>3&&c&&Object.defineProperty(t,o,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var n=o(1),c=function(){function e(){this.cards=[{title:"Alien Generator",text:"Let a random number generator give you choices to start a game of Cosmic Encounter.",link:"generator.html",linkText:"Use Generator"},{title:"Alien Reference",text:"Look up aliens by game and/or level for easy reference.",link:"reference.html",linkText:"View Reference"},{title:"Android App",text:"Companion for Cosmic Encounter is available on the Google Play Store, and includes both the Alien Generator and Reference tools",link:"https://play.google.com/store/apps/details?id=net.fmorel.cosmicgenerator",linkText:"Download from Google Play"}]}return e=a([n.Component({selector:"cosmic-app",styles:["\n\t\t#container { display: flex; flex: auto; flex-wrap: wrap; align-content: stretch; padding:8px }\n\t\tmat-card { max-width: 300px; }\n\t\tmat-card-actions { text-align: right }\n\t"],template:o(438)}),r("design:paramtypes",[])],e)}();t.CosmicHomePage=c},438:function(e,t){e.exports='<mat-toolbar class="mat-primary"><h2>Cosmic Companion</h2></mat-toolbar><div id="container"><mat-card *ngFor="let card of cards"><mat-card-title>{{card.title}}</mat-card-title><mat-card-content><p>{{card.text}}</p></mat-card-content><mat-card-actions><a href="{{card.link}}" class="mat-primary" mat-raised-button>{{card.linkText}}</a></mat-card-actions></mat-card></div><mat-toolbar class="mat-primary"><a mat-button href="//www.fmorel.net">Return home</a></mat-toolbar>'}},[435]);