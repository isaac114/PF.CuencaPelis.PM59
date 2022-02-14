import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGoogleService } from 'src/app/services/auth/auth-google.service';
import { of } from 'rxjs'
import { UserService } from 'src/app/services/user/user.service';

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
  user: any;
  usuarioKey: string;

  constructor(private router: Router,
    private auth: AuthGoogleService,
    private userServe: UserService) { }

  ngOnInit() {
  }

  //Metodo para Validar Usuario
  validarUsuario(){

    this.userServe.getUserIdGoogle('BLR9hT2l8EdPUyIznKwyMyLsF8F2').subscribe((result) => {
      let userr =JSON.parse(JSON.stringify(result[0]));
      this.user = userr;
      console.log(this.nombre+this.user.uid)
      this.router.navigate(['principal'], { queryParams: { id: this.user } });
    });
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
