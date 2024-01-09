import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-password-strength.component.html',
  styleUrl: './app-password-strength.component.css'
})

export class PasswordStrengthComponent {
  sectionColors: string[] = ['gray', 'gray', 'gray'];

  checkPasswordStrength(event: Event): void {
    const value = (event.target as HTMLInputElement).value;

    if (value === '') {
      this.sectionColors = ['gray', 'gray', 'gray'];
    } else if (value.length < 8) {
      this.sectionColors = ['red', 'red', 'red'];
    } else {
      const hasLetters = /[a-zA-Z]/.test(value);
      const hasDigits = /\d/.test(value);
      const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(value);

      if (hasLetters && hasDigits && hasSymbols) {
        this.sectionColors = ['green', 'green', 'green'];
      } else if ((hasLetters && hasDigits) || (hasLetters && hasSymbols) || (hasDigits && hasSymbols)) {
        this.sectionColors = ['yellow', 'yellow', 'gray'];
      } else if (hasLetters && !hasDigits && !hasSymbols) {
        this.sectionColors = ['red', 'gray', 'gray'];
      }
    }
  }
}
