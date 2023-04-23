import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pagina-tabla',
  templateUrl: './pagina-tabla.component.html',
  styleUrls: ['./pagina-tabla.component.css']
})
export class PaginaTablaComponent implements OnInit {

  constructor(private rutas: Router) { }

  regresarInicio(){
    this.rutas.navigate(['inicio']);
  }

  ngOnInit(): void {
  }

}

