webpackJsonp([1],{208:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),a=n(87);n(196),n(203);var l=function(){function e(e){var t=this,n={},o=[];t.init=e.get("data/aliens2.json").map(function(e){return e.json().list}).toPromise().then(function(e){return e.forEach(function(e){n[e.name]=e,o.push(e.name)}),o.sort(),o.slice(0)}),t.get=function(e){return n[e]||{}},t.getMatchingNames=function(e,t,i,r){var a=o.filter(function(o){return e[n[o].level]&&t.indexOf(n[o].game)>-1});return i&&i.length&&(a=a.filter(function(e){return i.indexOf(e)<0})),r&&"none"!==r&&(a=a.filter(function(e){return!n[e].setup||"color"===r&&"color"!==n[e].setup})),a}}return e=o([r.Injectable(),i("design:paramtypes",[a.Http])],e)}();t.AlienService=l},628:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a};Object.defineProperty(t,"__esModule",{value:!0});var i=n(120),r=n(9),a=n(9),l=n(31),c=n(179),s=n(87),d=n(118),f=n(121),m=n(629),p=n(630),u=function(){function e(){}return e=o([a.NgModule({imports:[l.BrowserModule,d.BrowserAnimationsModule,c.FormsModule,s.HttpModule,f.MdToolbarModule,f.MdCardModule,f.MdCheckboxModule,f.MdListModule,f.MdButtonModule,f.MdCoreModule,f.StyleModule,f.MdSidenavModule,f.MdIconModule],declarations:[m.AppComponent,p.CosmicDrawerComponent,p.GameOptionsComponent,p.LevelOptionsComponent,p.AlienCardComponent,p.LevelNamePipe,p.LevelStarsPipe],bootstrap:[m.AppComponent],providers:[p.AlienService]})],e)}();r.enableProdMode(),i.platformBrowserDynamic().bootstrapModule(u)},629:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),a=n(208),l=function(){function e(e){this.Aliens=e,this.selectedGames=[],this.selectedLevels=[],this.orderBy=["name"],this.groupBy=["game","level"]}return e.prototype.ngOnInit=function(){var e=this;this.Aliens.init.then(function(){e.refresh()})},e.prototype.onSelectGame=function(e){this.selectedGames=e,this.refresh()},e.prototype.onSelectLevel=function(e){this.selectedLevels=e,this.refresh()},e.prototype.refresh=function(){if(this.Aliens){var e=this.Aliens.getMatchingNames(this.selectedLevels,this.selectedGames);this.alienGroups=c(e.map(this.Aliens.get),this.groupBy)}},e=o([r.Component({selector:"aliens-reference-app",styles:["\n\tmd-sidenav-container { height: 100%; }\n\t\t#container { display: flex; flex: auto; flex-wrap: wrap; align-content: stretch; padding:8px }\n\t\tmd-card-actions { text-align: right }\n\t\t.groupHeader { margin: 16px 8px 8px;}\n\t\t#aliens { display: flex; flex-wrap: wrap; align-items: stretch; }\n\t\t#aliens > div { flex-basis: 25% }\n\t\t@media (max-width: 992px) {\n\t\t\t#aliens > div { flex-basis: 33% }\n\t\t}\n\t\t@media (max-width: 768px) {\n\t\t\t#aliens > div { flex-basis: 50% }\n\t\t}\n\t\t@media (max-width: 576px) {\n\t\t\t#aliens > div { flex-basis: 100% }\n\t\t}\n\t"],template:'\n<md-sidenav-container>\n\t<md-sidenav #leftnav>\n\t\t<cosmic-drawer [page]="\'reference\'"></cosmic-drawer>\n\t</md-sidenav>\n\t<div id="content">\n\t\t<md-toolbar class="mat-primary">\n\t\t\t<button md-button (click)="leftnav.toggle()">\n\t\t\t\t<md-icon>menu</md-icon>\n\t\t\t</button>\n\t\t\t<h1>Alien Reference</h1>\n\t\t</md-toolbar>\n\t\t<div id="container">\n\t\t\t<game-options (onSelected)="onSelectGame($event)"></game-options>\n\t\t\t<level-options (onSelected)="onSelectLevel($event)"></level-options>\n\t\t\t<md-card>\n\t\t\t\t<md-card-content>\n\t\t\t\t\t<md-card-title>Sort by</md-card-title>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Game</li>\n\t\t\t\t\t\t<li>Level</li>\n\t\t\t\t\t\t<li>Name</li>\n\t\t\t\t\t</ol>\n\t\t\t\t\t<md-card-title>Group by</md-card-title>\n\t\t\t\t\t<ol>\n\t\t\t\t\t\t<li>Game</li>\n\t\t\t\t\t\t<li>Level</li>\n\t\t\t\t\t</ol>\n\t\t\t\t</md-card-content>\n\t\t\t</md-card>\n\t\t</div>\n\t\t<div *ngFor="let gameGroup of alienGroups">\n\t\t\t<div *ngFor="let levelGroup of gameGroup.items">\n\t\t\t\t<h2 class="mat-h2 groupHeader">Cosmic {{gameGroup.value}} - {{levelGroup.value| levelName}} {{levelGroup.value | levelStars}}</h2>\n\t\t\t\t<div id="aliens"><div *ngFor="let alien of levelGroup.items"><alien-card [alien]="alien"></alien-card></div></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</md-sidenav-container>\n'}),i("design:paramtypes",[a.AlienService])],e)}();t.AppComponent=l;var c=function(){function e(t,n,o){if(n.length<1)return[{value:"",items:t}];var i={},r=n[o];t.forEach(function(e){var t=e[r];i[t]=i[t]||[],i[t].push(e)});var a=Object.keys(i).sort().map(function(e){return{value:e,items:i[e]}});return n[o+1]&&(a=a.map(function(t){return{value:t.value,items:e(t.items,n,o+1)}})),a}return function(t,n){return e(t,n,0)}}()},630:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(631);t.AlienCardComponent=o.AlienCardComponent;var i=n(632);t.LevelNamePipe=i.LevelNamePipe;var r=n(633);t.LevelStarsPipe=r.LevelStarsPipe;var a=n(208);t.AlienService=a.AlienService;var l=n(634);t.CosmicDrawerComponent=l.CosmicDrawerComponent;var c=n(635);t.GameOptionsComponent=c.GameOptionsComponent;var s=n(636);t.LevelOptionsComponent=s.LevelOptionsComponent},631:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),a=function(){function e(){this.opened=!1}return e.prototype.toggle=function(){this.opened=!this.opened},o([r.Input(),i("design:type",Object)],e.prototype,"alien",void 0),e=o([r.Component({selector:"alien-card",styles:["\n\t"],template:'\n<md-card [ngClass]="\'alien-\'+alien.level+\'-theme\'">\n\t<md-card-header>\n\t\t<div md-card-avatar>\n\t\t\t<button md-raised-button class="mat-accent" (click)="toggle()"><md-icon>{{opened ? \'remove\': \'add\'}}</md-icon></button>\n\t\t</div>\n\t\t<md-card-title class="alien-head alien-fg">{{alien.name}}</md-card-title>\n\t\t<md-card-subtitle>{{alien.power}}</md-card-subtitle>\n\t</md-card-header>\n\t<md-card-footer>\n\t\t<div class="alien-bar alien-bg">\n\t\t\t<span class="alien-panel-game">{{alien.game}}</span>\n\t\t\t<span *ngIf="(alien.setup || alien.restriction)"><md-icon>warning</md-icon></span>\n\t\t\t<span class="alien-panel-level">{{alien.level | levelStars}}</span>\n\t\t</div>\n\t\t<div *ngIf="opened" class="alien-desc" [innerHTML]="alien.description"></div>\n\t</md-card-footer>\n</md-card>\n',encapsulation:r.ViewEncapsulation.None})],e)}();t.AlienCardComponent=a},632:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a};Object.defineProperty(t,"__esModule",{value:!0});var i=n(9),r=function(){function e(){}return e.prototype.transform=function(e){return a[e]},e=o([i.Pipe({name:"levelName"})],e)}();t.LevelNamePipe=r;var a=["Green","Yellow","Red"]},633:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a};Object.defineProperty(t,"__esModule",{value:!0});var i=n(9),r=function(){function e(){}return e.prototype.transform=function(e){return a[e]},e=o([i.Pipe({name:"levelStars"})],e)}();t.LevelStarsPipe=r;var a=["★","★★","★★★"]},634:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),a=function(){function e(){}return o([r.Input(),i("design:type",String)],e.prototype,"page",void 0),e=o([r.Component({selector:"cosmic-drawer",styles:["\n\t"],template:'\n\t<md-toolbar class="mat-primary">\n\t\t<h2>Cosmic Companion</h2>\n\t</md-toolbar>\n\t<md-list>\n\t\t<md-list-item><a md-button href="index.html">Home</a></md-list-item>\n\t\t<md-divider></md-divider>\n\t\t<md-list-item><a md-button href="generator.html" [disabled]="page === \'generator\'">Alien Generator</a></md-list-item>\n\t\t<md-list-item><a md-button href="reference.html" [disabled]="page === \'reference\'">Alien Reference</a></md-list-item>\n\t\t<md-list-item>\n\t\t\t<a href="https://play.google.com/store/apps/details?id=net.fmorel.cosmicgenerator">\n\t\t\t<img src="icons/playstore_badge.png" />\n\t\t\t</a>\n\t\t</md-list-item>\n\t</md-list>\n'})],e)}();t.CosmicDrawerComponent=a},635:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),a=function(){function e(){this.onSelected=new r.EventEmitter,this.gameNames=["Encounter","Alliance","Conflict","Dominion","Eons","Incursion","Storm"],this.games={Encounter:!0}}return e.prototype.ngOnInit=function(){this.select()},e.prototype.select=function(){var e=this;this.onSelected.emit(this.gameNames.filter(function(t){return e.games[t]}))},o([r.Output(),i("design:type",Object)],e.prototype,"onSelected",void 0),e=o([r.Component({selector:"game-options",styles:["\n\t.mat-list-item { height: 32px; }\n\t"],template:'\n<md-card>\n<md-card-title>Games to include</md-card-title>\n<md-list>\n\t<md-list-item  *ngFor="let game of gameNames">\n\t\t<md-checkbox class="mat-primary" (change)="select()" [(ngModel)]="games[game]">{{game}}</md-checkbox>\n\t</md-list-item>\n</md-list>\n</md-card>\n'})],e)}();t.GameOptionsComponent=a},636:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),a=function(){function e(){this.onSelected=new r.EventEmitter,this.levels=[!0,!0,!0]}return e.prototype.ngOnInit=function(){this.select()},e.prototype.select=function(){this.onSelected.emit(this.levels.slice(0))},o([r.Output(),i("design:type",Object)],e.prototype,"onSelected",void 0),e=o([r.Component({selector:"level-options",styles:["\n\t.mat-list-item { height: 32px; }\n\t"],template:'\n<md-card>\n<md-card-title>Levels to include</md-card-title>\n<md-card-content>\n\t<md-list>\n\t\t<md-list-item [ngClass]="\'alien-\'+level+\'-theme\'" *ngFor="let level of [0,1,2]">\n\t\t\t<md-checkbox class="mat-primary" (change)="select()" [(ngModel)]="levels[level]">{{level | levelName}}</md-checkbox>\n\t\t</md-list-item>\n\t</md-list>\n</md-card-content>\n</md-card>\n'})],e)}();t.LevelOptionsComponent=a}},[628]);