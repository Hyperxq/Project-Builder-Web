import { Component } from '@angular/core';

@Component({
  selector: 'app-waiting-list',
  standalone: true,
  imports: [],
  templateUrl: './waiting-list.component.html',
  styleUrl: './waiting-list.component.scss',
})
export class WaitingListComponent {
  toggleTheme() {
    const theme =
      document.documentElement.getAttribute('data-theme') === 'dark'
        ? 'light'
        : 'dark';
    document.documentElement.setAttribute('data-theme', theme);

    // Update base variables to reflect the current theme
    document.documentElement.style.setProperty(
      '--color-background',
      `var(--color-background-${theme})`,
    );
    document.documentElement.style.setProperty(
      '--color-text',
      `var(--color-text-${theme})`,
    );
  }
}
