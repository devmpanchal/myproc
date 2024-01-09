import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderTitleBarComponent } from './header-title-bar/header-title-bar.component';
import { LeftMenuBarComponent } from './left-menu-bar/left-menu-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { PageContentComponent } from './page-content/page-content.component';
import { HeaderTopBarComponent } from './header-top-bar/header-top-bar.component';

@NgModule({
  declarations: [
    HeaderTitleBarComponent,
    LeftMenuBarComponent,
    FooterBarComponent,
    PageContentComponent,
    HeaderTopBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderTopBarComponent,
    HeaderTitleBarComponent,
    LeftMenuBarComponent,
    PageContentComponent,
    FooterBarComponent
  ]
})
export class PageLayoutModule { }
