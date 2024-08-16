import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from '../../features/template/template.component';

@Component({
  selector: 'we-home-page',
  standalone: true,
  imports: [CommonModule, TemplateComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
