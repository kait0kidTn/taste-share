import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css',
})
export class ImageSliderComponent implements OnInit {
  images: string[] = [
    'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];
  currentIndex = 0;
  currentImage!: string;
  currentImageAlt!: string;

  constructor() {}

  ngOnInit(): void {
    this.rotateImages();
  }

  rotateImages(): void {
    setInterval(() => {
      this.currentImage = this.images[this.currentIndex];
      this.currentImageAlt = `Image ${this.currentIndex + 1}`;
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000);
  }
}
