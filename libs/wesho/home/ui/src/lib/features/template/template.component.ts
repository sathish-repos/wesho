import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'we-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss',
})
export class TemplateComponent {}
