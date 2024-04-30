import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-categories',
  standalone: true,
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css'],
  imports:[CommonModule,FormsModule,RouterModule]
})
export class ManageCategoriesComponent implements OnInit {
  categories: any[] = [];
  categoryName: string = ''; 
  updateFormVisible: boolean = false; 
  newCategoryName: string = '';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCategories(); 
  }

  getCategories() {
    
    this.http.get<any[]>('http://localhost/phpfiles/manege_category.php')
      .subscribe({
        next: (data) => {
        
          this.categories = data;
        },
        error: (error) => {
          console.error('There was a problem with the HTTP request:', error);
          alert('An error occurred while fetching categories');
        }
      });
  }

  addCategory() {
    
    if (this.categoryName.trim() === '') {
      alert('Please enter a category name');
      return;
    }

   
    this.http.post<any>('http://localhost/phpfiles/add_category.php', { Name_Category: this.categoryName })
      .subscribe({
        next: (data) => {
          
          alert(data.message);
          this.categoryName = '';
          this.getCategories();
        },
        error: (error) => {
          console.error('There was a problem with the HTTP request:', error);
          alert('An error occurred while adding the category');
        }
    });
  }

  showUpdateForm(category: any) {
    this.newCategoryName = category.Name_Category;
    this.updateFormVisible = true;
  }

  confirmUpdate() {
    this.updateFormVisible = false;
  }

  resetUpdateForm() {
    this.updateFormVisible = false;
  }

  deleteCategory(categoryID: string) {
    
    if (confirm("Are you sure you want to delete this category?")) {
      this.http.delete<any>('http://localhost/phpfiles/delete_category.php?categoryID=' + categoryID)
        .subscribe(
          (response) => {
            this.categories = this.categories.filter(category => category.ID_Category !== categoryID);
            alert(response.message);
          },
          (error) => {
            console.error('Error deleting category:', error);
            alert('An error occurred while deleting the category');
          }
      );
    }
  }
}
