import { Component, Renderer2, ElementRef, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.css',
})
export class AddRecipeComponent {
  newRecipe: any = {
    ingredients: 'Each ingredient must be separated by / or ,',
    publisher: 1,
  };
  //
  successMessage: string = '';
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  sendData(): void {
    const formData = new FormData();
    formData.append('nameR', this.newRecipe.name);
    formData.append('ingR', this.newRecipe.ingredients);
    formData.append('imgR', this.newRecipe.image);
    formData.append('vidR', this.newRecipe.video);
    formData.append('pubR', this.newRecipe.publisher);
    formData.append('descR', this.newRecipe.description);

    this.apiService.sendFormData(formData).subscribe(
      (response: any) => {
        // Handle the success response here
        this.successMessage = response.message;
        alert(this.successMessage);
        this.newRecipe = {
          ingredients: 'Each ingredient must be separated by / or ,',
          publisher: 1,
        }; // Clear the form
      },
      (error: any) => {
        // Handle the error response here
        console.error(error);
      }
    );
  }
}
