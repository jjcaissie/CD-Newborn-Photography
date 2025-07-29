import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-portfolio',
  imports: [CommonModule],
  templateUrl: './page-portfolio.html',
  styleUrl: './page-portfolio.scss',
})
export class PagePortfolio {
  images: string[] = [];
  selectedImage: string | null = null;
  zoomed: boolean = false;
  transformOrigin = 'center center';

  translateX = 0;
  translateY = 0;

  private dragging = false;
  private lastX = 0;
  private lastY = 0;

  constructor() {
    for (let i = 1; i <= 9; i++) {
      this.images.push(`assets/pictures/portfolio/baby${i}.jpg`);
    }
  }

  openOverlay(img: string): void {
    this.selectedImage = img;
    this.zoomed = false;
    this.transformOrigin = 'center center';
    this.translateX = 0;
    this.translateY = 0;
  }

  closeOverlay(): void {
    this.selectedImage = null;
    this.zoomed = false;
  }

  toggleZoom(event: MouseEvent) {
    event.stopPropagation();
    if (!this.zoomed) {
      const img = event.target as HTMLElement;
      const rect = img.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      this.transformOrigin = `${x}% ${y}%`;
      this.zoomed = true;
    } else {
      this.zoomed = false;
      this.transformOrigin = 'center center';
      this.translateX = 0;
      this.translateY = 0;
    }
  }

  onDragStart(event: MouseEvent | TouchEvent) {
    if (!this.zoomed) return;
    event.preventDefault();
    this.dragging = true;

    if (event instanceof MouseEvent) {
      this.lastX = event.clientX;
      this.lastY = event.clientY;
    } else {
      this.lastX = event.touches[0].clientX;
      this.lastY = event.touches[0].clientY;
    }
  }

  onDragMove(event: MouseEvent | TouchEvent) {
    if (!this.dragging) return;

    let currentX, currentY;
    if (event instanceof MouseEvent) {
      currentX = event.clientX;
      currentY = event.clientY;
    } else {
      currentX = event.touches[0].clientX;
      currentY = event.touches[0].clientY;
    }

    const deltaX = currentX - this.lastX;
    const deltaY = currentY - this.lastY;

    this.translateX += deltaX;
    this.translateY += deltaY;

    this.lastX = currentX;
    this.lastY = currentY;
  }

  onDragEnd() {
    this.dragging = false;
  }
}
