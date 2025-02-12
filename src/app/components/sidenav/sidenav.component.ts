import { Component } from '@angular/core';
import { AvatarComponent } from "../avatar/avatar.component";
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-sidenav',
  imports: [AvatarComponent, RouterLink, RouterLinkActive, TranslatePipe],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  constructor(private router: Router) {}

  isActive(): boolean {
    return this.router.url.includes('/movie') ;
  }

}
