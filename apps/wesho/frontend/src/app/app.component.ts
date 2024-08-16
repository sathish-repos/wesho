import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '@wesho/shared-ui';

@Component({
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  selector: 'wesho-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'wesho-frontend';
}
