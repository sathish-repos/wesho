import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'we-page-notfound',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './page-notfound.component.html',
  styleUrl: './page-notfound.component.scss',
})
export class PageNotfoundComponent {}
