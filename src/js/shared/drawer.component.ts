import { Component, Input } from "@angular/core";

@Component({
	selector: "cosmic-drawer",
	styles: [`
	`],
	template: `
	<md-toolbar class="mat-primary">
		<h2>Cosmic Companion</h2>
	</md-toolbar>
	<md-list>
		<md-list-item><a md-button href="index.html">Home</a></md-list-item>
		<md-divider></md-divider>
		<md-list-item><a md-button href="generator.html" [disabled]="page === 'generator'">Alien Generator</a></md-list-item>
		<md-list-item><a md-button href="reference.html" [disabled]="page === 'reference'">Alien Reference</a></md-list-item>
		<md-list-item>
			<a href="https://play.google.com/store/apps/details?id=net.fmorel.cosmicgenerator">
			<img src="icons/playstore_badge.png" />
			</a>
		</md-list-item>
	</md-list>
`,
})
export class CosmicDrawerComponent {
	@Input() public page: string;
}