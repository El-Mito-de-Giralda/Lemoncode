import { Component} from '@angular/core';
import { HighlightDirective } from '../../directives/highlight.directive';
import { RouterLinkActive, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../login/login.component';
import { LoginService } from '../../services/login.service';
import { userEntity } from '../../model/login';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,HighlightDirective, RouterLink, RouterLinkActive, LoginComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent  {
  applyClass= true;
  user: userEntity[]=[];
  newUser: userEntity;

  constructor(public loginservice: LoginService, private router: Router ) {
  }


}


