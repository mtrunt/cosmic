webpackJsonp([1],{173:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var s,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(o=(a<3?s(o):a>3?s(t,n,o):s(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=n(65),r=function(){function e(e){function t(t){void 0===t&&(t=!1);var n=Math.floor(Math.random()*l.length);if(l[n]){var i=l.splice(n,1)[0];if(a.push(i),t){var s=e.get(i);if(s.restriction)for(var o=s.restriction.split(","),c=0;c<o.length;c++){var m=l.indexOf(o[c]);m>-1&&r.push(l.splice(m,1)[0])}}return i}}function n(){o=o.concat(a,r),r=[],a=[]}function i(){l=l.concat(a,r),a=[],r=[]}var s=this,a=[],o=[],r=[],l=[],c=0;s.reset=function(e){return l=e,o=[],a=[],r=[],c=0,{aliens:[],message:"List reset."}},s.getAllGiven=function(){return n(),{aliens:o,message:"Aliens given out so far:"}},s.getChooseLimit=function(e){var t=e,n=l.length;return n>0&&t>n&&(t=n),t<1&&(t=1),t},s.draw=function(e,o){void 0===o&&(o=!1),n();for(var r=0;r<e;r++){if(!t(o))break}return a.length<e?(i(),{aliens:[],message:"Not enough potential aliens left."+(o?' It\'s possible that the "Prevent conflicts" option is preventing me from displaying remaining aliens.':"")}):{aliens:a,message:"Choices:",limit:s.getChooseLimit(e)}},s.hide=function(){return{aliens:[],message:"Choices hidden."}},s.show=function(){return a.map(function(e){return e[0].toLowerCase()}).indexOf((prompt("Enter the first initial of one of the aliens you were given, then click OK.")||"").toLowerCase())<0?{aliens:[],message:"Wrong letter."}:{aliens:a,message:"Choices:"}},s.redo=function(e,t){return void 0===t&&(t=!1),confirm("Redo?")?(i(),c++,s.draw(e,t)):{aliens:a,message:"Choices:"}},s.getDisabledActions=function(e,t){return{draw:l.length<e,hide:t<1,show:!(a.length>0&&t<1),redo:a.length<=0||t<=0,reset:a.length<=0&&o.length<=0}},s.getStatus=function(){var e=a.length+o.length+r.length;return e+" of "+(e+l.length)+" drawn. "+c+" redos so far."}}return e=i([a.Injectable(),s("design:paramtypes",[o.AlienService])],e)}();t.AlienGeneratorService=r},417:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var s,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(o=(a<3?s(o):a>3?s(t,n,o):s(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o};Object.defineProperty(t,"__esModule",{value:!0});var s=n(84),a=n(1),o=n(17),r=n(29),l=n(86),c=n(85),m=n(72),d=n(418),u=n(173),g=n(119),h=n(65),p=function(){function e(){}return e=i([a.NgModule({imports:[o.BrowserModule,c.NoopAnimationsModule,r.FormsModule,l.HttpClientModule,m.LocalStorageModule.withConfig({prefix:"alien-gen",storageType:"localStorage"}),g.NoConflictStyleCompatibilityMode,h.ThemingModule],declarations:[d.AlienGeneratorPage,h.CosmicDrawerComponent,h.GameOptionsComponent,h.LevelOptionsComponent,h.AlienCardComponent,h.AlienGridComponent,h.LevelNamePipe,h.LevelStarsPipe],bootstrap:[d.AlienGeneratorPage],providers:[h.AlienService,u.AlienGeneratorService]})],e)}();a.enableProdMode(),s.platformBrowserDynamic().bootstrapModule(p)},418:function(e,t,n){"use strict";var i=this&&this.__decorate||function(e,t,n,i){var s,a=arguments.length,o=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,n,i);else for(var r=e.length-1;r>=0;r--)(s=e[r])&&(o=(a<3?s(o):a>3?s(t,n,o):s(t,n))||o);return a>3&&o&&Object.defineProperty(t,n,o),o},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),o=n(65),r=n(173),l=n(72),c=function(){function e(e,t,n){var i=this;this.Aliens=e,this.Generator=t,this.Storage=n,this.settings={levels:[],games:{},namesExcluded:[],setupLevel:"",numToChoose:2,preventConflicts:!0},this.disabled={draw:!0,hide:!0,show:!0,redo:!0,reset:!0},this.aliensToShow=[],this.NOT_RESET=0,this.draw=function(){return i.setState(i.Generator.draw(i.settings.numToChoose,i.settings.preventConflicts))},this.hide=function(){return i.setState(i.Generator.hide())},this.show=function(){return i.setState(i.Generator.show())},this.redo=function(){return i.setState(i.Generator.redo(i.settings.numToChoose,i.settings.preventConflicts))},this.reset=function(){confirm("Reset list of aliens?")?i.change():i.NOT_RESET++,i.NOT_RESET>2&&(i.setState(i.Generator.getAllGiven()),i.NOT_RESET=0)},this.restrictNumToChoose=function(){i.settings.numToChoose=i.Generator.getChooseLimit(i.settings.numToChoose),i.saveSettings()}}return e.prototype.ngOnInit=function(){var e=this;this.Aliens.init.subscribe(function(t){e.namesAll=t,e.settings=e.Storage.get("settings"),e.settings||(e.settings={}),e.settings.levels||(e.settings.levels=[!0,!0,!0]),e.settings.games||(e.settings.games={Encounter:!0}),e.settings.namesExcluded||(e.settings.namesExcluded=[]),e.settings.setupLevel||(e.settings.setupLevel=""),e.settings.numToChoose||(e.settings.numToChoose=2),void 0===e.settings.preventConflicts&&(e.settings.preventConflicts=!0),e.change()})},e.prototype.change=function(){if(this.settings){var e=this.Aliens.getMatchingNames(this.settings.levels,this.settings.games,this.settings.namesExcluded,this.settings.setupLevel);this.setState(this.Generator.reset(e)),this.restrictNumToChoose()}},e.prototype.onSelectGame=function(e){this.settings.games=e,this.change()},e.prototype.onSelectLevel=function(e){this.settings.levels=e,this.change()},e.prototype.saveSettings=function(){this.Storage.set("settings",this.settings)},e.prototype.setState=function(e){var t=this;e&&(this.state=e.message,this.aliensToShow=e.aliens.map(function(e){return t.Aliens.get(e)}),e.limit&&(this.settings.numToChoose=e.limit),this.status=this.Generator.getStatus(),this.disabled=this.Generator.getDisabledActions(this.settings.numToChoose,this.aliensToShow.length))},e=i([a.Component({selector:"aliens-generator-app",styles:["\n\t\t#container { display: flex; flex: auto; flex-wrap: wrap; align-content: stretch; padding:8px }\n\t\tmat-radio-button { display: block; margin: 16px 0; }\n\t\t#gen-status { margin: 16px; }\n\t\t.space-right { margin-right: 16px; }\n\t"],template:n(419)}),s("design:paramtypes",[o.AlienService,r.AlienGeneratorService,l.LocalStorageService])],e)}();t.AlienGeneratorPage=c},419:function(e,t){e.exports='<mat-sidenav-container><mat-sidenav #leftnav><cosmic-drawer [page]="\'generator\'"></cosmic-drawer></mat-sidenav><div id="content"><mat-toolbar class="mat-primary"><button mat-button (click)="leftnav.toggle()"><mat-icon>menu</mat-icon></button>&nbsp;<h1>Game Generator</h1></mat-toolbar><div id="container"><game-options [games]="settings.games" (onSelected)="onSelectGame($event)"></game-options><level-options [levels]="settings.levels" (onSelected)="onSelectLevel($event)"></level-options><mat-card><mat-card-title>Game Setup</mat-card-title><mat-radio-group [(ngModel)]="settings.setupLevel" (change)="change()"><mat-radio-button value class="mat-primary">Remove none</mat-radio-button><mat-radio-button value="color" class="mat-primary">Remove those requiring extra color</mat-radio-button><mat-radio-button value="all" class="mat-primary">Remove all</mat-radio-button></mat-radio-group></mat-card><mat-card><mat-card-title>Exclude by name</mat-card-title><mat-select multiple [(ngModel)]="settings.namesExcluded" (change)="change()" placeholder="Select names"><mat-option *ngFor="let name of namesAll" [value]="name">{{name}}</mat-option></mat-select></mat-card><mat-card><mat-card-title>How to choose</mat-card-title><mat-input-container><input matInput type="number" [(ngModel)]="settings.numToChoose" placeholder="Choices per player" step="1" min="1" (change)="restrictNumToChoose()"></mat-input-container><div><mat-checkbox class="mat-primary" (change)="saveSettings()" [(ngModel)]="settings.preventConflicts">Prevent conflicts (like Oracle vs. Magician)</mat-checkbox></div></mat-card></div><mat-toolbar id="gen-actions"><span class="space-right alien-0-theme"><button mat-raised-button class="mat-accent" (click)="draw()" [disabled]="disabled.draw">Draw</button></span> <span class><button mat-raised-button class="mat-primary" (click)="hide()" [disabled]="disabled.hide"><mat-icon>visibility_off</mat-icon>&nbsp;Hide</button></span> <span class="space-right"><button mat-raised-button class="mat-primary" (click)="show()" [disabled]="disabled.show"><mat-icon>visibility</mat-icon>&nbsp;Show</button></span> <span class="space-right alien-1-theme"><button mat-raised-button class="mat-accent" (click)="redo();" [disabled]="disabled.redo"><mat-icon>history</mat-icon>&nbsp;Redo</button></span> <span class="space-right alien-2-theme"><button mat-raised-button class="mat-accent" (click)="reset()" [disabled]="disabled.reset"><mat-icon>replay</mat-icon>&nbsp;Reset</button></span></mat-toolbar><p class="mat-body-1" id="gen-status">{{status}} {{state}}</p><alien-grid [aliens]="aliensToShow"></alien-grid></div></mat-sidenav-container>'}},[417]);