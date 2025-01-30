import { Component, Input } from '@angular/core';
import { PagePath } from '../../models/pagePath';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  imports: [RouterLink],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {

  @Input() pagePathDisable!: Array<PagePath>;
  @Input() pagePathActive!: PagePath;

}
