import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '@wesho/home-ui';

@Component({
  selector: 'we-home',
  standalone: true,
  imports: [CommonModule, HomePageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
