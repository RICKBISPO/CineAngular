import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-badge',
  imports: [],
  templateUrl: './badge.component.html',
  styleUrl: './badge.component.scss'
})
export class BadgeComponent {

  @Input() img = "";
  @Input() imgClass = "";
  @Input() text = "";
  @Input() textClass = "";

}
