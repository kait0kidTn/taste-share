import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { LoginPopupComponent } from '../login-popup/login-popup.component';
@Component({
  selector: 'app-welcome',
  standalone: true,
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css',
  imports: [CommonModule, ImageSliderComponent, LoginPopupComponent],
})
export class WelcomeComponent {}
