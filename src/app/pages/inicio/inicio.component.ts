import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nombre = "Jessica"
  apellido = "Munoz"

  loadingVisible = false;
  constructor(private ruta: Router) { }
  ngOnInit(): void {
  }

  visualizarLoading(){
  //codigo de loading
    this.loadingVisible = true;
    setTimeout(() => {
    this.loadingVisible = false;
    }, 2000);
  }
  irPaginaTabla(){
    this.ruta.navigate(['tabla']);
  }  
}
