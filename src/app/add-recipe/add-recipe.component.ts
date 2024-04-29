import { Component, Renderer2, ElementRef, Inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css',
})
export class AddRecipeComponent {
  successMessage: string = '';
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {}

  newRecipe: FormGroup = new FormGroup({
    name: new FormControl(''),
    ingredients: new FormControl('Each ingredient must be separated by / or ,'),
    image: new FormControl(''),
    video: new FormControl(''),
    category: new FormControl(''),
    publisher: new FormControl('1'),
    description: new FormControl(''),
  });

  multimedia: any = {};

  onSelectFile(event: any, field: string) {
    const file = event.target.files[0];
    this.multimedia.field = file;
  }

  sendData(): void {
    const formData = new FormData();
    formData.append('nameR', this.newRecipe.get('name')?.value);
    formData.append('ingR', this.newRecipe.get('ingredients')?.value);
    formData.append('imgR', this.multimedia['image']);
    formData.append('vidR', this.multimedia['video']);
    formData.append('pubR', this.newRecipe.get('publisher')?.value);
    formData.append('descR', this.newRecipe.get('description')?.value);
    formData.append('catR', this.newRecipe.get('category')?.value);
    this.apiService.sendFormData(formData).subscribe(
      (response: any) => {
        // Handle the success response here
        this.successMessage = response.message;
        alert(this.successMessage);
        // Clear the form
      },
      (error: any) => {
        // Handle the error response here
        console.error(error);
      }
    );
  }
}
