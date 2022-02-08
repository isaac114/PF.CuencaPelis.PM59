import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGoogleService } from 'src/app/services/auth/auth-google.service';
import { of } from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombre: string;
  contrasena: string;
  email: string;
  password: string;

  usuarioKey: string;

  constructor(private router: Router,
    private auth: AuthGoogleService) { }

  ngOnInit() {
  }

  //Metodo para Validar Usuario
  validarUsuario(){
    console.log(this.nombre+this.contrasena)
    this.router.navigate(['folder/imbox']);
  }

  onSubmitLogin()
  {
    var id: any;

    this.auth.login()
    .then((data) => {
        
        id = data;
        this.router.navigate(['principal'], { queryParams: { id: data } });
        
    })
    .catch((ex) => {
        console.log(ex);
    });
    
      
  }

 

  logout() {
    this.auth.logout();
  }

}
