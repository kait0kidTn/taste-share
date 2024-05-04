import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-users',
  standalone: true,
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css'],
  imports: [CommonModule,RouterModule] 
})
export class ManageUsersComponent implements OnInit {

  users: any[] = [];
  updateUser: any = null; 
  updateFormVisible: boolean = false; 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.http.get<any[]>('http://localhost/phpfiles/get_users.php').subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  deleteUser(userID: string) {
   
    if (confirm("Are you sure you want to delete this user?")) {
      
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
          'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
        })
      };

    
      this.http.delete<any>('http://localhost/phpfiles/delete_user.php?userID=' + userID, httpOptions).subscribe(
        (response) => {
          this.users = this.users.filter(user => user.ID_User !== userID);
          console.log("User deleted successfully:", response);
        },
        (error) => {
          console.error('Error deleting user:', error);
        }
      );
    }
  }

  showUpdateForm(user: any) {
    this.updateUser = { ...user }; 
    this.updateFormVisible = true; 
  }

  
  cancelUpdate() {
    this.updateUser = null; 
    this.updateFormVisible = false; 
  }

 
  updateUserDetails() {
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
      })
    };

  
    this.http.put<any>('http://localhost/phpfiles/update_user.php', this.updateUser, httpOptions).subscribe(
      (response) => {
        console.log("User updated successfully:", response);
        this.fetchUsers();
        this.updateUser = null; 
        this.updateFormVisible = false; 
      },
      (error) => {
        console.error('Error updating user:', error);
      }
    );
  }
}
