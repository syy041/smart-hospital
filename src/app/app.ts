import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { QuickService } from './quick-service/quick-service';

@Component({
  selector: 'app-root',
  imports: [Header,Hero, QuickService],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('smart-hospital-angular');
}
