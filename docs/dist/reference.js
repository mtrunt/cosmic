webpackJsonp([2],{439:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(l=(a<3?r(l):a>3?r(t,n,l):r(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l};Object.defineProperty(t,"__esModule",{value:!0});var r=n(94),a=n(1),l=n(32),i=n(23),c=n(81),s=n(131),u=n(82),m=n(440),p=n(74),f=function(){function e(){}return e=o([a.NgModule({imports:[l.BrowserModule,s.NoopAnimationsModule,i.FormsModule,c.HttpClientModule,u.LocalStorageModule.withConfig({prefix:"alien-ref",storageType:"localStorage"}),p.ThemingModule],declarations:[m.AlienReferencePage,p.CosmicDrawerComponent,p.GameOptionsComponent,p.LevelOptionsComponent,p.AlienCardComponent,p.AlienGridComponent,p.LevelNamePipe,p.LevelStarsPipe],bootstrap:[m.AlienReferencePage],providers:[p.AlienService]})],e)}();a.enableProdMode(),r.platformBrowserDynamic().bootstrapModule(f)},440:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,l=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(l=(a<3?r(l):a>3?r(t,n,l):r(t,n))||l);return a>3&&l&&Object.defineProperty(t,n,l),l},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),l=n(74),i=n(82),c=function(){function e(e,t){function n(){o.groups=s(e.getMatching(o.levels,o.games),r,a)}var o=this;o.levels=t.get("levels")||[!0,!0,!0],o.games=t.get("games")||{Encounter:!0};var r=["game","level"],a=["name"];o.onSelectGame=function(e){t.set("games",e),o.games=e,n()},o.onSelectLevel=function(e){t.set("levels",e),o.levels=e,n()},e.init.subscribe(n)}return e=o([a.Component({selector:"aliens-reference-app",styles:["#container { display: flex; flex: auto; flex-wrap: wrap; align-content: stretch; }",".mat-h2 { margin: 16px 8px 8px;}"],template:n(441)}),r("design:paramtypes",[l.AlienService,i.LocalStorageService])],e)}();t.AlienReferencePage=c;var s=function(){function e(t,n,o,r){if(n.length<1)return[{value:"",items:t}];var a={},l=n[r];t.forEach(function(e){var t=e[l];a[t]=a[t]||[],a[t].push(e)});var i=Object.keys(a).sort().map(function(e){return{value:e,items:a[e]}});return n[r+1]&&(i=i.map(function(t){return{value:t.value,items:e(t.items,n,o,r+1)}})),i}return function(t,n,o){return e(t,n,o,0)}}()},441:function(e,t){e.exports='<mat-sidenav-container><mat-sidenav #leftnav><cosmic-drawer [page]="\'reference\'"></cosmic-drawer></mat-sidenav><div><mat-toolbar class="mat-primary"><button mat-button (click)="leftnav.toggle()"><mat-icon>menu</mat-icon></button>&nbsp;<h1>Alien Reference</h1></mat-toolbar><div id="container"><game-options [games]="games" (onSelected)="onSelectGame($event)"></game-options><level-options [levels]="levels" (onSelected)="onSelectLevel($event)"></level-options><mat-card><mat-card-title>Sort by</mat-card-title><ol><li>Game</li><li>Level</li><li>Name</li></ol><mat-card-title>Group by</mat-card-title><ol><li>Game</li><li>Level</li></ol></mat-card></div><div *ngFor="let gGroup of groups"><div *ngFor="let lGroup of gGroup.items"><h2 class="mat-h2">Cosmic {{gGroup.value}} - {{lGroup.value| levelName}} {{lGroup.value | levelStars}}</h2><alien-grid [aliens]="lGroup.items"></alien-grid></div></div></div></mat-sidenav-container>'}},[439]);