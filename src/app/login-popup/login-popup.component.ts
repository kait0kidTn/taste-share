import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-popup.component.html',
  styleUrl: './login-popup.component.css',
})
export class LoginPopupComponent {
  @Input() public showModal: boolean = true;

  constructor() {}
}
