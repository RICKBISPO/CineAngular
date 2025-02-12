import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { LanguageSelectorComponent } from '../../components/language-selector/language-selector.component';
import { TranslatePipe } from '@ngx-translate/core';
import { ThemeSelectorComponent } from "../../components/theme-selector/theme-selector.component";

@Component({
  selector: 'app-configurations',
  imports: [BreadcrumbComponent, LanguageSelectorComponent, TranslatePipe, ThemeSelectorComponent],
  templateUrl: './configurations.component.html',
  styleUrl: './configurations.component.scss'
})
export class ConfigurationsComponent {

}
