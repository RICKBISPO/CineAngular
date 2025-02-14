import { Component } from '@angular/core';
import { AvatarComponent } from "../avatar/avatar.component";
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-sidenav',
  imports: [AvatarComponent, RouterLink, RouterLinkActive, TranslatePipe],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  username: string = "";
  userImg: string = "";

  constructor(private router: Router, private apiService: ApiService) {
    this.apiService.getUserById(1).subscribe({
      next: (user) => { 
        this.username = user.username
        this.userImg = user.img
      }
    });
  }

  isActive(): boolean {
    return this.router.url.includes('/movie') ;
  }

}
