import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-strength-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './strength-bar.component.html',
  styleUrl: './strength-bar.component.css'
})
export class StrengthBarComponent {
  @Input() colors: string[] = ['gray', 'gray', 'gray'];
}
