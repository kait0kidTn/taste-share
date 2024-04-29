import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  sendFormData(formData: FormData) {
    const apiUrl = 'http://localhost/api/backendManager.php';
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' }),
    };
    return this.http.post(apiUrl, formData, httpOptions);
  }

  getRecipes() {
    const apiUrl = 'http://localhost/api/backendManager.php';
    const httpOptions = {};
  }
}
