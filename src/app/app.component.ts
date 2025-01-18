import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, RouterLink, RouterLinkActive, HeaderComponent, FooterComponent],
  template: `
    
    
   
    <!-- <app-header class="container"/> -->
    <router-outlet/>
    <!-- <app-footer/> -->
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ani-check_temp';
}
