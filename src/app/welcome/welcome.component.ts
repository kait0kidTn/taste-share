import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from '../image-slider/image-slider.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
  imports: [CommonModule, ImageSliderComponent],
})
export class WelcomeComponent {}
