import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomeComponent, ImageSliderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'taste_nd_share';
}
