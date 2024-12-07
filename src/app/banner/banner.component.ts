import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

declare var data : any;

@Component({
	selector: 'app-banner',
	templateUrl: './banner.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
	public bannerData = data['Banner'];
	constructor(private changeDetectorRef: ChangeDetectorRef) {
		changeDetectorRef.detach();
	}

	public getRandomValue(e : any) {
		return Array.isArray(e) ? e[Math.floor(Math.random() * e.length)] : e;
	}

	ngOnInit(): void {
		this.changeDetectorRef.detectChanges();
	}
}
