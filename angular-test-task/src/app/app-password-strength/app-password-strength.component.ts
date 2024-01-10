import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { StrengthBarComponent } from './strength-bar/strength-bar.component';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [CommonModule, StrengthBarComponent],
  templateUrl: './app-password-strength.component.html',
  styleUrl: './app-password-strength.component.css'
})

export class PasswordStrengthComponent implements ControlValueAccessor {
  sectionColors: string[] = ['gray', 'gray', 'gray'];

  onInputChange(event: Event): void {
    const password = (event.target as HTMLInputElement).value;
    this.calculatePasswordStrength(password);
  }

  calculatePasswordStrength(value: string): void {
    const isFilled = value.length > 8
    const hasLetters = /[a-zA-Z]/.test(value);
    const hasDigits = /\d/.test(value);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const complexityScore = (hasLetters ? 1 : 0) + (hasDigits ? 1 : 0) + (hasSymbols ? 1 : 0);

    if (!isFilled) {
      this.sectionColors =
        value === ''
          ? ['gray', 'gray', 'gray']
          : ['red', 'red', 'red']
    } else {
      this.sectionColors =
        complexityScore === 1
          ? ['red', 'gray', 'gray']
          : complexityScore === 2
            ? ['yellow', 'yellow', 'gray']
            : ['green', 'green', 'green']
    }
  }

  writeValue(obj: any): void {
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
  }
}