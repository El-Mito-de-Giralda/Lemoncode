import { Injectable } from '@angular/core';
import { userEntity } from '../model/login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: userEntity[]=[];
  newUser: userEntity={username: "",
password: "",}
Islogged= false;
private autentificar= false;

    constructor(private router: Router) {
      const guardarAuth=localStorage.getItem("autentificar");
      this.autentificar= guardarAuth=== "true";
    }
   
    
    ngOnInit(): void {}
    

  Login(use:userEntity):boolean {
    const usuario="master@lemoncode.net";
    const contraseña="123456789";
    if(use.username === usuario && use.password=== contraseña) {
      this.autentificar= true;
      localStorage.setItem("autentificar", "true");
      this.Islogged=true;
      return true;
    } else  {
      return false;
    }
  }


getUsername(): string{
  return this.newUser.username;
}

  logout():void {
    this.router.navigate(['/login']);
    this.Islogged=false;
    this.autentificar= false;
    localStorage.setItem('isAuthenticated', 'false');
    this.newUser.password="";
    this.newUser.username="";
  }

  onLoginSuccess() {
    // ...
    this.router.navigate(['/dashboard']);
  }

  onlogin(){
    this.Login(this.newUser);
    if (this.Login(this.newUser) ===true) {
      console.log(true);
      this.onLoginSuccess();
    } else {
      alert("El nombre de usuario o la contraseña no coinciden.")
    }

  }

  checkAuthentication(): boolean {
    return this.autentificar;
  }

}
