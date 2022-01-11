import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  nombre: string;
  contrasena: string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //Metodo para Validar Usuario
  validarUsuario(){
    console.log(this.nombre+this.contrasena)
    this.router.navigate(['folder/imbox']);
  }

}
