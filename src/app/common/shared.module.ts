import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent} from './footer/footer.component'
import { HeaderComponent } from './header/header.component';
import { SideMenuComponent } from './side-menu/side-menu.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideMenuComponent
  ]
})
export class SharedModule { }
