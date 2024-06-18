import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {ToolbarModule} from "primeng/toolbar";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {AvatarComponent} from "./avatar/avatar.component";
import {MenuModule} from "primeng/menu";
import {CategoryComponent} from "./category/category.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ToolbarModule,
    FaIconComponent,
    AvatarComponent,
    MenuModule,
    CategoryComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
   location='Anywhere'
   guests ='Add quests'
   dates = 'Any week'
  // login ()=>this.authService.login();
 currentMenuItems: MenuItem[]|undefined =[];
   ngOnInit() {

   }

  openNewSearch() {

  }
}
