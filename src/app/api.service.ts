import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  sendFormData(formData: FormData) {
    const apiUrl = 'http://localhost/api/backendManager.php';
    const data = Object.fromEntries(formData.entries());
    const jsonData = JSON.stringify(data);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    console.log(jsonData);
    return this.http.post(apiUrl, jsonData, httpOptions);
  }
}
