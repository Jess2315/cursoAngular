import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nombre = "Jessica"
  apellido = "Munoz"

  loadingVisible = false;

  visualizarLoading(){
  //codigo de loading
    this.loadingVisible = true;
    setTimeout(() => {
    this.loadingVisible = false;
    }, 2000);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
