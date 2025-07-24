import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, HeaderComponent, FooterComponent, RouterModule],
  template: `
    <style>
      app-layout {
        }
    </style>


    <ng-container>

      <div class="container">

        <app-header></app-header>
        <main  >
          <router-outlet></router-outlet>
          </main>

          <app-footer></app-footer>
      </div>
    </ng-container>
  `,
})
export class LayoutComponent {
}
