!function(t){function e(e){for(var r,i,a=e[0],s=e[1],c=e[2],u=0,f=[];u<a.length;u++)i=a[u],o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);for(p&&p(e);f.length;)f.shift()();return l.push.apply(l,c||[]),n()}function n(){for(var t,e=0;e<l.length;e++){for(var n=l[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(l.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={2:0},l=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var a=window.webpackJsonp=window.webpackJsonp||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var p=s;l.push([216,0]),n()}({213:function(t,e){t.exports='<mat-sidenav-container>\r\n\t<mat-sidenav #leftnav>\r\n\t\t<cosmic-drawer [page]="\'reference\'"></cosmic-drawer>\r\n\t</mat-sidenav>\r\n\t<div id="content">\r\n\t\t<mat-toolbar class="mat-primary">\r\n\t\t\t<button mat-button (click)="leftnav.toggle()">\r\n\t\t\t\t<mat-icon>menu</mat-icon>\r\n\t\t\t</button>&nbsp;\r\n\t\t\t<h1>Alien Reference</h1>\r\n\t\t</mat-toolbar>\r\n\t\t<div id="container">\r\n\t\t\t<game-options [games]="games" (onSelected)="onSelectGame($event)"></game-options>\r\n\t\t\t<level-options [levels]="levels" (onSelected)="onSelectLevel($event)"></level-options>\r\n\t\t\t<mat-card>\r\n\t\t\t\t<mat-card-title>Sort by</mat-card-title>\r\n\t\t\t\t<ol>\r\n\t\t\t\t\t<li>Game</li>\r\n\t\t\t\t\t<li>Level</li>\r\n\t\t\t\t\t<li>Name</li>\r\n\t\t\t\t</ol>\r\n\t\t\t\t<mat-card-title>Group by</mat-card-title>\r\n\t\t\t\t<ol>\r\n\t\t\t\t\t<li>Game</li>\r\n\t\t\t\t\t<li>Level</li>\r\n\t\t\t\t</ol>\r\n\t\t\t</mat-card>\r\n\t\t</div>\r\n\t\t<div *ngFor="let gGroup of groups">\r\n\t\t\t<div *ngFor="let lGroup of gGroup.items">\r\n\t\t\t\t<h2 class="mat-h2">Cosmic {{gGroup.value}} - {{lGroup.value| levelName}} {{lGroup.value | levelStars}}</h2>\r\n\t\t\t\t<alien-grid [aliens]="lGroup.items"></alien-grid>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</mat-sidenav-container>'},214:function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,l=arguments.length,i=l<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(l<3?o(i):l>3?o(e,n,i):o(e,n))||i);return l>3&&i&&Object.defineProperty(e,n,i),i},o=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});const l=n(0),i=n(99),a=n(68);let s=class{constructor(t,e){this.Aliens=t,this.Storage=e}ngOnInit(){this.levels=this.Storage.get("levels")||[!0,!0,!0],this.games=this.Storage.get("games")||{Encounter:!0},this.Aliens.init.subscribe(()=>{this.refresh()})}onSelectGame(t){this.Storage.set("games",t),this.games=t,this.refresh()}onSelectLevel(t){this.Storage.set("levels",t),this.levels=t,this.refresh()}refresh(){this.groups=function t(e,n,r,o=0){if(n.length<1)return[{value:"",items:e}];const l={};const i=n[o];e.forEach(function(t){const e=t[i];l[e]=l[e]||[],l[e].push(t)});let a=Object.keys(l).sort().map(t=>({value:t,items:l[t]}));n[o+1]&&(a=a.map(e=>({value:e.value,items:t(e.items,n,r,o+1)})));return a}(this.Aliens.getMatching(this.levels,this.games),["game","level"],["name"])}};s=r([l.Component({selector:"aliens-reference-app",styles:["#container { display: flex; flex: auto; flex-wrap: wrap; align-content: stretch; }",".mat-h2 { margin: 16px 8px 8px;}"],template:n(213)}),o("design:paramtypes",[a.AlienService,i.LocalStorageService])],s),e.AlienReferencePage=s},216:function(t,e,n){"use strict";var r=this&&this.__decorate||function(t,e,n,r){var o,l=arguments.length,i=l<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(i=(l<3?o(i):l>3?o(e,n,i):o(e,n))||i);return l>3&&i&&Object.defineProperty(e,n,i),i};Object.defineProperty(e,"__esModule",{value:!0});const o=n(0),l=n(29),i=n(23),a=n(74),s=n(113),c=n(99),p=n(214),u=n(68);let f=class{};f=r([o.NgModule({imports:[l.BrowserModule,s.NoopAnimationsModule,i.FormsModule,a.HttpClientModule,c.LocalStorageModule.withConfig({prefix:"alien-ref",storageType:"localStorage"}),u.ThemingModule],declarations:[p.AlienReferencePage,u.CosmicDrawerComponent,u.GameOptionsComponent,u.LevelOptionsComponent,u.AlienCardComponent,u.AlienGridComponent,u.LevelNamePipe,u.LevelStarsPipe],bootstrap:[p.AlienReferencePage]})],f),u.startApp(f)}});