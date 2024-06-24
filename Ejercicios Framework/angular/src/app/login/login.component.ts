import { Component, ViewChild, HostBinding } from '@angular/core';
import {RouterModule, ActivatedRoute, Router} from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../services/login.service';
import { userEntity } from '../model/login';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule,ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 
user: userEntity[]=[];
newUser: userEntity; 

  loginType: 'student' | 'teacher';
  constructor(private router: Router, private route: ActivatedRoute, public loginservice: LoginService) {
    this.route.queryParams.subscribe(
      queryParams => this.loginType = queryParams['type']
    );


   }

  ngOnInit(): void {
  }

  onlogin(){
    this.loginservice.onlogin();
  }


}
      
    
