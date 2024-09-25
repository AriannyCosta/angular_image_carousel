import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private _activeImageIndex: number = 0;
  images: string[] = [
    'https://picsum.photos/id/25/2500/1667',
    'https://picsum.photos/id/100/2500/1667',
    'https://picsum.photos/id/237/2500/1667',
    'https://picsum.photos/id/190/2500/1667',
    'https://picsum.photos/id/155/2500/1667',
    'https://picsum.photos/id/238/2500/1667'
  ];
  isModalOpen: boolean = false;

  get activeImageIndex(): number {
    return this._activeImageIndex;
  }

  set activeImageIndex(value: number) {
    this._activeImageIndex = (value + this.images.length) % this.images.length;
  }

  ngOnInit(): void {
    //
  }

  nextImage(event?: MouseEvent): void {
    event?.stopPropagation();
    this.activeImageIndex++;
  }

  previousImage(event?: MouseEvent): void {
    event?.stopPropagation();
    this.activeImageIndex--;
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  getImageUrl(): string {
    return `url(${this.images[this.activeImageIndex]})`;
  }
}
