import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as HomeSmart from '@wesho/home-smart';

@Component({
  selector: 'wesho-home',
  standalone: true,
  imports: [CommonModule, HomeSmart.HomeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
