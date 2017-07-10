webpackJsonp([1],{209:function(e,t,n){"use strict";var r=n(631);t.LocalStorageModule=r.LocalStorageModule;var o=n(210);t.LocalStorageService=o.LocalStorageService},210:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=this&&this.__param||function(e,t){return function(n,r){t(n,r,e)}},a=n(7),s=n(0),l=n(2);n(197);var c=function(){function e(e){var t=this;this.isSupported=!1,this.notifyOptions={setItem:!1,removeItem:!1},this.prefix="ls",this.storageType="localStorage",this.errors=new l.Subscriber,this.removeItems=new l.Subscriber,this.setItems=new l.Subscriber,this.warnings=new l.Subscriber;var n=e.notifyOptions,r=e.prefix,o=e.storageType;if(null!=n){var i=n.setItem,a=n.removeItem;this.setNotify(!!i,!!a)}null!=r&&this.setPrefix(r),null!=o&&this.setStorageType(o),this.errors$=new s.Observable(function(e){return t.errors=e}).share(),this.removeItems$=new s.Observable(function(e){return t.removeItems=e}).share(),this.setItems$=new s.Observable(function(e){return t.setItems=e}).share(),this.warnings$=new s.Observable(function(e){return t.warnings=e}).share(),this.isSupported=this.checkSupport()}return e.prototype.add=function(e,t){return console&&console.warn&&(console.warn("This function is deprecated."),console.warn("Use `LocalStorageService.set` instead.")),this.set(e,t)},e.prototype.clearAll=function(e){var t=this.prefix?new RegExp("^"+this.prefix):new RegExp(""),n=e?new RegExp(e):new RegExp("");if(!this.isSupported)return this.warnings.next("LOCAL_STORAGE_NOT_SUPPORTED"),!1;var r=this.prefix.length;for(var o in this.webStorage)if(t.test(o)&&n.test(o.substr(r)))try{this.remove(o.substr(r))}catch(e){return this.errors.next(e.message),!1}return!0},e.prototype.deriveKey=function(e){return""+this.prefix+e},e.prototype.get=function(e){if(!this.isSupported)return this.warnings.next("LOCAL_STORAGE_NOT_SUPPORTED"),null;var t=this.webStorage?this.webStorage.getItem(this.deriveKey(e)):null;if(!t||"null"===t)return null;try{return JSON.parse(t)}catch(e){return null}},e.prototype.getStorageType=function(){return this.storageType},e.prototype.keys=function(){if(!this.isSupported)return this.warnings.next("LOCAL_STORAGE_NOT_SUPPORTED"),[];var e=this.prefix.length,t=[];for(var n in this.webStorage)if(n.substr(0,e)===this.prefix)try{t.push(n.substr(e))}catch(e){return this.errors.next(e.message),[]}return t},e.prototype.length=function(){for(var e=0,t=this.webStorage,n=0;n<t.length;n++)0===t.key(n).indexOf(this.prefix)&&(e+=1);return e},e.prototype.remove=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n-0]=arguments[n];var r=!0;return t.forEach(function(t){e.isSupported||(e.warnings.next("LOCAL_STORAGE_NOT_SUPPORTED"),r=!1);try{e.webStorage.removeItem(e.deriveKey(t)),e.notifyOptions.removeItem&&e.removeItems.next({key:t,storageType:e.storageType})}catch(t){e.errors.next(t.message),r=!1}}),r},e.prototype.set=function(e,t){if(t=void 0===t?null:JSON.stringify(t),!this.isSupported)return this.warnings.next("LOCAL_STORAGE_NOT_SUPPORTED"),!1;try{this.webStorage&&this.webStorage.setItem(this.deriveKey(e),t),this.notifyOptions.setItem&&this.setItems.next({key:e,newvalue:t,storageType:this.storageType})}catch(e){return this.errors.next(e.message),!1}return!0},e.prototype.checkSupport=function(){try{var e=this.storageType in window&&null!==window[this.storageType];if(e){this.webStorage=window[this.storageType];var t=this.deriveKey("__"+Math.round(1e7*Math.random()));this.webStorage.setItem(t,""),this.webStorage.removeItem(t)}return e}catch(e){return this.errors.next(e.message),!1}},e.prototype.setPrefix=function(e){this.prefix=e;this.prefix&&!this.prefix.endsWith(".")&&(this.prefix=this.prefix?this.prefix+".":"")},e.prototype.setStorageType=function(e){this.storageType=e},e.prototype.setNotify=function(e,t){null!=e&&(this.notifyOptions.setItem=e),null!=t&&(this.notifyOptions.removeItem=t)},e=r([a.Injectable(),i(0,a.Inject("LOCAL_STORAGE_SERVICE_CONFIG")),o("design:paramtypes",[Object])],e)}();t.LocalStorageService=c},211:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),a=n(87);n(196),n(204);var s=function(){function e(e){var t=this,n={},r=[];t.init=e.get("data/aliens2.json").map(function(e){return e.json().list}).toPromise().then(function(e){return e.forEach(function(e){n[e.name]=e,r.push(e.name)}),r.sort(),r.slice(0)}),t.get=function(e){return n[e]||{}},t.getMatchingNames=function(e,t,o,i){var a=r.filter(function(r){return e[n[r].level]&&t.indexOf(n[r].game)>-1});return o&&o.length&&(a=a.filter(function(e){return o.indexOf(e)<0})),i&&"none"!==i&&(a=a.filter(function(e){return!n[e].setup||"color"===i&&"color"!==n[e].setup})),a}}return e=r([i.Injectable(),o("design:paramtypes",[a.Http])],e)}();t.AlienService=s},630:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};Object.defineProperty(t,"__esModule",{value:!0});var o=n(120),i=n(7),a=n(7),s=n(31),l=n(179),c=n(87),f=n(118),p=n(121),d=n(209),u=n(632),m=n(633),h=function(){function e(){}return e=r([a.NgModule({imports:[s.BrowserModule,f.BrowserAnimationsModule,l.FormsModule,c.HttpModule,d.LocalStorageModule.withConfig({prefix:"alien-ref",storageType:"localStorage"}),p.MdToolbarModule,p.MdCardModule,p.MdCheckboxModule,p.MdListModule,p.MdButtonModule,p.MdCoreModule,p.StyleModule,p.MdSidenavModule,p.MdIconModule],declarations:[u.AppComponent,m.CosmicDrawerComponent,m.GameOptionsComponent,m.LevelOptionsComponent,m.AlienCardComponent,m.AlienGridComponent,m.LevelNamePipe,m.LevelStarsPipe],bootstrap:[u.AppComponent],providers:[m.AlienService]})],e)}();i.enableProdMode(),o.platformBrowserDynamic().bootstrapModule(h)},631:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},i=n(7),a=n(210),s=function(){function e(){}return e.withConfig=function(t){return void 0===t&&(t={}),{ngModule:e,providers:[{provide:"LOCAL_STORAGE_SERVICE_CONFIG",useValue:t}]}},e=r([i.NgModule({providers:[a.LocalStorageService]}),o("design:paramtypes",[])],e)}();t.LocalStorageModule=s},632:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),a=n(211),s=function(){function e(e){this.Aliens=e,this.selectedGames=[],this.selectedLevels=[],this.orderBy=["name"],this.groupBy=["game","level"]}return e.prototype.ngOnInit=function(){var e=this;this.Aliens.init.then(function(){e.refresh()})},e.prototype.onSelectGame=function(e){this.selectedGames=e,this.refresh()},e.prototype.onSelectLevel=function(e){this.selectedLevels=e,this.refresh()},e.prototype.refresh=function(){if(this.Aliens){var e=this.Aliens.getMatchingNames(this.selectedLevels,this.selectedGames);this.alienGroups=l(e.map(this.Aliens.get),this.groupBy)}},e=r([i.Component({selector:"aliens-reference-app",styles:["\n\tmd-sidenav-container { height: 100%; }\n\t\t#container { display: flex; flex: auto; flex-wrap: wrap; align-content: stretch; padding:8px }\n\t\tmd-card-actions { text-align: right }\n\t\t.mat-h2 { margin: 16px 8px 8px;}\n\t"],template:'\n<md-sidenav-container>\n\t<md-sidenav #leftnav>\n\t\t<cosmic-drawer [page]="\'reference\'"></cosmic-drawer>\n\t</md-sidenav>\n\t<div id="content">\n\t\t<md-toolbar class="mat-primary">\n\t\t\t<button md-button (click)="leftnav.toggle()">\n\t\t\t\t<md-icon>menu</md-icon>\n\t\t\t</button>\n\t\t\t<h1>Alien Reference</h1>\n\t\t</md-toolbar>\n\t\t<div id="container">\n\t\t\t<game-options (onSelected)="onSelectGame($event)"></game-options>\n\t\t\t<level-options (onSelected)="onSelectLevel($event)"></level-options>\n\t\t\t<md-card>\n\t\t\t\t<md-card-title>Sort by</md-card-title>\n\t\t\t\t<ol>\n\t\t\t\t\t<li>Game</li>\n\t\t\t\t\t<li>Level</li>\n\t\t\t\t\t<li>Name</li>\n\t\t\t\t</ol>\n\t\t\t\t<md-card-title>Group by</md-card-title>\n\t\t\t\t<ol>\n\t\t\t\t\t<li>Game</li>\n\t\t\t\t\t<li>Level</li>\n\t\t\t\t</ol>\n\t\t\t</md-card>\n\t\t</div>\n\t\t<div *ngFor="let gameGroup of alienGroups">\n\t\t\t<div *ngFor="let levelGroup of gameGroup.items">\n\t\t\t\t<h2 class="mat-h2">Cosmic {{gameGroup.value}} - {{levelGroup.value| levelName}} {{levelGroup.value | levelStars}}</h2>\n\t\t\t\t<alien-grid [aliens]="levelGroup.items"></alien-grid>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</md-sidenav-container>\n'}),o("design:paramtypes",[a.AlienService])],e)}();t.AppComponent=s;var l=function(){function e(t,n,r){if(n.length<1)return[{value:"",items:t}];var o={},i=n[r];t.forEach(function(e){var t=e[i];o[t]=o[t]||[],o[t].push(e)});var a=Object.keys(o).sort().map(function(e){return{value:e,items:o[e]}});return n[r+1]&&(a=a.map(function(t){return{value:t.value,items:e(t.items,n,r+1)}})),a}return function(t,n){return e(t,n,0)}}()},633:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(634);t.AlienCardComponent=r.AlienCardComponent;var o=n(635);t.AlienGridComponent=o.AlienGridComponent;var i=n(636);t.LevelNamePipe=i.LevelNamePipe;var a=n(637);t.LevelStarsPipe=a.LevelStarsPipe;var s=n(211);t.AlienService=s.AlienService;var l=n(638);t.CosmicDrawerComponent=l.CosmicDrawerComponent;var c=n(639);t.GameOptionsComponent=c.GameOptionsComponent;var f=n(640);t.LevelOptionsComponent=f.LevelOptionsComponent},634:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),a=function(){function e(){this.opened=!1}return e.prototype.toggle=function(){this.opened=!this.opened},r([i.Input(),o("design:type",Object)],e.prototype,"alien",void 0),e=r([i.Component({selector:"alien-card",styles:["\n\t"],template:'\n<md-card [ngClass]="\'alien-\'+alien.level+\'-theme\'">\n\t<md-card-header>\n\t\t<div md-card-avatar>\n\t\t\t<button md-raised-button class="mat-accent" (click)="toggle()"><md-icon>{{opened ? \'remove\': \'add\'}}</md-icon></button>\n\t\t</div>\n\t\t<md-card-title class="alien-head alien-fg">{{alien.name}}</md-card-title>\n\t\t<md-card-subtitle>{{alien.power}}</md-card-subtitle>\n\t</md-card-header>\n\t<md-card-footer>\n\t\t<div class="alien-bar alien-bg">\n\t\t\t<span class="alien-panel-game">{{alien.game}}</span>\n\t\t\t<span *ngIf="(alien.setup || alien.restriction)"><md-icon>warning</md-icon></span>\n\t\t\t<span class="alien-panel-level">{{alien.level | levelStars}}</span>\n\t\t</div>\n\t\t<div *ngIf="opened" class="alien-desc" [innerHTML]="alien.description"></div>\n\t</md-card-footer>\n</md-card>\n',encapsulation:i.ViewEncapsulation.None})],e)}();t.AlienCardComponent=a},635:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),a=function(){function e(){}return r([i.Input(),o("design:type",Array)],e.prototype,"aliens",void 0),e=r([i.Component({selector:"alien-grid",styles:["\n\t\talien-grid { display: flex; flex-wrap: wrap; align-items: stretch; }\n\t\talien-grid > * { flex-basis: 25% }\n\t\t@media (max-width: 992px) {\n\t\t\talien-grid > * { flex-basis: 33% }\n\t\t}\n\t\t@media (max-width: 768px) {\n\t\t\talien-grid > * { flex-basis: 50% }\n\t\t}\n\t\t@media (max-width: 576px) {\n\t\t\talien-grid > * { flex-basis: 100% }\n\t\t}\n\t"],template:'<alien-card [alien]="alien" *ngFor="let alien of aliens"></alien-card>',encapsulation:i.ViewEncapsulation.None})],e)}();t.AlienGridComponent=a},636:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),i=function(){function e(){}return e.prototype.transform=function(e){return a[e]},e=r([o.Pipe({name:"levelName"})],e)}();t.LevelNamePipe=i;var a=["Green","Yellow","Red"]},637:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),i=function(){function e(){}return e.prototype.transform=function(e){return a[e]},e=r([o.Pipe({name:"levelStars"})],e)}();t.LevelStarsPipe=i;var a=["★","★★","★★★"]},638:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),a=function(){function e(){}return r([i.Input(),o("design:type",String)],e.prototype,"page",void 0),e=r([i.Component({selector:"cosmic-drawer",styles:["\n\t"],template:'\n\t<md-toolbar class="mat-primary">\n\t\t<h2>Cosmic Companion</h2>\n\t</md-toolbar>\n\t<md-list>\n\t\t<md-list-item><a md-button href="index.html">Home</a></md-list-item>\n\t\t<md-divider></md-divider>\n\t\t<md-list-item><a md-button href="generator.html" [disabled]="page === \'generator\'">Alien Generator</a></md-list-item>\n\t\t<md-list-item><a md-button href="reference.html" [disabled]="page === \'reference\'">Alien Reference</a></md-list-item>\n\t\t<md-list-item>\n\t\t\t<a href="https://play.google.com/store/apps/details?id=net.fmorel.cosmicgenerator">\n\t\t\t<img src="icons/playstore_badge.png" />\n\t\t\t</a>\n\t\t</md-list-item>\n\t</md-list>\n'})],e)}();t.CosmicDrawerComponent=a},639:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),a=n(209),s=function(){function e(e){this.Storage=e,this.onSelected=new i.EventEmitter,this.gameNames=["Encounter","Alliance","Conflict","Dominion","Eons","Incursion","Storm"],this.games={Encounter:!0}}return e.prototype.ngOnInit=function(){var e=this,t=this.Storage.get("games")||["Encounter"];this.gameNames.forEach(function(t){e.games[t]=!1}),t.forEach(function(t){e.games[t]=!0}),this.select()},e.prototype.select=function(){var e=this,t=this.gameNames.filter(function(t){return e.games[t]});this.Storage.set("games",t),this.onSelected.emit(t)},r([i.Output(),o("design:type",Object)],e.prototype,"onSelected",void 0),e=r([i.Component({selector:"game-options",styles:["\n\t.mat-list-item { height: 32px; }\n\t"],template:'\n<md-card>\n<md-card-title>Games to include</md-card-title>\n<md-list>\n\t<md-list-item  *ngFor="let game of gameNames">\n\t\t<md-checkbox class="mat-primary" (change)="select()" [(ngModel)]="games[game]">{{game}}</md-checkbox>\n\t</md-list-item>\n</md-list>\n</md-card>\n'}),o("design:paramtypes",[a.LocalStorageService])],e)}();t.GameOptionsComponent=s},640:function(e,t,n){"use strict";var r=this&&this.__decorate||function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),a=n(209),s=function(){function e(e){this.Storage=e,this.onSelected=new i.EventEmitter,this.levels=[!0,!0,!0]}return e.prototype.ngOnInit=function(){this.levels=this.Storage.get("levels")||[!0,!0,!0],this.select()},e.prototype.select=function(){this.Storage.set("levels",this.levels),this.onSelected.emit(this.levels.slice(0))},r([i.Output(),o("design:type",Object)],e.prototype,"onSelected",void 0),e=r([i.Component({selector:"level-options",styles:["\n\t.mat-list-item { height: 32px; }\n\t"],template:'\n<md-card>\n<md-card-title>Levels to include</md-card-title>\n<md-card-content>\n\t<md-list>\n\t\t<md-list-item [ngClass]="\'alien-\'+level+\'-theme\'" *ngFor="let level of [0,1,2]">\n\t\t\t<md-checkbox class="mat-primary" (change)="select()" [(ngModel)]="levels[level]">{{level | levelName}}</md-checkbox>\n\t\t</md-list-item>\n\t</md-list>\n</md-card-content>\n</md-card>\n'}),o("design:paramtypes",[a.LocalStorageService])],e)}();t.LevelOptionsComponent=s}},[630]);