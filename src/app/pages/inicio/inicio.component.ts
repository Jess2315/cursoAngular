import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms'
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  nombre = "Jessica"
  apellido = "Munoz"
  formUsuario!: FormGroup;

  loadingVisible = false;
  constructor(private ruta: Router,
    private mensajes: MessageService) { }

  ngOnInit(): void {
    this.buildFormulario();
  }

  visualizarLoading() {
    //codigo de loading
    this.loadingVisible = true;
    setTimeout(() => {
      this.loadingVisible = false;
    }, 2000);
  }
  irPaginaTabla() {
    this.ruta.navigate(['tabla']);
  }
  buildFormulario() {
    this.formUsuario = new FormGroup(
      {
        nombre: new FormControl('', [Validators.required]),
        apellido: new FormControl('', [Validators.required])
      }
    );
  }

  verficar() {
    console.log(this.formUsuario);
    if (this.formUsuario.valid) {
      this.mensajes.add({ severity: 'success', summary: 'Formulario Correcto', detail: 'Exito' });
    } else {
      this.mensajes.add({ severity: 'error', summary: 'Error', detail: 'Por favor llene los campos requeridos' });
    }
  }
}
