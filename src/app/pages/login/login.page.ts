import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGoogleService } from 'src/app/services/auth/auth-google.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombre: string;
  contrasena: string;

  constructor(private router: Router,
    private auth: AuthGoogleService) { }

  ngOnInit() {
  }

  //Metodo para Validar Usuario
  validarUsuario(){
    console.log(this.nombre+this.contrasena)
    this.router.navigate(['folder/imbox']);
  }

  loginGoogle() {
    if(this.auth.loginGoogle()){
      this.router.navigate(['folder/imbox']);
    }
    
  }

  logout() {
    this.auth.logout();
  }

}
